import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 500 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 500 });

  const [cursorState, setCursorState] = useState('default'); // default | hover | click | drag | text

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseDown = () => setCursorState('click');
    const mouseUp = () => setCursorState('default');

    const handleHoverIn = (e) => {
      const el = e.target;
      if (el.matches('a, button, [data-cursor="hover"], .project-card, .skill-node')) {
        setCursorState('hover');
      } else if (el.matches('input, textarea')) {
        setCursorState('text');
      }
    };

    const handleHoverOut = () => setCursorState('default');

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    document.addEventListener('mouseover', handleHoverIn);
    document.addEventListener('mouseout', handleHoverOut);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
    };
  }, [mouseX, mouseY]);

  const ringVariants = {
    default: { width: 32, height: 32, borderColor: 'rgba(0,212,255,0.6)', backgroundColor: 'transparent', scale: 1 },
    hover: { width: 56, height: 56, borderColor: 'rgba(0,212,255,0.9)', backgroundColor: 'rgba(0,212,255,0.08)', scale: 1 },
    click: { width: 24, height: 24, borderColor: 'rgba(0,212,255,1)', backgroundColor: 'rgba(0,212,255,0.2)', scale: 0.9 },
    text: { width: 4, height: 40, borderColor: 'rgba(0,212,255,0.8)', backgroundColor: 'rgba(0,212,255,0.8)', borderRadius: '2px', scale: 1 },
  };

  const dotVariants = {
    default: { width: 6, height: 6, backgroundColor: '#00d4ff', scale: 1 },
    hover: { width: 6, height: 6, backgroundColor: '#00d4ff', scale: 0.5 },
    click: { width: 10, height: 10, backgroundColor: '#00d4ff', scale: 1 },
    text: { width: 2, height: 2, backgroundColor: '#00d4ff', scale: 0 },
  };

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 99999,
          pointerEvents: 'none',
          border: '1.5px solid rgba(0,212,255,0.6)',
          borderRadius: '50%',
          mixBlendMode: 'normal',
        }}
        animate={ringVariants[cursorState]}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      {/* Center dot */}
      <motion.div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={dotVariants[cursorState]}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      />

      {/* Cursor glow trail */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          zIndex: 99990,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
