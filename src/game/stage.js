import * as THREE from 'three';
import { makeMarker, makeOrb, makeLabel, disposeObject } from '../engine/fx.js';
import { Builder, MAT } from '../core/builder.js';
import { createCharacter } from './character.js';
import { rot2 } from '../world/structures.js';
import { L } from '../world/layout.js';

export const ABORT = new Error('stage-abort');

/** Base class: every stage is an async coroutine (run) plus per-frame hooks. */
export class Stage {
  constructor(game, id) {
    this.g = game; this.id = id; this.diff = game.save.diff;
    this.mistakes = 0; this.objs = []; this.ups = []; this.orbs = []; this.npcs = [];
    this.colliders = []; this.time = 0; this.start = null; this._cool = {};
    this.abortP = new Promise((_, rej) => (this._abort = rej));
    this.abortP.catch(() => {});
    this.dead = false;
  }
  get ui() { return this.g.ui; }
  get P() { return this.g.world.P; }
  get player() { return this.g.player; }
  get sky() { return this.g.sky; }
  get fx() { return this.g.particles; }
  get sfx() { return this.g.audio.sfx; }
  get female() { return this.player.kind === 'girl'; }

  /** value by difficulty */
  pick(...a) { return a[Math.min(this.diff, a.length - 1)]; }
  setup() {}
  async run() {}

  abort() { this.dead = true; this._abort(ABORT); }
  guard(p) { return Promise.race([p, this.abortP]); }
  say(lines) { return this.guard(this.ui.dialog(lines)); }
  async ask(qs, title) { const w = await this.guard(this.ui.quiz(qs, { title })); this.mistakes += w; return w; }
  async order(title, items, hint) { const m = await this.guard(this.ui.order(title, items, hint)); this.mistakes += Math.min(m, 3); return m; }
  async match(title, pairs, hint) { const m = await this.guard(this.ui.match(title, pairs, hint)); this.mistakes += Math.min(m, 3); return m; }
  cine(points, look, dur, opt) { return this.guard(this.g.cinematic(points, look, dur, opt)); }

  /** throttled mistake (key prevents repeated punishment for the same thing) */
  miss(text, key = null, cool = 1.6) {
    if (key) { if (this._cool[key] > this.time) return false; this._cool[key] = this.time + cool; }
    this.mistakes++; this.sfx.wrong();
    if (text) this.ui.toast(text, 'bad');
    return true;
  }
  good(text, pos, color = 0xffd45a) {
    this.sfx.correct();
    if (text) this.ui.toast(text, 'good');
    if (pos) this.fx.burst(pos, color, 30, 5, 1.1, 0.42, 5);
  }
  pressE() { return !this.ui.busy && this.g.input.take('interact'); }

  add(o) { this.g.scene.add(o); this.objs.push(o); return o; }
  remove(o) {
    if (!o) return;
    if (o.parent) o.parent.remove(o);
    disposeObject(o);
    const i = this.objs.indexOf(o); if (i >= 0) this.objs.splice(i, 1);
    const j = this.orbs.indexOf(o); if (j >= 0) this.orbs.splice(j, 1);
  }
  gy(x, z) { return this.g.world.groundAt(x, z); }
  dist(x, z) { const p = this.player.pos; return Math.hypot(p.x - x, p.z - z); }
  onUpdate(fn) { this.ups.push(fn); return fn; }
  offUpdate(fn) { const i = this.ups.indexOf(fn); if (i >= 0) this.ups.splice(i, 1); }
  until(pred) {
    return this.guard(new Promise((res) => {
      const f = (dt, t) => { const v = pred(dt, t); if (v) { this.offUpdate(f); res(v); } };
      this.onUpdate(f);
    }));
  }
  sleep(s) { let e = 0; return this.until((dt) => (e += dt) >= s); }
  objective(t, s = '') { this.ui.setObjective(t, s); }
  counter(t) { this.ui.setCounter(t); }

  marker(x, z, color = 0xffd45a, r = 2.4, beam = 40) {
    const m = makeMarker(color, r, beam);
    m.position.set(x, this.gy(x, z), z);
    return this.add(m);
  }
  async goTo(x, z, title, sub = '', r = 3, color = 0xffd45a) {
    const m = this.marker(x, z, color);
    this.objective(title, sub);
    this.g.navTarget = { x, z };
    await this.until(() => this.dist(x, z) < r);
    this.g.navTarget = null;
    this.remove(m);
    this.sfx.collect();
  }
  orb(x, y, z, color, label, data = {}, r = 0.45, lopt = {}) {
    const o = makeOrb(color, r, label, { scale: 0.8, ...lopt });
    o.position.set(x, y, z);
    Object.assign(o.userData, data, { baseY: y, ph: Math.random() * 6 });
    this.add(o); this.orbs.push(o);
    return o;
  }
  /** player body touches orb (needs a jump for high orbs) */
  touching(o, r = 1.35) {
    const p = this.player.pos, dx = o.position.x - p.x, dz = o.position.z - p.z;
    if (dx * dx + dz * dz > r * r) return false;
    const dy = o.position.y - (p.y + 0.9);
    return dy > -1.7 && dy < 1.25;
  }
  label(text, x, y, z, o = {}) {
    const l = makeLabel(text, o);
    l.position.set(x, y, z);
    return this.add(l);
  }
  npc(kind, x, z, o = {}) {
    const c = createCharacter({ kind, ...o });
    c.group.position.set(x, this.gy(x, z), z);
    c.group.rotation.y = o.yaw || 0;
    c.homeYaw = o.yaw || 0;
    this.add(c.group); this.npcs.push(c);
    if (o.solid !== false) this.colliders.push({ x, z, r: 0.45 * c.scale, br: 0.45 * c.scale });
    return c;
  }
  /** a ring of points around (cx,cz) */
  ring(cx, cz, r, n, a0 = 0) {
    const out = [];
    for (let i = 0; i < n; i++) { const a = a0 + (i / n) * Math.PI * 2; out.push({ x: cx + Math.sin(a) * r, z: cz + Math.cos(a) * r, a }); }
    return out;
  }
  /** random free point in an annulus */
  randIn(cx, cz, r0, r1, avoid = [], minD = 2.5) {
    for (let k = 0; k < 60; k++) {
      const a = Math.random() * Math.PI * 2, r = r0 + Math.random() * (r1 - r0);
      const x = cx + Math.sin(a) * r, z = cz + Math.cos(a) * r;
      if (avoid.some((p) => Math.hypot(p.x - x, p.z - z) < minD)) continue;
      const [rx, rz] = this.g.world.resolve(x, z, 0.8, this.colliders);
      if (Math.abs(rx - x) + Math.abs(rz - z) > 0.01) continue;
      if (this.dist(x, z) < 3) continue;
      return { x, z };
    }
    const a = Math.random() * 6.283;
    return { x: cx + Math.sin(a) * r1, z: cz + Math.cos(a) * r1 };
  }
  /** entry detector: returns a function that is true only on the frame the player enters radius r of p */
  enter(p, r) {
    let inside = this.dist(p.x, p.z) < r;
    return () => { const now = this.dist(p.x, p.z) < r; const hit = now && !inside; inside = now; return hit; };
  }
  /** facing yaw from (x,z) toward (tx,tz) */
  yawTo(x, z, tx, tz) { return Math.atan2(tx - x, tz - z); }

