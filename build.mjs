// Build script: bundles the whole game into dist/game.js + dist/game.css
// so that index.html works by double-click (no server needed).
import * as esbuild from 'esbuild';

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
}
