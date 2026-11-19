import { toAr, shuffle } from '../core/utils.js';
import { STAGE_ORDER, STAGE_INFO, LEARNED, PEARLS, T } from '../game/content.js';
import { worldToMap } from '../world/terrain.js';
import { STAGE_SITES } from '../world/layout.js';

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const LANTERN = `<svg viewBox="0 0 64 84" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="8" r="5" fill="none" stroke="#e9b949" stroke-width="3"/>
<path d="M20 27 L32 12 L44 27 Z" fill="#e9b949"/><rect x="17" y="26" width="30" height="5" rx="2" fill="#b8862a"/>
<path d="M19 31 H45 L49 60 H15 Z" fill="#ffe7a8" stroke="#b8862a" stroke-width="3"/>
<path d="M32 31 V60 M24 31 L21 60 M40 31 L43 60" stroke="#b8862a" stroke-width="2"/>
<ellipse cx="32" cy="47" rx="6" ry="9" fill="#fffbe6"/>
<rect x="13" y="60" width="38" height="6" rx="2" fill="#b8862a"/><path d="M24 66 H40 L36 77 H28 Z" fill="#e9b949"/></svg>`;

const TEMPLATE = `
<div id="hud" class="hide">
  <div id="topbar">
    <div id="progress" title="تقدّمك">
      <div class="prow"><span class="plabel">الإسلام</span><span class="chips" id="chips-islam"></span></div>
      <div class="prow"><span class="plabel">الإيمان</span><span class="chips" id="chips-iman"></span></div>
      <div id="starcount"></div>
    </div>
    <div id="objective" class="empty"><div class="ot"></div><div class="os"></div></div>
    <div id="hudbtns">
      <button data-act="pause" title="القائمة">☰</button>
      <button data-act="map" title="الخريطة (M)">🗺️</button>
      <button data-act="journal" title="كتاب المعرفة (J)">📖</button>
      <button data-act="sound" title="الصوت">🔊</button>
    </div>
  </div>
  <div id="stagebar" class="hide"><span id="stagename"></span><span id="counter" class="chip hide"></span><span id="timer" class="chip hide"></span><button id="quitstage">خروج من التحدّي ✕</button></div>
  <div id="nav" class="hide"><div class="arrow"></div><span></span></div>
  <div id="meter" class="hide"><div class="zone"></div><div class="needle"></div></div>
  <div id="prompt" class="hide"></div>
  <div id="minimap" title="الخريطة"><canvas width="168" height="168"></canvas></div>
  <div id="toasts"></div>
  <div id="touch" class="hide">
    <div id="joy"><i></i></div>
    <button id="tb-jump">⤒</button><button id="tb-act">✋</button><button id="tb-run">⚡</button>
  </div>
</div>
<div id="bannerwrap"></div>
<div id="dialog" class="hide"><div class="dlg glass">
  <div class="avatar">${LANTERN}</div>
  <div class="dbody"><div class="dname">سِراج</div><div class="dtext"></div><div class="dref"></div></div>
  <button class="dnext">التالي ◀</button>
</div></div>
<div id="panelwrap" class="hide"><div id="panel" class="glass"></div></div>
<div id="fade"></div>`;

