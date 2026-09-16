import { useEffect, useRef } from 'react';

/* ──────────────────────────────────────────────
   INTERACTIVE WIREFRAME TERRAIN
   ─ 3D perspective grid with flowing waves
   ─ Mouse creates ripple distortions
   ─ Game-engine aesthetic
   ────────────────────────────────────────────── */

const WireframeTerrain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Grid config
    const COLS = 50;
    const ROWS = 30;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    let time = 0;

    const getHeight = (col, row, t) => {
      const nx = col / COLS;
      const ny = row / ROWS;

      // Base wave — multiple sine waves for organic motion
      let h = 0;
      h += Math.sin(nx * 4 + t * 0.8) * 12;
      h += Math.sin(ny * 3 + t * 0.6) * 8;
      h += Math.sin((nx + ny) * 3 + t * 1.2) * 6;
      h += Math.cos(nx * 6 - t * 0.5) * 4;

      // Mouse ripple
      const mouse = mouseRef.current;
      if (mouse.active) {
        const dx = nx - mouse.x;
        const dy = ny - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const ripple = Math.sin(dist * 20 - t * 3) * Math.max(0, 1 - dist * 3);
        h += ripple * 18;
      }

      return h;
    };

    // Project 3D -> 2D with perspective
    const project = (col, row, h) => {
      const nx = col / COLS;
      const ny = row / ROWS;

      // Map to grid space: center horizontally, stretch vertically for perspective
      const gridX = (nx - 0.5) * width * 1.4;
      const gridY = (ny - 0.3) * height * 1.5;

      // Perspective factor — stronger perspective at bottom
      const perspective = 0.7 + ny * 0.8;
      const x = width / 2 + gridX / perspective;
      const y = height * 0.35 + (gridY - h * 1.5) / perspective;

      return { x, y, perspective };
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Draw horizontal lines (rows)
      for (let row = 0; row < ROWS; row++) {
        ctx.beginPath();
        let firstPoint = true;

        for (let col = 0; col <= COLS; col++) {
          const h = getHeight(col, row, time);
          const { x, y } = project(col, row, h);

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Color based on row depth — front rows brighter
        const rowAlpha = 0.12 + (row / ROWS) * 0.35;
        ctx.strokeStyle = `rgba(0, 212, 255, ${rowAlpha})`;
        ctx.lineWidth = 1 + (row / ROWS) * 1.5;
        ctx.stroke();
      }

      // Draw vertical lines (columns) — sparser for cleaner look
      for (let col = 0; col <= COLS; col += 2) {
        ctx.beginPath();
        let firstPoint = true;

        for (let row = 0; row < ROWS; row++) {
          const h = getHeight(col, row, time);
          const { x, y } = project(col, row, h);

          if (firstPoint) {
            ctx.moveTo(x, y);
            firstPoint = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        const colAlpha = 0.08 + (col / COLS > 0.3 && col / COLS < 0.7 ? 0.15 : 0);
        ctx.strokeStyle = `rgba(0, 212, 255, ${colAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Highlight dots at intersections — sparse
      for (let row = 0; row < ROWS; row += 3) {
        for (let col = 0; col <= COLS; col += 4) {
          const h = getHeight(col, row, time);
          const { x, y } = project(col, row, h);
          const heightIntensity = Math.abs(h) / 30;
          const dotAlpha = (0.2 + heightIntensity * 0.6) * (row / ROWS);
          const dotSize = 1.5 + heightIntensity * 2;

          // Pick color based on height
          let color;
          if (h > 8) {
            color = `rgba(0, 212, 255, ${dotAlpha})`; // Teal for peaks
          } else if (h < -8) {
            color = `rgba(192, 132, 252, ${dotAlpha * 0.7})`; // Purple for valleys
          } else {
            color = `rgba(52, 211, 153, ${dotAlpha * 0.5})`; // Green for mid
          }

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }

      // Mouse glow
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x * width;
        const my = mouseRef.current.y * height;
        const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 150);
        glow.addColorStop(0, 'rgba(0, 212, 255, 0.06)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default WireframeTerrain;
