// Fully procedural sound (no audio files, no music): nature ambience + soft interface sounds.
export class AudioSys {
  constructor() {
    this.ctx = null; this.enabled = true; this.volume = 0.7;
    this._bird = 2; this._cricket = 0;
    const s = (fn) => (...a) => { if (this.ctx && this.enabled) fn(...a); };
    this.sfx = {
      ui: s(() => this.tone(540, 0.05, 'triangle', 0.1)),
      collect: s(() => { this.tone(820, 0.1, 'sine', 0.16, 1250); this.noise(0.12, { freq: 6500, q: 2, vol: 0.05 }); }),
      correct: s(() => { this.tone(620, 0.1, 'sine', 0.16); this.tone(930, 0.18, 'sine', 0.16, null, 0.09); this.noise(0.25, { freq: 7000, q: 1.5, vol: 0.04, delay: 0.08 }); }),
      wrong: s(() => this.tone(210, 0.24, 'triangle', 0.16, 150)),
      step: s((wet) => this.noise(0.055, { freq: wet ? 1400 : 380 + Math.random() * 240, q: 0.8, vol: wet ? 0.07 : 0.05, type: wet ? 'bandpass' : 'lowpass' })),
      jump: s(() => this.tone(300, 0.14, 'sine', 0.09, 520)),
      land: s(() => this.noise(0.09, { freq: 180, q: 0.7, vol: 0.14, type: 'lowpass' })),
      whoosh: s(() => this.noise(0.6, { freq: 500, q: 1.2, vol: 0.09, sweep: 2600 })),
      throw: s(() => this.noise(0.22, { freq: 900, q: 1.4, vol: 0.09, sweep: 2400 })),
      hit: s(() => { this.noise(0.1, { freq: 300, q: 1, vol: 0.2, type: 'lowpass' }); this.tone(140, 0.12, 'sine', 0.14, 90); }),
      win: s(() => {
        for (let i = 0; i < 7; i++) this.noise(0.22, { freq: 3000 + i * 900, q: 6, vol: 0.06, delay: i * 0.09 });
        this.tone(520, 0.14, 'sine', 0.12); this.tone(780, 0.14, 'sine', 0.12, null, 0.14); this.tone(1040, 0.3, 'sine', 0.12, null, 0.28);
      }),
      pop: s(() => this.tone(700, 0.06, 'sine', 0.1, 420)),
      tick: s(() => this.tone(1000, 0.03, 'square', 0.03)),
    };
  }

  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.enabled ? this.volume : 0;
    this.master.connect(this.ctx.destination);
    // shared noise buffer
    const len = this.ctx.sampleRate * 2;
    this.nbuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.nbuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.wind = this._loop(320, 0.5, 'lowpass');
    this.sea = this._loop(520, 0.6, 'lowpass');
    this.rainN = this._loop(3200, 0.7, 'bandpass');
  }

  _loop(freq, q, type) {
    const src = this.ctx.createBufferSource(); src.buffer = this.nbuf; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain(); g.gain.value = 0;
    src.connect(f).connect(g).connect(this.master); src.start();
    return { g, f };
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.setTargetAtTime(on ? this.volume : 0, this.ctx.currentTime, 0.05);
  }

  tone(freq, dur, type = 'sine', vol = 0.15, slideTo = null, delay = 0) {
    const c = this.ctx, t = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + dur + 0.03);
  }

  noise(dur, { freq = 1000, q = 1, vol = 0.1, type = 'bandpass', delay = 0, sweep = null } = {}) {
    const c = this.ctx, t = c.currentTime + delay;
    const src = c.createBufferSource(); src.buffer = this.nbuf; src.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if (sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master); src.start(t, Math.random()); src.stop(t + dur + 0.03);
  }

  /** env: { night:0..1, coast:0..1, rain:0..1, speed } */
  update(dt, env) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    this.wind.g.gain.setTargetAtTime(0.02 + 0.015 * Math.sin(t * 0.3) + env.high * 0.03, t, 0.5);
    this.sea.g.gain.setTargetAtTime(env.coast * (0.05 + 0.03 * Math.sin(t * 0.7)), t, 0.4);
    this.rainN.g.gain.setTargetAtTime(env.rain * 0.09, t, 0.4);
    if (env.rain < 0.3) {
      if (env.night < 0.5) {
        this._bird -= dt;
        if (this._bird <= 0) {
          this._bird = 2.5 + Math.random() * 6;
          const base = 2400 + Math.random() * 1600, n = 2 + Math.floor(Math.random() * 3);
          for (let i = 0; i < n; i++) this.tone(base + Math.random() * 300, 0.07, 'sine', 0.025, base * (1.15 + Math.random() * 0.3), i * 0.11);
        }
      } else {
        this._cricket -= dt;
        if (this._cricket <= 0) {
          this._cricket = 0.9 + Math.random() * 1.6;
          for (let i = 0; i < 4; i++) this.tone(4300, 0.03, 'sine', 0.012, null, i * 0.055);
        }
      }
    }
  }
}
