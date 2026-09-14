import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tight spring — nearly native speed, no floaty lag
  const springConfig = { damping: 32, stiffness: 420, mass: 0.2 };
  const cx = useSpring(mouseX, springConfig);
  const cy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (hover: hover)');
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener('change', updateEnabled);
    return () => media.removeEventListener('change', updateEnabled);
  }, []);

  const updateHover = useCallback((e) => {
    const el = e.target;
    if (!el) return;
    const isInteractive = el.closest('a, button, input, textarea, select, [data-cursor="pointer"], [role="button"]');
    setHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      updateHover(e);
    };
    const down = () => setPressing(true);
    const up = () => setPressing(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [enabled, mouseX, mouseY, updateHover]);

  if (!enabled) return null;

  // Crosshair dimensions
  const lineLen = hovering ? 10 : 7;
  const gap = hovering ? 3 : 2;
  const lineThickness = 1;
  const color = hovering
    ? 'rgba(0, 212, 255, 0.85)'
    : 'rgba(255, 255, 255, 0.45)';

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cx,
        y: cy,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 99999,
        pointerEvents: 'none',
        mixBlendMode: 'difference',
      }}
      animate={{
        scale: pressing ? 0.82 : 1,
      }}
      transition={{ duration: 0.1 }}
    >
      {/* Crosshair — four hairlines from center gap */}
      <svg
        width={lineLen * 2 + gap * 2}
        height={lineLen * 2 + gap * 2}
        viewBox={`0 0 ${lineLen * 2 + gap * 2} ${lineLen * 2 + gap * 2}`}
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Top line */}
        <line
          x1={lineLen + gap} y1={0}
          x2={lineLen + gap} y2={lineLen - gap}
          stroke={color} strokeWidth={lineThickness} strokeLinecap="round"
        />
        {/* Bottom line */}
        <line
          x1={lineLen + gap} y1={lineLen + gap * 2 + gap}
          x2={lineLen + gap} y2={lineLen * 2 + gap * 2}
          stroke={color} strokeWidth={lineThickness} strokeLinecap="round"
        />
        {/* Left line */}
        <line
          x1={0} y1={lineLen + gap}
          x2={lineLen - gap} y2={lineLen + gap}
          stroke={color} strokeWidth={lineThickness} strokeLinecap="round"
        />
        {/* Right line */}
        <line
          x1={lineLen + gap * 2 + gap} y1={lineLen + gap}
          x2={lineLen * 2 + gap * 2} y2={lineLen + gap}
          stroke={color} strokeWidth={lineThickness} strokeLinecap="round"
        />
        {/* Center dot — only on hover */}
        {hovering && (
          <circle
            cx={lineLen + gap}
            cy={lineLen + gap}
            r={1.5}
            fill="rgba(0, 212, 255, 0.9)"
          />
        )}
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