  update(dt, t) {
    this.time += dt;
    for (const o of this.orbs) {
      if (o.userData.static) continue;
      o.position.y = o.userData.baseY + Math.sin(t * 2.2 + o.userData.ph) * 0.16;
      if (o.userData.core) o.userData.core.rotation.y += dt * 1.5;
    }
    const p = this.player.pos;
    for (const n of this.npcs) {
      n.update(dt, n.moveSpeed || 0, true);
      if (!n.moveSpeed) {
        const gp = n.group.position, d = Math.hypot(p.x - gp.x, p.z - gp.z);
        const target = d < 6 ? Math.atan2(p.x - gp.x, p.z - gp.z) : n.homeYaw;
        n.group.rotation.y += Math.atan2(Math.sin(target - n.group.rotation.y), Math.cos(target - n.group.rotation.y)) * Math.min(1, dt * 4);
      }
    }
    for (const o of this.objs) if (o.userData.update) o.userData.update(t, dt);
    if (!this.ui.busy) for (const f of this.ups.slice()) f(dt, t);
  }
  cleanup() {
    for (const o of this.objs.slice()) this.remove(o);
    this.objs = []; this.orbs = []; this.npcs = []; this.ups = [];
    this.ui.setCounter(null); this.ui.setTimer(null); this.ui.setMeter(null);
  }
}

// ─────────────────────── shared props ───────────────────────

/** Arched gate with a shimmering portal and a title. Plane faces local ±z. */
export function makeGate(color, text, w = 3.2, h = 3.8) {
  const g = new THREE.Group();
  const b = new Builder();
  b.box(0.5, h, 0.5, 0xf3ead6, -w / 2, h / 2, 0); b.box(0.5, h, 0.5, 0xf3ead6, w / 2, h / 2, 0);
  b.box(0.75, 0.35, 0.75, 0xe2b04a, -w / 2, 0.17, 0); b.box(0.75, 0.35, 0.75, 0xe2b04a, w / 2, 0.17, 0);
  b.torus(w / 2, 0.27, 0xf3ead6, 0, h, 0, 0, 18, Math.PI);
  b.torus(w / 2 + 0.28, 0.07, 0xe2b04a, 0, h, 0, 0, 18, Math.PI);
  g.add(b.mesh(MAT.flat));
  const r = w / 2 - 0.25;
  const s = new THREE.Shape();
  s.moveTo(-r, 0); s.lineTo(-r, h); s.absarc(0, h, r, Math.PI, 0, true); s.lineTo(r, 0); s.lineTo(-r, 0);
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, toneMapped: false });
  const portal = new THREE.Mesh(new THREE.ShapeGeometry(s, 16), mat);
  g.add(portal);
  const l = makeLabel(text, { scale: 0.95 });
  l.position.y = h + w / 2 + 1.0;
  g.add(l);
  const ph = Math.random() * 6;
  g.userData.update = (t) => { mat.opacity = 0.26 + Math.sin(t * 3 + ph) * 0.1; };
  g.userData.setColor = (c) => mat.color.set(c);
  g.userData.label = l;
  return g;
}

/** Gate placed at (x,z) facing yaw; registers pillar colliders. */
export function placeGate(stage, color, text, x, z, yaw, w = 3.2) {
  const g = makeGate(color, text, w);
  g.position.set(x, stage.gy(x, z), z);
  g.rotation.y = yaw;
  stage.add(g);
  for (const sx of [-w / 2, w / 2]) {
    const [dx, dz] = rot2(sx, 0, yaw);
    stage.colliders.push({ x: x + dx, z: z + dz, r: 0.38, br: 0.38 });
  }
  return g;
}

export function sunDirAt(time) {
  const a = ((time - 6) / 12) * Math.PI;
  return new THREE.Vector3(Math.cos(a), Math.sin(a) * 0.9, Math.sin(a) * 0.38 + 0.14).normalize();
}

export const GARDEN = { x: L.garden.x, z: L.garden.z, h: L.garden.h };
