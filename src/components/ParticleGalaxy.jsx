import { useEffect, useRef } from 'react';

const COLORS = ['#00d4ff', '#c084fc', '#34d399', '#ffbe0b'];
const PARTICLE_COUNT = 6000;

export default function ParticleGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationId;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      targetX = width / 2;
      targetY = height / 2;
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread particles much further out to avoid central clustering and fill edges
      const maxRadius = Math.max(width, height) * 1.5;
      const radius = Math.sqrt(Math.random()) * maxRadius + 50;
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 0.0012 + 0.0001) * (Math.random() > 0.5 ? 1 : -1);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const size = Math.random() * 1.5 + 0.5;
      const z = Math.random() * 100 - 50; // Z-depth for 3D

      particles.push({ radius, angle, speed, color, size, z, initialRadius: radius });
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      // Parallax tracking: Galaxy center only shifts slightly instead of following mouse to edges
      const centerX = width / 2;
      const centerY = height / 2;
      let offsetX = 0;
      let offsetY = 0;

      if (width === 0 || height === 0) {
        requestAnimationFrame(animate);
        return;
      }

      if (mouseX !== 0 && width > 0 && height > 0) {
        const percentX = (mouseX / width) * 2 - 1;
        const percentY = (mouseY / height) * 2 - 1;
        offsetX = percentX * 200; // max shift 200px
        offsetY = percentY * 150; // max shift 150px
      }

      // Safeguard against NaN
      if (!isFinite(targetX)) targetX = centerX;
      if (!isFinite(targetY)) targetY = centerY;

      targetX += ((centerX + offsetX) - targetX) * 0.05;
      targetY += ((centerY + offsetY) - targetY) * 0.05;

      ctx.fillStyle = '#060610';
      ctx.fillRect(0, 0, width, height);

      // Draw galaxy center glow
      const radiusGlow = Math.max(1, Math.min(width, height) * 0.6);
      const glow = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, radiusGlow);
      glow.addColorStop(0, 'rgba(0, 212, 255, 0.08)');
      glow.addColorStop(0.4, 'rgba(192, 132, 252, 0.03)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      particles.forEach(p => {
        p.angle += p.speed;

        // 3D projection
        const scale = 100 / (100 + p.z);
        const x = targetX + Math.cos(p.angle) * p.radius * scale;
        const y = targetY + Math.sin(p.angle) * p.radius * scale * 0.4; // Squashed for 3D galaxy look

        ctx.beginPath();
        ctx.arc(x, y, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;

        // Dynamic opacity based on Z depth
        ctx.globalAlpha = Math.max(0.1, 1 - (p.z + 50) / 100);
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
