import * as THREE from 'three';
import { Builder, MAT, glowMat, tileTexture, carpetTexture, glowTexture } from '../core/builder.js';
import { makeLabel, makeBeam } from '../engine/fx.js';
import { lerp, toAr } from '../core/utils.js';
import { L, STAGE_SITES, IMAN_IDS } from './layout.js';

export const C = {
  GOLD: 0xe2b04a, CREAM: 0xf3ead6, CREAM2: 0xe6d8ba, STONE: 0xd9cdb4, STONE2: 0xc4b698, TEAL: 0x24a39a,
  WARM: 0xffcf7a, WHITE: 0xf4f1e8, WOOD: 0x8a5a33, DARK: 0x3a2f2a, RED: 0xc9553d, BLUE: 0x2f6fb5, GREEN: 0x3f9a4a,
};

/** rotate local (lx,lz) by yaw th (same convention as Object3D.rotation.y) */
export function rot2(lx, lz, th) {
  return [lx * Math.cos(th) + lz * Math.sin(th), -lx * Math.sin(th) + lz * Math.cos(th)];
}

export function finial(b, x, y, z, s = 1) {
  b.cyl(0.05 * s, 0.07 * s, 1.2 * s, C.GOLD, x, y + 0.6 * s, z, 6);
  b.sphere(0.17 * s, C.GOLD, x, y + 0.45 * s, z, 1, 1, 1, 8, 6);
  b.sphere(0.11 * s, C.GOLD, x, y + 0.82 * s, z, 1, 1, 1, 8, 6);
  b.torus(0.3 * s, 0.065 * s, C.GOLD, x, y + 1.45 * s, z, 0, 14, Math.PI * 1.4, 0, Math.PI * 0.8);
}

export function minaret(b, gl, x, y, z, H = 22, s = 1, cap = C.TEAL) {
  b.box(2.6 * s, 4 * s, 2.6 * s, C.STONE, x, y + 2 * s, z);
  b.cyl(1.05 * s, 1.22 * s, H * 0.55, C.CREAM, x, y + 4 * s + H * 0.275, z, 8);
  const y1 = y + 4 * s + H * 0.55;
  b.cyl(1.8 * s, 1.15 * s, 0.7 * s, C.STONE2, x, y1 + 0.35 * s, z, 8);
  b.torus(1.75 * s, 0.09 * s, C.GOLD, x, y1 + 1.25 * s, z, Math.PI / 2, 8);
  b.cyl(0.8 * s, 0.92 * s, H * 0.25, C.CREAM, x, y1 + 0.7 * s + H * 0.125, z, 8);
  gl.cyl(0.86 * s, 0.86 * s, 1.0 * s, C.WARM, x, y1 + 0.7 * s + H * 0.17, z, 8);
  const y2 = y1 + 0.7 * s + H * 0.25;
  b.cyl(1.25 * s, 0.8 * s, 0.5 * s, C.STONE2, x, y2 + 0.25 * s, z, 8);
  b.cone(1.0 * s, 3.2 * s, cap, x, y2 + 0.5 * s + 1.6 * s, z, 8);
  finial(b, x, y2 + 3.5 * s, z, 0.8 * s);
}

export function addLabel(parent, text, x, y, z, o = {}) {
  const l = makeLabel(text, o);
  l.position.set(x, y, z);
  parent.add(l);
  return l;
}

function halo(color, size) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  s.scale.setScalar(size);
  return s;
}

