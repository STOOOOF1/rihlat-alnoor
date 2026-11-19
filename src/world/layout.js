// World layout: x = east, z = south, y = up. All units in metres.
export const L = {
  plaza:      { x: 0, z: 0, h: 6, r: 32 },
  shahada:    { x: 10, z: -178, h: 30, r: 15 },
  salah:      { x: 178, z: 28, h: 5, r: 48 },
  zakat:      { x: 96, z: 152, h: 4.5, r: 44 },
  sawm:       { x: -76, z: 160, h: 3, r: 44 },
  pond:       { x: -92, z: 176, h: -1.4, r: 7 },
  hajj:       { x: -195, z: -22, h: 4.2, r: 94 },
  miqat:      { x: -108, z: -36 },
  kaaba:      { x: -176, z: -40 },
  safa:       { x: -138, z: -8 },
  marwa:      { x: -138, z: -72 },
  mina:       { x: -214, z: 28 },
  jamarat:    { x: -184, z: 50 },
  muzdalifah: { x: -246, z: 14 },
  arafat:     { x: -258, z: -30 },
  rahmah:     { x: -272, z: -48, h: 12, r: 4 },
  garden:     { x: 150, z: -112, h: 7, r: 46 },
};

// Flat zones (order matters: later zones override earlier ones)
export const ZONES = [
  { ...L.plaza, blend: 22 },
  { x: L.shahada.x, z: L.shahada.z, h: L.shahada.h, r: L.shahada.r, blend: 58 },
  { ...L.salah, blend: 20 },
  { ...L.zakat, blend: 20 },
  { ...L.sawm, blend: 20 },
  { ...L.pond, blend: 11 },
  { ...L.hajj, blend: 26 },
  { ...L.rahmah, blend: 17 },
  { ...L.garden, blend: 20 },
];

// decorative mountains
export const MOUNTAINS = [
  { x: -118, z: -172, r: 78, h: 62 },
  { x: -52, z: -222, r: 52, h: 38 },
  { x: 20, z: 222, r: 50, h: 30 },
  { x: -300, z: -92, r: 40, h: 34 },
];

const P = (k) => [L[k].x, L[k].z];
// Walking paths (drawn on the terrain)
export const PATHS = [
  [[0, 0], [4, -60], [14, -112], [10, -160]],
  [[0, 0], [70, 8], [130, 22], [165, 30]],
  [[0, 0], [38, 60], [72, 112], [94, 140]],
  [[0, 0], [-30, 62], [-58, 118], [-70, 146]],
  [[0, 0], [-52, -14], P('miqat'), [-152, -40], [-160, -40]],
  [[0, 0], [58, -40], [112, -84], [140, -104]],
  [[165, 30], [150, 90], [110, 136]],
  [[94, 152], [10, 172], [-60, 160]],
  [[140, -104], [176, -40], [178, 10]],
  [[-160, -40], [-150, -24], P('safa')],
  [P('marwa'), [-170, -84], [-200, -70], [-236, -40], P('arafat')],
  [P('marwa'), [-150, -40]],
  [P('arafat'), [-256, -6], P('muzdalifah')],
  [P('muzdalifah'), [-232, 30], P('mina'), P('jamarat')],
  [P('jamarat'), [-160, 20], [-150, -8]],
];

// Stage entry points in the world (where the child presses E to begin)
export const STAGE_SITES = {
  shahada: { x: 10, z: -170 },
  salah: { x: 196, z: 46 },
  zakat: { x: 96, z: 150 },
  sawm: { x: -66, z: 148 },
  hajj: { x: -100, z: -36 },
};
// six gates of faith arranged around the garden centre
export const IMAN_IDS = ['allah', 'malaika', 'kutub', 'rusul', 'akhirah', 'qadar'];
IMAN_IDS.forEach((id, i) => {
  const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
  STAGE_SITES[id] = { x: L.garden.x + Math.sin(a) * 22, z: L.garden.z + Math.cos(a) * 22, angle: a };
});
