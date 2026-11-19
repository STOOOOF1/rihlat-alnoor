import * as THREE from 'three';
import { glowTexture, MAT } from '../core/builder.js';

export const fxTime = { value: 0 };
const FONT = '"Cairo","Segoe UI",Tahoma,sans-serif';
const QFONT = '"Amiri","Cairo","Segoe UI",serif';

function wrapLines(g, text, maxW) {
  const out = [];
  for (const raw of String(text).split('\n')) {
    const words = raw.split(' ');
    let line = '';
    for (const w of words) {
      const t = line ? line + ' ' + w : w;
      if (g.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t;
    }
    out.push(line);
  }
  return out;
}

function paintLabel(canvas, text, o) {
  const size = o.size || 44;
  const pad = o.pad ?? 20;
  const font = `${o.weight || 800} ${size}px ${o.quran ? QFONT : FONT}`;
  const g = canvas.getContext('2d', { willReadFrequently: true });
  g.font = font;
  const lines = wrapLines(g, text, o.maxWidth || 680);
  let w = 0;
  for (const l of lines) w = Math.max(w, g.measureText(l).width);
  const lh = size * 1.5;
  canvas.width = Math.ceil(w + pad * 2 + 8);
  canvas.height = Math.ceil(lines.length * lh + pad * 2);
  g.font = font; g.direction = 'rtl'; g.textAlign = 'center'; g.textBaseline = 'middle';
  if (!o.plain) {
    g.fillStyle = o.bg || 'rgba(8,20,48,.84)';
    g.beginPath(); g.roundRect(3, 3, canvas.width - 6, canvas.height - 6, o.radius ?? 26); g.fill();
    g.lineWidth = 4; g.strokeStyle = o.border || '#e9b949'; g.stroke();
  } else {
    g.shadowColor = o.shadow || 'rgba(0,0,0,.85)'; g.shadowBlur = 12;
  }
  g.fillStyle = o.color || '#ffffff';
  lines.forEach((l, i) => g.fillText(l, canvas.width / 2, pad + lh * (i + 0.5)));
  return { w: canvas.width, h: canvas.height };
}

/** Billboard text label (Arabic aware). o.scale = world units per 100px. */
export function makeLabel(text, o = {}) {
  const canvas = document.createElement('canvas');
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
  const sp = new THREE.Sprite(mat);
  sp.setText = (t, extra) => {
    if (extra) Object.assign(o, extra);
    sp.userData.text = t;
    const { w, h } = paintLabel(canvas, t, o);
    tex.dispose(); tex.needsUpdate = true;
    const s = (o.scale || 1) / 100;
    sp.scale.set(w * s, h * s, 1);
  };
  sp.setText(text);
  sp.renderOrder = 20;
  return sp;
}

// ───────────────────────── particles ─────────────────────────
const MAXP = 3500;
export class Particles {
  constructor(scene) {
    this.n = 0;
    this.pos = new Float32Array(MAXP * 3);
    this.col = new Float32Array(MAXP * 3);
    this.siz = new Float32Array(MAXP);
    this.vel = new Float32Array(MAXP * 3);
    this.base = new Float32Array(MAXP * 3);
    this.life = new Float32Array(MAXP);
    this.max = new Float32Array(MAXP);
    this.grav = new Float32Array(MAXP);
    this.bsize = new Float32Array(MAXP);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.siz, 1));
    this.scale = { value: 600 };
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uScale: this.scale },
      vertexShader: /* glsl */`
        attribute vec3 aColor; attribute float aSize; uniform float uScale; varying vec3 vC;
        void main(){ vC = aColor; vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / max(-mv.z, 0.1); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */`
        varying vec3 vC;
        void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); gl_FragColor = vec4(vC * a * 1.6, a); }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 30;
    geo.setDrawRange(0, 0);
    scene.add(this.points);
    this._c = new THREE.Color();
  }

  emit(x, y, z, vx, vy, vz, color, life = 1, size = 0.3, gravity = 0) {
    if (this.n >= MAXP) return;
    const i = this.n++;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this._c.set(color);
    this.base[i * 3] = this._c.r; this.base[i * 3 + 1] = this._c.g; this.base[i * 3 + 2] = this._c.b;
    this.life[i] = life; this.max[i] = life; this.grav[i] = gravity; this.bsize[i] = size;
  }

  burst(p, color, count = 30, speed = 4, life = 1, size = 0.35, gravity = 4) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, e = Math.acos(Math.random() * 2 - 1);
      const s = speed * (0.4 + Math.random() * 0.8);
      this.emit(p.x, p.y, p.z, Math.sin(e) * Math.cos(a) * s, Math.abs(Math.cos(e)) * s * 1.1, Math.sin(e) * Math.sin(a) * s,
        color, life * (0.6 + Math.random() * 0.7), size * (0.6 + Math.random() * 0.8), gravity);
    }
  }

  /** Rising fountain of light (stage complete). */
  fountain(p, colors, count = 120, height = 14) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.random() * 2.2;
      this.emit(p.x + Math.cos(a) * r, p.y + Math.random() * 1.5, p.z + Math.sin(a) * r,
        Math.cos(a) * (1 + Math.random() * 2.5), height * (0.5 + Math.random() * 0.7), Math.sin(a) * (1 + Math.random() * 2.5),
        colors[i % colors.length], 1.6 + Math.random() * 1.4, 0.35 + Math.random() * 0.45, 9);
    }
  }

  update(dt) {
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const l = --this.n;
        if (i !== l) {
          for (let k = 0; k < 3; k++) {
            this.pos[i * 3 + k] = this.pos[l * 3 + k]; this.vel[i * 3 + k] = this.vel[l * 3 + k]; this.base[i * 3 + k] = this.base[l * 3 + k];
          }
          this.life[i] = this.life[l]; this.max[i] = this.max[l]; this.grav[i] = this.grav[l]; this.bsize[i] = this.bsize[l];
        }
        continue;
      }
      this.vel[i * 3 + 1] -= this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      const k = this.life[i] / this.max[i];
      const f = Math.min(1, k * 2.2);
      this.col[i * 3] = this.base[i * 3] * f; this.col[i * 3 + 1] = this.base[i * 3 + 1] * f; this.col[i * 3 + 2] = this.base[i * 3 + 2] * f;
      this.siz[i] = this.bsize[i] * (0.5 + 0.5 * k);
      i++;
    }
    const g = this.points.geometry;
    g.setDrawRange(0, this.n);
    g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
  }
}

