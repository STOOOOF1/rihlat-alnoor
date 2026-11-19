import * as THREE from 'three';
import { Stage, placeGate, sunDirAt, GARDEN as G } from './stage.js';
import { T } from './content.js';
import { STAGE_SITES } from '../world/layout.js';
import { rot2 } from '../world/structures.js';
import { Builder, MAT, glowMat } from '../core/builder.js';
import { makeLabel } from '../engine/fx.js';
import { shuffle, toAr, clamp, damp } from '../core/utils.js';

const GOLD = 0xffd45a, GREEN = 0x5fe39a, RED = 0xff6a6a;
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);

class ImanStage extends Stage {
  setup() {
    const s = STAGE_SITES[this.id];
    this.a0 = s.angle;
    this.start = { x: s.x, z: s.z, yaw: Math.atan2(-Math.sin(s.angle), -Math.cos(s.angle)) };
    this.build();
  }
  build() {}
  /** points around the garden centre, the first one nearest the entrance */
  spots(r, n, spread = Math.PI * 2) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const a = this.a0 + (spread >= 6.2 ? (i / n) * spread : (i / Math.max(1, n - 1) - 0.5) * spread);
      out.push({ x: G.x + Math.sin(a) * r, z: G.z + Math.cos(a) * r, a });
    }
    return out;
  }
  eye() { const p = this.player.pos; return v3(p.x, p.y + 1.6, p.z); }
}

// ═══════════════════════ الإيمان بالله ═══════════════════════
export class AllahStage extends ImanStage {
  async run() {
    await this.say(T.allah.intro);
    const keys = this.pick(['sun', 'rain', 'plants'], ['sun', 'night', 'rain', 'plants'], ['sun', 'night', 'rain', 'mountain', 'sea', 'plants']);
    const signs = keys.map((k) => T.allah.signs.find((s) => s.key === k));
    const colors = { sun: 0xffc04a, night: 0x8fa8ff, rain: 0x7fd1ff, mountain: 0xc9b8a0, sea: 0x4fc8e0, plants: 0x7fe0a0 };
    const pts = this.spots(9, signs.length);
    const circles = signs.map((s, i) => {
      const p = pts[i];
      return { s, ...p, m: this.marker(p.x, p.z, colors[s.key], 1.9, 14), l: this.label('🔎 ' + s.title, p.x, G.h + 4.2, p.z, { scale: 0.9 }), done: false };
    });
    let done = 0;
    this.counter(`آيات الله ${toAr(0)} / ${toAr(signs.length)}`);
    while (done < circles.length) {
      this.objective('ادخل دوائر التأمّل وتفكّر في خلق الله', 'كل دائرة تُريك آيةً من آيات الله');
      const c = await this.until(() => circles.find((c) => !c.done && this.dist(c.x, c.z) < 2));
      c.done = true; this.remove(c.m); this.remove(c.l);
      this.objective(''); this.sfx.whoosh();
      await this.showSign(c.s);
      done++;
      this.counter(`آيات الله ${toAr(done)} / ${toAr(signs.length)}`);
      await this.ask([c.s.q], 'تأمّل وأجب');
    }
    this.counter(null);
    await this.say(T.allah.namesIntro);
    await this.match('الأسماء الحسنى', T.allah.names.slice(0, this.pick(3, 4, 6)), 'اختر الاسم ثم اضغط على معناه');
    await this.say(T.allah.after);
  }
  async showSign(s) {
    const e = this.eye(), cam = this.g.camera.position.clone();
    let view, look, p = null;
    switch (s.key) {
      case 'sun': {
        p = this.sky.animateTo(6.7, 3);
        const d = sunDirAt(6.7);
        view = v3(e.x - d.x * 4, e.y + 1.2, e.z - d.z * 4); look = e.clone().addScaledVector(d, 300);
        break;
      }
      case 'night':
        p = this.sky.animateTo(21.5, 3);
        view = v3(e.x, e.y + 1, e.z + 4); look = v3(e.x, e.y + 90, e.z - 120);
        break;
      case 'rain':
        this.sky.setWeather('rain');
        view = v3(e.x + 5, e.y + 2.5, e.z + 5); look = v3(G.x, G.h + 6, G.z);
        break;
      case 'mountain': {
        const mx = -118, mz = -172, my = this.g.world.heightAt(mx, mz);
        view = v3(G.x + 10, G.h + 16, G.z - 6); look = v3(mx, my * 0.75, mz);
        break;
      }
      case 'sea':
        view = v3(G.x + 18, G.h + 14, G.z + 4); look = v3(G.x + 220, 0, G.z - 30);
        break;
      default: {
        view = v3(G.x + 8, G.h + 7, G.z + 26); look = v3(G.x, G.h + 1, G.z - 4);
        const cols = [0xff6fa3, 0xffd34d, 0xffffff, 0xc58bff, 0x7fe0a0];
        for (let i = 0; i < 40; i++) {
          const a = (i / 40) * Math.PI * 2;
          this.fx.burst(v3(G.x + Math.sin(a) * 32.5, G.h + 0.6, G.z + Math.cos(a) * 32.5), cols[i % cols.length], 6, 2.2, 1.6, 0.4, 0.5);
        }
      }
    }
    const c = this.cine([cam, cam.clone().lerp(view, 0.5).add(v3(0, 2, 0)), view], look, 3.2, { hold: true });
    if (p) await this.guard(p);
    await c;
    await this.say(s.lines);
    this.g.endCine();
    this.sky.setWeather('clear');
    if (s.key === 'sun' || s.key === 'night') this.sky.animateTo(10, 2.5);
  }
}