// ═════════════════════════ Plaza of the Pillars ═════════════════════════
export function buildMonument(world) {
  const H = L.plaza.h;
  const g = new THREE.Group();
  g.position.set(L.plaza.x, H, L.plaza.z);
  const b = new Builder(), sm = new Builder();
  b.cyl(21, 21.4, 0.36, C.STONE, 0, 0.18, 0, 56);
  b.cyl(19.5, 19.8, 0.36, C.CREAM2, 0, 0.54, 0, 56);
  b.cyl(18, 18.3, 0.36, C.WHITE, 0, 0.9, 0, 56);
  world.platforms.push({ x: 0, z: 0, r: 21.2, y: H + 0.36 }, { x: 0, z: 0, r: 19.6, y: H + 0.72 }, { x: 0, z: 0, r: 18.1, y: H + 1.08 });
  const FY = 1.08;
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(17.9, 64).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: tileTexture('#efe6d0', '#1f8a8a', '#e2b04a', '#b8944a', [8, 8]), roughness: 0.55 })
  );
  floor.position.y = FY + 0.012; floor.receiveShadow = true;
  g.add(floor);

  const NAMES = ['الشهادتان', 'الصلاة', 'الزكاة', 'الصوم', 'الحج'];
  const columns = [];
  const R = 12;
  const grey = new THREE.Color(0x8d8d96), white = new THREE.Color(0xf7f3e8);
  const bandOff = new THREE.Color(0x6e6a62), bandOn = new THREE.Color(0xf0bd4f);
  for (let i = 0; i < 5; i++) {
    const be = (i / 5) * Math.PI * 2;
    const x = Math.sin(be) * R, z = -Math.cos(be) * R;
    b.box(2.5, 0.7, 2.5, C.STONE, x, FY + 0.35, z, -be);
    b.cyl(1.5, 0.95, 1.1, C.STONE, x, FY + 11.75, z, 12);
    b.box(2.8, 0.5, 2.8, C.CREAM2, x, FY + 12.55, z, -be);
    const shaftMat = new THREE.MeshStandardMaterial({ color: grey.clone(), roughness: 0.6 });
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.97, 10.5, 20), shaftMat);
    shaft.position.set(x, FY + 5.95, z); shaft.castShadow = shaft.receiveShadow = true;
    const bandMat = new THREE.MeshStandardMaterial({ color: bandOff.clone(), roughness: 0.4, metalness: 0.3, emissive: 0x000000 });
    for (const [by, br] of [[1.7, 1.02], [10.3, 0.93], [6, 0.97]]) {
      const band = new THREE.Mesh(new THREE.TorusGeometry(br, 0.11, 8, 24).rotateX(Math.PI / 2), bandMat);
      band.position.set(x, FY + by, z); g.add(band);
    }
    const label = makeLabel(`${toAr(i + 1)} · ${NAMES[i]}`, { scale: 1.5, size: 46 });
    label.position.set(Math.sin(be) * (R + 2.3), FY + 4.4, -Math.cos(be) * (R + 2.3));
    const beam = makeBeam(0xffe08a, 120, 1.3); beam.position.set(x, FY + 12.8, z); beam.visible = false;
    const flame = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.8, 0.8), toneMapped: false }));
    flame.position.set(x, FY + 13.6, z); flame.visible = false;
    const fh = halo(0xffc766, 6); fh.position.copy(flame.position); fh.visible = false;
    g.add(shaft, label, beam, flame, fh);
    columns.push({ shaftMat, bandMat, label, beam, flame, fh, k: 0, target: 0 });
    world.colliders.push({ x: L.plaza.x + x, z: L.plaza.z + z, r: 1.6 });
  }
  b.torus(R, 1.05, C.CREAM2, 0, FY + 13.75, 0, Math.PI / 2, 48);
  b.torus(R + 0.95, 0.16, C.GOLD, 0, FY + 14.15, 0, Math.PI / 2, 48);
  b.torus(R - 0.95, 0.16, C.GOLD, 0, FY + 14.15, 0, Math.PI / 2, 48);
  // central light
  b.cyl(1.5, 1.9, 0.8, C.STONE, 0, FY + 0.4, 0, 8);
  b.cyl(1.0, 1.25, 0.3, C.GOLD, 0, FY + 0.95, 0, 8);
  world.colliders.push({ x: L.plaza.x, z: L.plaza.z, r: 2.1 });
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 1.2, 0.6), toneMapped: false }));
  crystal.position.y = FY + 2.6;
  const ch = halo(0xffd27a, 5); ch.position.y = FY + 2.6;
  g.add(crystal, ch);

  // dome (ghost until the five pillars are complete)
  const domeMat = new THREE.MeshStandardMaterial({ color: 0x1f9a94, roughness: 0.42, metalness: 0.1, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(12.3, 48, 18, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  dome.scale.y = 0.8; dome.position.y = FY + 14.4;
  g.add(dome);
  const fb = new Builder(); finial(fb, 0, FY + 14.4 + 12.3 * 0.8 - 0.2, 0, 2.2);
  const fin = fb.mesh(MAT.gold, false); fin.visible = false; g.add(fin);
  const topBeam = makeBeam(0xfff2c0, 160, 2.2); topBeam.position.y = FY + 26; topBeam.visible = false; g.add(topBeam);

  // steles
  for (const [sx, txt] of [[-9, 'أركان الإسلام خمسة\n«بُنِيَ الإسلامُ على خمس»'], [9, 'أركان الإيمان ستة\nنتعلّمها في حديقة الإيمان']]) {
    b.box(5.2, 2.9, 0.6, C.CREAM2, sx, 1.45, 26.5); b.box(5.6, 0.35, 0.9, C.GOLD, sx, 3.05, 26.5); b.box(5.6, 0.4, 0.9, C.STONE2, sx, 0.2, 26.5);
    addLabel(g, txt, sx, 1.75, 26.9, { scale: 0.62, size: 40, plain: true, color: '#5a3d0c', shadow: 'rgba(255,255,255,.5)' });
    world.colliders.push({ x: L.plaza.x + sx, z: L.plaza.z + 26.5, hw: 2.8, hd: 0.5, rot: 0 });
  }

  // six lanterns of faith
  const INAMES = ['الإيمان بالله', 'الملائكة', 'الكتب', 'الرسل', 'اليوم الآخر', 'القدر'];
  const lanterns = [];
  for (let i = 0; i < 6; i++) {
    const be = (i / 6) * Math.PI * 2 + Math.PI / 6;
    const x = Math.sin(be) * 25.5, z = -Math.cos(be) * 25.5;
    b.cyl(0.5, 0.55, 0.25, C.STONE2, x, 0.12, z, 8);
    b.cyl(0.13, 0.2, 4.3, C.DARK, x, 2.3, z, 8);
    b.cyl(0.36, 0.3, 0.1, C.GOLD, x, 4.45, z, 6);
    b.cone(0.44, 0.55, C.GOLD, x, 5.45, z, 6);
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.16, 0.14, 0.12), toneMapped: false });
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 6), mat);
    glass.position.set(x, 4.85, z);
    const hl = halo(0xffc766, 4.5); hl.position.set(x, 4.85, z); hl.visible = false;
    const label = makeLabel(INAMES[i], { scale: 0.95 });
    label.position.set(x, 6.6, z); label.material.opacity = 0.4;
    g.add(glass, hl, label);
    lanterns.push({ mat, hl, label, k: 0, target: 0 });
    world.colliders.push({ x: L.plaza.x + x, z: L.plaza.z + z, r: 0.5 });
  }

  g.add(b.mesh(MAT.flat), sm.empty ? new THREE.Group() : sm.mesh(MAT.smooth));
  world.scene.add(g);

  const dim = new THREE.Color(0.16, 0.14, 0.12), lit = new THREE.Color(2.6, 1.9, 0.9);
  const mon = {
    group: g, allIslam: 0, allDone: 0, _ai: 0, _ad: 0,
    setProgress(islam, iman) {
      columns.forEach((c, i) => (c.target = islam[i] ? 1 : 0));
      lanterns.forEach((l, i) => (l.target = iman[i] ? 1 : 0));
      this.allIslam = islam.every(Boolean) ? 1 : 0;
      this.allDone = this.allIslam && iman.every(Boolean) ? 1 : 0;
    },
    update(dt, t) {
      for (const c of columns) {
        c.k = lerp(c.k, c.target, 1 - Math.exp(-1.6 * dt));
        c.shaftMat.color.lerpColors(grey, white, c.k);
        c.bandMat.color.lerpColors(bandOff, bandOn, c.k);
        c.bandMat.emissive.setRGB(0.5 * c.k, 0.32 * c.k, 0.05 * c.k);
        c.label.material.opacity = 0.45 + 0.55 * c.k;
        const on = c.k > 0.03;
        c.beam.visible = c.flame.visible = c.fh.visible = on;
        if (on) {
          c.beam.material.uniforms.uAlpha.value = c.k * 0.8;
          c.flame.scale.setScalar(c.k * (1 + Math.sin(t * 5 + c.beam.position.x) * 0.08));
          c.flame.rotation.y = t;
        }
      }
      for (const l of lanterns) {
        l.k = lerp(l.k, l.target, 1 - Math.exp(-1.6 * dt));
        l.mat.color.lerpColors(dim, lit, l.k);
        l.hl.visible = l.k > 0.05; l.hl.material.opacity = l.k;
        l.label.material.opacity = 0.4 + 0.6 * l.k;
      }
      this._ai = lerp(this._ai, this.allIslam, 1 - Math.exp(-0.8 * dt));
      this._ad = lerp(this._ad, this.allDone, 1 - Math.exp(-0.8 * dt));
      const solid = this._ai > 0.97;
      domeMat.opacity = 0.12 + 0.88 * this._ai;
      if (domeMat.depthWrite !== solid) { domeMat.depthWrite = solid; domeMat.transparent = !solid; domeMat.needsUpdate = true; }
      fin.visible = this._ai > 0.5;
      topBeam.visible = this._ad > 0.03; topBeam.material.uniforms.uAlpha.value = this._ad;
      crystal.rotation.y = t * 0.8; crystal.position.y = FY + 2.6 + Math.sin(t * 1.4) * 0.18;
      const done = columns.reduce((a, c) => a + c.k, 0) + lanterns.reduce((a, l) => a + l.k, 0);
      crystal.scale.setScalar(0.8 + done * 0.08); ch.scale.setScalar(4 + done * 0.6);
    },
  };
  return mon;
}