// ───────────────────────── light beams & markers ─────────────────────────
export function makeBeam(color, height = 70, radius = 1.1) {
  const geo = new THREE.CylinderGeometry(radius * 0.55, radius, height, 16, 1, true);
  geo.translate(0, height / 2, 0);
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uColor: { value: new THREE.Color(color) }, uTime: fxTime, uAlpha: { value: 1 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: /* glsl */`
      uniform vec3 uColor; uniform float uTime, uAlpha; varying vec2 vUv;
      void main(){
        float a = pow(1.0 - vUv.y, 1.7);
        a *= 0.6 + 0.22 * sin(vUv.y * 34.0 - uTime * 2.6);
        gl_FragColor = vec4(uColor * 1.5, a * uAlpha * 0.7);
      }`,
  });
  const m = new THREE.Mesh(geo, mat);
  m.renderOrder = 25;
  return m;
}

/** Ground target marker: pulsing ring + beam + bobbing arrow. */
export function makeMarker(color = 0xffd45a, radius = 2.4, beamH = 40) {
  const g = new THREE.Group();
  const ringGeo = new THREE.RingGeometry(radius * 0.78, radius, 48);
  ringGeo.rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.y = 0.12;
  const discGeo = new THREE.CircleGeometry(radius * 0.78, 40);
  discGeo.rotateX(-Math.PI / 2);
  const disc = new THREE.Mesh(discGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  disc.position.y = 0.1;
  const beam = makeBeam(color, beamH, radius * 0.42);
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.1, 4), new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  arrow.rotation.x = Math.PI;
  g.add(ring, disc, beam, arrow);
  g.userData.setColor = (c) => { ringMat.color.set(c); disc.material.color.set(c); beam.material.uniforms.uColor.value.set(c); arrow.material.color.set(c); };
  g.userData.update = (t) => {
    const s = 1 + Math.sin(t * 3) * 0.07;
    ring.scale.set(s, 1, s);
    arrow.position.y = 3.6 + Math.sin(t * 2.4) * 0.35;
    arrow.rotation.y = t * 1.5;
  };
  g.userData.update(0);
  return g;
}

/** Glowing collectable orb with optional text label. */
export function makeOrb(color = 0xffd45a, r = 0.45, label = null, labelOpts = {}) {
  const g = new THREE.Group();
  const c = new THREE.Color(color);
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 2), new THREE.MeshBasicMaterial({ color: c.clone().multiplyScalar(1.7), toneMapped: false }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  halo.scale.setScalar(r * 6);
  g.add(core, halo);
  g.userData.core = core; g.userData.halo = halo;
  if (label) {
    const l = makeLabel(label, { scale: 0.85, ...labelOpts });
    l.position.y = r + 0.35 + l.scale.y / 2;
    g.add(l);
    g.userData.label = l;
  }
  return g;
}

const SHARED = new Set(Object.values(MAT));
export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.userData.shared) return;
    if (o.geometry) o.geometry.dispose();
    const m = o.material;
    if (m) {
      (Array.isArray(m) ? m : [m]).forEach((mm) => {
        if (SHARED.has(mm)) return;
        if (mm.map && mm.map.isCanvasTexture && mm.map !== glowTexture()) mm.map.dispose();
        mm.dispose();
      });
    }
  });
}