// ═══════════════════════ الإيمان بالملائكة ═══════════════════════
export class MalaikaStage extends ImanStage {
  async run() {
    await this.say(T.malaika.intro);
    const pairs = T.malaika.pairs.slice(0, this.pick(3, 4, 6));
    const pts = this.spots(10, pairs.length, pairs.length > 4 ? Math.PI * 2 : Math.PI * 1.4);
    const sh = shuffle(pairs);
    const gates = sh.map((pr, i) => {
      const p = pts[i];
      return { pr, ...p, g: placeGate(this, 0xfff4c8, pr.name, p.x, p.z, p.a, 3.4) };
    });
    let n = 0;
    for (const pr of shuffle(pairs)) {
      n++;
      this.counter(`السؤال ${toAr(n)} / ${toAr(pairs.length)}`);
      const q = `مَن الموكَّل بـ: ${pr.ask}؟`;
      this.objective(q, 'ادخل البوابة التي تحمل الاسم الصحيح');
      this.ui.toast(q, 'gold', 4);
      const ent = gates.map((gt) => this.enter(gt, 1.35));
      const hit = await this.until(() => {
        for (let i = 0; i < gates.length; i++) {
          if (!ent[i]()) continue;
          if (gates[i].pr === pr) return gates[i];
          this.miss(`لا، ${gates[i].pr.name}: ${gates[i].pr.job}.`, 'g' + i, 1.5);
        }
        return null;
      });
      hit.g.userData.setColor(GREEN);
      this.good(`صحيح! ${pr.name}: ${pr.job}`, v3(hit.x, G.h + 3, hit.z), 0xfff4c8);
      this.fx.fountain(v3(hit.x, G.h, hit.z), [0xffffff, 0xfff0b0], 50, 10);
    }
    this.counter(null);
    await this.say(T.malaika.after);
  }
}

