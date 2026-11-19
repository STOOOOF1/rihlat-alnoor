// Build script: bundles the whole game into dist/game.js + dist/game.css
// so that index.html works by double-click (no server needed).
import * as esbuild from 'esbuild';
import fs from 'fs';

const serve = process.argv.includes('--serve');

const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'iife',
  outfile: 'dist/game.js',
  minify: !serve,
  sourcemap: serve,
  charset: 'utf8',
  target: ['es2020'],
  loader: { '.woff2': 'dataurl', '.woff': 'dataurl' },
  logLevel: 'info',
};

if (serve) {
  const ctx = await esbuild.context(opts);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: '.', port: 5173 });
  console.log('Dev server: http://localhost:' + port);
} else {
  await esbuild.build(opts);
  // publish folder for hosting (Netlify): only the playable files
  fs.rmSync('public', { recursive: true, force: true });
  fs.mkdirSync('public/dist', { recursive: true });
  fs.copyFileSync('index.html', 'public/index.html');
  for (const f of ['game.js', 'game.css']) fs.copyFileSync('dist/' + f, 'public/dist/' + f);
}
