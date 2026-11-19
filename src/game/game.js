import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Sky } from '../engine/sky.js';
import { Particles, fxTime, makeMarker, makeOrb, makeLabel } from '../engine/fx.js';
import { World } from '../world/world.js';
import { Input } from '../core/input.js';
import { AudioSys } from '../core/audio.js';
import { Player } from './player.js';
import { createLantern } from './character.js';
import { windTime } from '../core/builder.js';
import { UI } from '../ui/ui.js';
import { STAGE_ORDER, STAGE_INFO, T, PEARLS, pickQuiz } from './content.js';
import { STAGE_SITES, L } from '../world/layout.js';
import { ABORT } from './stage.js';
import { ShahadaStage, SalahStage, ZakatStage, SawmStage, HajjStage } from './stages_islam.js';
import { AllahStage, MalaikaStage, KutubStage, RusulStage, AkhirahStage, QadarStage } from './stages_iman.js';
import { mulberry32, damp, smoothstep, toAr, clamp } from '../core/utils.js';

const STAGES = {
  shahada: ShahadaStage, salah: SalahStage, zakat: ZakatStage, sawm: SawmStage, hajj: HajjStage,
  allah: AllahStage, malaika: MalaikaStage, kutub: KutubStage, rusul: RusulStage, akhirah: AkhirahStage, qadar: QadarStage,
};
const SAVE_KEY = 'rihlat-alnoor-v1';
const DEF = { name: '', kind: 'boy', diff: 0, quality: null, sound: true, stars: {}, pearls: [], seenIntro: false, finale: false, pos: null };
const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));
const _v = new THREE.Vector3(), _f = new THREE.Vector3();

export class Game {
  constructor() {
    this.mode = 'boot'; this.stage = null; this.cine = null; this.navTarget = null;
    this.t = 0; this.frameN = 0; this.saveT = 0; this._pendingLight = null; this.fireworks = false;
  }

