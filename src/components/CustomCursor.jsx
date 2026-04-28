import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring trails very gently. Dot is 1:1 with the mouse.
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.35 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.35 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (hover: hover)');
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();
    media.addEventListener('change', updateEnabled);

    return () => media.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring — soft trail */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 28,
          height: 28,
          border: '1.5px solid rgba(0,212,255,0.55)',
          borderRadius: '50%',
          zIndex: 99999,
          pointerEvents: 'none',
        }}
      />

      {/* Center dot — locked to cursor (no spring) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 5,
          height: 5,
          backgroundColor: '#00d4ff',
          borderRadius: '50%',
          zIndex: 99999,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
