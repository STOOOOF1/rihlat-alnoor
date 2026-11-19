import * as THREE from 'three';
import { Builder, MAT, glowMat, glowTexture } from '../core/builder.js';
import { clamp, damp } from '../core/utils.js';

const std = (color, rough = 0.85) => new THREE.MeshStandardMaterial({ color, roughness: rough });
const part = (geo, mat) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; return m; };

/**
 * Stylised faceless character built from primitives, with procedural animation.
 * kind: 'boy' | 'girl' | 'man' | 'woman'
 */
export function createCharacter(o = {}) {
  const kind = o.kind || 'boy';
  const female = kind === 'girl' || kind === 'woman';
  const scale = o.scale || (kind === 'man' || kind === 'woman' ? 1.28 : 1);
  const skin = std(o.skin ?? 0xe3b083, 0.7);
  const cloth = std(o.cloth ?? (female ? 0xb884d6 : 0xf2eee2), 0.9);
  const head2 = std(o.cloth2 ?? (female ? 0xfdf3ff : 0xffffff), 0.9);
  const dark = std(0x3a2a20, 0.8);
  const white = std(0xfbfbf8, 0.95);
  const shoeM = std(o.shoe ?? 0x6b4a2f, 0.8);

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const robe = part(new THREE.CylinderGeometry(0.17, 0.285, 0.8, 14), cloth); robe.position.y = 0.6;
  const shoulders = part(new THREE.SphereGeometry(0.2, 14, 8), cloth); shoulders.scale.set(1.14, 0.55, 0.86); shoulders.position.y = 0.99;
  const neck = part(new THREE.CylinderGeometry(0.07, 0.075, 0.1, 8), skin); neck.position.y = 1.06;
  body.add(robe, shoulders, neck);

  const headG = new THREE.Group(); headG.position.y = 1.25; body.add(headG);
  const head = part(new THREE.SphereGeometry(0.2, 18, 14), skin);
  headG.add(head);
  let kufi = null, hair = null;
  if (female) {
    const hijab = part(new THREE.SphereGeometry(0.236, 18, 14), head2);
    hijab.position.set(0, 0.012, -0.04); hijab.scale.set(1, 1.05, 1.02);
    head.position.z = 0.04; head.scale.setScalar(0.92);
    const drape = part(new THREE.CylinderGeometry(0.15, 0.3, 0.42, 14), head2);
    drape.position.y = 1.0; body.add(drape);
    headG.add(hijab);
  } else {
    hair = part(new THREE.SphereGeometry(0.207, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.52), dark);
    hair.position.set(0, 0.008, -0.014);
    kufi = new THREE.Group();
    const k1 = part(new THREE.CylinderGeometry(0.16, 0.192, 0.11, 16), head2); k1.position.y = 0.15;
    const k2 = part(new THREE.CylinderGeometry(0.195, 0.195, 0.028, 16), std(o.trim ?? 0xd9a93a, 0.5)); k2.position.y = 0.105;
    kufi.add(k1, k2);
    headG.add(hair, kufi);
    if (kind === 'man') { // short beard hint + shemagh-like cloth
      const beard = part(new THREE.SphereGeometry(0.13, 10, 8, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5), dark);
      beard.position.set(0, -0.06, 0.06); beard.scale.set(1.1, 0.9, 0.9);
      headG.add(beard);
    }
  }

  const arms = [], legs = [];
  for (const side of [-1, 1]) {
    const ap = new THREE.Group(); ap.position.set(side * 0.238, 0.97, 0); ap.rotation.z = side * 0.12;
    const arm = part(new THREE.CapsuleGeometry(0.056, 0.3, 4, 8), cloth); arm.position.y = -0.2;
    const hand = part(new THREE.SphereGeometry(0.062, 8, 6), skin); hand.position.y = -0.43;
    ap.add(arm, hand); body.add(ap); arms.push(ap);
    ap.userData = { side, arm };
    const lp = new THREE.Group(); lp.position.set(side * 0.095, 0.33, 0);
    const leg = part(new THREE.CapsuleGeometry(0.062, 0.15, 4, 8), female ? cloth : white); leg.position.y = -0.13;
    const shoe = part(new THREE.BoxGeometry(0.115, 0.075, 0.22), shoeM); shoe.position.set(0, -0.29, 0.045);
    lp.add(leg, shoe); body.add(lp); legs.push(lp);
  }
  const carryAnchor = new THREE.Group(); carryAnchor.position.set(0, 0.8, 0.38); body.add(carryAnchor);
  root.scale.setScalar(scale);

  const st = { phase: 0, amp: 0, t: Math.random() * 10, carry: null, outfit: 'normal', air: 0 };
  const api = {
    group: root, kind, scale, headG,
    update(dt, speed = 0, onGround = true) {
      st.t += dt;
      const moving = speed > 0.4;
      st.amp = damp(st.amp, moving ? clamp(speed / 7, 0.45, 1.3) : 0, 10, dt);
      if (moving) st.phase += dt * (4.2 + speed * 1.2);
      st.air = damp(st.air, onGround ? 0 : 1, 12, dt);
      const sw = Math.sin(st.phase) * 0.8 * st.amp;
      legs[0].rotation.x = sw * (1 - st.air) + 0.5 * st.air;
      legs[1].rotation.x = -sw * (1 - st.air) - 0.35 * st.air;
      for (const ap of arms) {
        const s = ap.userData.side;
        const tx = st.carry ? -1.2 : (s < 0 ? -sw : sw) * 0.8 * (1 - st.air);
        ap.rotation.x = damp(ap.rotation.x, tx, 16, dt);
        const tz = s * (0.12 + st.air * 1.0 + (st.carry ? -0.22 : 0));
        ap.rotation.z = damp(ap.rotation.z, tz, 12, dt);
      }
      body.position.y = Math.abs(Math.sin(st.phase)) * 0.05 * st.amp + Math.sin(st.t * 2.1) * 0.006;
      body.rotation.x = 0.07 * st.amp + (speed > 8.5 ? 0.09 : 0);
      headG.rotation.y = moving ? 0 : Math.sin(st.t * 0.6) * 0.12;
      robe.scale.x = robe.scale.z = 1 + Math.sin(st.t * 2.1) * 0.01;
    },
    setOutfit(name) {
      st.outfit = name;
      const ihram = name === 'ihram';
      if (!female) {
        robe.material = ihram ? white : cloth;
        shoulders.material = ihram ? white : cloth;
        arms.forEach((a) => (a.userData.arm.material = ihram ? white : cloth));
        if (kufi) kufi.visible = !ihram;
      }
    },
    setCarry(obj) {
      if (st.carry) carryAnchor.remove(st.carry);
      st.carry = obj || null;
      if (obj) { obj.position.set(0, 0, 0); obj.rotation.set(0, 0, 0); carryAnchor.add(obj); }
    },
    get carrying() { return st.carry; },
  };
  return api;
}