// ═════════════════════════ Summit of Tawheed ═════════════════════════
export function buildPeak(world) {
  const { x, z, h } = L.shahada;
  const g = new THREE.Group();
  const tz = -8.5;
  g.position.set(x, h, z + tz);
  const b = new Builder(), sm = new Builder();
  b.cyl(3.3, 3.7, 1.6, C.STONE, 0, 0.8, 0, 8);
  b.cyl(1.75, 2.5, 13, C.CREAM, 0, 8.1, 0, 10);
  b.torus(2.42, 0.14, C.GOLD, 0, 2.6, 0, Math.PI / 2, 10); b.torus(1.86, 0.14, C.GOLD, 0, 13.6, 0, Math.PI / 2, 10);
  b.cyl(2.7, 1.8, 0.6, C.STONE2, 0, 14.9, 0, 10);
  b.torus(2.6, 0.08, C.GOLD, 0, 16.1, 0, Math.PI / 2, 10);
  for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; b.cyl(0.05, 0.05, 0.9, C.GOLD, Math.cos(a) * 2.6, 15.65, Math.sin(a) * 2.6, 4); }
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; b.box(0.14, 2.5, 0.14, C.STONE2, Math.cos(a) * 1.3, 16.45, Math.sin(a) * 1.3); }
  b.cyl(1.6, 1.5, 0.3, C.STONE2, 0, 17.8, 0, 10);
  sm.dome(1.75, C.TEAL, 0, 17.9, 0, 1.05, 16);
  finial(b, 0, 19.6, 0, 0.9);
  b.arch(1.5, 2.2, C.DARK, 0, 1.6, 2.42);
  const glassMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.3, 0.26, 0.2), toneMapped: false });
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.3, 6), glassMat);
  glass.position.y = 16.5;
  const hl = halo(0xffe2a0, 14); hl.position.y = 16.5; hl.visible = false;
  const beam = makeBeam(0xfff0b0, 140, 1.5); beam.position.y = 20; beam.visible = false;
  const text = makeLabel('لا إله إلا الله\nمحمد رسول الله', { quran: true, plain: true, size: 90, weight: 700, color: '#ffe9a6', shadow: 'rgba(255,170,40,.9)', scale: 3.2 });
  text.position.y = 30; text.visible = false;
  // summit decor: low stone ring + benches
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    if (Math.abs(a - Math.PI / 2) < 0.5) continue;
    b.box(2.6, 0.7, 0.7, C.STONE2, Math.cos(a) * 13.5, 0.35, Math.sin(a) * 13.5 - tz, -a + Math.PI / 2);
  }
  addLabel(g, 'قمة التوحيد', 0, 4.2, 9.5 - tz - 9.5 + 3.4, { scale: 1.1 });
  g.add(b.mesh(MAT.flat), sm.mesh(MAT.smooth), glass, hl, beam, text);
  world.scene.add(g);
  world.colliders.push({ x, z: z + tz, r: 3.9 });
  const st = { k: 0, target: 0 };
  const dim = new THREE.Color(0.3, 0.26, 0.2), lit = new THREE.Color(3, 2.4, 1.3);
  return {
    group: g, towerPos: new THREE.Vector3(x, h, z + tz),
    setLit(on) { st.target = on ? 1 : 0; },
    update(dt, t) {
      st.k = lerp(st.k, st.target, 1 - Math.exp(-1.2 * dt));
      glassMat.color.lerpColors(dim, lit, st.k);
      const on = st.k > 0.03;
      hl.visible = beam.visible = text.visible = on;
      hl.material.opacity = st.k; beam.material.uniforms.uAlpha.value = st.k;
      text.material.opacity = st.k; text.position.y = 29 + Math.sin(t * 0.8) * 0.5;
    },
  };
}