  // ───────────────────────── save ─────────────────────────
  loadSave() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { s = null; }
    return Object.assign(JSON.parse(JSON.stringify(DEF)), s || {});
  }
  persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch (e) { /* private mode */ } }

  // ───────────────────────── boot ─────────────────────────
  async init() {
    const bar = document.getElementById('bootbar'), txt = document.getElementById('boottxt');
    const prog = (k, m) => { bar.style.width = Math.round(k * 100) + '%'; if (m) txt.textContent = m; };
    const paint = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    prog(0.05, 'تحميل الخطوط العربية…');
    try {
      await Promise.race([
        Promise.all(['900 40px Cairo', '700 40px Cairo', '400 40px Cairo', '700 40px Amiri'].map((f) => document.fonts.load(f, 'بسم'))),
        sleep(3),
      ]);
    } catch (e) { /* fonts optional */ }

    this.save = this.loadSave();
    const touch = matchMedia('(pointer: coarse)').matches;
    if (this.save.quality === null) this.save.quality = touch ? 0 : 1;
    const q = this.save.quality;

    const canvas = document.getElementById('c');
    try {
      this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    } catch (e) {
      txt.textContent = 'عذرًا، هذا المتصفح لا يدعم الرسوم ثلاثية الأبعاد (WebGL).';
      throw e;
    }
    const r = this.renderer;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.0;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(58, 1, 0.3, 4000);
    this.sky = new Sky(this.scene);
    this.particles = new Particles(this.scene);
    this.audio = new AudioSys();
    this.input = new Input(canvas);
    this.ui = new UI(this);
    this.input.onTouchMode = () => this.ui.setTouch();
    this.input.onJoy = (on, x, y, dx, dy) => this.ui.joy(on, x, y, dx, dy);
    if (touch) { this.input.isTouch = true; this.ui.setTouch(); }

    prog(0.15, 'بناء الجزيرة والمعالم…');
    await paint();
    this.world = new World(this.scene, this.sky, this.particles, { veg: [0.45, 0.75, 1][q] }, (k) => prog(0.15 + k * 0.75));
    prog(0.92, 'تجهيز الشخصيات…');
    await paint();
    this.player = new Player(this, this.save.kind);
    this.player.teleport(0, 30, Math.PI);
    this.lantern = createLantern();
    this.lantern.position.set(1, 9, 30);
    this.scene.add(this.lantern);

    const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: q >= 1 ? 4 : 0 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.5, 0.65, 1.0);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.buildPearls();
    this.buildSiteMarkers();
    this.applySettings();
    this.refreshWorld();

    // pre-compile shaders to avoid hitches
    try { r.compile(this.scene, this.camera); } catch (e) { /* ignore */ }
    prog(1, 'جاهز!');
    this._lw = 0; this._lh = 0;
    this.resize();
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
    const boot = document.getElementById('boot');
    boot.style.opacity = '0';
    setTimeout(() => boot.remove(), 900);
    window.addEventListener('beforeunload', () => this.persist());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.persist(); });
    this.showMenu();
  }

  applySettings() {
    const s = this.save, q = s.quality;
    const dpr = window.devicePixelRatio || 1;
    this.renderer.setPixelRatio([Math.min(dpr, 1), Math.min(dpr, 1.5), Math.min(dpr, 2)][q]);
    this.bloom.enabled = q >= 1;
    const sz = [1024, 2048, 4096][q];
    const sh = this.sky.sun.shadow;
    if (sh.mapSize.x !== sz) { sh.mapSize.set(sz, sz); if (sh.map) { sh.map.dispose(); sh.map = null; } }
    this.audio.setEnabled(s.sound);
    this._lw = 0;
    this.ui.updateProgress();
  }

  resize() {
    const c = this.renderer.domElement;
    const w = Math.max(2, c.clientWidth || innerWidth), h = Math.max(2, c.clientHeight || innerHeight);
    if (w === this._lw && h === this._lh) return;
    this._lw = w; this._lh = h;
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.fov = w / h < 0.8 ? 70 : 58;
    this.camera.updateProjectionMatrix();
    this.particles.scale.value = h * this.renderer.getPixelRatio() * 0.9;
  }

  // ───────────────────────── progress ─────────────────────────
  isDone(id) { return !!this.save.stars[id]; }
  isUnlocked(id) {
    const i = STAGE_ORDER.indexOf(id);
    return i === 0 || this.isDone(id) || this.isDone(STAGE_ORDER[i - 1]);
  }
  nextStageId() { return STAGE_ORDER.find((id) => !this.isDone(id)) || null; }
  refreshWorld() {
    const s = this.save.stars, skip = this._pendingLight;
    const lit = (id) => !!s[id] && id !== skip;
    const islam = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'islam').map(lit);
    const iman = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'iman').map(lit);
    this.world.monument.setProgress(islam, iman);
    this.world.peak.setLit(lit('shahada'));
    this.refreshSiteMarkers();
    this.ui.updateProgress();
  }

  // ───────────────────────── world markers ─────────────────────────
  buildSiteMarkers() {
    this.siteMarkers = {};
    for (const id of STAGE_ORDER) {
      const s = STAGE_SITES[id], info = STAGE_INFO[id];
      const g = new THREE.Group();
      const m = makeMarker(0xffd45a, 2.4, 70);
      const l = makeLabel(`${info.icon} ${info.title}`, { scale: 1.0 });
      l.position.y = 5.4;
      g.add(m, l);
      g.position.set(s.x, this.world.groundAt(s.x, s.z), s.z);
      g.userData = { m, l };
      this.scene.add(g);
      this.siteMarkers[id] = g;
    }
  }
  refreshSiteMarkers() {
    const next = this.nextStageId();
    for (const id of STAGE_ORDER) {
      const g = this.siteMarkers[id], done = this.isDone(id), open = this.isUnlocked(id);
      g.visible = open && this.mode !== 'stage';
      g.userData.m.userData.setColor(done ? 0x5fe39a : 0xffd45a);
      const beam = g.userData.m.children[2];
      beam.visible = id === next;
      g.userData.l.setText(`${STAGE_INFO[id].icon} ${STAGE_INFO[id].title}${done ? ' ' + '★'.repeat(this.save.stars[id]) : ''}`);
    }
  }
  buildPearls() {
    const rnd = mulberry32(777), w = this.world, pts = [];
    const keys = [...Object.values(STAGE_SITES), { x: 0, z: 0 }];
    for (let t = 0; t < 6000 && pts.length < PEARLS.length; t++) {
      const x = -320 + rnd() * 570, z = -240 + rnd() * 480, h = w.heightAt(x, z);
      if (h < 2.2 || h > 40) continue;
      if (pts.some((p) => Math.hypot(p.x - x, p.z - z) < 34)) continue;
      if (keys.some((p) => Math.hypot(p.x - x, p.z - z) < 14)) continue;
      const [rx, rz] = w.resolve(x, z, 0.9);
      if (Math.abs(rx - x) + Math.abs(rz - z) > 0.01) continue;
      pts.push({ x, z });
    }
    this.pearls = pts.map((p, i) => {
      const o = makeOrb(0x7fd1ff, 0.32);
      o.position.set(p.x, w.groundAt(p.x, p.z) + 1.3, p.z);
      o.userData.i = i; o.userData.baseY = o.position.y;
      o.visible = !this.save.pearls.includes(i);
      this.scene.add(o);
      return o;
    });
  }
  updatePearls(dt, t) {
    const p = this.player.pos;
    for (const o of this.pearls) {
      if (!o.visible) continue;
      o.position.y = o.userData.baseY + Math.sin(t * 2 + o.userData.i) * 0.2;
      o.userData.core.rotation.y += dt * 2;
      const dx = o.position.x - p.x, dz = o.position.z - p.z;
      if (dx * dx + dz * dz < 2.2 && Math.abs(o.position.y - (p.y + 1)) < 1.6 && this.mode !== 'menu') {
        o.visible = false;
        if (!this.save.pearls.includes(o.userData.i)) this.save.pearls.push(o.userData.i);
        this.persist();
        this.audio.sfx.collect();
        this.particles.burst(o.position, 0x7fd1ff, 30, 4, 1, 0.4, 4);
        this.ui.toast(`💎 لؤلؤة معرفة (${toAr(this.save.pearls.length)} / ${toAr(PEARLS.length)}): ${PEARLS[o.userData.i]}`, 'gold', 6.5);
        this.ui.updateProgress();
      }
    }
  }

  // ───────────────────────── cinematics ─────────────────────────
  cinematic(points, look, dur, { hold = false, lookTo = null } = {}) {
    return new Promise((res) => {
      if (this.cine && this.cine.res) this.cine.res();
      this.cine = { curve: new THREE.CatmullRomCurve3(points), look: look.clone(), lookTo: lookTo ? lookTo.clone() : null, t: 0, dur, hold, res, done: false };
    });
  }
  endCine() {
    if (!this.cine) return;
    const c = this.cine; this.cine = null;
    if (!c.done) c.res();
  }
  updateCine(dt) {
    const c = this.cine;
    c.t += dt;
    const k = clamp(c.t / c.dur, 0, 1), e = k * k * (3 - 2 * k);
    this.camera.position.copy(c.curve.getPoint(e));
    _v.copy(c.look); if (c.lookTo) _v.lerp(c.lookTo, e);
    this.camera.lookAt(_v);
    if (k >= 1 && !c.done) { c.done = true; c.res(); if (!c.hold) this.cine = null; }
  }

  // ───────────────────────── menus ─────────────────────────
  previewKind(kind) { if (kind !== this.player.kind) { this.player.setKind(kind); this.player.syncVisual(0); } }

  async showMenu() {
    this.mode = 'menu';
    this.ui.showHud(false);
    this.ui.setObjective(''); this.ui.setPrompt(null); this.ui.setNav(null);
    this.sky.speed = 0.06;
    const r = await this.ui.mainMenu();
    this.audio.init();
    if (r.fresh) {
      const keep = { quality: this.save.quality, sound: this.save.sound };
      this.save = Object.assign(JSON.parse(JSON.stringify(DEF)), keep);
      for (const o of this.pearls) o.visible = true;
    }
    this.save.name = r.name; this.save.kind = r.kind; this.save.diff = r.diff;
    this.persist();
    this.previewKind(r.kind);
    this.applySettings();
    this.sky.speed = 0.02;
    this.ui.showHud(true);
    this.refreshWorld();
    if (!this.save.seenIntro) {
      this.player.teleport(0, 30, Math.PI);
      await this.intro();
    } else {
      const p = this.save.pos;
      if (p && Math.abs(p.x) < 400 && Math.abs(p.z) < 400) this.player.teleport(p.x, p.z, p.yaw);
      else this.player.teleport(0, 30, Math.PI);
      this.mode = 'free';
      this.ui.banner(`أهلًا بعودتك يا ${this.save.name || 'بطل النور'}!`, 'تابع رحلتك');
    }
  }

  async intro() {
    this.mode = 'cutscene';
    const pts = [[-70, 70, 140], [80, 60, 90], [110, 55, -40], [20, 45, -120], [-60, 40, -40], [-14, 18, 46]].map((p) => new THREE.Vector3(...p));
    const c = this.cinematic(pts, new THREE.Vector3(0, 10, 0), 20, { hold: true });
    this.ui.banner('رحلة النور', 'جزيرة الأركان');
    await this.ui.dialog(T.welcome);
    await Promise.race([c, sleep(0.1)]);
    this.endCine();
    this.save.seenIntro = true; this.persist();
    this.mode = 'free';
    this.ui.toast(this.input.isTouch ? T.controlsTouch : T.controls, 'gold', 9);
  }

  hudAction(a) {
    if (this.mode === 'menu' || this.mode === 'boot') return;
    if (a === 'sound') { this.save.sound = !this.save.sound; this.applySettings(); this.persist(); return; }
    if (this.ui.busy) return;
    if (a === 'pause') this.openPause();
    else if (a === 'map') this.openMap();
    else if (a === 'journal') this.ui.journal();
  }
  async openPause() {
    const r = await this.ui.pause();
    if (r === 'map') return this.openMap();
    if (r === 'journal') return this.ui.journal();
    if (r === 'settings') { await this.ui.settings(); this.persist(); return; }
    if (r === 'how') return this.ui.howTo();
    if (r === 'menu') {
      if (this.stage) this.quitStage(true);
      if (this.cine) this.endCine();
      this.persist();
      return this.showMenu();
    }
  }
  async openMap() {
    const r = await this.ui.map();
    if (!r) return;
    if (this.stage || this.mode !== 'free') { this.ui.toast('أكمل التحدّي الحالي أو اخرج منه أولًا', 'bad'); return; }
    await this.travel(r);
  }
  siteSpot(id) {
    const s = STAGE_SITES[id];
    if (s.angle !== undefined) {
      const r = 30;
      return { x: L.garden.x + Math.sin(s.angle) * r, z: L.garden.z + Math.cos(s.angle) * r, yaw: Math.atan2(-Math.sin(s.angle), -Math.cos(s.angle)) };
    }
    const dx = -s.x, dz = 30 - s.z, d = Math.hypot(dx, dz) || 1;
    const x = s.x + (dx / d) * 7, z = s.z + (dz / d) * 7;
    return { x, z, yaw: Math.atan2(s.x - x, s.z - z) };
  }
  async travel(id) {
    this.mode = 'cutscene';
    this.audio.sfx.whoosh();
    await this.ui.fade(true, 0.4);
    if (id === 'plaza') this.player.teleport(0, 30, Math.PI);
    else { const s = this.siteSpot(id); this.player.teleport(s.x, s.z, s.yaw); }
    await this.ui.fade(false, 0.4);
    this.mode = 'free';
  }

  // ───────────────────────── stages ─────────────────────────
  async startStage(id) {
    if (this.stage || this.mode !== 'free') return;
    const info = STAGE_INFO[id];
    const S = new STAGES[id](this, id);
    this.stage = S; this.mode = 'stage';
    this.navTarget = null;
    this.ui.setPrompt(null);
    this.audio.sfx.whoosh();
    await this.ui.fade(true, 0.45);
    this.sky.speed = 0;
    this.sky.setWeather('clear');
    S.setup();
    this.player.extraColliders = S.colliders;
    for (const c of S.colliders) if (c.br === undefined) c.br = c.hw !== undefined ? Math.hypot(c.hw, c.hd) : c.r;
    const st = S.start || this.siteSpot(id);
    this.player.teleport(st.x, st.z, st.yaw);
    this.refreshSiteMarkers();
    this.ui.setStage(info.full);
    await this.ui.fade(false, 0.45);
    this.ui.banner(info.full, info.place);
    let ok = false;
    try {
      await S.run();
      for (const c of S.colliders) if (c.br === undefined) c.br = c.r;
      S.objective('الاختبار الأخير', 'أجب عن الأسئلة لتحصل على النجوم');
      await S.ask(pickQuiz(id, this.save.diff), 'اختبار: ' + info.title);
      ok = true;
    } catch (e) {
      if (e !== ABORT) { console.error(e); this.ui.toast('حدث خطأ غير متوقع، أعد المحاولة', 'bad'); }
    }
    if (!ok) { if (this.stage === S) this.endStage(S); return; }
    const [a, b] = info.thr, m = S.mistakes;
    const stars = m <= a ? 3 : m <= b ? 2 : 1;
    const first = !this.isDone(id);
    this.save.stars[id] = Math.max(this.save.stars[id] || 0, stars);
    this.persist();
    if (first) this._pendingLight = id;
    this.endStage(S);
    this.mode = 'cutscene';
    this.audio.sfx.win();
    this.particles.fountain(this.player.pos.clone(), [0xffd45a, 0xffffff, 0x7fe0a0, 0x7fd1ff], 140, 13);
    const r = await this.ui.result({ id, stars });
    if (r === 'replay') { this._pendingLight = null; this.refreshWorld(); this.mode = 'free'; return this.startStage(id); }
    await this.celebrate(id, first);
  }

  endStage(S) {
    S.cleanup();
    this.stage = null; this.mode = 'free';
    const p = this.player;
    p.extraColliders = null; p.frozen = false; p.speedMul = 1;
    p.char.setOutfit('normal'); p.char.setCarry(null);
    this.endCine();
    this.navTarget = null;
    this.ui.setStage(null); this.ui.setObjective(''); this.ui.setNav(null); this.ui.setPrompt(null);
    this.sky.setWeather('clear');
    this.sky.animateTo(10, 2.5).then(() => { if (!this.stage) this.sky.speed = 0.02; });
    this.refreshWorld();
  }

  quitStage(silent = false) {
    const S = this.stage;
    if (!S) return;
    S.abort();
    this.ui.closeAll();
    this.endStage(S);
    if (!silent) this.ui.toast('خرجتَ من التحدّي، ويمكنك العودة إليه متى شئت.', 'gold');
  }

  async celebrate(id, first) {
    const info = STAGE_INFO[id], isl = info.kind === 'islam';
    if (!first) { this.mode = 'free'; this.showNextHint(); return; }
    const list = STAGE_ORDER.filter((x) => STAGE_INFO[x].kind === info.kind), i = list.indexOf(id);
    const be = isl ? (i / 5) * Math.PI * 2 : (i / 6) * Math.PI * 2 + Math.PI / 6, R = isl ? 12 : 25.5;
    const H = L.plaza.h + 1.08;
    const cx = Math.sin(be) * R, cz = -Math.cos(be) * R;
    this.mode = 'cutscene';
    await this.ui.fade(true, 0.5);
    const pr = R + (isl ? 9 : 5);
    this.player.teleport(Math.sin(be) * pr, -Math.cos(be) * pr, Math.atan2(-Math.sin(be), Math.cos(be)));
    const look = new THREE.Vector3(cx, H + (isl ? 7.5 : 4.4), cz);
    const pts = [];
    const orbitR = isl ? 15 : 9;
    for (let k = 0; k <= 4; k++) {
      const a = be - 0.8 + k * 0.4;
      pts.push(new THREE.Vector3(cx + Math.sin(a) * orbitR, H + (isl ? 4 : 2.6) + k * 0.7, cz - Math.cos(a) * orbitR));
    }
    const c = this.cinematic(pts, look, 7);
    await this.ui.fade(false, 0.5);
    await sleep(0.9);
    this._pendingLight = null;
    this.refreshWorld();
    this.audio.sfx.win();
    this.particles.fountain(new THREE.Vector3(cx, H + (isl ? 13 : 5), cz), [0xffd45a, 0xffffff, isl ? 0xffe9a0 : 0x7fd1ff], 180, 12);
    const done = STAGE_ORDER.filter((x) => this.isDone(x)).length;
    this.ui.banner(isl ? `أضاء عمود ${info.title}!` : `أضاء مصباح ${info.title}!`, `${toAr(done)} من ${toAr(STAGE_ORDER.length)} أركان`);
    await c;
    this.mode = 'free';
    if (STAGE_ORDER.every((x) => this.isDone(x))) { if (!this.save.finale) await this.finale(); return; }
    if (id === 'hajj') {
      const c2 = this.cinematic([this.camera.position.clone(), new THREE.Vector3(30, 34, 40)], new THREE.Vector3(0, 18, 0), 4, { hold: true });
      this.mode = 'cutscene';
      await this.ui.dialog([
        'ما شاء الله تبارك الله! أضأتَ أعمدة الإسلام الخمسة، فاكتملت القبّة فوقها!',
        'تذكّر: هذه الأركان هي الأعمدة التي يقوم عليها بناء الإسلام.',
        'والآن إلى «حديقة الإيمان» في الشمال الشرقي، لنتعلّم أركان الإيمان الستة ونضيء مصابيحها.',
      ]);
      await c2; this.endCine();
      this.mode = 'free';
    }
    this.showNextHint();
  }

  showNextHint() {
    const next = this.nextStageId();
    if (next) this.ui.toast(`التالي: ${STAGE_INFO[next].full} — اتبع السهم الذهبي ونور سِراج`, 'gold', 5);
  }

  async finale() {
    this.mode = 'cutscene';
    await this.ui.fade(true, 0.6);
    this.sky.setTime(20.2);
    this.player.teleport(0, 34, Math.PI);
    const pts = [];
    for (let k = 0; k <= 8; k++) { const a = (k / 8) * Math.PI * 2 + 0.4; pts.push(new THREE.Vector3(Math.sin(a) * 52, 24 + Math.sin(k) * 5, Math.cos(a) * 52)); }
    const c = this.cinematic(pts, new THREE.Vector3(0, 13, 0), 26, { hold: true });
    await this.ui.fade(false, 0.6);
    this.fireworks = true;
    this.audio.sfx.win();
    this.ui.banner('ما شاء الله!', 'اكتملت رحلة النور');
    await this.ui.dialog(T.finale);
    await Promise.race([c, sleep(0.1)]);
    this.endCine();
    this.fireworks = false;
    this.save.finale = true; this.persist();
    this.mode = 'free';
    await this.ui.certificate();
    this.sky.animateTo(9.5, 3).then(() => (this.sky.speed = 0.02));
    this.ui.toast('تجوّل في الجزيرة، واجمع لآلئ المعرفة، وأعد المراحل لتجمع كل النجوم!', 'gold', 7);
  }

  // ───────────────────────── frame ─────────────────────────
  updateFree() {
    const p = this.player.pos;
    let best = null, bd = 4.4;
    for (const id of STAGE_ORDER) {
      const s = STAGE_SITES[id], d = Math.hypot(p.x - s.x, p.z - s.z);
      if (d < bd) { bd = d; best = id; }
    }
    if (best) {
      const info = STAGE_INFO[best];
      if (this.isUnlocked(best)) {
        const st = this.save.stars[best];
        this.ui.setPrompt(`${info.icon} ${st ? 'أعد' : 'ابدأ'}: ${info.full}${st ? ' ' + '★'.repeat(st) : ''}`);
        if (!this.ui.busy && this.input.take('interact')) this.startStage(best);
      } else {
        const prev = STAGE_ORDER[STAGE_ORDER.indexOf(best) - 1];
        this.ui.setPrompt(`🔒 أكمل «${STAGE_INFO[prev].title}» أولًا`, true);
      }
    } else this.ui.setPrompt(null);
    const next = this.nextStageId();
    if (next) {
      const info = STAGE_INFO[next];
      this.ui.setObjective(`التالي: ${info.full}`, `اذهب إلى «${info.place}» — اتبع السهم الذهبي`);
      this.navTarget = STAGE_SITES[next];
    } else {
      this.ui.setObjective('أتممتَ رحلة النور! 🌟', 'تجوّل واجمع لآلئ المعرفة وأعد المراحل لتجمع النجوم');
      this.navTarget = null;
    }
  }

  updateLantern(dt, t) {
    const L2 = this.lantern, p = this.player.pos, cy = this.player.camYaw;
    _v.set(p.x + Math.cos(cy) * 0.9 - Math.sin(cy) * 0.6, p.y + 2.3 + Math.sin(t * 2) * 0.12, p.z - Math.sin(cy) * 0.9 - Math.cos(cy) * 0.6);
    const nt = this.navTarget;
    if (nt && this.mode !== 'menu') {
      const dx = nt.x - p.x, dz = nt.z - p.z, d = Math.hypot(dx, dz);
      if (d > 6) { const k = Math.min(2.4, d * 0.2) * (0.6 + 0.4 * Math.sin(t * 1.6)); _v.x += (dx / d) * k; _v.z += (dz / d) * k; }
    }
    if (L2.position.distanceToSquared(_v) > 400) L2.position.copy(_v);
    L2.position.x = damp(L2.position.x, _v.x, 4, dt); L2.position.y = damp(L2.position.y, _v.y, 4, dt); L2.position.z = damp(L2.position.z, _v.z, 4, dt);
    L2.rotation.y += dt * 0.8;
    const n = this.sky.night;
    L2.userData.light.intensity = 3 + n * 18;
    L2.userData.halo.scale.setScalar(1.4 + n * 1.2 + Math.sin(t * 3) * 0.08);
  }

  updateNav() {
    const nt = this.navTarget;
    if (!nt || this.mode === 'menu' || this.cine) { this.ui.setNav(null); return; }
    const p = this.player.pos, dx = nt.x - p.x, dz = nt.z - p.z, d = Math.hypot(dx, dz);
    if (d < 5) { this.ui.setNav(null); return; }
    this.camera.getWorldDirection(_f); _f.y = 0; _f.normalize();
    const rx = -_f.z, rz = _f.x;
    const ang = Math.atan2(dx * rx + dz * rz, dx * _f.x + dz * _f.z);
    this.ui.setNav(ang, d);
  }

  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    const dt = Math.min(0.05, Math.max(0.0001, (now - this.last) / 1000));
    this.last = now; this.t += dt; this.frameN++;
    const t = this.t, ui = this.ui, input = this.input;
    this.resize();
    input.frame(dt);
    fxTime.value = t; windTime.value = t;

    const canMove = (this.mode === 'free' || this.mode === 'stage') && !this.cine && !ui.busy;
    if (this.mode !== 'menu') this.player.update(dt, input, canMove);
    else this.player.syncVisual(dt);

    if (this.cine) this.world.focus.copy(this.cine.look); else this.world.focus.copy(this.player.pos);
    this.sky.update(dt, this.camera, this.world.focus);
    this.world.update(dt, t);
    if (this.stage) this.stage.update(dt, t);
    this.particles.update(dt);
    this.updatePearls(dt, t);
    this.updateLantern(dt, t);
    for (const id in this.siteMarkers) { const g = this.siteMarkers[id]; if (g.visible) g.userData.m.userData.update(t); }

    if (this.mode === 'free') this.updateFree();
    if ((this.mode === 'free' || this.mode === 'stage') && !ui.busy && !this.cine) {
      if (input.take('pause')) this.openPause();
      else if (input.take('map')) this.openMap();
      else if (input.take('journal')) ui.journal();
    }
    if (this.fireworks && Math.random() < dt * 3) {
      const cols = [0xffd45a, 0x7fd1ff, 0xff6fa3, 0x7fe0a0, 0xffffff, 0xc58bff];
      const a = Math.random() * 6.28, r = 10 + Math.random() * 30;
      this.particles.burst(new THREE.Vector3(Math.sin(a) * r, 34 + Math.random() * 18, Math.cos(a) * r), cols[Math.floor(Math.random() * cols.length)], 70, 9, 1.8, 0.55, 3);
      this.audio.sfx.pop();
    }

    // camera
    if (this.mode === 'menu') {
      const a = t * 0.05;
      this.camera.position.set(Math.sin(a) * 62, 30 + Math.sin(t * 0.13) * 4, Math.cos(a) * 62);
      this.camera.lookAt(0, 11, 0);
    } else if (this.cine) this.updateCine(dt);
    else this.player.updateCamera(dt, this.camera);

    this.updateNav();
    if (this.mode !== 'menu' && this.frameN % 4 === 0) ui.drawMinimap();
    if (this.mode === 'free') {
      this.saveT += dt;
      if (this.saveT > 6) { this.saveT = 0; const p = this.player.pos; this.save.pos = { x: +p.x.toFixed(1), z: +p.z.toFixed(1), yaw: +this.player.yaw.toFixed(2) }; this.persist(); }
    }
    const ph = this.world.heightAt(this.player.pos.x, this.player.pos.z);
    this.audio.update(dt, { night: this.sky.night, coast: 1 - smoothstep(1, 7, ph), rain: this.sky.rain, high: smoothstep(20, 40, this.player.pos.y) });

    this.composer.render(dt);
    input.endFrame();
  }
}
