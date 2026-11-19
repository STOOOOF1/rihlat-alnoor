import * as THREE from 'three';
import { buildHeights, heightAt, buildTerrainMesh, buildWater, buildMapCanvas } from './terrain.js';
import { buildVegetation } from './vegetation.js';
import { buildMonument, buildPeak, buildMosque, buildMarket, buildOasis, buildGarden, buildSigns } from './structures.js';
import { buildHajj } from './hajj.js';
import { clamp, lerp } from '../core/utils.js';

export class World {
  constructor(scene, sky, particles, quality, progress = () => {}) {
    this.scene = scene; this.sky = sky; this.particles = particles;
    this.colliders = []; this.platforms = []; this.nightMats = []; this.updaters = [];
    this.P = {};
    this.focus = new THREE.Vector3();
    this.heightAt = heightAt;

    buildHeights(); progress(0.2);
    this.terrain = buildTerrainMesh(); scene.add(this.terrain); progress(0.4);
    this.water = buildWater(sky.U); scene.add(this.water);
    this.monument = buildMonument(this);
    this.peak = buildPeak(this);
    buildMosque(this); buildMarket(this); buildOasis(this); buildGarden(this); progress(0.55);
    buildHajj(this); buildSigns(this); progress(0.65);
    this.vegetation = buildVegetation(this, quality.veg); scene.add(this.vegetation); progress(0.85);
    for (const c of this.colliders) c.br = c.hw !== undefined ? Math.hypot(c.hw, c.hd) : c.r;
    this.mapCanvas = buildMapCanvas(320); progress(0.95);
  }

  night(mat, day, night) { this.nightMats.push({ mat, day, night }); }

  near(x, z, d) { return Math.abs(this.focus.x - x) < d && Math.abs(this.focus.z - z) < d; }

  groundAt(x, z) {
    let h = heightAt(x, z);
    for (const p of this.platforms) {
      if (p.y > h && Math.hypot(x - p.x, z - p.z) < p.r) h = p.y;
    }
    return h;
  }

  /** Push a circle (x,z,pr) out of all colliders. Returns [x,z]. */
  resolve(x, z, pr, extra = null) {
    for (let pass = 0; pass < 2; pass++) {
      const lists = extra ? [this.colliders, extra] : [this.colliders];
      for (const list of lists) for (const c of list) {
        const dx = x - c.x, dz = z - c.z;
        const lim = (c.br ?? c.r ?? 3) + pr;
        if (dx > lim || dx < -lim || dz > lim || dz < -lim) continue;
        if (c.hw === undefined) {
          const d = Math.hypot(dx, dz), m = c.r + pr;
          if (d < m && d > 1e-4) { x = c.x + (dx / d) * m; z = c.z + (dz / d) * m; }
        } else {
          const cs = Math.cos(c.rot || 0), sn = Math.sin(c.rot || 0);
          let lx = dx * cs - dz * sn, lz = dx * sn + dz * cs;
          const qx = clamp(lx, -c.hw, c.hw), qz = clamp(lz, -c.hd, c.hd);
          const ox = lx - qx, oz = lz - qz, d = Math.hypot(ox, oz);
          if (d < pr) {
            if (d > 1e-4) { lx = qx + (ox / d) * pr; lz = qz + (oz / d) * pr; }
            else {
              const px = c.hw - Math.abs(lx), pz = c.hd - Math.abs(lz);
              if (px < pz) lx = Math.sign(lx || 1) * (c.hw + pr); else lz = Math.sign(lz || 1) * (c.hd + pr);
            }
            x = c.x + lx * cs + lz * sn; z = c.z - lx * sn + lz * cs;
          }
        }
      }
    }
    return [x, z];
  }

  update(dt, t) {
    const n = this.sky.night;
    for (const m of this.nightMats) m.mat.color.setScalar(lerp(m.day, m.night, n));
    for (const u of this.updaters) u(dt, t);
    this.monument.update(dt, t);
    this.peak.update(dt, t);
  }
}
