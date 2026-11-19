import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();

// shared wind uniform (vegetation, flags)
export const windTime = { value: 0 };

/** Merges many coloured primitives into one geometry (one draw call). */
export class Builder {
  constructor() { this.parts = []; }

  add(geo, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    geo.dispose();
    _e.set(rx, ry, rz); _q.setFromEuler(_e);
    _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz));
    g.applyMatrix4(_m);
    _c.set(color);
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    for (const k of Object.keys(g.attributes)) {
      if (k !== 'position' && k !== 'normal' && k !== 'color') g.deleteAttribute(k);
    }
    if (!g.attributes.normal) g.computeVertexNormals();
    this.parts.push(g);
    return this;
  }
  box(w, h, d, color, x = 0, y = 0, z = 0, ry = 0) {
    return this.add(new THREE.BoxGeometry(w, h, d), color, x, y, z, 0, ry, 0);
  }
  cyl(rt, rb, h, color, x = 0, y = 0, z = 0, seg = 10, open = false) {
    return this.add(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), color, x, y, z);
  }
  sphere(r, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, ws = 12, hs = 8) {
    return this.add(new THREE.SphereGeometry(r, ws, hs), color, x, y, z, 0, 0, 0, sx, sy, sz);
  }
  dome(r, color, x = 0, y = 0, z = 0, sy = 1, seg = 18) {
    return this.add(new THREE.SphereGeometry(r, seg, 9, 0, Math.PI * 2, 0, Math.PI / 2), color, x, y, z, 0, 0, 0, 1, sy, 1);
  }
  cone(r, h, color, x = 0, y = 0, z = 0, seg = 10) {
    return this.add(new THREE.ConeGeometry(r, h, seg), color, x, y, z);
  }
  torus(r, tube, color, x = 0, y = 0, z = 0, rx = Math.PI / 2, seg = 24, arc = Math.PI * 2, ry = 0, rz = 0) {
    return this.add(new THREE.TorusGeometry(r, tube, 6, seg, arc), color, x, y, z, rx, ry, rz);
  }
  /** Half-disc (arch top) facing local +z, bulging up. */
  archTop(w, depth, color, x, y, z, ry = 0) {
    const g = new THREE.CylinderGeometry(w / 2, w / 2, depth, 14, 1, false, 0, Math.PI);
    g.rotateX(Math.PI / 2); g.rotateZ(Math.PI / 2);
    return this.add(g, color, x, y, z, 0, ry, 0);
  }
  /** Arched panel (rectangle + half-disc) on a wall, facing local +z rotated by ry. */
  arch(w, h, color, x, y, z, ry = 0, depth = 0.12) {
    this.add(new THREE.BoxGeometry(w, h, depth), color, x, y + h / 2, z, 0, ry, 0);
    return this.archTop(w, depth, color, x, y + h, z, ry);
  }
  /** Merge an already-built coloured geometry (sub-assembly) with a transform. */
  merge(geo, x = 0, y = 0, z = 0, ry = 0, s = 1) {
    const g = geo.clone();
    _e.set(0, ry, 0); _q.setFromEuler(_e);
    _m.compose(_p.set(x, y, z), _q, _s.set(s, s, s));
    g.applyMatrix4(_m);
    this.parts.push(g);
    return this;
  }
  get empty() { return this.parts.length === 0; }
  geometry() {
    const g = mergeGeometries(this.parts, false);
    this.parts.forEach((p) => p.dispose());
    this.parts = [];
    g.computeBoundingSphere();
    return g;
  }
  mesh(material, shadows = true) {
    const m = new THREE.Mesh(this.geometry(), material);
    m.castShadow = shadows; m.receiveShadow = shadows;
    return m;
  }
}

export const MAT = {
  flat: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0, flatShading: true }),
  smooth: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7, metalness: 0 }),
  double: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true, side: THREE.DoubleSide }),
  gold: new THREE.MeshStandardMaterial({ color: 0xe8b84a, roughness: 0.35, metalness: 0.35, emissive: 0x4a3200, emissiveIntensity: 0.6 }),
};

