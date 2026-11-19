import * as THREE from 'three';
import { fbm, smoothstep, lerp, clamp, distToSeg } from '../core/utils.js';
import { ZONES, MOUNTAINS, PATHS, L } from './layout.js';
import { grainTexture } from '../core/builder.js';

export const T = { size: 780, cx: -45, cz: 0, seg: 312 };
const N = T.seg + 1;
const CELL = T.size / T.seg;
const X0 = T.cx - T.size / 2;
const Z0 = T.cz - T.size / 2;
let H = null;

function islandMask(x, z) {
  const d1 = Math.hypot(x, z) / 258;
  const d2 = Math.hypot(x + 195, z + 25) / 140;
  const wob = 1 + fbm(x * 0.012, z * 0.012, 2, 21) * 0.14;
  const m1 = 1 - smoothstep(0.7, 1.0, d1 * wob);
  const m2 = 1 - smoothstep(0.7, 1.0, d2 * wob);
  return Math.max(m1, m2);
}

function rawHeight(x, z) {
  const m = islandMask(x, z);
  const n = fbm(x * 0.0062, z * 0.0062, 4, 1);
  let h = 2.6 + Math.max(0, n + 0.12) * 30 + fbm(x * 0.03, z * 0.03, 3, 5) * 2.0;
  for (const b of MOUNTAINS) {
    const d = Math.hypot(x - b.x, z - b.z) / b.r;
    if (d < 1) {
      const k = 1 - d * d;
      h += b.h * k * k * (0.82 + 0.5 * fbm(x * 0.045, z * 0.045, 3, 9));
    }
  }
  h = -9 + (h + 9) * smoothstep(0, 1, m);
  for (const zn of ZONES) {
    const d = Math.hypot(x - zn.x, z - zn.z);
    const w = 1 - smoothstep(zn.r, zn.r + zn.blend, d);
    if (w > 0) h = lerp(h, zn.h, w);
  }
  return h;
}

export function buildHeights() {
  H = new Float32Array(N * N);
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) H[j * N + i] = rawHeight(X0 + i * CELL, Z0 + j * CELL);
  }
}

export function heightAt(x, z) {
  const fx = (x - X0) / CELL, fz = (z - Z0) / CELL;
  if (fx < 0 || fz < 0 || fx >= N - 1 || fz >= N - 1) return -9;
  const i = Math.floor(fx), j = Math.floor(fz);
  const u = fx - i, v = fz - j;
  const a = H[j * N + i], b = H[j * N + i + 1], c = H[(j + 1) * N + i], d = H[(j + 1) * N + i + 1];
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

export function slopeAt(x, z) {
  const e = 1.5;
  const dx = heightAt(x + e, z) - heightAt(x - e, z);
  const dz = heightAt(x, z + e) - heightAt(x, z - e);
  return Math.hypot(dx, dz) / (2 * e);
}

export function pathDist(x, z) {
  let m = 1e9;
  for (const p of PATHS) {
    for (let i = 0; i < p.length - 1; i++) {
      const d = distToSeg(x, z, p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]);
      if (d < m) m = d;
    }
  }
  return m;
}

/** 0..1 — how "desert" the ground is (Hajj valley). */
export function desertAt(x, z) {
  return 1 - smoothstep(108, 150, Math.hypot(x - L.hajj.x, z - L.hajj.z));
}

const COL = {
  sandWet: new THREE.Color(0xb9a57a),
  sand: new THREE.Color(0xecd9a6),
  grassA: new THREE.Color(0x8ccf5e),
  grassB: new THREE.Color(0x4f9f42),
  dune: new THREE.Color(0xe7c88e),
  rock: new THREE.Color(0x92877a),
  rockHigh: new THREE.Color(0xb9b2aa),
  path: new THREE.Color(0xd9bf8c),
};
const _g = new THREE.Color();

export function terrainColor(x, z, h, slope, out) {
  const n = fbm(x * 0.02, z * 0.02, 2, 7) * 0.9 + 0.5;
  _g.copy(COL.grassA).lerp(COL.grassB, clamp(n, 0, 1));
  out.copy(_g);
  out.lerp(COL.dune, desertAt(x, z));
  out.lerp(COL.sand, 1 - smoothstep(1.3, 2.9, h));
  if (h < 0.6) out.lerp(COL.sandWet, 1 - smoothstep(-0.8, 0.6, h));
  out.lerp(COL.rock, smoothstep(0.5, 0.85, slope));
  out.lerp(COL.rockHigh, smoothstep(36, 54, h));
  const pd = pathDist(x, z);
  if (pd < 3.6 && h > 0.5) out.lerp(COL.path, (1 - smoothstep(1.7, 3.6, pd)) * 0.9);
  out.multiplyScalar(0.92 + 0.2 * fbm(x * 0.12, z * 0.12, 2, 3));
  return out;
}

export function buildTerrainMesh() {
  const geo = new THREE.PlaneGeometry(T.size, T.size, T.seg, T.seg);
  geo.rotateX(-Math.PI / 2);
  geo.translate(T.cx, 0, T.cz);
  const pos = geo.attributes.position;
  for (let k = 0; k < pos.count; k++) {
    const i = Math.round((pos.getX(k) - X0) / CELL), j = Math.round((pos.getZ(k) - Z0) / CELL);
    pos.setY(k, H[j * N + i]);
  }
  geo.computeVertexNormals();
  const nor = geo.attributes.normal;
  const col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let k = 0; k < pos.count; k++) {
    const ny = Math.max(nor.getY(k), 0.05);
    const slope = Math.sqrt(Math.max(0, 1 - ny * ny)) / ny;
    terrainColor(pos.getX(k), pos.getZ(k), pos.getY(k), slope, c);
    col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, map: grainTexture() });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.name = 'terrain';
  return mesh;
}

