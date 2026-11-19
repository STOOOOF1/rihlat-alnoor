import * as THREE from 'three';
import { Builder, addWind } from '../core/builder.js';
import { mulberry32, fbm } from '../core/utils.js';
import { heightAt, slopeAt, pathDist, desertAt } from './terrain.js';
import { ZONES, L } from './layout.js';

function zoneAt(x, z, margin = 0) {
  for (const zn of ZONES) if (Math.hypot(x - zn.x, z - zn.z) < zn.r + margin) return zn;
  return null;
}

function frondGeometry(len = 3.5, w = 0.95, droop = 1.6) {
  const segs = 5, pos = [];
  const pt = (t, side) => [len * t * Math.cos(t * 0.8), Math.sin(t * Math.PI * 0.5) * 0.9 - t * t * droop, side * w * 0.5 * Math.sin(Math.PI * (0.1 + 0.9 * t))];
  for (let i = 0; i < segs; i++) {
    const t0 = i / segs, t1 = (i + 1) / segs;
    const a0 = pt(t0, -1), a1 = pt(t0, 1), b0 = pt(t1, -1), b1 = pt(t1, 1);
    pos.push(...a0, ...a1, ...b1, ...a0, ...b1, ...b0);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

function palmGeometry() {
  const b = new Builder();
  const segs = 6, H = 6.6;
  for (let i = 0; i < segs; i++) {
    const t = i / segs, y = t * H + H / segs / 2, r = 0.31 - t * 0.13;
    b.cyl(r - 0.02, r + 0.03, H / segs + 0.06, i % 2 ? 0x8f6e48 : 0x7a5c3b, Math.sin(t * 1.3) * 0.5, y, 0, 7);
  }
  const tx = Math.sin(1.3) * 0.5;
  for (let k = 0; k < 9; k++) {
    const g = frondGeometry(3.2 + (k % 3) * 0.35, 0.95, 1.4 + (k % 2) * 0.5);
    b.add(g, k % 2 ? 0x3f9a3c : 0x2f8436, tx, H, 0, 0, (k / 9) * Math.PI * 2 + 0.2, 0);
  }
  for (let k = 0; k < 4; k++) b.sphere(0.2, 0xb5651d, tx + Math.cos(k * 1.6) * 0.3, H - 0.4, Math.sin(k * 1.6) * 0.3, 1, 1.3, 1, 6, 5);
  return b.geometry();
}

function treeGeometry() {
  const b = new Builder();
  b.cyl(0.2, 0.34, 2.8, 0x6b4a2f, 0, 1.4, 0, 7);
  b.add(new THREE.IcosahedronGeometry(1.75, 1), 0x3f9b4a, 0, 3.7, 0);
  b.add(new THREE.IcosahedronGeometry(1.25, 1), 0x55b458, 1.0, 3.2, 0.4);
  b.add(new THREE.IcosahedronGeometry(1.3, 1), 0x378a44, -0.9, 3.3, -0.5);
  b.add(new THREE.IcosahedronGeometry(1.1, 1), 0x66c463, 0.1, 4.8, 0.1);
  return b.geometry();
}

function bushGeometry() {
  const b = new Builder();
  b.add(new THREE.IcosahedronGeometry(0.8, 1), 0x4a9f48, 0, 0.5, 0, 0, 0, 0, 1, 0.75, 1);
  b.add(new THREE.IcosahedronGeometry(0.55, 1), 0x62b85a, 0.55, 0.42, 0.2);
  b.add(new THREE.IcosahedronGeometry(0.5, 1), 0x3b8a40, -0.5, 0.38, -0.25);
  return b.geometry();
}

function grassGeometry() {
  const pos = [], col = [], nor = [];
  const dark = new THREE.Color(0x4f9f42), light = new THREE.Color(0xb4e56e);
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI + 0.3, c = Math.cos(a), s = Math.sin(a);
    const w = 0.055, h = 0.3 + (k % 3) * 0.1, lean = 0.12;
    const ox = Math.cos(a * 3.1) * 0.14, oz = Math.sin(a * 2.3) * 0.14;
    const p0 = [ox - c * w, 0, oz - s * w], p1 = [ox + c * w, 0, oz + s * w], p2 = [ox - s * lean, h, oz + c * lean];
    pos.push(...p0, ...p1, ...p2, ...p1, ...p0, ...p2);
    for (let r = 0; r < 2; r++) {
      col.push(dark.r, dark.g, dark.b, dark.r, dark.g, dark.b, light.r, light.g, light.b);
      nor.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}

function flowerGeometry() {
  const b = new Builder();
  b.cyl(0.02, 0.02, 0.35, 0xbfe6a8, 0, 0.175, 0, 4);
  for (let k = 0; k < 5; k++) b.sphere(0.07, 0xffffff, Math.cos(k * 1.257) * 0.085, 0.37, Math.sin(k * 1.257) * 0.085, 1, 0.6, 1, 5, 4);
  b.sphere(0.055, 0xfff1a0, 0, 0.39, 0, 1, 0.8, 1, 5, 4);
  return b.geometry();
}

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _e = new THREE.Euler(), _c = new THREE.Color();
function instanced(geo, mat, items, shadows = true) {
  const im = new THREE.InstancedMesh(geo, mat, items.length);
  items.forEach((it, i) => {
    _e.set(it.rx || 0, it.ry || 0, it.rz || 0); _q.setFromEuler(_e);
    _m.compose(_p.set(it.x, it.y, it.z), _q, _s.set(it.sx ?? it.s ?? 1, it.sy ?? it.s ?? 1, it.sz ?? it.s ?? 1));
    im.setMatrixAt(i, _m);
    if (it.color !== undefined) im.setColorAt(i, _c.set(it.color));
  });
  im.instanceMatrix.needsUpdate = true;
  if (im.instanceColor) im.instanceColor.needsUpdate = true;
  im.castShadow = shadows; im.receiveShadow = true;
  im.frustumCulled = false;
  return im;
}
export { instanced };

export function buildVegetation(world, density = 1) {
  const rnd = mulberry32(20241);
  const group = new THREE.Group();
  group.name = 'vegetation';
  const R = (a, b) => a + rnd() * (b - a);
  const randPos = () => [R(-335, 262), R(-262, 262)];

  const foliage = addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true, side: THREE.DoubleSide }), 2.2, 0.03);
  const leafy = addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true }), 2.4, 0.022);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true });
  const grassMat = addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }), 0.0, 0.22);
  const flowerMat = addWind(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), 0.0, 0.15);

  // ── palms
  const palms = [];
  const actX = -66, actZ = 148;
  for (let tries = 0; tries < 9000 && palms.length < 300; tries++) {
    let [x, z] = randPos();
    if (tries < 500) { const a = R(0, 6.283), r = R(12, 44); x = L.sawm.x + Math.cos(a) * r; z = L.sawm.z + Math.sin(a) * r; }
    const h = heightAt(x, z);
    if (h < 1.5 || h > 16 || slopeAt(x, z) > 0.5 || pathDist(x, z) < 4.5) continue;
    const zn = zoneAt(x, z, 4);
    let p = h < 5.5 ? 0.75 : 0.1;
    if (desertAt(x, z) > 0.5) p = 0.12;
    if (zn) {
      if (zn === ZONES[4]) { p = Math.hypot(x - actX, z - actZ) > 19 && Math.hypot(x - L.pond.x, z - L.pond.z) > 10 ? 1 : 0; }
      else if (zn.x === L.hajj.x) { p = Math.hypot(x - L.hajj.x, z - L.hajj.z) > 100 ? 0.3 : 0; }
      else p = 0;
    }
    if (rnd() > p) continue;
    if (palms.some((q) => Math.hypot(q.x - x, q.z - z) < 3.2)) continue;
    palms.push({ x, y: h - 0.15, z, ry: R(0, 6.283), s: R(0.85, 1.35), rz: R(-0.06, 0.06) });
    world.colliders.push({ x, z, r: 0.45 });
  }
  group.add(instanced(palmGeometry(), foliage, palms));

  // ── broadleaf trees
  const trees = [];
  for (let tries = 0; tries < 12000 && trees.length < 460 * density; tries++) {
    const [x, z] = randPos();
    const h = heightAt(x, z);
    if (h < 4 || h > 40 || slopeAt(x, z) > 0.6 || pathDist(x, z) < 5 || desertAt(x, z) > 0.25) continue;
    const zn = zoneAt(x, z, 3);
    if (zn) {
      const d = Math.hypot(x - zn.x, z - zn.z);
      if (!(zn.x === L.garden.x && d > 36) && !(zn.x === L.plaza.x && zn.z === L.plaza.z && d > 30)) continue;
    }
    if (fbm(x * 0.012, z * 0.012, 2, 33) < -0.08) continue;
    if (trees.some((q) => Math.hypot(q.x - x, q.z - z) < 3.6)) continue;
    const s = R(0.8, 1.7);
    trees.push({ x, y: h - 0.1, z, ry: R(0, 6.283), s, color: _c.setHSL(R(0.18, 0.4), 0.35, R(0.72, 0.96)).getHex() });
    world.colliders.push({ x, z, r: 0.45 * s });
  }
  group.add(instanced(treeGeometry(), leafy, trees));

  // ── bushes
  const bushes = [];
  for (let tries = 0; tries < 6000 && bushes.length < 320 * density; tries++) {
    const [x, z] = randPos();
    const h = heightAt(x, z);
    if (h < 2.6 || h > 34 || slopeAt(x, z) > 0.7 || pathDist(x, z) < 3.5 || zoneAt(x, z, 1)) continue;
    const des = desertAt(x, z) > 0.4;
    if (des && rnd() > 0.25) continue;
    bushes.push({ x, y: h, z, ry: R(0, 6.283), s: R(0.7, 1.5), color: des ? 0xd8c890 : _c.setHSL(R(0.18, 0.4), 0.35, R(0.72, 0.96)).getHex() });
  }
  group.add(instanced(bushGeometry(), leafy, bushes));

  // ── rocks
  const rocks = [];
  for (let tries = 0; tries < 6000 && rocks.length < 340; tries++) {
    const [x, z] = randPos();
    const h = heightAt(x, z);
    if (h < 0.4 || pathDist(x, z) < 4 || zoneAt(x, z, 2)) continue;
    const sl = slopeAt(x, z);
    if (rnd() > 0.2 + sl + desertAt(x, z) * 0.3) continue;
    const s = R(0.35, 2.3);
    const v = R(0.5, 0.75);
    rocks.push({ x, y: h + s * 0.15, z, rx: R(0, 3), ry: R(0, 6.283), rz: R(0, 3), sx: s * R(0.8, 1.3), sy: s * R(0.55, 0.9), sz: s * R(0.8, 1.3), color: _c.setRGB(v, v * 0.94, v * 0.86).getHex() });
    if (s > 1.2) world.colliders.push({ x, z, r: s * 0.8 });
  }
  group.add(instanced(new THREE.IcosahedronGeometry(1, 0), rockMat, rocks));

  // ── grass
  const grass = [];
  const gN = Math.floor(16000 * density);
  for (let tries = 0; tries < gN * 6 && grass.length < gN; tries++) {
    const [x, z] = randPos();
    const h = heightAt(x, z);
    if (h < 2.9 || h > 36 || slopeAt(x, z) > 0.6 || desertAt(x, z) > 0.3 || pathDist(x, z) < 3 || zoneAt(x, z, -1)) continue;
    const s = R(0.55, 1.1);
    const v = R(0.75, 1.1);
    grass.push({ x, y: h - 0.03, z, ry: R(0, 6.283), sx: s, sy: s * R(0.8, 1.4), sz: s, color: _c.setRGB(v, v, v * 0.9).getHex() });
  }
  group.add(instanced(grassGeometry(), grassMat, grass, false));

  // ── flowers (clusters + garden beds)
  const flowers = [];
  const palette = [0xff6fa3, 0xffd34d, 0xffffff, 0xc58bff, 0xff8a5c, 0x7fd1ff];
  const addCluster = (cx, cz, rad, n, color) => {
    for (let i = 0; i < n; i++) {
      const a = R(0, 6.283), r = Math.sqrt(rnd()) * rad;
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      flowers.push({ x, y: heightAt(x, z), z, ry: R(0, 6), s: R(0.75, 1.25), color: color ?? palette[Math.floor(rnd() * palette.length)] });
    }
  };
  for (let tries = 0, n = 0; tries < 3000 && n < 90 * density; tries++) {
    const [x, z] = randPos();
    const h = heightAt(x, z);
    if (h < 3 || h > 30 || slopeAt(x, z) > 0.5 || desertAt(x, z) > 0.2 || zoneAt(x, z, 0)) continue;
    addCluster(x, z, 3.5, 14, palette[Math.floor(rnd() * palette.length)]);
    n++;
  }
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    addCluster(L.garden.x + Math.sin(a) * 32.5, L.garden.z + Math.cos(a) * 32.5, 1.8, 16, palette[i % palette.length]);
  }
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    addCluster(L.plaza.x + Math.sin(a) * 28.5, L.plaza.z + Math.cos(a) * 28.5, 1.4, 10, palette[(i * 2) % palette.length]);
  }
  group.add(instanced(flowerGeometry(), flowerMat, flowers, false));

  return group;
}