export class UI {
  constructor(game) {
    this.g = game;
    this.root = document.getElementById('ui');
    this.root.innerHTML = TEMPLATE;
    this.hud = $('#hud'); this.dialogEl = $('#dialog'); this.wrap = $('#panelwrap'); this.panel = $('#panel');
    this.modalCount = 0; this.lockT = 0; this.keyHandler = null; this._toastN = 0;
    this.mm = $('#minimap canvas').getContext('2d', { willReadFrequently: true });

    $('#hudbtns').addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      this.g.audio.sfx.ui(); this.g.hudAction(b.dataset.act);
    });
    $('#minimap').addEventListener('click', () => this.g.hudAction('map'));
    $('#quitstage').addEventListener('click', () => this.g.quitStage());
    $('#prompt').addEventListener('click', () => this.g.input.press('interact'));
    const tb = (id, fn) => $(id).addEventListener('pointerdown', (e) => { e.preventDefault(); fn(); });
    tb('#tb-jump', () => this.g.input.press('jump'));
    tb('#tb-act', () => this.g.input.press('interact'));
    tb('#tb-run', () => { this.g.input.sprintToggle = !this.g.input.sprintToggle; $('#tb-run').classList.toggle('on', this.g.input.sprintToggle); });
    window.addEventListener('keydown', (e) => {
      if (this.keyHandler && !(e.target && e.target.tagName === 'INPUT')) this.keyHandler(e);
    });
    // chips
    const mk = (kind) => STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === kind)
      .map((id, i) => `<span class="chipc ${kind}" data-id="${id}" title="${STAGE_INFO[id].title}">${toAr(i + 1)}</span>`).join('');
    $('#chips-islam').innerHTML = mk('islam'); $('#chips-iman').innerHTML = mk('iman');
  }

  get busy() { return this.modalCount > 0 || performance.now() < this.lockT; }
  _open() { this.modalCount++; }
  _close() { this.modalCount = Math.max(0, this.modalCount - 1); this.lockT = performance.now() + 260; this.keyHandler = null; }
  name(s) { return String(s).replace(/\{name\}/g, this.g.save.name || 'صديقي'); }

  // ───────────── HUD ─────────────
  showHud(on) { this.hud.classList.toggle('hide', !on); }
  setTouch() { this.hud.classList.add('touch'); $('#touch').classList.remove('hide'); }
  joy(on, x, y, dx, dy) {
    const j = $('#joy');
    j.style.display = on ? 'block' : 'none';
    if (on) { j.style.left = x + 'px'; j.style.top = y + 'px'; j.firstElementChild.style.transform = `translate(${dx * 40}px,${-dy * 40}px)`; }
  }
  setObjective(title, sub = '') {
    const key = (title || '') + '|' + (sub || '');
    if (key === this._obj) return;
    this._obj = key;
    const o = $('#objective');
    o.classList.toggle('empty', !title);
    $('.ot', o).textContent = title || ''; $('.os', o).textContent = sub || '';
  }
  setPrompt(text, locked = false) {
    const p = $('#prompt');
    if (!text) { if (this._prompt) { p.classList.add('hide'); this._prompt = null; } return; }
    if (this._prompt === text) return;
    this._prompt = text;
    p.classList.remove('hide'); p.classList.toggle('locked', locked);
    p.innerHTML = esc(text) + (locked ? '' : '<kbd>E</kbd>');
  }
  setStage(name) { $('#stagebar').classList.toggle('hide', !name); $('#stagename').textContent = name || ''; if (!name) { this.setCounter(null); this.setTimer(null); this.setMeter(null); } }
  setCounter(text) { const c = $('#counter'); c.classList.toggle('hide', !text); if (text && c.textContent !== text) c.textContent = text; }
  setTimer(sec) {
    const t = $('#timer');
    t.classList.toggle('hide', sec === null || sec === undefined);
    if (sec !== null && sec !== undefined) { const s = Math.max(0, Math.ceil(sec)); const tx = '⏳ ' + toAr(s); if (t.textContent !== tx) t.textContent = tx; t.classList.toggle('low', s <= 5); }
  }
  setMeter(v, lo = 0.4, hi = 0.6) {
    const m = $('#meter');
    m.classList.toggle('hide', v === null || v === undefined);
    if (v === null || v === undefined) return;
    $('.zone', m).style.left = lo * 100 + '%'; $('.zone', m).style.width = (hi - lo) * 100 + '%';
    $('.needle', m).style.left = v * 100 + '%';
  }
  setNav(angle, dist) {
    const n = $('#nav');
    n.classList.toggle('hide', angle === null);
    if (angle === null) return;
    $('.arrow', n).style.transform = `rotate(${angle}rad)`;
    $('span', n).textContent = toAr(Math.round(dist)) + ' م';
  }
  toast(text, type = 'info', dur = 3.2) {
    const box = $('#toasts');
    while (box.children.length >= 3) box.firstElementChild.remove();
    const t = document.createElement('div');
    t.className = 'toast ' + type; t.textContent = this.name(text);
    box.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 420); }, dur * 1000);
  }
  banner(title, sub = '') {
    const w = $('#bannerwrap');
    w.innerHTML = `<div id="banner"><h2>${esc(title)}</h2><p>${esc(sub)}</p></div>`;
    clearTimeout(this._bt); this._bt = setTimeout(() => (w.innerHTML = ''), 3700);
  }
  fade(on, dur = 0.5) {
    const f = $('#fade');
    f.style.transitionDuration = dur + 's'; f.classList.toggle('on', on);
    return new Promise((r) => setTimeout(r, dur * 1000 + 30));
  }
  updateProgress() {
    const s = this.g.save, next = this.g.nextStageId();
    let total = 0;
    for (const id of STAGE_ORDER) {
      const c = this.root.querySelector(`.chipc[data-id="${id}"]`);
      c.classList.toggle('on', !!s.stars[id]); c.classList.toggle('next', id === next);
      total += s.stars[id] || 0;
    }
    $('#starcount').innerHTML = `⭐ ${toAr(total)} / ${toAr(STAGE_ORDER.length * 3)} &nbsp; 💎 ${toAr(s.pearls.length)} / ${toAr(PEARLS.length)}`;
    $('#hudbtns [data-act="sound"]').textContent = s.sound ? '🔊' : '🔇';
  }
  drawMinimap() {
    const g = this.mm, S = 168, game = this.g;
    g.clearRect(0, 0, S, S);
    g.drawImage(game.world.mapCanvas, 0, 0, S, S);
    const next = game.nextStageId();
    for (const id of STAGE_ORDER) {
      const p = STAGE_SITES[id]; const [u, v] = worldToMap(p.x, p.z);
      g.beginPath(); g.arc(u * S, v * S, id === next ? 5 : 3.5, 0, 7);
      g.fillStyle = game.save.stars[id] ? '#3ecf7a' : id === next ? '#ffd45a' : '#9aa3b5';
      g.fill(); g.lineWidth = 1.5; g.strokeStyle = '#0b1b3a'; g.stroke();
    }
    if (game.navTarget) {
      const [u, v] = worldToMap(game.navTarget.x, game.navTarget.z);
      g.beginPath(); g.arc(u * S, v * S, 7 + Math.sin(performance.now() / 200) * 2, 0, 7);
      g.strokeStyle = '#fff'; g.lineWidth = 2; g.stroke();
    }
    const pl = game.player, [pu, pv] = worldToMap(pl.pos.x, pl.pos.z);
    g.save(); g.translate(pu * S, pv * S); g.rotate(Math.PI - pl.yaw);
    g.beginPath(); g.moveTo(0, -8); g.lineTo(6, 6); g.lineTo(0, 2.5); g.lineTo(-6, 6); g.closePath();
    g.fillStyle = '#ff5a4a'; g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 1.5; g.stroke();
    g.restore();
  }

  // ───────────── panels ─────────────
  showPanel(html, cls = '') {
    if (this.wrap.classList.contains('hide')) this._open();
    this.panel.className = 'glass ' + cls;
    this.wrap.className = cls.includes('menu') ? 'menuwrap' : '';
    this.panel.innerHTML = html;
    this.panel.scrollTop = 0;
    return this.panel;
  }
  hidePanel() {
    if (this.wrap.classList.contains('hide')) return;
    this.wrap.classList.add('hide'); this.panel.innerHTML = '';
    this._close();
  }
  closeAll() {
    clearInterval(this._tw);
    this.wrap.classList.add('hide'); this.panel.innerHTML = '';
    this.dialogEl.classList.add('hide');
    this.modalCount = 0; this.keyHandler = null; this.lockT = performance.now() + 260;
  }

  /** Guide dialog. lines: string | {ayah, ref} | {hadith, ref} */
  dialog(lines) {
    return new Promise((resolve) => {
      const d = this.dialogEl, txt = $('.dtext', d), ref = $('.dref', d), btn = $('.dnext', d);
      let i = -1, full = '', shown = 0, typing = false;
      this._open(); d.classList.remove('hide');
      const finishType = () => { clearInterval(this._tw); typing = false; txt.textContent = full; };
      const show = () => {
        const l = lines[i];
        btn.textContent = i === lines.length - 1 ? 'هيا ◀' : 'التالي ◀';
        if (typeof l === 'string') {
          txt.className = 'dtext'; ref.textContent = '';
          full = this.name(l); shown = 0; typing = true; txt.textContent = '';
          clearInterval(this._tw);
          this._tw = setInterval(() => {
            shown += 2; txt.textContent = full.slice(0, shown);
            if (shown >= full.length) finishType();
          }, 22);
        } else {
          clearInterval(this._tw); typing = false;
          txt.className = 'dtext holy';
          txt.textContent = l.ayah ? `﴿ ${l.ayah} ﴾` : `« ${l.hadith} »`;
          ref.textContent = l.ref || '';
          this.g.audio.sfx.pop();
        }
      };
      const next = () => {
        if (typing) { finishType(); return; }
        this.g.audio.sfx.ui();
        i++;
        if (i >= lines.length) {
          clearInterval(this._tw);
          d.classList.add('hide'); d.onclick = null;
          this._close(); resolve(); return;
        }
        show();
      };
      d.onclick = next;
      this.keyHandler = (e) => { if (['Enter', 'NumpadEnter', 'Space', 'KeyE'].includes(e.code)) { e.preventDefault(); next(); } };
      next();
    });
  }

  /** Multiple-choice quiz. Returns the number of questions answered wrong on first try. */
  quiz(questions, { title = 'اختبار قصير' } = {}) {
    return new Promise((resolve) => {
      let qi = 0, wrong = 0;
      const ask = () => {
        const q = questions[qi];
        const opts = shuffle(q.a.map((t, k) => ({ t, ok: k === 0 })));
        const p = this.showPanel(`
          <div class="phead"><span class="ptitle">${esc(title)}</span>${questions.length > 1 ? `<span class="pstep">السؤال ${toAr(qi + 1)} من ${toAr(questions.length)}</span>` : ''}</div>
          <div class="qtext">${esc(q.q)}</div>
          <div class="opts">${opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="k">${toAr(k + 1)}</span><span>${esc(o.t)}</span></button>`).join('')}</div>
          <div class="explain hide"></div>
          <div class="btnrow"><button class="primary next hide">${qi === questions.length - 1 ? 'تمّ ✔' : 'التالي ◀'}</button></div>`);
        let missed = false, done = false;
        const btns = [...p.querySelectorAll('.opt')];
        const choose = (k) => {
          const b = btns[k];
          if (!b || b.disabled || done) return;
          if (opts[k].ok) {
            done = true; b.classList.add('ok'); btns.forEach((x) => (x.disabled = true));
            const ex = $('.explain', p); ex.classList.remove('hide'); ex.textContent = '✔ ' + (q.e || 'إجابة صحيحة!');
            $('.next', p).classList.remove('hide');
            this.g.audio.sfx.correct();
          } else {
            b.classList.add('bad'); b.disabled = true;
            if (!missed) { missed = true; wrong++; }
            this.g.audio.sfx.wrong();
          }
        };
        const go = () => { if (!done) return; this.g.audio.sfx.ui(); qi++; if (qi < questions.length) ask(); else { this.hidePanel(); resolve(wrong); } };
        btns.forEach((b, k) => (b.onclick = () => choose(k)));
        $('.next', p).onclick = go;
        this.keyHandler = (e) => {
          const m = /^(Digit|Numpad)([1-4])$/.exec(e.code);
          if (m) choose(+m[2] - 1);
          else if (['Enter', 'NumpadEnter', 'Space'].includes(e.code)) { e.preventDefault(); go(); }
        };
      };
      ask();
    });
  }

  /** Tap the items in the correct order. Returns the number of mistakes. */
  order(title, items, hint = 'اضغط على الخطوات بالترتيب الصحيح') {
    return new Promise((resolve) => {
      const sh = shuffle(items.map((t, k) => ({ t, k })));
      const p = this.showPanel(`<div class="phead"><span class="ptitle">${esc(title)}</span><span class="pstep"></span></div>
        <p class="hint">${esc(hint)}</p><div class="seq"></div>
        <div class="pool">${sh.map((o) => `<button class="it" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div>`);
      let next = 0, mistakes = 0;
      const step = () => ($('.pstep', p).textContent = `${toAr(next)} / ${toAr(items.length)}`);
      step();
      $('.pool', p).onclick = (e) => {
        const b = e.target.closest('.it'); if (!b) return;
        if (+b.dataset.k === next) {
          const it = document.createElement('div'); it.className = 'it';
          it.innerHTML = `<b>${toAr(next + 1)}</b><span>${esc(items[next])}</span>`;
          $('.seq', p).appendChild(it); b.remove(); next++; step();
          this.g.audio.sfx.pop();
          if (next === items.length) { this.g.audio.sfx.correct(); setTimeout(() => { this.hidePanel(); resolve(mistakes); }, 1100); }
        } else {
          mistakes++; this.g.audio.sfx.wrong();
          b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake');
        }
      };
    });
  }

  /** Match pairs [[left, right], ...]. Returns the number of mistakes. */
  match(title, pairs, hint = 'اختر الاسم ثم اضغط على معناه') {
    return new Promise((resolve) => {
      const A = shuffle(pairs.map((pr, k) => ({ t: pr[0], k }))), B = shuffle(pairs.map((pr, k) => ({ t: pr[1], k })));
      const p = this.showPanel(`<div class="phead"><span class="ptitle">${esc(title)}</span></div><p class="hint">${esc(hint)}</p>
        <div class="match"><div class="mcol a">${A.map((o) => `<button class="it" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div>
        <div class="mcol b">${B.map((o) => `<button class="it" data-k="${o.k}">${esc(o.t)}</button>`).join('')}</div></div>`);
      let sel = null, done = 0, mistakes = 0;
      $('.match', p).onclick = (e) => {
        const b = e.target.closest('.it'); if (!b || b.disabled) return;
        if (b.parentElement.classList.contains('a')) {
          p.querySelectorAll('.mcol.a .sel').forEach((x) => x.classList.remove('sel'));
          sel = b; b.classList.add('sel'); this.g.audio.sfx.ui();
        } else if (sel) {
          if (sel.dataset.k === b.dataset.k) {
            for (const x of [sel, b]) { x.classList.remove('sel'); x.classList.add('done'); x.disabled = true; }
            sel = null; done++; this.g.audio.sfx.correct();
            if (done === pairs.length) setTimeout(() => { this.hidePanel(); resolve(mistakes); }, 1000);
          } else {
            mistakes++; this.g.audio.sfx.wrong();
            b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake');
          }
        }
      };
    });
  }

  result({ id, stars, isNewBest }) {
    return new Promise((resolve) => {
      const info = STAGE_INFO[id];
      const msg = stars === 3 ? 'ممتاز! بارك الله فيك 🌟' : stars === 2 ? 'أحسنت! عملٌ جميل' : 'جيد! أعد المرحلة لتجمع نجومًا أكثر';
      const p = this.showPanel(`<div class="result">
        <div class="rtitle">أتممتَ ${esc(info.full)}</div>
        <div class="stars"><span>★</span><span>★</span><span>★</span></div>
        <div class="rmsg">${msg}</div>
        <div class="learned"><h4>تعلّمتَ اليوم:</h4><ul>${LEARNED[id].map((l) => `<li>${esc(l)}</li>`).join('')}</ul></div>
        <div class="btnrow"><button class="primary" data-r="next">متابعة الرحلة ◀</button><button class="ghost" data-r="replay">إعادة المرحلة ↻</button></div></div>`);
      p.querySelectorAll('.stars span').forEach((s, i) => { if (i < stars) setTimeout(() => { s.classList.add('on'); this.g.audio.sfx.pop(); }, 350 + i * 380); });
      const fin = (r) => { this.hidePanel(); resolve(r); };
      p.querySelector('.btnrow').onclick = (e) => { const b = e.target.closest('button'); if (b) fin(b.dataset.r); };
      this.keyHandler = (e) => { if (['Enter', 'NumpadEnter'].includes(e.code)) fin('next'); };
    });
  }

  // ───────────── menus ─────────────
  mainMenu() {
    return new Promise((resolve) => {
      const s = this.g.save, has = Object.keys(s.stars).length > 0 || s.seenIntro;
      const p = this.showPanel(`
        <div class="mtitle"><div class="bism">بسم الله الرحمن الرحيم</div><h1>رحلة النور</h1><h3>مغامرة ثلاثية الأبعاد لتعلّم أركان الإسلام وأركان الإيمان</h3></div>
        <div class="field"><label>ما اسمك؟</label><input type="text" id="pname" maxlength="16" placeholder="اكتب اسمك هنا" value="${esc(s.name || '')}"></div>
        <div class="field"><label>اختر شخصيتك</label><div class="seg" id="pkind"><button data-v="boy">ولد</button><button data-v="girl">بنت</button></div></div>
        <div class="field"><label>مستوى الصعوبة</label><div class="seg" id="pdiff">
          <button data-v="0">مبتدئ<small>٥ – ٧ سنوات</small></button><button data-v="1">متوسط<small>٨ – ١٠ سنوات</small></button><button data-v="2">متقدّم<small>١١ سنة فأكثر</small></button></div></div>
        <button class="primary big" id="mstart">${has ? 'متابعة الرحلة ◀' : 'ابدأ الرحلة ◀'}</button>
        <div class="mrow"><button class="ghost" id="mhow">كيف ألعب؟</button><button class="ghost" id="mset">الإعدادات</button>${has ? '<button class="ghost danger" id="mreset">بداية جديدة</button>' : ''}</div>`, 'menu');
      let kind = s.kind || 'boy', diff = s.diff ?? 0;
      const seg = (id, get, set) => {
        const box = $(id, p);
        const upd = () => box.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === String(get())));
        box.onclick = (e) => { const b = e.target.closest('button'); if (!b) return; set(b.dataset.v); upd(); this.g.audio.init(); this.g.audio.sfx.ui(); };
        upd();
      };
      seg('#pkind', () => kind, (v) => { kind = v; this.g.previewKind(v); });
      seg('#pdiff', () => diff, (v) => (diff = +v));
      const out = (fresh) => { const name = $('#pname', p).value.trim().slice(0, 16); this.hidePanel(); resolve({ name, kind, diff, fresh }); };
      $('#mstart', p).onclick = () => out(false);
      $('#mhow', p).onclick = async () => { const keep = { name: $('#pname', p).value }; await this.howTo(); s.name = keep.name; resolve(await this.mainMenu()); };
      $('#mset', p).onclick = async () => { s.name = $('#pname', p).value; s.kind = kind; s.diff = diff; await this.settings(); resolve(await this.mainMenu()); };
      const rs = $('#mreset', p);
      if (rs) rs.onclick = () => { if (rs.dataset.sure) out(true); else { rs.dataset.sure = 1; rs.textContent = 'اضغط مرة أخرى للتأكيد: سيُمسح التقدّم'; } };
    });
  }

  simple(title, body, cls = '') {
    return new Promise((resolve) => {
      const p = this.showPanel(`<div class="phead"><span class="ptitle">${title}</span><button class="pclose">✕</button></div>${body}`, cls);
      const fin = (v) => { this.hidePanel(); resolve(v); };
      $('.pclose', p).onclick = () => fin(null);
      this.keyHandler = (e) => { if (e.code === 'Escape') fin(null); };
      this._fin = fin;
    });
  }

  howTo() {
    return this.simple('كيف ألعب؟', `<ul class="howto">
      <li>تحرّك بـ <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> أو الأسهم، واركض بـ <kbd>Shift</kbd>.</li>
      <li>اقفز بـ <kbd>المسافة</kbd>، وتفاعل بـ <kbd>E</kbd>.</li>
      <li>اسحب الفأرة لتدير الكاميرا، وقرّب أو أبعد بالعجلة.</li>
      <li>على الهاتف: عصا التحكم يسار الشاشة، واسحب يمينها لتدير الكاميرا.</li>
      <li>اتبع الفانوس «سِراج» والسهم الذهبي إلى عمود النور، ثم ابدأ التحدّي.</li>
      <li>أكمل كل ركنٍ لتضيء عموده في ساحة الأركان، واجمع ⭐ النجوم و💎 لآلئ المعرفة.</li>
      <li>الخريطة <kbd>M</kbd> • كتاب المعرفة <kbd>J</kbd> • القائمة <kbd>Esc</kbd></li></ul>`);
  }

  settings() {
    const s = this.g.save;
    const pr = this.simple('الإعدادات', `
      <div class="field"><label>جودة الرسوم</label><div class="seg" data-key="quality"><button data-v="0">منخفضة</button><button data-v="1">متوسطة</button><button data-v="2">عالية</button></div></div>
      <div class="field"><label>الصوت</label><div class="seg" data-key="sound"><button data-v="1">مفعَّل 🔊</button><button data-v="0">صامت 🔇</button></div></div>
      <div class="field"><label>مستوى الصعوبة</label><div class="seg" data-key="diff"><button data-v="0">مبتدئ</button><button data-v="1">متوسط</button><button data-v="2">متقدّم</button></div></div>
      <div class="btnrow"><button class="primary" id="sok">حفظ ✔</button></div>`);
    const p = this.panel;
    const get = { quality: () => s.quality, sound: () => (s.sound ? 1 : 0), diff: () => s.diff };
    p.querySelectorAll('.seg').forEach((box) => {
      const key = box.dataset.key;
      const upd = () => box.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === String(get[key]())));
      box.onclick = (e) => {
        const b = e.target.closest('button'); if (!b) return;
        if (key === 'sound') s.sound = b.dataset.v === '1'; else s[key] = +b.dataset.v;
        this.g.applySettings(); upd(); this.g.audio.sfx.ui();
      };
      upd();
    });
    $('#sok', p).onclick = () => this._fin(null);
    return pr;
  }

  pause() {
    const pr = this.simple('استراحة', `<div class="menulist">
      <button class="primary" data-a="resume">متابعة اللعب ◀</button>
      <button class="ghost" data-a="map">🗺️ الخريطة والمراحل</button>
      <button class="ghost" data-a="journal">📖 كتاب المعرفة</button>
      <button class="ghost" data-a="settings">⚙️ الإعدادات</button>
      <button class="ghost" data-a="how">❔ كيف ألعب؟</button>
      <button class="ghost danger" data-a="menu">الخروج إلى القائمة الرئيسية</button></div>`, 'menu');
    this.panel.querySelector('.menulist').onclick = (e) => { const b = e.target.closest('button'); if (b) this._fin(b.dataset.a); };
    return pr;
  }

  map() {
    const g = this.g, s = g.save, next = g.nextStageId();
    const row = (id, i) => {
      const info = STAGE_INFO[id], st = s.stars[id] || 0, open = g.isUnlocked(id);
      return `<div class="strow ${open ? '' : 'locked'}"><span class="n">${toAr(i + 1)}</span><span>${info.icon}</span>
        <span class="tt">${esc(info.title)}<small>${esc(info.place)}</small></span>
        <span class="ss">${open ? '★'.repeat(st) + '☆'.repeat(3 - st) : '🔒'}</span>
        ${open ? `<button data-go="${id}">${id === next ? 'اذهب' : 'انتقال'}</button>` : ''}</div>`;
    };
    const isl = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'islam'), ima = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'iman');
    const pr = this.simple('خريطة رحلة النور', `<div class="mapgrid">
      <div class="mapimg"><canvas width="400" height="400"></canvas></div>
      <div class="stlist"><h4>أركان الإسلام الخمسة</h4>${isl.map(row).join('')}<h4>أركان الإيمان الستة</h4>${ima.map(row).join('')}
        <div class="strow"><span>🏛️</span><span class="tt">ساحة الأركان<small>مركز الجزيرة</small></span><button data-go="plaza">انتقال</button></div></div></div>`, 'wide');
    const cv = this.panel.querySelector('canvas'), c = cv.getContext('2d', { willReadFrequently: true }), S = 400;
    c.drawImage(g.world.mapCanvas, 0, 0, S, S);
    c.font = '900 13px Cairo, sans-serif'; c.textAlign = 'center'; c.direction = 'rtl';
    const seen = {};
    STAGE_ORDER.forEach((id) => {
      const p = STAGE_SITES[id], [u, v] = worldToMap(p.x, p.z), info = STAGE_INFO[id];
      c.beginPath(); c.arc(u * S, v * S, 6, 0, 7);
      c.fillStyle = s.stars[id] ? '#3ecf7a' : id === next ? '#ffd45a' : '#9aa3b5'; c.fill(); c.lineWidth = 2; c.strokeStyle = '#0b1b3a'; c.stroke();
      if (!seen[info.place]) { seen[info.place] = 1; c.lineWidth = 4; c.strokeStyle = 'rgba(8,20,48,.9)'; c.strokeText(info.place, u * S, v * S - 12); c.fillStyle = '#fff'; c.fillText(info.place, u * S, v * S - 12); }
    });
    const [pu, pv] = worldToMap(g.player.pos.x, g.player.pos.z);
    c.beginPath(); c.arc(pu * S, pv * S, 7, 0, 7); c.fillStyle = '#ff5a4a'; c.fill(); c.strokeStyle = '#fff'; c.lineWidth = 2.5; c.stroke();
    this.panel.querySelector('.stlist').onclick = (e) => { const b = e.target.closest('button[data-go]'); if (b) this._fin(b.dataset.go); };
    return pr;
  }

  journal() {
    const s = this.g.save;
    const card = (id) => (s.stars[id]
      ? `<div class="jcard"><b>${STAGE_INFO[id].icon} ${esc(STAGE_INFO[id].full)}</b><ul>${LEARNED[id].map((l) => `<li>${esc(l)}</li>`).join('')}</ul></div>`
      : `<div class="jcard locked"><b>🔒 ${esc(STAGE_INFO[id].full)}</b></div>`);
    const isl = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'islam'), ima = STAGE_ORDER.filter((id) => STAGE_INFO[id].kind === 'iman');
    const pearls = s.pearls.length ? s.pearls.map((i) => `<div class="pearl">💎 ${esc(PEARLS[i])}</div>`).join('') : '<div class="jcard locked">ابحث عن اللآلئ الزرقاء المضيئة في أرجاء الجزيرة!</div>';
    return this.simple('📖 كتاب المعرفة', `
      <div class="jsec"><h4>أركان الإسلام</h4>${isl.map(card).join('')}</div>
      <div class="jsec"><h4>أركان الإيمان</h4>${ima.map(card).join('')}</div>
      <div class="jsec"><h4>لآلئ المعرفة (${toAr(s.pearls.length)} / ${toAr(PEARLS.length)})</h4>${pearls}</div>`, 'wide');
  }

  certificate() {
    const s = this.g.save;
    const total = STAGE_ORDER.reduce((a, id) => a + (s.stars[id] || 0), 0);
    const pr = this.simple('🎉 مبارك!', `<div class="cert">
      <h2>شهادة إتمام رحلة النور</h2>
      <p>نشهد بأنّ البطل / البطلة</p>
      <div class="cname">${esc(s.name || 'صديق النور')}</div>
      <p>قد أتمّ بنجاحٍ تعلُّم <b>أركان الإسلام الخمسة</b> و<b>أركان الإيمان الستة</b></p>
      <div class="cst">${'★'.repeat(Math.round(total / STAGE_ORDER.length))}</div>
      <p>مجموع النجوم: ${toAr(total)} من ${toAr(STAGE_ORDER.length * 3)} &nbsp;•&nbsp; لآلئ المعرفة: ${toAr(s.pearls.length)} من ${toAr(PEARLS.length)}</p>
      <p>نسأل الله أن ينفعه بما تعلّم، وأن يجعله من عباده الصالحين.</p></div>
      <div class="btnrow"><button class="primary" id="cok">متابعة اللعب ◀</button><button class="ghost" id="cprint">🖨️ طباعة الشهادة</button></div>`, 'wide');
    $('#cok', this.panel).onclick = () => this._fin(null);
    $('#cprint', this.panel).onclick = () => window.print();
    return pr;
  }
}

export { T };