// ═════════════════════════ Mosque village ═════════════════════════
export function buildMosque(world) {
  const { x, z, h } = L.salah;
  const th = Math.atan2(-(L.kaaba.x - x), -(L.kaaba.z - z)); // back wall (mihrab) faces the Kaaba
  const g = new THREE.Group();
  g.position.set(x, h, z); g.rotation.y = th;
  const W = (lx, lz) => { const [dx, dz] = rot2(lx, lz, th); return { x: x + dx, z: z + dz }; };
  const b = new Builder(), sm = new Builder(), gl = new Builder();
  const DOME = 0x2a9d8f;
  b.box(28, 0.5, 18, C.STONE, 0, 0.25, -10);
  b.box(26, 9, 16, C.CREAM, 0, 5, -10);
  b.box(26.6, 0.5, 16.6, C.STONE2, 0, 9.6, -10);
  for (let i = 0; i < 13; i++) b.box(1, 0.7, 0.4, C.CREAM2, -12 + i * 2, 10.2, -2.0);
  for (let i = 0; i < 8; i++) { b.box(0.4, 0.7, 1, C.CREAM2, -13, 10.2, -17 + i * 2); b.box(0.4, 0.7, 1, C.CREAM2, 13, 10.2, -17 + i * 2); }
  sm.cyl(6.2, 6.4, 1.9, C.CREAM, 0, 10.6, -10, 24);
  b.torus(6.35, 0.16, C.GOLD, 0, 11.5, -10, Math.PI / 2, 24);
  sm.dome(6.4, DOME, 0, 11.5, -10, 1.02, 30);
  finial(b, 0, 17.9, -10, 1.4);
  for (const [dx, dz] of [[-10.5, -4.5], [10.5, -4.5], [-10.5, -15.5], [10.5, -15.5]]) {
    sm.cyl(1.9, 1.9, 0.6, C.CREAM, dx, 10.1, dz, 14); sm.dome(1.95, DOME, dx, 10.4, dz, 1, 14); finial(b, dx, 12.2, dz, 0.5);
  }
  // portal
  b.box(7.2, 10.8, 1.3, C.CREAM2, 0, 5.4, -1.5);
  b.box(7.8, 0.5, 1.6, C.GOLD, 0, 11, -1.5);
  b.arch(4.1, 5.6, C.GOLD, 0, 0.5, -0.86, 0, 0.08);
  b.arch(3.6, 5.4, 0x2a2018, 0, 0.5, -0.82, 0, 0.1);
  b.box(3.2, 4.4, 0.1, C.WOOD, 0, 2.7, -0.76);
  b.box(0.08, 4.4, 0.12, 0x5e3b1e, 0, 2.7, -0.74);
  for (const wx of [-11, -8, -5, 5, 8, 11]) gl.arch(1.5, 2.6, C.WARM, wx, 2.4, -1.94);
  for (const wz of [-5, -8.5, -12, -15.5]) { gl.arch(1.5, 2.6, C.WARM, 13.04, 2.4, wz, Math.PI / 2); gl.arch(1.5, 2.6, C.WARM, -13.04, 2.4, wz, -Math.PI / 2); }
  // mihrab niche (qibla side)
  sm.cyl(1.8, 1.8, 6, C.CREAM2, 0, 3.5, -18, 12); sm.dome(1.8, DOME, 0, 6.5, -18, 0.8, 12);
  minaret(b, gl, -15.6, 0, -3, 22, 1, DOME);
  minaret(b, gl, 15.6, 0, -3, 22, 1, DOME);
  // courtyard
  const court = new THREE.Mesh(new THREE.PlaneGeometry(36, 32).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: tileTexture('#f1e9d6', '#2a9d8f', '#e2b04a', '#b8944a', [9, 8]), roughness: 0.6 }));
  court.position.set(0, 0.07, 16); court.receiveShadow = true;
  g.add(court);
  for (const sx of [-18.4, 18.4]) {
    for (let i = 0; i < 6; i++) {
      const cz = 2 + i * 5.6;
      b.cyl(0.32, 0.38, 3.4, C.CREAM, sx, 1.7, cz, 8); b.box(0.9, 0.3, 0.9, C.STONE2, sx, 3.5, cz);
      gl.sphere(0.3, C.WARM, sx, 4.0, cz, 1, 1.2, 1, 8, 6);
      const p = W(sx, cz); world.colliders.push({ x: p.x, z: p.z, r: 0.5 });
    }
    b.box(0.5, 0.8, 30, C.STONE, sx, 0.4, 16);
  }
  // wudu fountain
  const fx = -12.5, fz = 6.5;
  b.cyl(2.3, 2.5, 0.75, C.STONE, fx, 0.37, fz, 8);
  b.cyl(0.3, 0.42, 1.7, C.CREAM2, fx, 0.85, fz, 8); b.cyl(1.0, 0.3, 0.3, C.CREAM2, fx, 1.8, fz, 10);
  sm.dome(0.35, C.GOLD, fx, 1.95, fz, 1, 8);
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; b.box(0.1, 0.18, 0.3, C.GOLD, fx + Math.cos(a) * 2.35, 0.62, fz + Math.sin(a) * 2.35, -a + Math.PI / 2); b.cyl(0.22, 0.25, 0.36, C.WOOD, fx + Math.cos(a) * 3.1, 0.18, fz + Math.sin(a) * 3.1, 8); }
  const water = new THREE.Mesh(new THREE.CircleGeometry(2.1, 24).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x45bfe0, roughness: 0.12, metalness: 0.1, transparent: true, opacity: 0.85 }));
  water.position.set(fx, 0.66, fz); g.add(water);

  g.add(b.mesh(MAT.flat), sm.mesh(MAT.smooth));
  const glm = gl.mesh(glowMat(1), false); world.night(glm.material, 0.35, 2.6); g.add(glm);
  world.scene.add(g);

  world.colliders.push({ ...W(0, -10), hw: 13.4, hd: 8.4, rot: th }, { ...W(0, -1.5), hw: 3.7, hd: 0.9, rot: th }, { ...W(0, -18.6), r: 2.0 });
  world.colliders.push({ ...W(-15.6, -3), r: 1.8 }, { ...W(15.6, -3), r: 1.8 }, { ...W(fx, fz), r: 2.75 });
  for (const sx of [-18.4, 18.4]) world.colliders.push({ ...W(sx, 16), hw: 0.3, hd: 15, rot: th });

  const fw = W(fx, fz);
  world.updaters.push((dt, t) => {
    if (world.near(fw.x, fw.z, 70) && Math.random() < 0.5) {
      const a = Math.random() * 6.28;
      world.particles.emit(fw.x, h + 2.0, fw.z, Math.cos(a) * 1.1, 2.2 + Math.random(), Math.sin(a) * 1.1, 0x9fe6ff, 0.9, 0.16, 7);
    }
  });
  world.P.salah = { court: W(0, 17), fountain: W(fx + 4.2, fz + 1.5), fountainC: fw, yaw: th, qibla: th + Math.PI, W };
  STAGE_SITES.salah = W(0, 27);
}

