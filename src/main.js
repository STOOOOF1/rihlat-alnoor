// رحلة النور — نقطة الدخول
import './ui/style.css';
import { Game } from './game/game.js';

const game = new Game();
game.init().catch((e) => {
  console.error(e);
  const t = document.getElementById('boottxt');
  if (t) t.textContent = 'تعذّر تشغيل اللعبة: ' + (e && e.message ? e.message : e);
});