// ═══════════════════════ الإيمان بالكتب ═══════════════════════
function bookMesh(color) {
  const b = new Builder();
  b.box(0.82, 0.2, 1.08, color, 0, 0, 0);
  b.box(0.76, 0.16, 1.0, 0xf6f0dc, 0.04, 0, 0);
  b.box(0.06, 0.21, 1.08, 0xe2b04a, -0.4, 0, 0);
  b.box(0.3, 0.02, 0.3, 0xe2b04a, 0, 0.11, 0);
  return b.mesh(MAT.flat, false);
}
export class KutubStage extends ImanStage {
  async run() {
    await this.say(T.kutub.intro);
    const books = T.kutub.books.slice(0, this.pick(3, 4, 5));
    const ped = shuffle(books);
    const pp = this.spots(12, ped.length, Math.PI * 1.5);
    const pedestals = ped.map((bk, i) => {
      const p = pp[i];
      const b = new Builder();
      b.cyl(0.85, 1.0, 0.4, 0xd9cdb4, 0, 0.2, 0, 10); b.cyl(0.5, 0.6, 1.0, 0xf3ead6, 0, 0.9, 0, 10); b.cyl(0.8, 0.6, 0.2, 0xe2b04a, 0, 1.5, 0, 10);
      const m = b.mesh(MAT.flat); m.position.set(p.x, G.h, p.z); this.add(m);
      this.colliders.push({ x: p.x, z: p.z, r: 0.95, br: 0.95 });
      const l = this.label(bk.to, p.x, G.h + 3.4, p.z, { scale: 0.95 });
      return { bk, ...p, l, filled: false };
    });
    const items = books.map((bk) => {
      const pos = this.randIn(G.x, G.z, 2.5, 7.5, [], 2.6);
      const grp = new THREE.Group();
      const mesh = bookMesh(bk.color); grp.add(mesh);
      const lab = makeLabel(bk.name, { scale: 0.75 }); lab.position.y = 0.9; grp.add(lab);
      grp.position.set(pos.x, G.h + 1.1, pos.z);
      Object.assign(grp.userData, { baseY: G.h + 1.1, ph: Math.random() * 6, core: mesh, bk });
      this.add(grp); this.orbs.push(grp);
      return grp;
    });
    let placed = 0;
    this.counter(`الكتب ${toAr(0)} / ${toAr(books.length)}`);
    this.objective('احمل كل كتابٍ إلى الرسول الذي أُنزل عليه', 'اقترب من الكتاب واضغط E');
    await this.until(() => {
      const ch = this.player.char, carrying = ch.carrying;
      if (!carrying) {
        const near = items.find((g) => this.orbs.includes(g) && this.touching(g, 1.6));
        if (near) {
          this.ui.setPrompt(`احمل «${near.userData.bk.name}»`);
          if (this.pressE()) {
            this.orbs.splice(this.orbs.indexOf(near), 1);
            near.userData.core.rotation.set(0, 0, 0);
            ch.setCarry(near); near.scale.setScalar(0.8); this.sfx.collect();
          }
        } else this.ui.setPrompt(null);
      } else {
        const pd = pedestals.find((p) => !p.filled && this.dist(p.x, p.z) < 2.4);
        if (pd) {
          this.ui.setPrompt('ضع الكتاب هنا');
          if (this.pressE()) {
            const bk = carrying.userData.bk;
            if (pd.bk === bk) {
              pd.filled = true; placed++;
              ch.setCarry(null); this.g.scene.add(carrying);
              carrying.scale.setScalar(1); carrying.position.set(pd.x, G.h + 1.75, pd.z);
              carrying.rotation.set(0, pd.a, 0); carrying.userData.static = true;
              pd.l.setText('✔ ' + bk.to + ': ' + bk.name, { bg: 'rgba(10,90,50,.88)', border: '#5fe39a' });
              this.good(`${bk.name} ← ${bk.to}`, v3(pd.x, G.h + 2.2, pd.z));
              this.fx.fountain(v3(pd.x, G.h + 1.6, pd.z), [0xffffff, bk.color], 50, 8);
              this.counter(`الكتب ${toAr(placed)} / ${toAr(books.length)}`);
            } else {
              this.miss(`ليس ${pd.bk.to} مَن أُنزل عليه «${bk.name}». حاول مرة أخرى!`, 'p' + pd.bk.name, 2);
            }
          }
        } else this.ui.setPrompt(null);
      }
      return placed >= books.length;
    });
    this.ui.setPrompt(null); this.counter(null);
    await this.say(T.kutub.after);
  }
}