// ═════════════════════════ Market of Goodness ═════════════════════════
function stallGeometry(colorA, goods) {
  const s = new Builder();
  for (const [px, pz] of [[-1.5, -0.9], [1.5, -0.9], [-1.5, 1.1], [1.5, 1.1]]) s.cyl(0.07, 0.07, 2.7, C.WOOD, px, 1.35, pz, 6);
  s.box(3.2, 0.9, 1.0, 0x9a6a3c, 0, 0.45, 0.3);
  s.box(3.35, 0.08, 1.15, 0xb98a55, 0, 0.94, 0.3);
  for (let k = 0; k < 6; k++) {
    s.add(new THREE.BoxGeometry(0.57, 0.06, 2.5), k % 2 ? 0xfaf3e0 : colorA, -1.4 + k * 0.56, 2.72, 0.15, 0.16, 0, 0);
    s.box(0.57, 0.32, 0.05, k % 2 ? colorA : 0xfaf3e0, -1.4 + k * 0.56, 2.36, 1.38);
  }
  for (let k = 0; k < 3; k++) {
    const bx = -1 + k;
    s.cyl(0.36, 0.28, 0.25, 0xc9a26b, bx, 1.1, 0.3, 8);
    for (let j = 0; j < 6; j++) s.sphere(0.12, goods[k], bx + Math.cos(j * 1.05) * 0.18, 1.27 + (j % 2) * 0.08, 0.3 + Math.sin(j * 1.05) * 0.18, 1, 1, 1, 6, 5);
  }
  s.sphere(0.42, 0xd9c7a0, -2.0, 0.33, 0.9, 1, 0.85, 1, 8, 6); s.sphere(0.36, 0xcdb88c, 2.0, 0.3, 0.7, 1, 0.85, 1, 8, 6);
  return s.geometry();
}

