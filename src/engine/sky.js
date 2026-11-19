import * as THREE from 'three';
import { clamp, lerp, smoothstep } from '../core/utils.js';

// time, zenith, horizon, lightColor, lightInt, hemiSky, hemiGround, hemiInt, fog, stars, day
const RAW = [
  [0.0, 0x06102e, 0x16295e, 0xa9bcff, 0.6, 0x4a60a6, 0x1a2036, 0.9, 0x111e44, 1.0, 0.24],
  [4.6, 0x08153a, 0x1e3368, 0xa9bcff, 0.55, 0x4a60a6, 0x1a2036, 0.9, 0x15254e, 1.0, 0.24],
  [5.5, 0x1d3a78, 0xe98a5c, 0xffb07a, 0.15, 0x7386b8, 0x2c2c38, 0.9, 0x7b6a80, 0.4, 0.42],
  [6.0, 0x3a6ab8, 0xffb37c, 0xffb27a, 0.0, 0x9ab0d8, 0x4a4238, 0.95, 0xc9a48e, 0.1, 0.6],
  [6.3, 0x4580cc, 0xffc994, 0xffc48e, 0.7, 0xa8c0e4, 0x554c40, 1.0, 0xd2b49c, 0.0, 0.72],
  [7.4, 0x3f8be0, 0xffe2b8, 0xffe0b0, 2.0, 0xbcd6ff, 0x6b6250, 1.05, 0xd6d2c4, 0.0, 0.9],
  [9.5, 0x2c7fe6, 0xb9e0ff, 0xfff4dd, 2.9, 0xcfe4ff, 0x7a7460, 1.1, 0xb8dcf6, 0.0, 1.0],
  [13.0, 0x2777e3, 0xc4e6ff, 0xffffff, 3.1, 0xd4e8ff, 0x7e7864, 1.1, 0xbfe0f8, 0.0, 1.0],
  [16.0, 0x3581dc, 0xd4e6f2, 0xffedcc, 2.7, 0xcfe0f6, 0x7a705c, 1.05, 0xc8dcea, 0.0, 0.96],
  [17.3, 0x4a6aa8, 0xffb36b, 0xffa25e, 1.6, 0xc0b0c0, 0x6a5a48, 1.0, 0xd8a584, 0.0, 0.82],
  [18.0, 0x39478a, 0xf0764a, 0xff8a50, 0.0, 0x9088b4, 0x3c3438, 0.92, 0xb07068, 0.15, 0.56],
  [18.5, 0x1e2a66, 0xb84f52, 0xa9bcff, 0.2, 0x626aa4, 0x242432, 0.9, 0x533c5c, 0.6, 0.36],
  [19.4, 0x0a1638, 0x232c62, 0xa9bcff, 0.55, 0x4a60a6, 0x1a2036, 0.9, 0x15254e, 1.0, 0.24],
  [24.0, 0x06102e, 0x16295e, 0xa9bcff, 0.6, 0x4a60a6, 0x1a2036, 0.9, 0x111e44, 1.0, 0.24],
];
const KEYS = RAW.map((k) => ({
  t: k[0], zen: new THREE.Color(k[1]), hor: new THREE.Color(k[2]), sun: new THREE.Color(k[3]), li: k[4],
  hs: new THREE.Color(k[5]), hg: new THREE.Color(k[6]), hi: k[7], fog: new THREE.Color(k[8]), stars: k[9], day: k[10],
}));

const GREY = new THREE.Color(0x8a919c);
const RAIN_N = 1400;