/** New emissive (unlit, HDR) vertex-coloured material. `level` scales brightness (bloom picks up >1). */
export function glowMat(level = 1) {
  const m = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  m.color.setScalar(level);
  return m;
}

/** Adds gentle wind sway to a material (for instanced vegetation). */
export function addWind(mat, y0 = 0, k = 0.02) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWind = windTime;
    shader.vertexShader = 'uniform float uWind;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       #ifdef USE_INSTANCING
         float wph = instanceMatrix[3][0] * 0.21 + instanceMatrix[3][2] * 0.17;
       #else
         float wph = 0.0;
       #endif
       float wamt = max(position.y - ${y0.toFixed(2)}, 0.0) * ${k.toFixed(4)};
       transformed.x += sin(uWind * 1.3 + wph + position.y * 0.35) * wamt;
       transformed.z += cos(uWind * 1.1 + wph * 1.3) * wamt * 0.7;`
    );
  };
  return mat;
}

export function canvasTexture(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d', { willReadFrequently: true });
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (opts.repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(opts.repeat[0], opts.repeat[1]);
  }
  return t;
}

function star8(g, cx, cy, r) {
  g.beginPath();
  for (let i = 0; i < 16; i++) {
    const a = (i * Math.PI) / 8;
    const rr = i % 2 === 0 ? r : r * 0.765;
    const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
    if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
  }
  g.closePath();
}

/** Islamic 8-point star tile pattern. */
export function tileTexture(base = '#efe6d0', starA = '#1f8a8a', starB = '#e2b04a', line = '#b8944a', repeat = [6, 6]) {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = base; g.fillRect(0, 0, w, h);
    const s = 128;
    for (let j = -1; j <= 2; j++) for (let i = -1; i <= 2; i++) {
      const cx = i * s + s / 2, cy = j * s + s / 2;
      star8(g, cx, cy, 44);
      g.fillStyle = (i + j) % 2 === 0 ? starA : starB; g.fill();
      g.lineWidth = 3; g.strokeStyle = line; g.stroke();
      star8(g, cx, cy, 20); g.fillStyle = base; g.fill(); g.stroke();
      // diamonds on cell corners
      g.save(); g.translate(i * s, j * s); g.rotate(Math.PI / 4);
      g.fillStyle = line; g.fillRect(-13, -13, 26, 26);
      g.fillStyle = base; g.fillRect(-7, -7, 14, 14);
      g.restore();
    }
    g.strokeStyle = 'rgba(120,90,40,.35)'; g.lineWidth = 2;
    for (let i = 0; i <= 2; i++) {
      g.beginPath(); g.moveTo(i * s, 0); g.lineTo(i * s, h); g.stroke();
      g.beginPath(); g.moveTo(0, i * s); g.lineTo(w, i * s); g.stroke();
    }
  }, { repeat });
}

/** White marble paving (for the Mataf / walkways). */
export function marbleTexture(repeat = [10, 10]) {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = '#f1efe9'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const v = 225 + Math.random() * 30;
      g.fillStyle = `rgba(${v},${v},${v - 4},.5)`;
      g.fillRect(Math.random() * w, Math.random() * h, 2 + Math.random() * 10, 1 + Math.random() * 2);
    }
    g.strokeStyle = 'rgba(150,150,145,.6)'; g.lineWidth = 3;
    g.strokeRect(0, 0, w, h);
    g.beginPath(); g.moveTo(w / 2, 0); g.lineTo(w / 2, h); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
  }, { repeat });
}

/** Soft greyscale grain multiplied over terrain vertex colours. */
export function grainTexture(repeat = [160, 160]) {
  return canvasTexture(256, 256, (g, w, h) => {
    const img = g.createImageData(w, h);
    for (let i = 0; i < w * h; i++) {
      const v = 205 + Math.random() * 50;
      img.data[i * 4] = v; img.data[i * 4 + 1] = v; img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    for (let i = 0; i < 260; i++) {
      const v = Math.random() < 0.5 ? 255 : 170;
      g.fillStyle = `rgba(${v},${v},${v},.22)`;
      g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 3.5, 0, 7); g.fill();
    }
  }, { repeat });
}

/** Kiswah (cloth of the Kaaba): black with a gold ornamental band. Optional gold door. */
export function kiswahTexture(withDoor = false) {
  return canvasTexture(512, 512, (g, w, h) => {
    g.fillStyle = '#0b0b0e'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(60,60,70,.35)'; g.lineWidth = 1;
    for (let x = 0; x < w; x += 6) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
    // gold band (hizam)
    const by = h * 0.24, bh = h * 0.13;
    g.fillStyle = '#17130a'; g.fillRect(0, by, w, bh);
    g.fillStyle = '#d9a93a'; g.fillRect(0, by, w, 5); g.fillRect(0, by + bh - 5, w, 5);
    g.strokeStyle = '#e8bd55'; g.lineWidth = 3;
    for (let i = 0; i < 4; i++) {
      const x0 = i * (w / 4) + 14, cw = w / 4 - 28, y0 = by + 14, ch = bh - 28;
      g.beginPath(); g.roundRect(x0, y0, cw, ch, ch / 2); g.stroke();
      g.fillStyle = '#e8bd55';
      for (let k = 0; k < 5; k++) {
        g.beginPath(); g.ellipse(x0 + cw * (0.14 + k * 0.18), y0 + ch / 2, 8, ch * 0.28, k % 2 ? 0.5 : -0.5, 0, 7); g.fill();
      }
    }
    // medallions under the band
    g.fillStyle = '#c99a30';
    for (let i = 0; i < 4; i++) {
      const cx = (i + 0.5) * (w / 4), cy = by + bh + 44;
      g.save(); g.translate(cx, cy); g.rotate(Math.PI / 4); g.fillRect(-15, -15, 30, 30); g.restore();
      g.fillStyle = '#0b0b0e'; g.beginPath(); g.arc(cx, cy, 8, 0, 7); g.fill(); g.fillStyle = '#c99a30';
    }
    if (withDoor) {
      const dx = w * 0.1, dw = w * 0.2, dy = h * 0.58, dh = h * 0.27;
      g.fillStyle = '#e2b246'; g.fillRect(dx - 6, dy - 6, dw + 12, dh + 12);
      g.fillStyle = '#f3d27a'; g.fillRect(dx, dy, dw, dh);
      g.strokeStyle = '#a97a1c'; g.lineWidth = 3;
      g.strokeRect(dx + 6, dy + 6, dw / 2 - 9, dh - 12);
      g.strokeRect(dx + dw / 2 + 3, dy + 6, dw / 2 - 9, dh - 12);
      for (let k = 0; k < 4; k++) {
        g.strokeRect(dx + 14, dy + 16 + k * (dh / 4.4), dw / 2 - 25, dh / 6);
        g.strokeRect(dx + dw / 2 + 11, dy + 16 + k * (dh / 4.4), dw / 2 - 25, dh / 6);
      }
    }
  });
}

/** Simple woven carpet. */
export function carpetTexture(main = '#8c1c2c', border = '#e2b04a', accent = '#1c5a7a') {
  return canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = border; g.fillRect(0, 0, w, h);
    g.fillStyle = accent; g.fillRect(10, 10, w - 20, h - 20);
    g.fillStyle = main; g.fillRect(24, 24, w - 48, h - 48);
    g.strokeStyle = border; g.lineWidth = 3;
    star8(g, w / 2, h / 2, 60); g.stroke();
    star8(g, w / 2, h / 2, 30); g.fillStyle = border; g.fill();
    for (const [x, y] of [[60, 60], [196, 60], [60, 196], [196, 196]]) { star8(g, x, y, 18); g.fillStyle = accent; g.fill(); g.stroke(); }
  });
}

let _glowTex = null;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  _glowTex = canvasTexture(128, 128, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.25, 'rgba(255,255,255,.55)');
    gr.addColorStop(0.6, 'rgba(255,255,255,.12)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  return _glowTex;
}