export function buildWater(skyU) {
  const data = new Uint8Array(N * N);
  for (let k = 0; k < N * N; k++) data[k] = clamp((H[k] + 10) / 20, 0, 1) * 255;
  const tex = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  tex.minFilter = tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: skyU.uTime,
      uDepth: { value: tex },
      uMap: { value: new THREE.Vector4(X0, Z0, CELL, N) },
      uSunDir: skyU.uLightDir,
      uSunColor: skyU.uSunColor,
      uZenith: skyU.uZenith,
      uHorizon: skyU.uHorizon,
      uFogColor: skyU.uFogColor,
      uFog: skyU.uFog,
      uDay: skyU.uDay,
    },
    vertexShader: /* glsl */`
      varying vec3 vWorld;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform sampler2D uDepth; uniform vec4 uMap;
      uniform vec3 uSunDir; uniform vec3 uSunColor; uniform vec3 uZenith; uniform vec3 uHorizon;
      uniform vec3 uFogColor; uniform vec2 uFog; uniform float uDay;
      varying vec3 vWorld;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vnoise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y);
      }
      float waveH(vec2 p){
        float t = uTime;
        return vnoise(p*0.10 + vec2(t*0.22, t*0.15))*0.55
             + vnoise(p*0.27 - vec2(t*0.28, -t*0.20))*0.30
             + vnoise(p*0.80 + vec2(-t*0.50, t*0.40))*0.15;
      }
      void main(){
        vec2 p = vWorld.xz;
        vec2 uv = ((p - uMap.xy) / uMap.z + 0.5) / uMap.w;
        float th = texture2D(uDepth, uv).r * 20.0 - 10.0;
        if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) th = -10.0;
        float depth = max(-th, 0.0);
        float dcam = distance(cameraPosition, vWorld);
        float e = 0.7;
        float h0 = waveH(p);
        float hx = waveH(p + vec2(e, 0.0)) - h0;
        float hz = waveH(p + vec2(0.0, e)) - h0;
        float att = 1.0 - smoothstep(120.0, 700.0, dcam) * 0.85;
        vec3 N = normalize(vec3(-hx * 2.4 * att, 1.0, -hz * 2.4 * att));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = 0.03 + 0.97 * pow(1.0 - max(dot(N, V), 0.0), 4.0);
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.55));
        vec3 shallow = vec3(0.07, 0.60, 0.62);
        vec3 deep = vec3(0.01, 0.13, 0.32);
        vec3 body = mix(shallow, deep, smoothstep(0.0, 5.5, depth)) * uDay;
        vec3 col = mix(body, sky, fres);
        float sp = pow(max(dot(R, uSunDir), 0.0), 220.0);
        col += uSunColor * sp * 2.5;
        float fn = vnoise(p * 0.9 + uTime * 0.3);
        float foam = smoothstep(0.5, 0.0, depth - 0.1 + fn * 0.25);
        float band = smoothstep(0.78, 1.0, sin(depth * 7.0 - uTime * 1.6 + fn * 4.0)) * smoothstep(1.7, 0.2, depth);
        float f = clamp(foam * 0.85 + band * 0.4, 0.0, 1.0);
        col = mix(col, vec3(0.95) * (0.25 + 0.75 * uDay), f);
        float alpha = max(mix(0.6, 0.96, smoothstep(0.0, 2.4, depth)), f);
        float fg = smoothstep(uFog.x, uFog.y, dcam);
        col = mix(col, uFogColor, fg);
        gl_FragColor = vec4(col, alpha);
      }`,
  });
  const geo = new THREE.PlaneGeometry(5000, 5000, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(T.cx, 0, T.cz);
  mesh.renderOrder = 2;
  mesh.name = 'water';
  return mesh;
}

/** Pre-rendered top-down map of the island (north is up). */
export function buildMapCanvas(px = 320) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = px;
  const g = cv.getContext('2d', { willReadFrequently: true });
  const img = g.createImageData(px, px);
  const c = new THREE.Color();
  for (let j = 0; j < px; j++) {
    for (let i = 0; i < px; i++) {
      const x = X0 + ((i + 0.5) / px) * T.size, z = Z0 + ((j + 0.5) / px) * T.size;
      const h = heightAt(x, z);
      if (h < 0) {
        const d = clamp(-h / 8, 0, 1);
        c.setRGB(lerp(0.25, 0.05, d), lerp(0.72, 0.3, d), lerp(0.8, 0.55, d), THREE.SRGBColorSpace);
      } else {
        terrainColor(x, z, h, slopeAt(x, z), c);
        const shade = clamp(1 + (heightAt(x - 3, z - 3) - heightAt(x + 3, z + 3)) * 0.05, 0.7, 1.3);
        c.multiplyScalar(shade);
      }
      c.convertLinearToSRGB();
      const k = (j * px + i) * 4;
      img.data[k] = clamp(c.r, 0, 1) * 255; img.data[k + 1] = clamp(c.g, 0, 1) * 255; img.data[k + 2] = clamp(c.b, 0, 1) * 255; img.data[k + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return cv;
}

/** world (x,z) → map canvas fraction (0..1) */
export function worldToMap(x, z) {
  return [(x - X0) / T.size, (z - Z0) / T.size];
}
