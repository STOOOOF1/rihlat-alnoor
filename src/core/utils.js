import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

export function angleDiff(a, b) {
  return ((((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
}
export function angleLerp(a, b, t) {
  return a + angleDiff(a, b) * t;
}

const perlin = new ImprovedNoise();
export function noise2(x, z, seed = 0) {
  return perlin.noise(x, seed * 17.13 + 3.7, z);
}
export function fbm(x, z, oct = 4, seed = 0) {
  let a = 1, f = 1, s = 0, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * noise2(x * f, z * f, seed + i);
    n += a; a *= 0.5; f *= 2;
  }
  return s / n;
}

const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
export const toAr = (n) => String(n).replace(/\d/g, (d) => AR_DIGITS[d]);

export function shuffle(arr, rnd = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick(arr, rnd = Math.random) {
  return arr[Math.floor(rnd() * arr.length)];
}

export const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);

// distance from point to segment in 2D
export function distToSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = clamp(t, 0, 1);
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}
