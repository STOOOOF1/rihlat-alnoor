import * as THREE from 'three';
import { Stage, placeGate } from './stage.js';
import { T } from './content.js';
import { L, STAGE_SITES } from '../world/layout.js';
import { rot2 } from '../world/structures.js';
import { createCharacter } from './character.js';
import { shuffle, toAr, angleDiff, clamp } from '../core/utils.js';
import { Builder, MAT } from '../core/builder.js';

const GOLD = 0xffd45a, GREEN = 0x5fe39a, BLUE = 0x7fd1ff, RED = 0xff7a6a;

// ═══════════════════════ 1. الشهادتان ═══════════════════════
export class ShahadaStage extends Stage {
  setup() {
    const { x, z } = L.shahada;
    this.C = { x, z, y: L.shahada.h };
    this.start = { x, z: z + 10, yaw: Math.PI };
  }
  async run() {
    const C = this.C, tower = { x: C.x, z: C.z - 8.5 };
    await this.say(T.shahada.intro);
    const parts = T.shahada.parts;
    const distract = this.pick([], ['الحمد لله'], ['الحمد لله', 'سبحان الله', 'الله أكبر']);
    const all = [...parts.map((p, k) => ({ t: p, k })), ...distract.map((p) => ({ t: p, k: -1 }))];
    const used = [tower];
    const orbs = shuffle(all).map((it, i) => {
      const p = this.randIn(C.x, C.z, 5.5, 12, used, 4.2);
      used.push(p);
      const high = this.diff === 2 && it.k >= 1 && i % 2 === 0;
      const lbl = this.diff === 0 && it.k >= 0 ? `${toAr(it.k + 1)} · ${it.t}` : it.t;
      return this.orb(p.x, C.y + (high ? 2.65 : 1.35), p.z, it.k >= 0 ? GOLD : 0xffe9b0, lbl, { k: it.k }, 0.42, { size: 52 });
    });
    let next = 0;
    if (this.diff === 2) this.ui.toast('بعض الأنوار عالية: اقفز بالمسافة لتلتقطها!', 'gold', 4);
    this.counter(`الكلمة ${toAr(0)} / ${toAr(parts.length)}`);
    this.objective('اجمع كلمات الشهادة بالترتيب', 'ابدأ بـ «أشهدُ»');
    await this.until(() => {
      for (const o of orbs) {
        if (!o.parent || !this.touching(o)) continue;
        const k = o.userData.k;
        if (k === next) {
          this.good(null, o.position); this.sfx.collect(); this.remove(o); next++;
          this.counter(`الكلمة ${toAr(next)} / ${toAr(parts.length)}`);
          this.objective(parts.slice(0, next).join(' '), next < parts.length ? 'أكمل الكلمات بالترتيب' : '');
          this.ui.toast(parts[k], 'gold', 2.2);
        } else if (k === -1) {
          this.miss('هذه كلمة طيبة، لكنها ليست من كلمات الشهادة.'); this.remove(o);
        } else {
          this.miss('ليست هذه الكلمة التالية. تذكّر الترتيب!', 'ord' + k, 2.5);
        }
      }
      return next >= parts.length;
    });
    for (const o of orbs) if (o.parent) this.remove(o);
    this.g.world.peak.setLit(true);
    this.sfx.win();
    const ty = C.y + 17;
    this.fx.fountain(new THREE.Vector3(tower.x, ty, tower.z), [0xffe08a, 0xffffff, 0xffc04a], 160, 16);
    this.counter(null); this.objective('');
    const c = this.cine([new THREE.Vector3(C.x + 4, C.y + 4, C.z + 10), new THREE.Vector3(C.x + 16, C.y + 10, C.z + 4), new THREE.Vector3(C.x + 20, C.y + 18, C.z - 6)],
      new THREE.Vector3(tower.x, C.y + 24, tower.z), 7, { hold: true });
    await this.say(T.shahada.after);
    await c; this.g.endCine();
  }
}