// ═══════════════════════ الإيمان بالرسل ═══════════════════════
function symbolProp(key) {
  const b = new Builder(), gl = new Builder();
  b.cyl(2.0, 2.2, 0.3, 0xd9cdb4, 0, 0.15, 0, 14);
  switch (key) {
    case 'ark':
      b.add(new THREE.BoxGeometry(3.4, 0.9, 1.3), 0x8a5a33, 0, 1.0, 0); b.add(new THREE.ConeGeometry(0.7, 1.0, 4), 0x8a5a33, 1.95, 1.0, 0, 0, Math.PI / 4, -Math.PI / 2);
      b.add(new THREE.ConeGeometry(0.7, 0.8, 4), 0x8a5a33, -1.85, 1.0, 0, 0, Math.PI / 4, Math.PI / 2);
      b.box(1.4, 0.7, 1.0, 0xa0703f, 0, 1.8, 0); b.cyl(0.06, 0.06, 2.6, 0x5e3b1e, 0.4, 2.6, 0, 6);
      b.add(new THREE.BoxGeometry(0.04, 1.6, 1.1), 0xf2e6cc, 0.45, 2.8, 0, 0, 0, 0);
      break;
    case 'staff':
      b.add(new THREE.CylinderGeometry(0.06, 0.07, 2.4, 6), 0x6b4a2f, 0, 1.4, 0, 0, 0, 0.2);
      b.add(new THREE.TorusGeometry(0.16, 0.05, 6, 10, Math.PI), 0x6b4a2f, -0.26, 2.6, 0, 0, 0, 0.2);
      b.box(0.6, 1.8, 3.2, 0x3a9ad0, -1.3, 1.2, 0); b.box(0.6, 1.8, 3.2, 0x3a9ad0, 1.3, 1.2, 0);
      b.box(0.62, 0.3, 3.22, 0xd8f2ff, -1.3, 2.1, 0); b.box(0.62, 0.3, 3.22, 0xd8f2ff, 1.3, 2.1, 0);
      break;
    case 'fire':
      for (let i = 0; i < 4; i++) b.add(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 6), 0x5a3a1e, 0, 0.45, 0, Math.PI / 2.3, i * 0.8, 0);
      gl.cone(0.55, 1.4, 0xff9a3a, 0, 1.1, 0, 8); gl.cone(0.32, 1.0, 0xffe07a, 0, 1.05, 0, 8);
      for (let i = 0; i < 10; i++) { const a = (i / 10) * 6.283; b.sphere(0.16, [0xff6fa3, 0xffffff, 0xffd34d][i % 3], Math.cos(a) * 1.4, 0.45, Math.sin(a) * 1.4, 1, 0.8, 1, 6, 5); b.cyl(0.03, 0.03, 0.3, 0x3f8f38, Math.cos(a) * 1.4, 0.3, Math.sin(a) * 1.4, 4); }
      break;
    case 'well':
      b.cyl(1.0, 1.05, 1.0, 0x9a8c7c, 0, 0.8, 0, 12); b.cyl(0.8, 0.8, 0.05, 0x1a3a5a, 0, 1.2, 0, 12);
      b.cyl(0.07, 0.07, 2.2, 0x6b4a2f, -0.9, 1.4, 0, 6); b.cyl(0.07, 0.07, 2.2, 0x6b4a2f, 0.9, 1.4, 0, 6);
      b.add(new THREE.CylinderGeometry(0.06, 0.06, 2.0, 6), 0x6b4a2f, 0, 2.4, 0, 0, 0, Math.PI / 2);
      b.cyl(0.18, 0.15, 0.3, 0x8a5a33, 0, 1.75, 0, 8);
      break;
    case 'cave':
      b.add(new THREE.IcosahedronGeometry(1.9, 1), 0x8a7d6c, 0, 1.2, -0.3, 0, 0.3, 0, 1.2, 0.9, 1.0);
      b.add(new THREE.IcosahedronGeometry(1.2, 1), 0x7a6e5f, 1.3, 0.9, 0.2, 0, 0.8, 0);
      b.add(new THREE.SphereGeometry(0.75, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), 0x1c1712, 0, 0.3, 1.25, Math.PI / 2, 0, 0, 1, 1.2, 1);
      gl.sphere(0.25, 0xfff2b0, 0, 0.9, 1.3, 1, 1, 1, 8, 6);
      break;
    case 'cradle':
      b.box(1.5, 0.55, 0.85, 0xc9a26b, 0, 0.95, 0); b.box(1.36, 0.5, 0.72, 0xf6efe0, 0, 1.0, 0);
      b.torus(0.75, 0.06, 0x8a5a33, 0, 0.75, 0.38, 0, 14, Math.PI, 0, Math.PI); b.torus(0.75, 0.06, 0x8a5a33, 0, 0.75, -0.38, 0, 14, Math.PI, 0, Math.PI);
      b.cyl(0.05, 0.05, 1.3, 0x8a5a33, 0.7, 1.6, 0, 6); b.add(new THREE.SphereGeometry(0.5, 10, 6, 0, Math.PI), 0xbfe0ff, 0.7, 2.2, 0, 0, Math.PI / 2, 0);
      break;
    case 'whale':
      b.cyl(1.9, 1.9, 0.12, 0x3a90b8, 0, 0.36, 0, 18);
      b.sphere(1.0, 0x3c6e9a, 0, 1.0, 0, 1.8, 0.85, 0.95, 14, 10);
      b.sphere(0.8, 0xd8e6ee, 0.1, 0.75, 0, 1.6, 0.4, 0.85, 12, 8);
      b.add(new THREE.ConeGeometry(0.5, 1.0, 4), 0x3c6e9a, -2.1, 1.1, 0, 0, Math.PI / 4, Math.PI / 2);
      b.add(new THREE.BoxGeometry(0.15, 0.25, 1.4), 0x3c6e9a, -2.6, 1.15, 0);
      b.sphere(0.07, 0x111111, 1.3, 1.25, 0.6, 1, 1, 1, 6, 5); b.sphere(0.07, 0x111111, 1.3, 1.25, -0.6, 1, 1, 1, 6, 5);
      break;
  }
  const g = new THREE.Group();
  g.add(b.mesh(MAT.flat));
  if (!gl.empty) g.add(gl.mesh(glowMat(2.2), false));
  return g;
}