/** «سراج» — the floating lantern guide. */
export function createLantern() {
  const g = new THREE.Group();
  const b = new Builder();
  b.cyl(0.05, 0.19, 0.16, 0xd9a93a, 0, 0.26, 0, 6);
  b.cyl(0.2, 0.2, 0.03, 0xb8862a, 0, 0.17, 0, 6);
  b.cyl(0.2, 0.14, 0.05, 0xb8862a, 0, -0.17, 0, 6);
  b.cone(0.09, 0.12, 0xd9a93a, 0, -0.25, 0, 6);
  b.torus(0.07, 0.014, 0xd9a93a, 0, 0.4, 0, 0, 12);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    b.box(0.02, 0.32, 0.02, 0xb8862a, Math.cos(a) * 0.17, 0, Math.sin(a) * 0.17);
  }
  const frame = b.mesh(MAT.gold, false);
  const gb = new Builder();
  gb.cyl(0.16, 0.16, 0.3, 0xffd58a, 0, 0, 0, 6);
  const glass = gb.mesh(glowMat(2.2), false);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffc766, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  halo.scale.setScalar(1.7);
  const light = new THREE.PointLight(0xffd9a0, 0, 16, 1.6);
  g.add(frame, glass, halo, light);
  g.userData = { glass, halo, light };
  return g;
}