// ═══════════════════════ 2. الصلاة ═══════════════════════
export class SalahStage extends Stage {
  setup() {
    const S = this.P.salah;
    this.S = S;
    const st = S.W(0, 27), dir = rot2(0, -1, S.yaw);
    this.start = { x: st.x, z: st.z, yaw: Math.atan2(dir[0], dir[1]) };
  }
  async run() {
    const S = this.S;
    await this.say(T.salah.intro);
    await this.goTo(S.fountain.x, S.fountain.z, 'اذهب إلى نافورة الوضوء', 'في فناء المسجد', 2.6, BLUE);
    await this.say(T.salah.wuduIntro);
    await this.order('خطوات الوضوء', T.salah.wudu[this.diff]);
    this.fx.burst(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1.2, this.player.pos.z), BLUE, 40, 3, 1.2, 0.3, 2);
    this.ui.toast('توضّأتَ! «الطُّهور شطر الإيمان»', 'good');
    await this.say(T.salah.timesIntro);

    const prayers = T.salah.prayers;
    const slots = [-12, -6, 0, 6, 12];
    const gateOrder = this.diff === 0 ? prayers.map((_, i) => i) : shuffle(prayers.map((_, i) => i));
    const gates = gateOrder.map((pi, si) => {
      const p = S.W(slots[si], 13);
      const g = placeGate(this, 0xffe08a, `صلاة ${prayers[pi].name}`, p.x, p.z, S.yaw);
      return { pi, x: p.x, z: p.z, g };
    });
    const order = this.diff === 2 ? shuffle(prayers.map((_, i) => i)) : prayers.map((_, i) => i);
    let round = 0;
    for (const pi of order) {
      const pr = prayers[pi];
      round++;
      this.counter(`الصلاة ${toAr(round)} / ${toAr(prayers.length)}`);
      this.objective('راقب السماء…', '');
      await this.guard(this.sky.animateTo(pr.time, 3.2));
      this.objective(pr.clue, 'اركض إلى بوابة الصلاة الصحيحة');
      this.ui.toast(pr.clue, 'gold', 4.5);
      const ent = gates.map((gt) => this.enter(gt, 1.5));
      let left = this.pick(30, 20, 14), helped = null;
      const ok = await this.until((dt) => {
        if (!helped) {
          left -= dt; this.ui.setTimer(left);
          if (left <= 0) {
            this.miss(`انتهى الوقت! حان وقت صلاة ${pr.name}.`);
            const gt = gates.find((x) => x.pi === pi);
            helped = this.marker(gt.x, gt.z, GREEN, 1.6, 12);
            this.ui.setTimer(null);
          }
        }
        for (let i = 0; i < gates.length; i++) {
          if (!ent[i]()) continue;
          if (gates[i].pi === pi) return gates[i];
          this.miss(`ليس هذا وقت صلاة ${prayers[gates[i].pi].name}.`, 'g' + i, 1.2);
        }
        return null;
      });
      this.ui.setTimer(null);
      if (helped) this.remove(helped);
      ok.g.userData.setColor(GREEN);
      this.good(`أحسنت! حان وقت صلاة ${pr.name}`, new THREE.Vector3(ok.x, this.player.pos.y + 2, ok.z), GREEN);
      await this.ask([{ q: `كم عدد ركعات صلاة ${pr.name}؟`, a: T.salah.rakOpts[pr.rak], e: `صلاة ${pr.name} ${T.salah.rakOpts[pr.rak][0]}.` }], 'عدد الركعات');
      ok.g.userData.setColor(0xffe08a);
    }
    this.counter(null);
    await this.guard(this.sky.animateTo(10, 2.5));
    await this.say(T.salah.after);
  }
}

// ═══════════════════════ 3. الزكاة ═══════════════════════
function zakatBag() {
  const b = new Builder();
  b.sphere(0.22, 0xd9c7a0, 0, 0, 0, 1, 1.05, 1, 10, 8);
  b.torus(0.1, 0.035, 0xe2b04a, 0, 0.2, 0, Math.PI / 2, 10);
  b.cone(0.1, 0.12, 0xd9c7a0, 0, 0.29, 0, 8);
  return b.mesh(MAT.smooth, false);
}