export class RusulStage extends ImanStage {
  async run() {
    await this.say(T.rusul.intro);
    const syms = T.rusul.symbols.slice(0, this.pick(4, 5, 7));
    const pts = this.spots(11, syms.length);
    const items = syms.map((s, i) => {
      const p = pts[i];
      const g = symbolProp(s.key);
      g.position.set(p.x, G.h, p.z); g.rotation.y = p.a + Math.PI;
      this.add(g);
      this.colliders.push({ x: p.x, z: p.z, r: 1.8, br: 1.8 });
      const l = this.label(s.label, p.x, G.h + 4.4, p.z, { scale: 1.0 });
      if (s.key === 'fire') {
        const holder = this.add(new THREE.Group());
        holder.userData.update = () => { if (Math.random() < 0.6) this.fx.emit(p.x + (Math.random() - 0.5) * 0.6, G.h + 1.3, p.z + (Math.random() - 0.5) * 0.6, 0, 1.6 + Math.random(), 0, Math.random() < 0.5 ? 0xff8a2a : 0xffd04a, 0.8, 0.38, -0.5); };
      }
      return { s, ...p, l, seen: false };
    });
    let seen = 0;
    this.counter(`القصص ${toAr(0)} / ${toAr(items.length)}`);
    while (seen < items.length) {
      this.objective('زُر كل رمزٍ لتسمع قصة النبي', 'اقترب من الرمز');
      const it = await this.until(() => items.find((x) => !x.seen && this.dist(x.x, x.z) < 3.3));
      it.seen = true; seen++;
      this.sfx.whoosh();
      this.counter(`القصص ${toAr(seen)} / ${toAr(items.length)}`);
      await this.say([`«${it.s.label}» تذكّرنا بـ ${it.s.name}.`, it.s.story]);
      it.l.setText('✔ ' + it.s.label);
    }
    this.counter(null);
    await this.say(T.rusul.challenge);
    let n = 0;
    for (const it of shuffle(items)) {
      n++;
      const byStory = this.diff === 2 || (this.diff === 1 && n % 2 === 0);
      const q = byStory ? `أيُّ رمزٍ يذكّرنا بالنبي الذي: ${it.s.story.replace(/\.$/, '')}؟` : `اذهب إلى الرمز الذي يذكّرنا بـ ${it.s.name}`;
      this.objective(q, 'اذهب إلى الرمز الصحيح');
      this.ui.toast(q, 'gold', 5);
      this.counter(`التحدّي ${toAr(n)} / ${toAr(items.length)}`);
      const ent = items.map((x) => this.enter(x, 3.1));
      const hit = await this.until(() => {
        for (let i = 0; i < items.length; i++) {
          if (!ent[i]()) continue;
          if (items[i] === it) return it;
          this.miss(`لا، «${items[i].s.label}» تذكّرنا بـ ${items[i].s.name}.`, 'r' + i, 1.5);
        }
        return null;
      });
      this.good(`صحيح! ${hit.s.name}`, v3(hit.x, G.h + 3, hit.z));
    }
    this.counter(null);
    await this.say(T.rusul.after);
  }
}