function houseGeometry(w, hh, d, color, dome) {
  const s = new Builder();
  s.box(w, hh, d, color, 0, hh / 2, 0);
  s.box(w + 0.35, 0.35, d + 0.35, C.STONE2, 0, hh + 0.17, 0);
  for (const [cx, cz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) s.box(0.55, 0.55, 0.55, color, cx * (w / 2 - 0.2), hh + 0.6, cz * (d / 2 - 0.2));
  s.arch(1.2, 2.1, C.WOOD, 0, 0, d / 2 + 0.04);
  s.add(new THREE.BoxGeometry(1.9, 0.1, 1.0), 0x9b4d3a, 0, 3.0, d / 2 + 0.45, 0.25, 0, 0);
  if (dome) s.dome(Math.min(w, d) * 0.3, 0xf6efe0, 0, hh + 0.3, 0, 0.9, 12);
  return s.geometry();
}

export function buildMarket(world) {
  const { x, z, h } = L.zakat;
  const g = new THREE.Group(); g.position.set(x, h, z);
  const b = new Builder(), sm = new Builder(), gl = new Builder();
  const stallColors = [0xc9553d, 0x2f8fb5, 0x3f9a4a, 0xd9952e, 0x8a4fb0, 0xc94f7a];
  const goods = [[0xff9a3c, 0xd94a3a, 0x7ac74f], [0x6b3f1d, 0xf2d15c, 0xe8e2d0], [0xd94a3a, 0xf2d15c, 0x7ac74f], [0xffb14a, 0x8a4f2a, 0xc9d65a], [0xe8e2d0, 0xb5651d, 0xff9a3c], [0x7ac74f, 0xd94a3a, 0xf2d15c]];
  for (let i = 0; i < 6; i++) {
    const be = ((30 + i * 60) * Math.PI) / 180;
    const sx = Math.sin(be) * 15.5, sz = -Math.cos(be) * 15.5;
    const ry = Math.atan2(-sx, -sz);
    b.merge(stallGeometry(stallColors[i], goods[i]), sx, 0, sz, ry);
    world.colliders.push({ x: x + sx, z: z + sz, hw: 1.8, hd: 1.3, rot: ry });
    const [lx, lz] = rot2(1.6, 1.4, ry); gl.sphere(0.2, C.WARM, sx + lx, 2.25, sz + lz, 1, 1.3, 1, 6, 5);
    const [lx2, lz2] = rot2(-1.6, 1.4, ry); gl.sphere(0.2, 0xff9a6a, sx + lx2, 2.25, sz + lz2, 1, 1.3, 1, 6, 5);
  }
  // well
  b.cyl(1.35, 1.45, 0.9, C.STONE2, 0, 0.45, 0, 10); b.cyl(1.05, 1.05, 0.05, 0x3a90b8, 0, 0.8, 0, 10);
  b.cyl(0.09, 0.09, 2.6, C.WOOD, -1.2, 1.3, 0, 6); b.cyl(0.09, 0.09, 2.6, C.WOOD, 1.2, 1.3, 0, 6);
  b.add(new THREE.CylinderGeometry(0.07, 0.07, 2.6, 6), C.WOOD, 0, 2.5, 0, 0, 0, Math.PI / 2);
  b.add(new THREE.ConeGeometry(1.9, 0.9, 4), 0x9b4d3a, 0, 3.05, 0, 0, Math.PI / 4, 0);
  world.colliders.push({ x, z, r: 1.7 });
  // bayt az-zakat
  const zx = 0, zz = -27;
  b.box(9, 5, 7, C.CREAM, zx, 2.5, zz); b.box(9.5, 0.4, 7.5, C.STONE2, zx, 5.2, zz);
  sm.dome(2.4, 0x2f8fb5, zx, 5.4, zz, 0.9, 16); finial(b, zx, 7.4, zz, 0.6);
  b.arch(2.0, 2.6, 0x2a2018, zx, 0, zz + 3.53); b.arch(2.4, 2.8, C.GOLD, zx, 0, zz + 3.5, 0, 0.06);
  gl.arch(1.1, 1.5, C.WARM, zx - 3, 1.8, zz + 3.53); gl.arch(1.1, 1.5, C.WARM, zx + 3, 1.8, zz + 3.53);
  addLabel(g, 'بيت الزكاة', zx, 6.1, zz + 4.2, { scale: 1.15 });
  world.colliders.push({ x: x + zx, z: z + zz, hw: 4.7, hd: 3.7, rot: 0 });
  const tx = 0, tz = -20.6;
  b.box(3.0, 0.85, 1.1, C.WOOD, tx, 0.42, tz); b.box(3.2, 0.08, 1.25, 0xb98a55, tx, 0.88, tz);
  for (let i = 0; i < 4; i++) { b.sphere(0.3, 0xd9c7a0, tx - 1.05 + i * 0.7, 1.16, tz, 1, 1.05, 1, 8, 6); b.torus(0.12, 0.04, C.GOLD, tx - 1.05 + i * 0.7, 1.43, tz, Math.PI / 2, 8); }
  world.colliders.push({ x: x + tx, z: z + tz, hw: 1.6, hd: 0.65, rot: 0 });
  // houses
  const hc = [0xe8d5b0, 0xdcc49a, 0xf0e2c4, 0xd4b88a, 0xe6cfa6, 0xefd9b8, 0xd9c2a0];
  const bearings = [58, 100, 142, 182, 222, 262, 300];
  const npcSpots = [];
  bearings.forEach((deg, i) => {
    const be = (deg * Math.PI) / 180, rr = 33 + (i % 2) * 2.5;
    const hx = Math.sin(be) * rr, hz = -Math.cos(be) * rr;
    const ry = Math.atan2(-hx, -hz);
    const w = 6.5 + (i % 3), hh = 4.2 + (i % 2) * 1.2, d = 5.5 + ((i + 1) % 2);
    b.merge(houseGeometry(w, hh, d, hc[i], i % 3 === 0), hx, 0, hz, ry);
    for (const wx of [-w / 4 - 0.4, w / 4 + 0.4]) { const [lx, lz] = rot2(wx, d / 2 + 0.05, ry); gl.add(new THREE.BoxGeometry(0.95, 1.15, 0.1), C.WARM, hx + lx, 2.5, hz + lz, 0, ry, 0); }
    world.colliders.push({ x: x + hx, z: z + hz, hw: w / 2 + 0.2, hd: d / 2 + 0.2, rot: ry });
    const [nx, nz] = rot2(i % 2 ? 2.2 : -2.2, d / 2 + 2.4, ry);
    npcSpots.push({ x: x + hx + nx, z: z + hz + nz, yaw: ry });
  });
  // rugs & crates
  for (let i = 0; i < 5; i++) { const a = i * 1.26 + 0.4; b.box(2.2, 0.04, 1.4, [0x8c1c2c, 0x1c5a7a, 0x2d6a4f, 0xa8641e, 0x6b2d7a][i], Math.cos(a) * 8.5, 0.03, Math.sin(a) * 8.5, a); }
  g.add(b.mesh(MAT.flat), sm.mesh(MAT.smooth));
  const glm = gl.mesh(glowMat(1), false); world.night(glm.material, 0.35, 2.6); g.add(glm);
  world.scene.add(g);
  world.P.zakat = { center: { x, z }, house: { x: x + zx, z: z + zz + 6.5 }, table: { x: x + tx, z: z + tz + 1.6 }, tableC: { x: x + tx, z: z + tz }, npcSpots };
  STAGE_SITES.zakat = { x, z: z + 8 };
}

// ═════════════════════════ Ramadan oasis ═════════════════════════
export function buildOasis(world) {
  const { x, z, h } = L.sawm;
  const g = new THREE.Group(); g.position.set(0, h, 0);
  const b = new Builder(), gl = new Builder(), gl2 = new Builder();
  const A = STAGE_SITES.sawm, M = { x: -50, z: 166 };
  // tents
  for (const [tx, tz, col] of [[-88, 142, C.RED], [-70, 127, 0x2f6fb5], [-45, 143, 0x3f9a4a]]) {
    b.cyl(3.6, 3.6, 1.7, col, tx, 0.85, tz, 10);
    for (let k = 0; k < 10; k += 2) { const a = (k / 10) * Math.PI * 2 + 0.31; b.box(1.2, 1.7, 0.08, 0xf2e6cc, tx + Math.cos(a) * 3.47, 0.85, tz + Math.sin(a) * 3.47, -a + Math.PI / 2); }
    b.cone(4.1, 3.2, 0xf2e6cc, tx, 3.3, tz, 10); b.sphere(0.22, C.GOLD, tx, 5.0, tz);
    const ry = Math.atan2(A.x - tx, A.z - tz);
    const [dx, dz] = rot2(0, 3.5, ry); b.add(new THREE.BoxGeometry(1.5, 1.6, 0.25), C.DARK, tx + dx, 0.8, tz + dz, 0, ry, 0);
    world.colliders.push({ x: tx, z: tz, r: 3.9 });
  }
  // lantern poles around the arena
  const lc = [0xffb347, 0x7fe0a0, 0x7fc8ff, 0xff8fb8, 0xffe07a, 0xc9a0ff];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.2, px = A.x + Math.cos(a) * 18.5, pz = A.z + Math.sin(a) * 18.5;
    b.cyl(0.07, 0.1, 3.8, C.WOOD, px, 1.9, pz, 6); b.add(new THREE.BoxGeometry(0.9, 0.06, 0.06), C.WOOD, px, 3.75, pz, 0, -a, 0);
    const [ox, oz] = rot2(0.4, 0, -a);
    b.cone(0.17, 0.2, C.GOLD, px + ox, 3.52, pz + oz, 6); gl.cyl(0.14, 0.1, 0.3, lc[i % lc.length], px + ox, 3.28, pz + oz, 6);
    world.colliders.push({ x: px, z: pz, r: 0.3 });
  }
  // majlis (iftar spot)
  const carpet = new THREE.Mesh(new THREE.PlaneGeometry(9, 6.5).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: carpetTexture(), roughness: 0.95 }));
  carpet.position.set(M.x, 0.06, M.z); carpet.receiveShadow = true; g.add(carpet);
  b.box(2.6, 0.38, 1.3, C.WOOD, M.x, 0.25, M.z); b.box(2.8, 0.06, 1.45, 0xb98a55, M.x, 0.46, M.z);
  b.cyl(0.36, 0.22, 0.16, 0xe8e2d0, M.x - 0.6, 0.57, M.z, 10);
  for (let j = 0; j < 7; j++) b.sphere(0.075, 0x5a3418, M.x - 0.6 + Math.cos(j) * 0.16, 0.66 + (j % 2) * 0.05, M.z + Math.sin(j) * 0.16, 1, 0.8, 1.4, 6, 5);
  b.cyl(0.11, 0.16, 0.42, 0x8fc8e8, M.x + 0.4, 0.7, M.z + 0.1, 8); b.cyl(0.05, 0.08, 0.14, 0x8fc8e8, M.x + 0.4, 0.97, M.z + 0.1, 8);
  for (const [cx, cz] of [[0.85, -0.3], [0.9, 0.35], [0.1, -0.4]]) b.cyl(0.07, 0.05, 0.13, 0xe8e2d0, M.x + cx, 0.55, M.z + cz, 8);
  for (const [cx, cz, cc] of [[-2.6, -1.6, 0xc9553d], [2.6, -1.6, 0x2f6fb5], [-2.6, 1.6, 0x3f9a4a], [2.6, 1.6, 0xd9952e], [0, 2.3, 0x8a4fb0], [0, -2.3, 0xc94f7a]]) b.sphere(0.5, cc, M.x + cx, 0.2, M.z + cz, 1, 0.4, 1, 10, 6);
  world.colliders.push({ x: M.x, z: M.z, hw: 1.5, hd: 0.8, rot: 0 });
  // crescent sign
  b.cyl(0.1, 0.16, 7, C.WOOD, M.x + 7, 3.5, M.z + 3, 6);
  gl2.torus(0.9, 0.17, 0xffe07a, M.x + 7, 8.0, M.z + 3, 0, 18, Math.PI * 1.35, 0.4, Math.PI * 0.85);
  gl2.sphere(0.2, 0xffe07a, M.x + 7.25, 8.1, M.z + 3.1, 1, 1, 1, 6, 5);
  world.colliders.push({ x: M.x + 7, z: M.z + 3, r: 0.35 });
  // campfire
  const F = { x: M.x - 7, z: M.z - 1 };
  for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.283; b.sphere(0.24, 0x8a8278, F.x + Math.cos(a) * 0.75, 0.1, F.z + Math.sin(a) * 0.75, 1, 0.7, 1, 6, 5); }
  for (let i = 0; i < 3; i++) b.add(new THREE.CylinderGeometry(0.09, 0.09, 1.1, 6), 0x5a3a1e, F.x, 0.25, F.z, Math.PI / 2.4, i * 2.1, 0);
  world.colliders.push({ x: F.x, z: F.z, r: 0.95 });
  // reeds around the pond
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * 6.283 + Math.sin(i * 3.3) * 0.2, rr = 9.6 + Math.sin(i * 7.1) * 1.4;
    const rx = L.pond.x + Math.cos(a) * rr, rz = L.pond.z + Math.sin(a) * rr;
    const hh = 0.9 + ((i * 37) % 10) / 12;
    b.cyl(0.02, 0.04, hh, 0x5f9a3c, rx, world.heightAt(rx, rz) - h + hh / 2, rz, 4);
  }
  addLabel(g, 'واحة رمضان', A.x + 20, 4.6, A.z - 6, { scale: 1.1 });
  b.cyl(0.09, 0.12, 3.6, C.WOOD, A.x + 20, 1.8, A.z - 6, 6);

  g.add(b.mesh(MAT.flat));
  const glm = gl.mesh(glowMat(1), false); world.night(glm.material, 0.7, 3.0); g.add(glm);
  const glm2 = gl2.mesh(glowMat(1), false); world.night(glm2.material, 0.8, 2.6); g.add(glm2);
  world.scene.add(g);
  world.updaters.push(() => {
    if (!world.near(F.x, F.z, 90)) return;
    for (let i = 0; i < 2; i++) {
      world.particles.emit(F.x + (Math.random() - 0.5) * 0.5, h + 0.3, F.z + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5, 1.6 + Math.random() * 1.6, (Math.random() - 0.5) * 0.5, Math.random() < 0.5 ? 0xff8a2a : 0xffc04a, 0.7 + Math.random() * 0.5, 0.42, -0.6);
    }
  });
  world.P.sawm = { arena: { x: A.x, z: A.z }, majlis: { x: M.x, z: M.z + 2.6 }, majlisC: M, fire: F };
}

