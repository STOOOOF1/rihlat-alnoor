import * as THREE from 'three';
import { Builder, MAT, glowMat, marbleTexture, kiswahTexture } from '../core/builder.js';
import { L, STAGE_SITES } from './layout.js';
import { C, rot2, finial, minaret, addLabel } from './structures.js';
import { instanced } from './vegetation.js';
import { mulberry32, distToSeg } from '../core/utils.js';
import { pathDist } from './terrain.js';

export function buildHajj(world) {
  const h = L.hajj.h;
  const g = new THREE.Group(); g.position.y = h;
  const b = new Builder(), sm = new Builder(), gl = new Builder(), gg = new Builder(), db = new Builder();
  const K = L.kaaba, TH = Math.PI / 4;

  // ── Mataf & Kaaba
  const mataf = new THREE.Mesh(new THREE.CircleGeometry(22.5, 72).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: marbleTexture([11, 11]), roughness: 0.4 }));
  mataf.position.set(K.x, 0.05, K.z); mataf.receiveShadow = true; g.add(mataf);
  b.box(10, 0.5, 10, 0xd8d2c4, K.x, 0.25, K.z, TH);
  const side = new THREE.MeshStandardMaterial({ map: kiswahTexture(false), roughness: 0.85 });
  const door = new THREE.MeshStandardMaterial({ map: kiswahTexture(true), roughness: 0.85 });
  const top = new THREE.MeshStandardMaterial({ color: 0x1a1a1c, roughness: 0.9 });
  const kaaba = new THREE.Mesh(new THREE.BoxGeometry(9, 11, 9), [door, side, top, top, side, side]);
  kaaba.position.set(K.x, 6, K.z); kaaba.rotation.y = TH; kaaba.castShadow = kaaba.receiveShadow = true;
  g.add(kaaba);
  world.colliders.push({ x: K.x, z: K.z, hw: 5.1, hd: 5.1, rot: TH });
  { const [dx, dz] = rot2(0, -5.0, TH); b.add(new THREE.BoxGeometry(0.36, 0.22, 1.3), C.GOLD, K.x + dx, 11.4, K.z + dz, 0, TH, 0); }
  // Black Stone corner (east)
  sm.sphere(0.48, 0xdadae0, K.x + 6.4, 1.6, K.z, 0.5, 1.3, 1, 12, 10);
  sm.sphere(0.22, 0x101012, K.x + 6.56, 1.6, K.z, 0.5, 1.2, 1, 10, 8);
  // Hijr Ismail (low semicircular wall, north-west side)
  for (let i = 0; i < 15; i++) {
    const a = (Math.PI * i) / 14;
    const [dx, dz] = rot2(4.5 * Math.cos(a), -4.5 - 4.5 * Math.sin(a), TH);
    sm.cyl(0.62, 0.66, 1.3, 0xf3f1ea, K.x + dx, 0.65, K.z + dz, 10);
    world.colliders.push({ x: K.x + dx, z: K.z + dz, r: 0.75 });
    if (i === 0 || i === 14) gl.sphere(0.2, C.WARM, K.x + dx, 1.55, K.z + dz, 1, 1, 1, 8, 6);
  }
  // Maqam Ibrahim
  { const [dx, dz] = rot2(10.4, 1.4, TH); const mx = K.x + dx, mz = K.z + dz;
    b.cyl(0.62, 0.7, 0.5, C.GOLD, mx, 0.25, mz, 8); gl.cyl(0.46, 0.46, 1.25, 0xffe2a0, mx, 1.1, mz, 8);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.283; b.box(0.05, 1.3, 0.05, C.GOLD, mx + Math.cos(a) * 0.5, 1.1, mz + Math.sin(a) * 0.5); }
    sm.dome(0.6, C.GOLD, mx, 1.72, mz, 1.1, 10); finial(b, mx, 2.3, mz, 0.3);
    world.colliders.push({ x: mx, z: mz, r: 0.75 });
  }
  // tawaf start line (from the Black Stone corner)
  b.box(15.5, 0.04, 0.5, 0x2d6a4f, K.x + 6.5 + 7.75, 0.085, K.z);
  // arcade ring
  for (let i = 0; i < 36; i++) {
    const m = (i * 10) % 90;
    if (m < 12 || m > 78) continue;
    const be = (i * 10 * Math.PI) / 180, cx = K.x + Math.sin(be) * 26.2, cz = K.z - Math.cos(be) * 26.2;
    sm.cyl(0.45, 0.52, 5.3, C.WHITE, cx, 2.65, cz, 10); b.box(1.3, 0.36, 1.3, C.STONE, cx, 5.45, cz, -be); b.box(1.2, 0.3, 1.2, C.STONE, cx, 0.15, cz, -be);
    gl.sphere(0.24, C.WARM, K.x + Math.sin(be) * 25.3, 4.7, K.z - Math.cos(be) * 25.3, 1, 1.2, 1, 8, 6);
    world.colliders.push({ x: cx, z: cz, r: 0.62 });
  }
  db.add(new THREE.LatheGeometry([[24.4, 5.62], [27.9, 5.62], [27.9, 6.25], [24.4, 6.25], [24.4, 5.62]].map((p) => new THREE.Vector2(p[0], p[1])), 72), C.WHITE, K.x, 0, K.z);
  for (const deg of [45, 135, 225, 315]) {
    const be = (deg * Math.PI) / 180, mx = K.x + Math.sin(be) * 32, mz = K.z - Math.cos(be) * 32;
    minaret(b, gl, mx, 0, mz, 30, 1.15, C.GOLD);
    world.colliders.push({ x: mx, z: mz, r: 2.0 });
  }

  // ── Safa & Marwa
  const SF = L.safa, MW = L.marwa;
  const masa = new THREE.Mesh(new THREE.PlaneGeometry(9.5, MW.z - SF.z < 0 ? SF.z - MW.z : MW.z - SF.z).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: marbleTexture([2, 14]), roughness: 0.4 }));
  masa.position.set(SF.x, 0.05, (SF.z + MW.z) / 2); masa.receiveShadow = true; g.add(masa);
  const mound = (cx, cz) => {
    const rnd = mulberry32(Math.floor(cx * 7 + cz * 13));
    for (let i = 0; i < 9; i++) {
      const a = rnd() * 6.283, r = i === 0 ? 0 : 1.2 + rnd() * 2.6, s = i === 0 ? 3.8 : 1.4 + rnd() * 1.6;
      b.add(new THREE.IcosahedronGeometry(1, 1), i % 2 ? 0x9a8c7c : 0x857767, cx + Math.cos(a) * r, s * 0.32, cz + Math.sin(a) * r, rnd() * 3, rnd() * 3, 0, s, s * 0.62, s);
    }
    world.colliders.push({ x: cx, z: cz, r: 4.5 });
  };
  mound(SF.x, SF.z + 5.5); mound(MW.x, MW.z - 5.5);
  addLabel(g, 'الصفا', SF.x, 6.6, SF.z + 5.5, { scale: 1.5 });
  addLabel(g, 'المروة', MW.x, 6.6, MW.z - 5.5, { scale: 1.5 });
  for (const pz of [-30, -50]) for (const sx of [-5.1, 5.1]) {
    b.cyl(0.11, 0.13, 3.3, C.WHITE, SF.x + sx, 1.65, pz, 8);
    gg.box(0.3, 1.5, 0.3, 0x35e07a, SF.x + sx, 2.6, pz);
    world.colliders.push({ x: SF.x + sx, z: pz, r: 0.3 });
  }

  // ── Miqat gate
  const MQ = L.miqat;
  for (const dz of [-5.6, 5.6]) {
    b.box(2.3, 9, 2.3, C.CREAM2, MQ.x, 4.5, MQ.z + dz); b.box(2.7, 0.6, 2.7, C.STONE, MQ.x, 0.3, MQ.z + dz);
    finial(b, MQ.x, 11.1, MQ.z + dz, 0.8);
    gl.sphere(0.3, C.WARM, MQ.x, 5.2, MQ.z + dz * 0.76, 1, 1.3, 1, 8, 6);
    world.colliders.push({ x: MQ.x, z: MQ.z + dz, r: 1.65 });
  }
  b.box(2.7, 1.9, 13.6, C.CREAM, MQ.x, 9.95, MQ.z); b.box(3.0, 0.3, 14, C.GOLD, MQ.x, 11.05, MQ.z);
  b.torus(4.45, 0.42, C.GOLD, MQ.x, 4.55, MQ.z, 0, 18, Math.PI, Math.PI / 2);
  addLabel(g, 'الميقات', MQ.x, 13.4, MQ.z, { scale: 1.7 });

  // ── Mina tents
  const tb = new Builder();
  tb.box(4.2, 2.0, 4.2, 0xf7f5ee, 0, 1, 0);
  tb.add(new THREE.ConeGeometry(3.25, 1.7, 4), 0xfdfcf8, 0, 2.85, 0, 0, Math.PI / 4, 0);
  tb.box(1.0, 1.5, 0.08, 0x8a8f98, 0, 0.75, 2.12); tb.sphere(0.14, C.GOLD, 0, 3.75, 0, 1, 1, 1, 6, 5);
  const tents = [];
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
    const tx = L.mina.x + (i - 2.5) * 7.6, tz = L.mina.z + (j - 1.5) * 7.6;
    tents.push({ x: tx, y: 0, z: tz, ry: 0 });
    world.colliders.push({ x: tx, z: tz, hw: 2.2, hd: 2.2, rot: 0 });
  }
  g.add(instanced(tb.geometry(), MAT.flat, tents));
  addLabel(g, 'مِنى', L.mina.x, 7.2, L.mina.z, { scale: 1.6 });

  // ── Jamarat
  const J = [{ x: L.jamarat.x, z: L.jamarat.z, n: 'جمرة العقبة (الكبرى)' }, { x: L.jamarat.x + 12, z: L.jamarat.z + 3, n: 'الجمرة الوسطى' }, { x: L.jamarat.x + 24, z: L.jamarat.z + 6, n: 'الجمرة الصغرى' }];
  for (const j of J) {
    b.cyl(4.3, 4.3, 0.12, 0xb8b0a0, j.x, 0.06, j.z, 22); b.torus(4.3, 0.4, C.STONE, j.x, 0.36, j.z, Math.PI / 2, 22);
    b.box(1.4, 6.4, 5.4, 0x8f8578, j.x, 3.2, j.z); b.box(1.8, 0.4, 5.8, 0x7a7064, j.x, 6.6, j.z);
    addLabel(g, j.n, j.x, 8.5, j.z, { scale: 1.1 });
    world.colliders.push({ x: j.x, z: j.z, r: 4.75 });
  }

  // ── Arafat & Jabal ar-Rahmah
  const R = L.rahmah, ry0 = R.h - h;
  b.box(1.3, 5, 1.3, C.WHITE, R.x, ry0 + 2.5, R.z); b.box(1.7, 0.4, 1.7, C.STONE, R.x, ry0 + 0.2, R.z);
  world.colliders.push({ x: R.x, z: R.z, r: 1.0 });
  { const rnd = mulberry32(77);
    for (let i = 0; i < 26; i++) {
      const a = rnd() * 6.283, r = 5 + rnd() * 13, rx = R.x + Math.cos(a) * r, rz = R.z + Math.sin(a) * r, s = 0.6 + rnd() * 1.3;
      b.add(new THREE.IcosahedronGeometry(1, 0), i % 2 ? 0x9a8c7c : 0x857767, rx, world.heightAt(rx, rz) - h + s * 0.2, rz, rnd() * 3, rnd() * 3, 0, s, s * 0.6, s);
    } }
  addLabel(g, 'جبل الرحمة', R.x, ry0 + 7.4, R.z, { scale: 1.3 });
  const AS = { x: L.arafat.x + 12, z: L.arafat.z + 12 };
  b.cyl(0.12, 0.14, 4.4, 0x777777, AS.x - 2, 2.2, AS.z, 6); b.cyl(0.12, 0.14, 4.4, 0x777777, AS.x + 2, 2.2, AS.z, 6);
  b.box(5.4, 2, 0.2, 0xf2cf3a, AS.x, 4.6, AS.z);
  addLabel(g, 'عرفة', AS.x, 4.6, AS.z + 0.3, { scale: 1.5, plain: true, color: '#1d1d1d', shadow: 'rgba(255,255,255,.2)', size: 60 });
  world.colliders.push({ x: AS.x - 2, z: AS.z, r: 0.3 }, { x: AS.x + 2, z: AS.z, r: 0.3 });

  // ── Muzdalifah
  const MZ = L.muzdalifah;
  b.cyl(0.1, 0.13, 3.6, C.WOOD, MZ.x + 9, 1.8, MZ.z - 9, 6);
  addLabel(g, 'مزدلفة', MZ.x + 9, 4.6, MZ.z - 9, { scale: 1.4 });
  world.colliders.push({ x: MZ.x + 9, z: MZ.z - 9, r: 0.3 });

  // ── desert rocks & pebbles
  { const rnd = mulberry32(4242), rocks = [];
    const keys = [K, SF, MW, MQ, L.mina, L.jamarat, L.arafat, MZ, R];
    for (let t = 0; t < 4000 && rocks.length < 150; t++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 100, x = L.hajj.x + Math.cos(a) * r, z = L.hajj.z + Math.sin(a) * r;
      if (keys.some((k) => Math.hypot(k.x - x, k.z - z) < 30) || pathDist(x, z) < 6) continue;
      if (distToSeg(x, z, SF.x, SF.z, MW.x, MW.z) < 9) continue;
      const y = world.heightAt(x, z); if (y < 1) continue;
      const s = 0.3 + rnd() * rnd() * 2.2, v = 0.55 + rnd() * 0.2;
      rocks.push({ x, y: y - h + s * 0.15, z, rx: rnd() * 3, ry: rnd() * 6, sx: s, sy: s * 0.6, sz: s * (0.8 + rnd() * 0.5), color: new THREE.Color(v, v * 0.9, v * 0.78).getHex() });
      if (s > 1.3) world.colliders.push({ x, z, r: s * 0.8 });
    }
    for (let i = 0; i < 120; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 15, s = 0.06 + rnd() * 0.1;
      rocks.push({ x: MZ.x + Math.cos(a) * r, y: s * 0.3, z: MZ.z + Math.sin(a) * r, rx: rnd() * 3, ry: rnd() * 6, sx: s, sy: s * 0.7, sz: s, color: 0x9a9088 });
    }
    g.add(instanced(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), rocks));
  }

  g.add(b.mesh(MAT.flat), sm.mesh(MAT.smooth), db.mesh(MAT.double));
  const glm = gl.mesh(glowMat(1), false); world.night(glm.material, 0.4, 2.8); g.add(glm);
  const ggm = gg.mesh(glowMat(1), false); world.night(ggm.material, 1.3, 2.8); g.add(ggm);
  world.scene.add(g);

  world.P.hajj = {
    kaaba: K, tawafStart: { x: K.x + 13, z: K.z }, miqat: { x: MQ.x - 5, z: MQ.z },
    safa: { x: SF.x, z: SF.z - 1.5 }, marwa: { x: MW.x, z: MW.z + 1.5 },
    mina: { x: L.mina.x, z: L.mina.z }, arafat: { x: L.arafat.x, z: L.arafat.z }, muzdalifah: { x: MZ.x, z: MZ.z },
    jamarat: J[0], throwSpot: { x: J[0].x - 11, z: J[0].z },
  };
  STAGE_SITES.hajj = { x: MQ.x + 9, z: MQ.z };
}