export class ZakatStage extends Stage {
  setup() {
    const Z = this.P.zakat;
    this.Z = Z;
    const s = STAGE_SITES.zakat;
    this.start = { x: s.x, z: s.z, yaw: Math.PI };
  }
  async run() {
    const Z = this.Z;
    await this.say(T.zakat.intro);
    await this.goTo(Z.house.x, Z.house.z, 'اذهب إلى «بيت الزكاة»', 'في شمال السوق', 3);
    await this.say(T.zakat.calcIntro);
    await this.ask(T.zakat.calc[this.diff], 'حساب الزكاة');
    await this.say(T.zakat.deliverIntro);

    const nE = this.pick(3, 4, 4), nN = this.pick(1, 2, 3);
    const people = shuffle([
      ...shuffle(T.zakat.eligible).slice(0, nE).map((p) => ({ ...p, ok: true })),
      ...shuffle(T.zakat.notEligible).slice(0, nN).map((p) => ({ ...p, ok: false })),
    ]);
    const spots = shuffle(Z.npcSpots.slice());
    const npcs = people.map((p, i) => {
      const sp = spots[i];
      const kind = i % 3 === 1 ? 'woman' : 'man';
      const cloth = p.ok ? [0x9a8a70, 0x7a6a5a, 0x8c8f80, 0xa0907a][i % 4] : [0x6b2d7a, 0x1f5a8a, 0x8a1c2c][i % 3];
      const c = this.npc(kind, sp.x, sp.z, { yaw: sp.yaw, cloth, cloth2: p.ok ? 0xd8d0c0 : 0xffffff, trim: p.ok ? 0x8a7a60 : 0xe2b04a });
      const l = this.label('❔ ' + p.label, sp.x, this.gy(sp.x, sp.z) + 3.05, sp.z, { scale: 0.72, maxWidth: 520, size: 40 });
      return { ...p, c, l, sp, done: false };
    });
    const table = this.marker(Z.table.x, Z.table.z, GOLD, 1.6, 10);
    let given = 0;
    this.counter(`الزكاة ${toAr(0)} / ${toAr(nE)}`);
    const nav = () => { this.g.navTarget = this.player.char.carrying ? null : { x: Z.table.x, z: Z.table.z }; };
    await this.until(() => {
      const carrying = !!this.player.char.carrying;
      if (!carrying && this.dist(Z.table.x, Z.table.z) < 2.6) {
        this.player.char.setCarry(zakatBag()); this.sfx.collect();
        this.ui.toast('أخذتَ كيس الزكاة. ابحث عمّن يستحقه!', 'gold');
        this.objective('أعطِ الزكاة لمن يستحقها', 'اقرأ اللافتة فوق كل شخص');
      }
      nav();
      let near = null;
      for (const n of npcs) if (!n.done && this.dist(n.sp.x, n.sp.z) < 2.4) near = n;
      if (near && carrying) {
        this.ui.setPrompt('أعطِ الزكاة 🤲');
        if (this.pressE()) {
          if (near.ok) {
            near.done = true; given++;
            this.player.char.setCarry(null);
            near.l.setText('✔ ' + near.label, { bg: 'rgba(10,90,50,.88)', border: '#5fe39a' });
            this.good(near.thanks, new THREE.Vector3(near.sp.x, near.c.group.position.y + 2, near.sp.z), GREEN);
            this.counter(`الزكاة ${toAr(given)} / ${toAr(nE)}`);
            this.objective(given < nE ? 'خذ كيسًا آخر من الطاولة' : '', '');
          } else {
            this.miss(near.why, 'n' + near.label, 3);
          }
        }
      } else if (near && !carrying) {
        this.ui.setPrompt('خذ كيس الزكاة من الطاولة أولًا', true);
      } else this.ui.setPrompt(null);
      return given >= nE;
    });
    this.ui.setPrompt(null); this.g.navTarget = null;
    this.remove(table);
    this.counter(null);
    await this.say(T.zakat.after);
  }
}