// ═════════════════════════ Garden of Faith ═════════════════════════
export const IMAN_COLORS = [0xffd45a, 0x8fd3ff, 0x7fe0a0, 0xffa25c, 0xc9a0ff, 0xff8fb8];
export function buildGarden(world) {
  const { x, z, h } = L.garden;
  const g = new THREE.Group(); g.position.set(x, h, z);
  const b = new Builder(), gl = new Builder();
  const floor = new THREE.Mesh(new THREE.CircleGeometry(16.5, 64).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map: tileTexture('#f3ecd9', '#3a7bd5', '#e2b04a', '#b8944a', [7, 7]), roughness: 0.6 }));
  floor.position.y = 0.06; floor.receiveShadow = true; g.add(floor);
  b.torus(16.7, 0.22, C.STONE2, 0, 0.1, 0, Math.PI / 2, 56);
  const NAMES = ['الإيمان بالله', 'الإيمان بالملائكة', 'الإيمان بالكتب', 'الإيمان بالرسل', 'الإيمان باليوم الآخر', 'الإيمان بالقدر'];
  IMAN_IDS.forEach((id, i) => {
    const a = STAGE_SITES[id].angle;
    const ax = Math.sin(a) * 27, az = Math.cos(a) * 27;
    const s = new Builder();
    s.box(1.2, 5.6, 1.2, C.CREAM, -2.7, 2.8, 0); s.box(1.2, 5.6, 1.2, C.CREAM, 2.7, 2.8, 0);
    s.box(1.6, 0.5, 1.6, C.STONE2, -2.7, 0.25, 0); s.box(1.6, 0.5, 1.6, C.STONE2, 2.7, 0.25, 0);
    s.box(1.5, 0.4, 1.5, IMAN_COLORS[i], -2.7, 5.8, 0); s.box(1.5, 0.4, 1.5, IMAN_COLORS[i], 2.7, 5.8, 0);
    s.torus(2.7, 0.55, C.CREAM2, 0, 6, 0, 0, 18, Math.PI);
    s.torus(2.7, 0.2, IMAN_COLORS[i], 0, 6, 0.5, 0, 18, Math.PI); s.torus(2.7, 0.2, IMAN_COLORS[i], 0, 6, -0.5, 0, 18, Math.PI);
    b.merge(s.geometry(), ax, 0, az, a);
    gl.sphere(0.4, IMAN_COLORS[i], ax, 9.4, az, 1, 1, 1, 8, 6);
    addLabel(g, `${toAr(i + 1)} · ${NAMES[i]}`, ax, 11, az, { scale: 1.15 });
    for (const sx of [-2.7, 2.7]) { const [dx, dz] = rot2(sx, 0, a); world.colliders.push({ x: x + ax + dx, z: z + az + dz, r: 0.9 }); }
    // bench between arches
    const a2 = a + Math.PI / 6;
    b.add(new THREE.BoxGeometry(3, 0.16, 0.8), C.WOOD, Math.sin(a2) * 23, 0.55, Math.cos(a2) * 23, 0, a2, 0);
    b.add(new THREE.BoxGeometry(3, 0.5, 0.14), C.WOOD, Math.sin(a2) * 23.4, 0.9, Math.cos(a2) * 23.4, 0, a2, 0);
    for (const sx of [-1.2, 1.2]) { const [dx, dz] = rot2(sx, 0, a2); b.box(0.14, 0.55, 0.7, C.DARK, Math.sin(a2) * 23 + dx, 0.27, Math.cos(a2) * 23 + dz, a2); }
    world.colliders.push({ x: x + Math.sin(a2) * 23, z: z + Math.cos(a2) * 23, hw: 1.6, hd: 0.5, rot: a2 });
  });
  // lamp posts + hedge ring
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.26, px = Math.sin(a) * 31, pz = Math.cos(a) * 31;
    b.cyl(0.09, 0.14, 3.6, C.DARK, px, 1.8, pz, 6); b.cone(0.34, 0.32, C.DARK, px, 4.2, pz, 6);
    gl.sphere(0.27, C.WARM, px, 3.82, pz, 1, 1.15, 1, 8, 6);
    world.colliders.push({ x: x + px, z: z + pz, r: 0.3 });
  }
  const pathA = Math.atan2(L.plaza.x - x, L.plaza.z - z);
  const hedge = new Builder();
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2;
    const dPath = Math.abs(((a - pathA + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
    let skip = dPath < 0.2;
    for (const id of IMAN_IDS) { const d = Math.abs(((a - STAGE_SITES[id].angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI); if (d < 0.14) skip = true; }
    if (skip) continue;
    hedge.add(new THREE.BoxGeometry(3.3, 1.15, 1.0), i % 2 ? 0x3f8f43 : 0x4a9f4c, Math.sin(a) * 36.5, 0.55, Math.cos(a) * 36.5, 0, a, 0);
    world.colliders.push({ x: x + Math.sin(a) * 36.5, z: z + Math.cos(a) * 36.5, r: 1.35 });
  }
  g.add(hedge.mesh(MAT.flat));
  addLabel(g, 'حديقة الإيمان', Math.sin(pathA) * 40, 4.4, Math.cos(pathA) * 40, { scale: 1.2 });
  b.cyl(0.1, 0.13, 3.4, C.WOOD, Math.sin(pathA) * 40, 1.7, Math.cos(pathA) * 40, 6);
  g.add(b.mesh(MAT.flat));
  const glm = gl.mesh(glowMat(1), false); world.night(glm.material, 0.75, 2.8); g.add(glm);
  world.scene.add(g);
  world.P.garden = { center: { x, z } };
}

// ═════════════════════════ Sign posts at the plaza ═════════════════════════
export function buildSigns(world) {
  const g = new THREE.Group();
  const b = new Builder();
  const signs = [['قمة التوحيد', L.shahada], ['قرية المسجد', L.salah], ['سوق الخير', L.zakat], ['واحة رمضان', L.sawm], ['وادي المناسك', L.miqat], ['حديقة الإيمان', L.garden]];
  for (const [name, p] of signs) {
    const a = Math.atan2(p.x - L.plaza.x, p.z - L.plaza.z);
    const sx = L.plaza.x + Math.sin(a + 0.09) * 37, sz = L.plaza.z + Math.cos(a + 0.09) * 37;
    const y = world.heightAt(sx, sz);
    b.cyl(0.09, 0.13, 3.2, C.WOOD, sx, y + 1.6, sz, 6);
    addLabel(g, name, sx, y + 3.9, sz, { scale: 1.0 });
    world.colliders.push({ x: sx, z: sz, r: 0.3 });
  }
  g.add(b.mesh(MAT.flat));
  world.scene.add(g);
}