// ═══════════════════════ الإيمان باليوم الآخر ═══════════════════════
export class AkhirahStage extends ImanStage {
  build() {
    const b = new Builder(), gl = new Builder();
    b.cyl(1.4, 1.7, 0.6, 0xd9cdb4, 0, 0.3, 0, 12);
    b.cyl(0.28, 0.4, 6.2, 0xe2b04a, 0, 3.4, 0, 10);
    b.sphere(0.45, 0xe2b04a, 0, 6.6, 0, 1, 1, 1, 10, 8);
    const base = b.mesh(MAT.flat); base.position.set(G.x, G.h, G.z); this.add(base);
    this.colliders.push({ x: G.x, z: G.z, r: 1.6, br: 1.6 });
    const beam = new THREE.Group(); beam.position.set(G.x, G.h + 6.4, G.z); this.add(beam);
    const bb = new Builder(); bb.box(9, 0.28, 0.32, 0xe2b04a, 0, 0, 0); bb.sphere(0.25, 0xe2b04a, 4.5, 0, 0); bb.sphere(0.25, 0xe2b04a, -4.5, 0, 0);
    beam.add(bb.mesh(MAT.gold, true));
    const pan = (color, glow) => {
      const g = new THREE.Group();
      const p = new Builder();
      p.add(new THREE.SphereGeometry(1.4, 16, 6, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), color, 0, 0, 0, 0, 0, 0, 1, 0.45, 1);
      for (let i = 0; i < 3; i++) { const a = (i / 3) * 6.283; p.add(new THREE.CylinderGeometry(0.025, 0.025, 2.6, 4), 0xb8862a, Math.cos(a) * 0.65, 1.3, Math.sin(a) * 0.65, Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25); }
      g.add(p.mesh(MAT.double));
      const gm = new THREE.Mesh(new THREE.SphereGeometry(0.7, 12, 8), new THREE.MeshBasicMaterial({ color: glow, toneMapped: false, transparent: true, opacity: 0.85 }));
      gm.position.y = -0.1; gm.scale.setScalar(0.01); g.add(gm);
      g.userData.glow = gm;
      this.add(g);
      return g;
    };
    this.panGood = pan(0xe2b04a, new THREE.Color(1.6, 1.5, 0.6));
    this.panBad = pan(0x5a5560, new THREE.Color(0.6, 0.15, 0.2));
    this.beam = beam;
    const lg = this.label('الحسنات', 0, 0, 0, { scale: 0.85, bg: 'rgba(10,90,50,.88)', border: '#5fe39a' });
    const lb = this.label('السيئات', 0, 0, 0, { scale: 0.85, bg: 'rgba(90,20,30,.88)', border: '#ff8a8a' });
    this.tilt = 0; this.tiltT = 0;
    const holder = this.add(new THREE.Group());
    holder.userData.update = (t, dt) => {
      this.tilt = damp(this.tilt, this.tiltT, 3, dt || 0.016);
      beam.rotation.z = this.tilt;
      const c = Math.cos(this.tilt), s = Math.sin(this.tilt);
      // right end (+x) holds good deeds, left end holds bad deeds
      this.panGood.position.set(G.x + 4.5 * c, G.h + 6.4 + 4.5 * s - 2.6, G.z);
      this.panBad.position.set(G.x - 4.5 * c, G.h + 6.4 - 4.5 * s - 2.6, G.z);
      lg.position.set(this.panGood.position.x, this.panGood.position.y - 1.3, G.z + 1.6);
      lb.position.set(this.panBad.position.x, this.panBad.position.y - 1.3, G.z + 1.6);
    };
  }
  async run() {
    await this.say(T.akhirah.intro);
    const target = this.pick(6, 8, 10), dur = this.pick(80, 65, 55);
    const nG = this.pick(5, 5, 6), nB = this.pick(3, 5, 7), chase = this.pick(0, 0.8, 1.4);
    let good = 0, bad = 0, left = dur;
    const live = [];
    const spawn = (isGood) => {
      const p = this.randIn(G.x, G.z, 3.5, 15, live.map((o) => o.position), 3);
      const list = isGood ? T.akhirah.good : T.akhirah.bad;
      live.push(this.orb(p.x, G.h + 1.25, p.z, isGood ? GOLD : RED, list[Math.floor(Math.random() * list.length)], { good: isGood }));
    };
    for (let i = 0; i < nG; i++) spawn(true);
    for (let i = 0; i < nB; i++) spawn(false);
    const upd = () => {
      this.tiltT = clamp((good - bad * 1.2) / target, -1, 1) * -0.32;
      this.panGood.userData.glow.scale.setScalar(0.01 + Math.min(1, good / target));
      this.panBad.userData.glow.scale.setScalar(0.01 + Math.min(1, bad / 5));
      this.counter(`الحسنات ${toAr(good)} / ${toAr(target)}`);
    };
    upd();
    this.objective('املأ ميزانك بالحسنات 🟡 وتجنّب السيئات 🔴', '');
    await this.until((dt) => {
      left -= dt; this.ui.setTimer(left);
      const pp = this.player.pos;
      for (let i = live.length - 1; i >= 0; i--) {
        const o = live[i];
        if (!o.userData.good && chase) {
          const dx = pp.x - o.position.x, dz = pp.z - o.position.z, d = Math.hypot(dx, dz);
          if (d < 7 && d > 0.5) { o.position.x += (dx / d) * chase * dt; o.position.z += (dz / d) * chase * dt; }
        }
        if (!this.touching(o)) continue;
        live.splice(i, 1); this.remove(o);
        if (o.userData.good) {
          good++; this.sfx.collect();
          this.fx.burst(o.position, GOLD, 20, 4, 0.9, 0.35, 3);
          this.ui.toast('+ ' + o.userData.label.userData.text, 'good', 1.6);
          spawn(true);
        } else {
          bad++; this.miss(`«${o.userData.label.userData.text}» سيئة! ابتعد عنها.`, 'bad', 1.2);
          spawn(false);
        }
        upd();
      }
      return good >= target || left <= 0;
    });
    this.ui.setTimer(null);
    for (const o of live) this.remove(o);
    if (good < target) this.miss('انتهى الوقت! في الحياة نسارع إلى الخيرات قبل فوات الأوان.');
    this.tiltT = -0.32;
    this.fx.fountain(this.panGood.position.clone(), [0xffd45a, 0xffffff, 0x7fe0a0], 120, 10);
    this.sfx.win();
    this.counter(null);
    await this.say(T.akhirah.after);
  }
}