// ═══════════════════════ 4. الصوم ═══════════════════════
export class SawmStage extends Stage {
  setup() {
    this.S = this.P.sawm;
    this.start = { x: this.S.arena.x, z: this.S.arena.z + 6, yaw: Math.PI };
  }
  async run() {
    const S = this.S, A = S.arena;
    await this.say(T.sawm.intro);
    await this.guard(this.sky.animateTo(3.6, 3));
    await this.say(T.sawm.suhoor);

    // ── السحور
    const nS = this.pick(3, 4, 5);
    const foods = shuffle(T.sawm.suhoorFoods).slice(0, nS);
    const used = [];
    const orbs = foods.map((f) => { const p = this.randIn(A.x, A.z, 4, 15, used, 4); used.push(p); return this.orb(p.x, this.gy(p.x, p.z) + 1.25, p.z, 0xffc56a, f); });
    let got = 0, left = this.pick(45, 38, 30);
    const total = left;
    this.objective('اجمع طعام السحور قبل الفجر!', '');
    this.counter(`السحور ${toAr(0)} / ${toAr(nS)}`);
    await this.until((dt) => {
      left -= dt; this.ui.setTimer(left);
      this.sky.setTime(3.6 + (1 - left / total) * 1.55);
      for (const o of orbs) if (o.parent && this.touching(o)) { this.remove(o); got++; this.good(null, o.position, 0xffc56a); this.counter(`السحور ${toAr(got)} / ${toAr(nS)}`); }
      return got >= nS || left <= 0;
    });
    this.ui.setTimer(null);
    if (got < nS) this.miss('طلع الفجر قبل أن تُكمل سحورك! بادر بالسحور في المرة القادمة.');
    else this.ui.toast('سحورٌ مبارك! «تسحّروا فإنّ في السحور بركة»', 'good');
    for (const o of orbs) if (o.parent) this.remove(o);
    this.sky.setTime(5.3);
    await this.say(T.sawm.fasting);

    // ── النهار: أعمال صالحة وتجنّب الطعام
    const target = this.pick(5, 7, 9), dur = this.pick(48, 52, 56);
    const nDeed = this.pick(5, 6, 6), nFood = this.pick(3, 5, 7), chase = this.pick(0, 0.7, 1.3);
    let deeds = 0, t = 0;
    const live = [];
    const spawn = (kind) => {
      const p = this.randIn(A.x, A.z, 3, 16, live.map((o) => o.position), 3);
      const isDeed = kind === 'deed';
      const txt = isDeed ? T.sawm.deeds[Math.floor(Math.random() * T.sawm.deeds.length)] : T.sawm.dayFoods[Math.floor(Math.random() * T.sawm.dayFoods.length)];
      const o = this.orb(p.x, this.gy(p.x, p.z) + 1.25, p.z, isDeed ? GREEN : RED, txt, { kind });
      live.push(o);
    };
    for (let i = 0; i < nDeed; i++) spawn('deed');
    for (let i = 0; i < nFood; i++) spawn('food');
    this.objective('اجمع الأعمال الصالحة 🟢 وابتعد عن الطعام والشراب 🔴', 'حتى تغرب الشمس');
    this.counter(`الأعمال الصالحة ${toAr(0)} / ${toAr(target)}`);
    await this.until((dt) => {
      t += dt;
      this.sky.setTime(5.3 + (t / dur) * (18.2 - 5.3));
      this.ui.setTimer(dur - t);
      const pp = this.player.pos;
      for (let i = live.length - 1; i >= 0; i--) {
        const o = live[i];
        if (o.userData.kind === 'food' && chase) {
          const dx = pp.x - o.position.x, dz = pp.z - o.position.z, d = Math.hypot(dx, dz);
          if (d < 8 && d > 0.5) { o.position.x += (dx / d) * chase * dt; o.position.z += (dz / d) * chase * dt; }
        }
        if (!this.touching(o)) continue;
        live.splice(i, 1); this.remove(o);
        if (o.userData.kind === 'deed') {
          deeds++; this.sfx.collect(); this.fx.burst(o.position, GREEN, 22, 4, 0.9, 0.35, 4);
          this.counter(deeds >= target ? `الأعمال الصالحة ${toAr(deeds)} ✔` : `الأعمال الصالحة ${toAr(deeds)} / ${toAr(target)}`);
          spawn('deed');
        } else {
          this.miss('أنت صائم! لا نأكل ولا نشرب حتى المغرب.', 'food', 1.2);
          spawn('food');
        }
      }
      return t >= dur;
    });
    this.ui.setTimer(null);
    for (const o of live) this.remove(o);
    if (deeds < target) this.miss(`جمعتَ ${toAr(deeds)} من الأعمال الصالحة. الصائم يملأ يومه بالخير!`);
    else this.ui.toast('ما شاء الله! ملأتَ يومك بالأعمال الصالحة', 'good');
    this.counter(null);
    await this.guard(this.sky.animateTo(18.4, 1.2));

    // ── الإفطار
    await this.say(T.sawm.maghrib);
    await this.goTo(S.majlis.x, S.majlis.z, 'اذهب إلى مائدة الإفطار', 'على البساط قرب الهلال', 2.4);
    await this.say(T.sawm.iftar);
    await this.ask([{ q: 'بماذا تبدأ إفطارك اقتداءً بالنبي ﷺ؟', a: ['🌴 تمر', '🍬 حلوى', '🧃 عصير'], e: 'كان النبي ﷺ يفطر على رُطَبات، فإن لم تكن فتمرات، فإن لم تكن حسا حسواتٍ من ماء.' }], 'الإفطار');
    this.fx.burst(new THREE.Vector3(S.majlisC.x, this.gy(S.majlisC.x, S.majlisC.z) + 1, S.majlisC.z), 0xffe07a, 50, 4, 1.4, 0.4, 3);
    await this.say(T.sawm.dua);
  }
}

