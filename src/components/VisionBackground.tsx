"use client";

import { useEffect, useRef } from "react";
import { ORB_ACTIVATE_EVENT } from "./HeroConstellation";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  baseR: number;
  twinklePhase: number;
};

type Pulse = {
  from: number;
  to: number;
  t: number;
  speed: number;
};

export default function VisionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boostRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const NODE_COUNT = Math.min(34, Math.floor((width * height) / 46000));
    const MAX_DIST = 120;

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => {
      const baseR = 0.8 + Math.random() * 2.0;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: baseR,
        baseR,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    });

    const pulses: Pulse[] = [];

    const mouse = { x: -9999, y: -9999, active: false };
    const spotlight = { x: -9999, y: -9999 };

    let animationId: number;
    let frame = 0;

    function draw() {
      if (!ctx) return;
      frame++;
      ctx.clearRect(0, 0, width, height);

      const boost = boostRef.current;
      if (boost > 0) boostRef.current = Math.max(0, boost - 0.006);
      const speedMul = 1 + boost * 2;
      const glowMul = 1 + boost * 1.6;

      if (mouse.active) {
        spotlight.x += (mouse.x - spotlight.x) * 0.09;
        spotlight.y += (mouse.y - spotlight.y) * 0.09;

        const spot = ctx.createRadialGradient(spotlight.x, spotlight.y, 0, spotlight.x, spotlight.y, 360);
        spot.addColorStop(0, "rgba(139, 124, 255, 0.16)");
        spot.addColorStop(0.5, "rgba(139, 124, 255, 0.06)");
        spot.addColorStop(1, "rgba(139, 124, 255, 0)");
        ctx.fillStyle = spot;
        ctx.beginPath();
        ctx.arc(spotlight.x, spotlight.y, 360, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        n.x += n.vx * speedMul;
        n.y += n.vy * speedMul;

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const RADIUS = 140;
          if (dist < RADIUS && dist > 0.01) {
            const force = ((RADIUS - dist) / RADIUS) * 0.55;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }

        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        n.r = n.baseR + Math.sin(frame * 0.03 + n.twinklePhase) * 0.5 * n.baseR;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = 0.07 * glowMul * (1 - dist / MAX_DIST);
            ctx.strokeStyle = `rgba(167, 155, 255, ${Math.min(alpha, 0.16)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if (Math.random() < 0.0009 * (1 + boost * 6)) {
              pulses.push({ from: i, to: j, t: 0, speed: 0.012 + Math.random() * 0.012 });
            }
          }
        }
      }

      if (mouse.active) {
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(167, 155, 255, ${0.22 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) {
          pulses.splice(i, 1);
          continue;
        }
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;
        const fade = Math.sin(p.t * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(167, 155, 255, ${0.3 * fade})`;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const n of nodes) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.4);
        glow.addColorStop(0, `rgba(139, 124, 255, ${0.14 * glowMul})`);
        glow.addColorStop(1, "rgba(139, 124, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(220, 214, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function handleMouseLeave() {
      mouse.active = false;
    }
    function handleActivate() {
      boostRef.current = 1;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener(ORB_ACTIVATE_EVENT, handleActivate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener(ORB_ACTIVATE_EVENT, handleActivate);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/70" />
    </div>
  );
}