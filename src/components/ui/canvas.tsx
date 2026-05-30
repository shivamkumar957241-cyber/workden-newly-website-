"use client";

type OscillatorOptions = {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
};

type TrailNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type TrailLine = {
  spring: number;
  friction: number;
  nodes: TrailNode[];
};

const config = {
  friction: 0.5,
  trails: 64,
  size: 42,
  dampening: 0.025,
  tension: 0.99,
};

let ctx: (CanvasRenderingContext2D & { running?: boolean; frame?: number }) | null = null;
let hue: Oscillator | null = null;
let lines: TrailLine[] = [];
let pos = { x: 0, y: 0 };
let cleanupFns: Array<() => void> = [];
let hasStarted = false;

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  current: number;

  constructor(options: OscillatorOptions = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
    this.current = this.offset;
  }

  update() {
    this.phase += this.frequency;
    this.current = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.current;
  }
}

function createNode(): TrailNode {
  return { x: pos.x, y: pos.y, vx: 0, vy: 0 };
}

function createLine(spring: number): TrailLine {
  return {
    spring: spring + 0.1 * Math.random() - 0.05,
    friction: config.friction + 0.01 * Math.random() - 0.005,
    nodes: Array.from({ length: config.size }, createNode),
  };
}

function updateLine(line: TrailLine) {
  let spring = line.spring;
  let node = line.nodes[0];

  node.vx += (pos.x - node.x) * spring;
  node.vy += (pos.y - node.y) * spring;

  for (let i = 0; i < line.nodes.length; i += 1) {
    node = line.nodes[i];
    if (i > 0) {
      const previous = line.nodes[i - 1];
      node.vx += (previous.x - node.x) * spring;
      node.vy += (previous.y - node.y) * spring;
      node.vx += previous.vx * config.dampening;
      node.vy += previous.vy * config.dampening;
    }
    node.vx *= line.friction;
    node.vy *= line.friction;
    node.x += node.vx;
    node.y += node.vy;
    spring *= config.tension;
  }
}

function drawLine(line: TrailLine) {
  if (!ctx) return;

  let x = line.nodes[0].x;
  let y = line.nodes[0].y;
  ctx.beginPath();
  ctx.moveTo(x, y);

  for (let i = 1; i < line.nodes.length - 2; i += 1) {
    const current = line.nodes[i];
    const next = line.nodes[i + 1];
    x = 0.5 * (current.x + next.x);
    y = 0.5 * (current.y + next.y);
    ctx.quadraticCurveTo(current.x, current.y, x, y);
  }

  const current = line.nodes[line.nodes.length - 2];
  const next = line.nodes[line.nodes.length - 1];
  ctx.quadraticCurveTo(current.x, current.y, next.x, next.y);
  ctx.stroke();
  ctx.closePath();
}

function render() {
  if (!ctx?.running || !hue) return;

  ctx.globalCompositeOperation = "source-over";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = "lighter";
  ctx.strokeStyle = `hsla(${Math.round(hue.update())},100%,55%,0.035)`;
  ctx.lineWidth = 8;

  for (const line of lines) {
    updateLine(line);
    drawLine(line);
  }

  ctx.frame = (ctx.frame || 0) + 1;
  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  if (!ctx) return;
  const canvas = ctx.canvas;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width));
  canvas.height = Math.max(1, Math.floor(rect.height));
}

function initializeLines() {
  lines = [];
  for (let i = 0; i < config.trails; i += 1) {
    lines.push(createLine(0.45 + (i / config.trails) * 0.025));
  }
}

function setPosition(event: MouseEvent | TouchEvent) {
  if (!ctx) return;
  const rect = ctx.canvas.getBoundingClientRect();
  if ("touches" in event) {
    const touch = event.touches[0];
    if (!touch) return;
    pos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  } else {
    pos = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  if (!hasStarted) {
    hasStarted = true;
    initializeLines();
    render();
  }
}

export function renderCanvas(canvasId = "canvas") {
  const canvas = document.getElementById(canvasId);
  if (!(canvas instanceof HTMLCanvasElement)) return () => {};

  stopCanvas();
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D & { running?: boolean; frame?: number };
  if (!ctx) return () => {};

  ctx.running = true;
  ctx.frame = 1;
  hasStarted = false;
  hue = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 40,
    frequency: 0.0015,
    offset: 250,
  });

  resizeCanvas();
  pos = { x: canvas.width / 2, y: canvas.height / 2 };

  const onMouseMove = (event: MouseEvent) => setPosition(event);
  const onTouchMove = (event: TouchEvent) => setPosition(event);
  const onResize = () => resizeCanvas();
  const onFocus = () => {
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
  };
  const onBlur = () => {
    if (ctx) ctx.running = false;
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("resize", onResize);
  window.addEventListener("focus", onFocus);
  window.addEventListener("blur", onBlur);

  cleanupFns = [
    () => window.removeEventListener("mousemove", onMouseMove),
    () => window.removeEventListener("touchmove", onTouchMove),
    () => window.removeEventListener("resize", onResize),
    () => window.removeEventListener("focus", onFocus),
    () => window.removeEventListener("blur", onBlur),
  ];

  return stopCanvas;
}

export function stopCanvas() {
  cleanupFns.forEach((cleanup) => cleanup());
  cleanupFns = [];
  if (ctx) {
    ctx.running = false;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  lines = [];
  hasStarted = false;
}