// ═══════════════════════ 5. الحج ═══════════════════════
export class HajjStage extends Stage {
  setup() {
    this.H = this.P.hajj;
    const s = STAGE_SITES.hajj;
    this.start = { x: s.x, z: s.z, yaw: -Math.PI / 2 };
  }
  pilgrims() {
    const K = this.H.kaaba, list = [];
    const n = this.g.save.quality === 0 ? 16 : 28;
    for (let i = 0; i < n; i++) {
      const fem = i % 3 === 0;
      const c = createCharacter({ kind: fem ? 'woman' : 'man', cloth: fem ? 0xf4f1e8 : undefined, cloth2: 0xffffff });
      if (!fem) c.setOutfit('ihram');
      const r = 11.5 + (i % 7) * 1.4 + Math.random() * 0.6, th = Math.random() * Math.PI * 2;
      this.add(c.group);
      list.push({ c, r, th, w: (1.3 + Math.random() * 0.5) / r });
    }
    const y = this.gy(K.x + 12, K.z);
    const holder = this.add(new THREE.Group());
    holder.userData.update = (t, dt) => {
      for (const p of list) {
        p.th -= p.w * dt;
        const x = K.x + Math.cos(p.th) * p.r, z = K.z + Math.sin(p.th) * p.r;
        p.c.group.position.set(x, y, z);
        p.c.group.rotation.y = Math.atan2(Math.sin(p.th), -Math.cos(p.th));
        p.c.update(dt, 1.5, true);
      }
    };
    return list;
  }
  async run() {
    const H = this.H, K = H.kaaba;
    this.player.speedMul = this.pick(1.5, 1.4, 1.3);
    await this.say(T.hajj.intro);
    await this.goTo(H.miqat.x, H.miqat.z, 'اعبر بوابة الميقات', 'لتُحرِم', 3);
    this.player.char.setOutfit('ihram');
    this.fx.burst(new THREE.Vector3(this.player.pos.x, this.player.pos.y + 1, this.player.pos.z), 0xffffff, 60, 3.5, 1.4, 0.35, 1);
    const ih = T.hajj.ihram.slice();
    if (this.female) ih.splice(1, 0, 'والمرأة تُحرم في ثيابها الساترة المعتادة، ولا تلبس النقاب ولا القفازين.');
    await this.say(ih);

    // ── الطواف
    await this.goTo(H.tawafStart.x, H.tawafStart.z, 'اذهب إلى خط بداية الطواف', 'عند ركن الحجر الأسود', 2.6, GREEN);
    this.pilgrims();
    await this.say(T.hajj.tawaf);
    const laps = 7;
    let prog = 0, lap = 0, prevTh = null, warned = false;
    this.counter(`الطواف: الشوط ${toAr(1)} / ${toAr(laps)}`);
    this.objective('طُف حول الكعبة سبعة أشواط', 'اجعل الكعبة عن يسارك ⟲');
    await this.until(() => {
      const p = this.player.pos, dx = p.x - K.x, dz = p.z - K.z, r = Math.hypot(dx, dz);
      const th = Math.atan2(dz, dx);
      if (prevTh !== null && r < 24 && r > 4) prog -= angleDiff(prevTh, th);
      prevTh = th;
      if (r >= 24) this.ui.setPrompt('عُد إلى صحن المطاف لتُكمل الطواف', true); else this.ui.setPrompt(null);
      if (prog < lap * Math.PI * 2 - 1.3) {
        if (!warned) { warned = true; this.miss('الطواف عكس عقارب الساعة: اجعل الكعبة عن يسارك!'); }
        else this.ui.toast('اجعل الكعبة عن يسارك ⟲', 'bad', 1.5);
        prog = lap * Math.PI * 2;
      }
      if (prog >= (lap + 1) * Math.PI * 2) {
        lap++; this.sfx.correct();
        this.fx.burst(new THREE.Vector3(K.x, this.gy(K.x, K.z) + 12, K.z), GOLD, 30, 4, 1, 0.5, 2);
        if (lap < laps) { this.ui.toast(`أتممتَ الشوط ${toAr(lap)} — الله أكبر`, 'good', 2.2); this.counter(`الطواف: الشوط ${toAr(lap + 1)} / ${toAr(laps)}`); }
      }
      return lap >= laps;
    });
    this.ui.setPrompt(null); this.counter(null);
    await this.say(T.hajj.afterTawaf);

    // ── السعي
    await this.goTo(H.safa.x, H.safa.z, 'اذهب إلى الصفا', 'لتبدأ السعي', 3.2, GREEN);
    await this.say(T.hajj.sai);
    let leg = 0, toldGreen = false;
    while (leg < 7) {
      const to = leg % 2 === 0 ? H.marwa : H.safa, name = leg % 2 === 0 ? 'المروة' : 'الصفا';
      this.counter(`السعي: الشوط ${toAr(leg + 1)} / ${toAr(7)}`);
      const m = this.marker(to.x, to.z, GREEN, 2.4, 25);
      this.g.navTarget = to; this.objective(`اسعَ إلى ${name}`, '');
      await this.until(() => {
        const pz = this.player.pos.z;
        if (!toldGreen && pz < -30 && pz > -50) { toldGreen = true; this.ui.toast('بين العَلَمين الأخضرين يُسرع الرجال في المشي', 'gold', 4); }
        return this.dist(to.x, to.z) < 3.5;
      });
      this.remove(m); this.sfx.collect(); leg++;
      this.ui.toast(`الشوط ${toAr(leg)} ✔`, 'good', 1.6);
    }
    this.g.navTarget = null; this.counter(null);
    await this.say(T.hajj.afterSai);

    // ── منى
    await this.goTo(H.mina.x, H.mina.z, 'اذهب إلى مِنى', 'مدينة الخيام البيضاء', 7);
    await this.say(T.hajj.mina);
    await this.guard(this.sky.animateTo(21, 2.2));
    this.ui.banner('اليوم التاسع من ذي الحجة', 'يوم عرفة');
    await this.guard(this.sky.animateTo(9, 2.6));

    // ── عرفة
    await this.goTo(H.arafat.x, H.arafat.z, 'اذهب إلى عرفة', 'قرب جبل الرحمة', 8);
    await this.say(T.hajj.arafat);
    await this.guard(this.sky.animateTo(13, 1.5));
    const need = this.pick(16, 18, 20);
    let k = 0, duaT = 0;
    const zone = this.marker(H.arafat.x, H.arafat.z, GOLD, 26, 0);
    this.objective('ابقَ في عرفة وادعُ الله حتى الغروب', 'لا تخرج من الدائرة الذهبية');
    await this.until((dt) => {
      const inside = this.dist(H.arafat.x, H.arafat.z) < 26;
      if (inside) {
        k += dt / need; duaT -= dt;
        this.sky.setTime(13 + k * 5.2);
        if (duaT <= 0) { duaT = 6; this.ui.toast(T.hajj.arafatDua, 'gold', 4.5); }
        if (Math.random() < 0.3) { const a = Math.random() * 6.28; this.fx.emit(this.player.pos.x + Math.cos(a), this.player.pos.y + 0.3, this.player.pos.z + Math.sin(a), 0, 1.4, 0, 0xffe7a0, 1.4, 0.18, -0.3); }
      } else this.miss('ابقَ داخل حدود عرفة حتى تغرب الشمس!', 'arafat', 4);
      this.counter(`الوقوف بعرفة ${toAr(Math.min(100, Math.round(k * 100)))}٪`);
      return k >= 1;
    });
    this.remove(zone); this.counter(null);
    await this.say(T.hajj.afterArafat);

    // ── مزدلفة
    await this.goTo(H.muzdalifah.x, H.muzdalifah.z, 'اذهب إلى مزدلفة', '', 8);
    await this.guard(this.sky.animateTo(21.5, 2));
    await this.say(T.hajj.muzdalifah);
    const MZ = H.muzdalifah, pebbles = [];
    for (let i = 0; i < 7; i++) { const p = this.randIn(MZ.x, MZ.z, 3, 13, pebbles.map((o) => o.position), 2.5); pebbles.push(this.orb(p.x, this.gy(p.x, p.z) + 0.7, p.z, 0xdfe6ff, null, {}, 0.2)); }
    let pc = 0;
    this.objective('التقط سبع حصيات صغيرة', '');
    this.counter(`الحصى ${toAr(0)} / ${toAr(7)}`);
    await this.until(() => {
      for (const o of pebbles) if (o.parent && this.touching(o, 1.5)) { this.remove(o); pc++; this.sfx.collect(); this.counter(`الحصى ${toAr(pc)} / ${toAr(7)}`); }
      return pc >= 7;
    });
    this.counter(null);
    await this.guard(this.sky.animateTo(7.2, 2.5));
    this.ui.banner('يوم النحر', 'العاشر من ذي الحجة — يوم العيد');

    // ── رمي جمرة العقبة
    await this.goTo(H.throwSpot.x, H.throwSpot.z, 'اذهب إلى جمرة العقبة', 'قف أمامها لترمي', 2.6);
    await this.say(T.hajj.jamarat);
    this.player.teleport(H.throwSpot.x, H.throwSpot.z, Math.PI / 2);
    this.player.frozen = true;
    const J = H.jamarat, jy = this.gy(J.x, J.z);
    const zw = this.pick(0.3, 0.2, 0.13), spd = this.pick(2.0, 2.8, 3.6);
    let hits = 0, misses = 0, v = 0.5, ph = 0, flying = null;
    this.objective('اضغط «ارمِ» عندما يكون المؤشر في المنطقة الخضراء', 'وقل: الله أكبر');
    this.counter(`الرمي ${toAr(0)} / ${toAr(7)}`);
    await this.until((dt) => {
      ph += dt * spd; v = 0.5 + 0.48 * Math.sin(ph);
      this.ui.setMeter(v, 0.5 - zw / 2, 0.5 + zw / 2);
      if (flying) {
        flying.t += dt / 0.75;
        const f = flying, k2 = Math.min(1, f.t);
        f.m.position.lerpVectors(f.a, f.b, k2); f.m.position.y += Math.sin(k2 * Math.PI) * 3.2;
        if (k2 >= 1) {
          if (f.hit) {
            hits++; this.sfx.hit(); this.fx.burst(f.b, 0xfff0c0, 24, 3.5, 0.8, 0.3, 6);
            this.ui.toast(`الله أكبر ✔ (${toAr(hits)} / ${toAr(7)})`, 'good', 1.5);
            this.counter(`الرمي ${toAr(hits)} / ${toAr(7)}`);
          } else { this.sfx.land(); this.ui.toast('لم تُصب الحوض، حاول مرة أخرى', 'bad', 1.4); }
          this.remove(f.m); flying = null;
        }
      } else {
        this.ui.setPrompt('ارمِ الحصاة 🤾');
        if (this.pressE()) {
          const hit = Math.abs(v - 0.5) <= zw / 2;
          if (!hit && misses < 3) { misses++; this.mistakes++; }
          const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12, 0), new THREE.MeshStandardMaterial({ color: 0xbdb6aa }));
          const a = new THREE.Vector3(this.player.pos.x + 0.3, this.player.pos.y + 1.5, this.player.pos.z);
          const b = hit ? new THREE.Vector3(J.x - 0.8, jy + 3.5, J.z + (Math.random() - 0.5) * 2) : new THREE.Vector3(J.x - 6.5 + Math.random() * 2, jy + 0.1, J.z + (Math.random() - 0.5) * 4);
          flying = { m: this.add(m), a, b, t: 0, hit };
          this.sfx.throw();
        }
      }
      return hits >= 7 && !flying;
    });
    this.ui.setPrompt(null); this.ui.setMeter(null); this.counter(null);
    this.player.frozen = false;
    await this.say(T.hajj.rest);
    if (this.diff >= 1) await this.order('رتّب مناسك الحج', T.hajj.order[this.diff]);
    this.player.char.setOutfit('normal');
    this.player.speedMul = 1;
  }
}
