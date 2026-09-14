import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth but fast spring
  const springConfig = { damping: 28, stiffness: 300, mass: 0.1 };
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
      // Subtract half of the wrapper's 40px size to perfectly center the cursor
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
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

  const color = hovering ? 'rgba(0, 212, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)';

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: cx,
        y: cy,
        zIndex: 99999,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
      }}
      animate={{
        scale: pressing ? 0.8 : 1,
      }}
      transition={{ duration: 0.15 }}
    >
      {/* Horizontal Line */}
      <motion.div
        animate={{
          width: hovering ? 20 : 12,
          height: hovering ? 2 : 1,
          backgroundColor: color,
        }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute' }}
      />
      {/* Vertical Line */}
      <motion.div
        animate={{
          height: hovering ? 20 : 12,
          width: hovering ? 2 : 1,
          backgroundColor: color,
        }}
        transition={{ duration: 0.2 }}
        style={{ position: 'absolute' }}
      />
      
      {/* Center dot */}
      <motion.div
        animate={{
          opacity: hovering ? 1 : 0,
          scale: hovering ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          width: 4,
          height: 4,
          backgroundColor: color,
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