// ═══════════════════════ الإيمان بالقدر ═══════════════════════
export class QadarStage extends ImanStage {
  async run() {
    await this.say(T.qadar.intro);
    const scenes = shuffle(T.qadar.scenes).slice(0, this.pick(3, 4, 6));
    let n = 0;
    for (const sc of scenes) {
      n++;
      this.counter(`الموقف ${toAr(n)} / ${toAr(scenes.length)}`);
      this.sky.setWeather(sc.weather);
      await this.guard(this.sky.animateTo(sc.time, 2));
      await this.say([sc.text]);
      const opts = shuffle(sc.opts);
      const a0 = Math.atan2(this.player.pos.x - G.x, this.player.pos.z - G.z) + Math.PI;
      const pads = opts.map((o, i) => {
        const a = a0 + (i - 1) * 0.9;
        const x = G.x + Math.sin(a) * 8, z = G.z + Math.cos(a) * 8;
        return { o, x, z, m: this.marker(x, z, o.correct ? 0xffe08a : 0xffe08a, 1.8, 6), l: this.label(o.label, x, G.h + 3.4, z, { scale: 0.72, maxWidth: 480 }) };
      });
      this.objective(sc.text, 'اذهب إلى التصرّف الصحيح');
      const ent = pads.map((p) => this.enter(p, 1.9));
      const hit = await this.until(() => {
        for (let i = 0; i < pads.length; i++) {
          if (!ent[i]()) continue;
          if (pads[i].o.correct) return pads[i];
          this.miss(pads[i].o.why, 'q' + i, 1.5);
        }
        return null;
      });
      this.good('أحسنت! هكذا يفعل المؤمن', v3(hit.x, G.h + 1, hit.z));
      this.fx.fountain(v3(hit.x, G.h, hit.z), [0xffd45a, 0x7fe0a0, 0xffffff], 70, 10);
      await this.sleep(0.8);
      for (const p of pads) { this.remove(p.m); this.remove(p.l); }
    }
    this.counter(null);
    this.sky.setWeather('clear');
    await this.guard(this.sky.animateTo(10, 2));
    await this.say(T.qadar.after);
  }
}