export class Sky {
  constructor(scene) {
    this.scene = scene;
    this.time = 9.2;
    this.speed = 0.02; // hours per second in free roam
    this.overcast = 0; this.rain = 0;
    this._overT = 0; this._rainT = 0;
    this._anim = null;
    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.moonDir = new THREE.Vector3(0, -1, 0);
    this.lightDir = new THREE.Vector3(0, 1, 0);
    this.night = 0;

    this.U = {
      uTime: { value: 0 },
      uSunDir: { value: this.sunDir },
      uMoonDir: { value: this.moonDir },
      uLightDir: { value: this.lightDir },
      uSunColor: { value: new THREE.Color() },
      uSunWarm: { value: new THREE.Color(0xffe2a8) },
      uZenith: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uFogColor: { value: new THREE.Color() },
      uFog: { value: new THREE.Vector2(160, 1000) },
      uDay: { value: 1 },
      uStars: { value: 0 },
      uCloud: { value: 0.35 },
      uOvercast: { value: 0 },
    };

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(1500, 40, 20),
      new THREE.ShaderMaterial({
        side: THREE.BackSide, depthWrite: false, fog: false,
        uniforms: this.U,
        vertexShader: /* glsl */`
          varying vec3 vDir;
          void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */`
          uniform vec3 uZenith, uHorizon, uSunDir, uMoonDir, uSunWarm;
          uniform float uTime, uStars, uCloud, uOvercast, uDay;
          varying vec3 vDir;
          float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
          float vnoise(vec2 p){
            vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
          }
          float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * vnoise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
          float hash3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
          void main(){
            vec3 d = normalize(vDir);
            float h = clamp(d.y, 0.0, 1.0);
            vec3 col = mix(uHorizon, uZenith, pow(h, 0.45));
            col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.3, d.y));
            vec3 grey = vec3(0.46, 0.49, 0.55) * (0.3 + 0.7 * uDay);
            col = mix(col, grey, uOvercast * 0.75);

            float sunVis = smoothstep(-0.12, 0.02, uSunDir.y) * (1.0 - uOvercast * 0.85);
            float sd = max(dot(d, uSunDir), 0.0);
            col += uSunWarm * (pow(sd, 6.0) * 0.16 + pow(sd, 70.0) * 0.4) * sunVis;
            col += uSunWarm * smoothstep(0.9990, 0.9996, sd) * 7.0 * sunVis;

            float moonVis = smoothstep(-0.05, 0.1, uMoonDir.y) * (1.0 - smoothstep(-0.1, 0.05, uSunDir.y)) * (1.0 - uOvercast * 0.8);
            float md = dot(d, uMoonDir);
            float disc = smoothstep(0.9980, 0.9986, md);
            vec3 off = normalize(uMoonDir + vec3(0.04, 0.022, 0.0));
            float cut = smoothstep(0.9976, 0.9985, dot(d, off));
            float cres = clamp(disc - cut, 0.0, 1.0);
            col += vec3(1.0, 0.96, 0.82) * cres * 4.0 * moonVis;
            col += vec3(0.55, 0.65, 1.0) * pow(max(md, 0.0), 80.0) * 0.3 * moonVis;

            if (uStars > 0.01 && d.y > -0.05) {
              vec3 p = d * 170.0; vec3 ip = floor(p); vec3 fp = fract(p) - 0.5;
              float hs = hash3(ip);
              float st = step(0.986, hs) * smoothstep(0.42, 0.04, length(fp));
              float tw = 0.65 + 0.35 * sin(uTime * 2.5 + hs * 300.0);
              col += vec3(1.0, 0.97, 0.9) * st * tw * uStars * 2.4 * smoothstep(-0.05, 0.2, d.y) * (1.0 - uOvercast);
            }

            if (d.y > 0.0) {
              vec2 uv = d.xz / (d.y + 0.14);
              uv = uv * 0.55 + vec2(uTime * 0.006, uTime * 0.003);
              float n = fbm(uv * 1.6);
              float cov = mix(0.64, 0.28, clamp(uCloud + uOvercast * 0.8, 0.0, 1.0));
              float c = smoothstep(cov, cov + 0.26, n) * smoothstep(0.0, 0.12, d.y);
              vec3 lit = mix(uHorizon, vec3(1.0), 0.6) * (0.3 + 0.8 * uDay);
              lit += uSunWarm * pow(sd, 4.0) * 0.5 * sunVis;
              lit = mix(lit, grey * 0.85, uOvercast);
              col = mix(col, lit, c * 0.92);
            }
            gl_FragColor = vec4(col, 1.0);
          }`,
      })
    );
    dome.frustumCulled = false;
    dome.renderOrder = -10;
    this.dome = dome;
    scene.add(dome);

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    const sh = this.sun.shadow;
    sh.mapSize.set(2048, 2048);
    sh.camera.left = -75; sh.camera.right = 75; sh.camera.top = 75; sh.camera.bottom = -75;
    sh.camera.near = 1; sh.camera.far = 520;
    sh.bias = -0.0004; sh.normalBias = 0.5;
    scene.add(this.sun, this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xffffff, 0x777777, 1);
    scene.add(this.hemi);

    this.fog = new THREE.Fog(0xbcdcf5, 160, 1000);
    scene.fog = this.fog;

    // rain
    const rp = new Float32Array(RAIN_N * 6);
    this._rainSeed = new Float32Array(RAIN_N * 3);
    for (let i = 0; i < RAIN_N; i++) {
      this._rainSeed[i * 3] = (Math.random() - 0.5) * 70;
      this._rainSeed[i * 3 + 1] = Math.random() * 40;
      this._rainSeed[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(rp, 3));
    this.rainMesh = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xbfd6ff, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    this.rainMesh.frustumCulled = false;
    this.rainMesh.visible = false;
    scene.add(this.rainMesh);

    this._s = { zen: new THREE.Color(), hor: new THREE.Color(), sun: new THREE.Color(), hs: new THREE.Color(), hg: new THREE.Color(), fog: new THREE.Color(), li: 1, hi: 1, stars: 0, day: 1 };
  }

  sample(t) {
    let i = 0;
    while (i < KEYS.length - 2 && t >= KEYS[i + 1].t) i++;
    const a = KEYS[i], b = KEYS[i + 1];
    const k = clamp((t - a.t) / (b.t - a.t), 0, 1);
    const s = this._s;
    s.zen.lerpColors(a.zen, b.zen, k); s.hor.lerpColors(a.hor, b.hor, k); s.sun.lerpColors(a.sun, b.sun, k);
    s.hs.lerpColors(a.hs, b.hs, k); s.hg.lerpColors(a.hg, b.hg, k); s.fog.lerpColors(a.fog, b.fog, k);
    s.li = lerp(a.li, b.li, k); s.hi = lerp(a.hi, b.hi, k); s.stars = lerp(a.stars, b.stars, k); s.day = lerp(a.day, b.day, k);
    return s;
  }

  setTime(t) { this.time = ((t % 24) + 24) % 24; this._anim = null; }

  /** Time-lapse forward to hour `t` over `dur` seconds. */
  animateTo(t, dur = 2.5) {
    return new Promise((res) => {
      let delta = (((t - this.time) % 24) + 24) % 24;
      if (delta < 0.01) { res(); return; }
      if (this._anim) this._anim.res();
      this._anim = { from: this.time, delta, dur, e: 0, res };
    });
  }

  setWeather(kind) {
    this._overT = kind === 'rain' ? 1 : kind === 'cloudy' ? 0.55 : 0;
    this._rainT = kind === 'rain' ? 1 : 0;
  }

  update(dt, camera, focus) {
    this.U.uTime.value += dt;
    if (this._anim) {
      const a = this._anim;
      a.e += dt;
      const k = clamp(a.e / a.dur, 0, 1);
      const ek = k * k * (3 - 2 * k);
      this.time = (a.from + a.delta * ek) % 24;
      if (k >= 1) { this._anim = null; a.res(); }
    } else if (this.speed) {
      const nightFast = this.time > 19.4 || this.time < 4.8 ? 3 : 1;
      this.time = (this.time + this.speed * nightFast * dt) % 24;
    }
    this.overcast = lerp(this.overcast, this._overT, 1 - Math.exp(-0.9 * dt));
    this.rain = lerp(this.rain, this._rainT, 1 - Math.exp(-0.9 * dt));

    const s = this.sample(this.time);
    const a = ((this.time - 6) / 12) * Math.PI;
    this.sunDir.set(Math.cos(a), Math.sin(a) * 0.9, Math.sin(a) * 0.38 + 0.14).normalize();
    this.moonDir.set(Math.cos(a + Math.PI) * 0.8, Math.sin(a + Math.PI) * 0.9, Math.sin(a + Math.PI) * 0.3 - 0.3).normalize();
    this.lightDir.copy(this.sunDir.y > 0 ? this.sunDir : this.moonDir);
    if (this.lightDir.y < 0.16) { this.lightDir.y = 0.16; this.lightDir.normalize(); }
    this.night = 1 - smoothstep(0.25, 0.7, s.day);

    const U = this.U, oc = this.overcast;
    U.uZenith.value.copy(s.zen); U.uHorizon.value.copy(s.hor);
    U.uSunColor.value.copy(s.sun).multiplyScalar(1 - oc * 0.8);
    U.uDay.value = s.day * (1 - oc * 0.25);
    U.uStars.value = s.stars;
    U.uOvercast.value = oc;
    U.uFogColor.value.copy(s.fog).lerp(GREY, oc * 0.6).multiplyScalar(1 - oc * 0.15 * (1 - s.day));
    U.uFog.value.set(lerp(160, 50, oc), lerp(1000, 430, oc));
    this.fog.color.copy(U.uFogColor.value);
    this.fog.near = U.uFog.value.x; this.fog.far = U.uFog.value.y;

    this.sun.color.copy(s.sun);
    this.sun.intensity = s.li * (1 - oc * 0.7);
    this.sun.position.copy(focus).addScaledVector(this.lightDir, 240);
    this.sun.target.position.copy(focus);
    this.hemi.color.copy(s.hs).lerp(GREY, oc * 0.5);
    this.hemi.groundColor.copy(s.hg);
    this.hemi.intensity = s.hi * (1 - oc * 0.12);

    this.dome.position.copy(camera.position);

    // rain streaks around the camera
    if (this.rain > 0.02) {
      this.rainMesh.visible = true;
      this.rainMesh.material.opacity = 0.55 * this.rain;
      const p = this.rainMesh.geometry.attributes.position.array;
      const sd = this._rainSeed, cx = camera.position.x, cy = camera.position.y, cz = camera.position.z;
      const tt = this.U.uTime.value;
      for (let i = 0; i < RAIN_N; i++) {
        const x = cx + sd[i * 3], z = cz + sd[i * 3 + 2];
        const y = cy + 22 - ((sd[i * 3 + 1] + tt * 34) % 40);
        const k = i * 6;
        p[k] = x; p[k + 1] = y; p[k + 2] = z;
        p[k + 3] = x + 0.12; p[k + 4] = y - 0.9; p[k + 5] = z;
      }
      this.rainMesh.geometry.attributes.position.needsUpdate = true;
    } else {
      this.rainMesh.visible = false;
    }
  }
}
