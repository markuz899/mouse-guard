const robot = require("robotjs");

// Config cerchio
const radius = 50;
const fps = 120;
const seconds = 8;

let running = true;

// Centro = posizione iniziale
const start = robot.getMousePos();
const cx = start.x;
const cy = start.y;

const intervalMs = 1000 / fps;
const totalSteps = Math.round(seconds * fps);
const angleStep = (2 * Math.PI) / totalSteps;

let step = 0;

console.log("🌀 Movimento avviato.");
console.log("Muovi il mouse bruscamente per fermare.");

// Posizione del mouse **dopo aver mosso RobotJS**
let lastPos = { x: cx, y: cy };

// TIMER cerchio
const loop = setInterval(() => {
  if (!running) return;

  // Leggi posizione attuale
  const currentPos = robot.getMousePos();

  // Se differenza maggiore di 5px rispetto all'ultima posizione automatica → stop
  if (
    Math.abs(currentPos.x - lastPos.x) > 150 ||
    Math.abs(currentPos.y - lastPos.y) > 150
  ) {
    console.log("🛑 Movimento manuale rilevato. Stop!");
    running = false;
    clearInterval(loop);
    process.exit();
  }

  // Movimento in tondo
  const theta = step * angleStep;
  const x = Math.round(cx + radius * Math.cos(theta));
  const y = Math.round(cy + radius * Math.sin(theta));

  robot.moveMouse(x, y);

  // Aggiorna la posizione “controllata” solo dopo aver mosso il mouse
  lastPos = { x, y };

  step = (step + 1) % totalSteps;
}, intervalMs);

// 🎹 Listener tastiera (solo ESC)
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process;
