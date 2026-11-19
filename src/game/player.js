import * as THREE from 'three';
import { createCharacter } from './character.js';
import { clamp, damp, angleLerp } from '../core/utils.js';

const _v = new THREE.Vector3();
const _d = new THREE.Vector3();

export class Player {
  constructor(game, kind = 'boy') {
    this.game = game;
    this.pos = new THREE.Vector3(0, 0, 30);
    this.vel = new THREE.Vector3();
    this.yaw = Math.PI;
    this.onGround = true;
    this.camYaw = 0; this.camPitch = 0.3; this.camDist = 7.5; this._distK = 1;
    this.camTarget = new THREE.Vector3();
    this.frozen = false; this.speed = 0; this.speedMul = 1; this.stepT = 0; this.visY = 0;
    this.extraColliders = null;
    this.setKind(kind);
  }

  setKind(kind) {
    if (this.char) this.game.scene.remove(this.char.group);
    this.kind = kind;
    this.char = createCharacter({ kind });
    this.game.scene.add(this.char.group);
  }

  teleport(x, z, yaw) {
    const y = this.game.world.groundAt(x, z);
    this.pos.set(x, y, z); this.vel.set(0, 0, 0); this.visY = y; this.onGround = true;
    if (yaw !== undefined) { this.yaw = yaw; this.camYaw = yaw + Math.PI; }
    this.updateCamera(0, this.game.camera, true);
    this.syncVisual(0);
  }

  update(dt, input, allowMove) {
    const world = this.game.world, audio = this.game.audio, pos = this.pos, vel = this.vel;
    let mx = 0, my = 0, jump = false, sprint = false;
    if (allowMove && !this.frozen) {
      mx = input.moveX; my = input.moveY; jump = input.take('jump'); sprint = input.sprint;
      this.camYaw -= input.lookX;
      this.camPitch = clamp(this.camPitch + input.lookY, -0.2, 1.25);
      this.camDist = clamp(this.camDist + input.zoom * 0.9, 3.5, 17);
      if (input.time - input.lastLook > 1.0 && Math.abs(mx) > 0.1) this.camYaw -= mx * 1.15 * dt;
    }
    const fX = -Math.sin(this.camYaw), fZ = -Math.cos(this.camYaw), rX = Math.cos(this.camYaw), rZ = -Math.sin(this.camYaw);
    const dx = fX * my + rX * mx, dz = fZ * my + rZ * mx;
    const len = Math.hypot(dx, dz);
    const maxSp = (sprint ? 11.5 : 7.2) * this.speedMul;
    const acc = this.onGround ? 12 : 4;
    vel.x = damp(vel.x, dx * maxSp, acc, dt); vel.z = damp(vel.z, dz * maxSp, acc, dt);
    if (len > 0.05) this.yaw = angleLerp(this.yaw, Math.atan2(dx, dz), 1 - Math.exp(-12 * dt));
    if (jump && this.onGround) { vel.y = 8.8; this.onGround = false; audio.sfx.jump(); }

    let nx = pos.x + vel.x * dt, nz = pos.z + vel.z * dt;
    [nx, nz] = world.resolve(nx, nz, 0.38, this.extraColliders);
    const LIM = -0.85;
    if (world.heightAt(nx, nz) < LIM) {
      if (world.heightAt(nx, pos.z) >= LIM) nz = pos.z;
      else if (world.heightAt(pos.x, nz) >= LIM) nx = pos.x;
      else { nx = pos.x; nz = pos.z; }
    }
    pos.x = nx; pos.z = nz;

    const g = world.groundAt(pos.x, pos.z);
    if (this.onGround) {
      if (pos.y - g > 0.75) this.onGround = false;
      else { pos.y = g; vel.y = 0; }
    }
    if (!this.onGround) {
      vel.y -= 25 * dt; pos.y += vel.y * dt;
      if (pos.y <= g) { pos.y = g; vel.y = 0; this.onGround = true; audio.sfx.land(); }
    }
    this.speed = Math.hypot(vel.x, vel.z);
    if (this.onGround && this.speed > 1) {
      this.stepT += this.speed * dt;
      if (this.stepT > 2.3) { this.stepT = 0; audio.sfx.step(world.heightAt(pos.x, pos.z) < 0.05); }
    }
    this.syncVisual(dt);
  }

  syncVisual(dt) {
    this.visY = this.onGround && dt > 0 ? damp(this.visY, this.pos.y, 22, dt) : this.pos.y;
    const gch = this.char.group;
    gch.position.set(this.pos.x, this.visY, this.pos.z);
    gch.rotation.y = this.yaw;
    this.char.update(dt, this.speed, this.onGround);
  }

  updateCamera(dt, camera, instant = false) {
    const world = this.game.world;
    _v.set(this.pos.x, this.visY + 1.45 * this.char.scale, this.pos.z);
    if (instant) this.camTarget.copy(_v); else this.camTarget.lerp(_v, 1 - Math.exp(-14 * dt));
    const cp = Math.cos(this.camPitch);
    _d.set(Math.sin(this.camYaw) * cp, Math.sin(this.camPitch), Math.cos(this.camYaw) * cp);
    // keep the view clear of hills
    let k = 1;
    for (const s of [0.3, 0.55, 0.8, 1]) {
      const px = this.camTarget.x + _d.x * this.camDist * s, pz = this.camTarget.z + _d.z * this.camDist * s;
      const py = this.camTarget.y + _d.y * this.camDist * s;
      if (py < Math.max(world.groundAt(px, pz), 0) + 0.45) { k = Math.max(0.22, s - 0.25); break; }
    }
    this._distK = instant ? k : damp(this._distK, k, k < this._distK ? 14 : 3, dt);
    _v.copy(this.camTarget).addScaledVector(_d, this.camDist * this._distK);
    const gy = Math.max(world.groundAt(_v.x, _v.z), 0) + 0.6;
    if (_v.y < gy) _v.y = gy;
    if (instant) camera.position.copy(_v); else camera.position.lerp(_v, 1 - Math.exp(-12 * dt));
    camera.lookAt(this.camTarget);
  }
}
