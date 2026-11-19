import { clamp } from './utils.js';

const MOVE = { fwd: ['KeyW', 'ArrowUp'], back: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'] };
const ACTIONS = {
  jump: ['Space'],
  interact: ['KeyE', 'Enter', 'NumpadEnter'],
  map: ['KeyM'],
  pause: ['Escape', 'KeyP'],
  journal: ['KeyJ'],
};

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.virtual = new Set();
    this.moveX = 0; this.moveY = 0; this.lookX = 0; this.lookY = 0; this.zoom = 0;
    this.sprint = false; this.sprintToggle = false;
    this.lastLook = -10; this.time = 0;
    this.isTouch = false;
    this.joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
    this.look = { id: null, lx: 0, ly: 0 };
    this.mouseDown = false;
    this.onTouchMode = null;
    this.onJoy = null;

    window.addEventListener('keydown', (e) => {
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.mouseDown = false; this.joy.id = null; this.look.id = null; });

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch') {
        if (!this.isTouch) { this.isTouch = true; this.onTouchMode && this.onTouchMode(); }
        if (e.clientX < window.innerWidth * 0.42 && this.joy.id === null) {
          this.joy.id = e.pointerId; this.joy.ox = e.clientX; this.joy.oy = e.clientY; this.joy.x = 0; this.joy.y = 0;
          this.onJoy && this.onJoy(true, e.clientX, e.clientY, 0, 0);
        } else if (this.look.id === null) {
          this.look.id = e.pointerId; this.look.lx = e.clientX; this.look.ly = e.clientY;
        }
      } else {
        this.mouseDown = true; this.look.lx = e.clientX; this.look.ly = e.clientY;
      }
      try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    });
    canvas.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') {
        if (e.pointerId === this.joy.id) {
          const dx = clamp((e.clientX - this.joy.ox) / 55, -1, 1), dy = clamp((this.joy.oy - e.clientY) / 55, -1, 1);
          this.joy.x = dx; this.joy.y = dy;
          this.onJoy && this.onJoy(true, this.joy.ox, this.joy.oy, dx, dy);
        } else if (e.pointerId === this.look.id) {
          this.lookX += (e.clientX - this.look.lx) * 0.006; this.lookY += (e.clientY - this.look.ly) * 0.0045;
          this.look.lx = e.clientX; this.look.ly = e.clientY; this.lastLook = this.time;
        }
      } else if (this.mouseDown) {
        this.lookX += (e.clientX - this.look.lx) * 0.0048; this.lookY += (e.clientY - this.look.ly) * 0.0036;
        this.look.lx = e.clientX; this.look.ly = e.clientY; this.lastLook = this.time;
      }
    });
    const up = (e) => {
      if (e.pointerId === this.joy.id) { this.joy.id = null; this.joy.x = this.joy.y = 0; this.onJoy && this.onJoy(false); }
      if (e.pointerId === this.look.id) this.look.id = null;
      if (e.pointerType !== 'touch') this.mouseDown = false;
    };
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);
    canvas.addEventListener('wheel', (e) => { this.zoom += Math.sign(e.deltaY); e.preventDefault(); }, { passive: false });
  }

  press(action) { this.virtual.add(action); }

  /** Was this action triggered this frame? */
  take(action) {
    if (this.virtual.has(action)) return true;
    for (const c of ACTIONS[action] || []) if (this.pressed.has(c)) return true;
    return false;
  }

  frame(dt) {
    this.time += dt;
    const k = this.keys;
    const has = (arr) => arr.some((c) => k.has(c));
    let mx = (has(MOVE.right) ? 1 : 0) - (has(MOVE.left) ? 1 : 0);
    let my = (has(MOVE.fwd) ? 1 : 0) - (has(MOVE.back) ? 1 : 0);
    mx += this.joy.x; my += this.joy.y;
    this.sprint = k.has('ShiftLeft') || k.has('ShiftRight') || this.sprintToggle || Math.hypot(this.joy.x, this.joy.y) > 0.93;
    // gamepad
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p) continue;
      const dz = (v) => (Math.abs(v) < 0.18 ? 0 : v);
      mx += dz(p.axes[0] || 0); my -= dz(p.axes[1] || 0);
      const rx = dz(p.axes[2] || 0), ry = dz(p.axes[3] || 0);
      if (rx || ry) { this.lookX += rx * dt * 2.4; this.lookY += ry * dt * 1.6; this.lastLook = this.time; }
      const bt = (i) => p.buttons[i] && p.buttons[i].pressed;
      this._pad = this._pad || {};
      for (const [i, act] of [[0, 'jump'], [2, 'interact'], [1, 'interact'], [9, 'pause'], [3, 'map']]) {
        if (bt(i) && !this._pad[i]) this.virtual.add(act);
        this._pad[i] = bt(i);
      }
      if (bt(7) || bt(5)) this.sprint = true;
      break;
    }
    const l = Math.hypot(mx, my);
    if (l > 1) { mx /= l; my /= l; }
    this.moveX = mx; this.moveY = my;
  }

  endFrame() {
    this.pressed.clear(); this.virtual.clear();
    this.lookX = 0; this.lookY = 0; this.zoom = 0;
  }
}
