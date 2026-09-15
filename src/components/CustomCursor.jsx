import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, animate } from 'framer-motion';

/* ═══════════════════════════════════════════
   GAME RETICLE CURSOR
   A tactical targeting HUD — not a SaaS blob.
   ═══════════════════════════════════════════ */

const RETICLE_SIZE = 40;          // base size of the reticle
const RETICLE_HOVER_SIZE = 52;    // expanded during target lock

const CENTER_DOT = 3;             // center dot radius
const IDLE_SPIN_SPEED = 0.15;     // deg/frame idle rotation

const COLOR_DEFAULT = '#00d4ff';
const COLOR_LOCKED  = '#34d399';
const COLOR_FIRE    = '#ff5263';
const COLOR_TEXT_MODE = '#ffbe0b';

/* ─── helpers ────────────────────────── */
const isInteractiveEl = (el) =>
  el?.closest(
    'a, button, input, textarea, select, [data-cursor="pointer"], [role="button"], label[for], [tabindex]'
  );

const isTextInput = (el) =>
  el?.closest(
    'input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], input[type="number"], textarea, [contenteditable="true"]'
  );

/* ═══════════════════════════════════════════ */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [moving, setMoving] = useState(false);

  // idle rotation angle
  const idleAngle = useRef(0);
  const idleRaf = useRef(null);
  const moveTimeout = useRef(null);

  // trail positions (afterimage)
  const [trail, setTrail] = useState([]);
  const trailId = useRef(0);

  // Raw mouse position
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Reticle follows with tactical precision — tight but not instant
  const reticleSpring = { damping: 32, stiffness: 450, mass: 0.08 };
  const cx = useSpring(rawX, reticleSpring);
  const cy = useSpring(rawY, reticleSpring);

  // Outer ring (brackets) has slight lag for depth
  const outerSpring = { damping: 24, stiffness: 280, mass: 0.15 };
  const ox = useSpring(rawX, outerSpring);
  const oy = useSpring(rawY, outerSpring);

  // Animated reticle size
  const reticleSize = useMotionValue(RETICLE_SIZE);
  const reticleSizeSpring = useSpring(reticleSize, { damping: 18, stiffness: 300 });

  // Bracket rotation
  const bracketRotation = useMotionValue(0);
  const bracketRotSpring = useSpring(bracketRotation, { damping: 25, stiffness: 200 });

  // Fire flash opacity
  const flashOpacity = useMotionValue(0);
  const flashSpring = useSpring(flashOpacity, { damping: 30, stiffness: 400 });

  /* ─── capability check ─── */
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (hover: hover)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  /* ─── idle rotation loop ─── */
  useEffect(() => {
    if (!enabled) return;

    const spin = () => {
      if (!moving && !hovering) {
        idleAngle.current += IDLE_SPIN_SPEED;
        bracketRotation.set(idleAngle.current);
      }
      idleRaf.current = requestAnimationFrame(spin);
    };
    idleRaf.current = requestAnimationFrame(spin);

    return () => {
      if (idleRaf.current) cancelAnimationFrame(idleRaf.current);
    };
  }, [enabled, moving, hovering, bracketRotation]);

  /* ─── state derivation ─── */
  const syncStates = useCallback(
    (e) => {
      const el = e.target;
      if (!el) return;

      const interactive = !!isInteractiveEl(el);
      const text = !!isTextInput(el);

      setHovering(interactive);
      setTextMode(text);

      if (text) {
        reticleSize.set(28);
      } else if (interactive) {
        reticleSize.set(RETICLE_HOVER_SIZE);
        // Snap rotation on lock
        bracketRotation.set(45);
        idleAngle.current = 45;
      } else {
        reticleSize.set(RETICLE_SIZE);
      }
    },
    [reticleSize, bracketRotation]
  );

  /* ─── mouse listeners ─── */
  useEffect(() => {
    if (!enabled) return undefined;

    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      syncStates(e);

      // Mark as moving
      setMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => setMoving(false), 120);

      // Spawn trail afterimage
      const id = trailId.current++;
      setTrail((prev) => {
        const next = [...prev, { id, x: e.clientX, y: e.clientY, born: Date.now() }];
        return next.length > 5 ? next.slice(-5) : next;
      });
    };

    const onDown = () => {
      setPressing(true);
      // Fire flash
      flashOpacity.set(1);
      animate(flashOpacity, 0, { duration: 0.35 });
      // Slam brackets inward
      reticleSize.set(reticleSize.get() * 0.6);
    };

    const onUp = () => {
      setPressing(false);
      // Spring back
      const el = document.elementFromPoint(rawX.get(), rawY.get());
      if (el) syncStates({ target: el });
      else reticleSize.set(RETICLE_SIZE);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [enabled, rawX, rawY, flashOpacity, reticleSize, syncStates]);

  /* ─── trail cleanup ─── */
  useEffect(() => {
    if (!enabled) return;
    const tick = () => {
      const now = Date.now();
      setTrail((prev) => prev.filter((p) => now - p.born < 250));
      requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;

  const color = textMode ? COLOR_TEXT_MODE : hovering ? COLOR_LOCKED : COLOR_DEFAULT;

  return (
    <>
      {/* ─── Afterimage trail ─── */}
      {trail.map((p) => {
        const age = (Date.now() - p.born) / 250;
        return (
          <div
            key={p.id}
            style={{
              position: 'fixed',
              left: p.x,
              top: p.y,
              width: 2,
              height: 2,
              borderRadius: '50%',
              background: COLOR_DEFAULT,
              opacity: Math.max(0, 0.3 * (1 - age)),
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 99996,
            }}
          />
        );
      })}

      {/* ─── Outer Bracket Reticle ─── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ox,
          y: oy,
          width: reticleSizeSpring,
          height: reticleSizeSpring,
          translateX: '-50%',
          translateY: '-50%',
          rotate: bracketRotSpring,
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        <ReticleSVG
          color={color}
          hovering={hovering}
          pressing={pressing}
          textMode={textMode}
        />
      </motion.div>

      {/* ─── Fire flash ─── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cx,
          y: cy,
          width: 60,
          height: 60,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${COLOR_FIRE}44 0%, transparent 70%)`,
          opacity: flashSpring,
          pointerEvents: 'none',
          zIndex: 99997,
        }}
      />

      {/* ─── Center dot ─── */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cx,
          y: cy,
          width: CENTER_DOT * 2,
          height: CENTER_DOT * 2,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: `0 0 6px ${color}, 0 0 12px ${color}44`,
          opacity: hidden ? 0 : 1,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
        }}
      />

      {hovering && !textMode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            x: cx,
            y: cy,
            translateX: '-50%',
            translateY: 'calc(-50% + 34px)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.5rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: COLOR_LOCKED,
            textShadow: `0 0 8px ${COLOR_LOCKED}88`,
            pointerEvents: 'none',
            zIndex: 99999,
            whiteSpace: 'nowrap',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            LOCKED
          </motion.span>
        </motion.div>
      )}

      {/* ─── Text-mode caret indicator ─── */}
      {textMode && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.8, scaleY: 1 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            x: cx,
            y: cy,
            width: 2,
            height: 20,
            translateX: '-50%',
            translateY: '-50%',
            backgroundColor: COLOR_TEXT_MODE,
            boxShadow: `0 0 6px ${COLOR_TEXT_MODE}88`,
            pointerEvents: 'none',
            zIndex: 99999,
          }}
        />
      )}
    </>
  );
};

/* ═══════════════════════════════════════════
   SVG RETICLE — the core visual
   Four corner brackets + tick marks + diamond lock indicator
   ═══════════════════════════════════════════ */
const ReticleSVG = ({ color, hovering, pressing, textMode }) => {
  const s = 100; // viewBox size
  const c = s / 2; // center
  const bracketLen = hovering ? 14 : 10;
  const bracketOffset = hovering ? 14 : 18;
  const strokeW = hovering ? 2 : 1.5;
  const tickLen = 4;

  // Corner bracket positions
  const corners = [
    { x: c - bracketOffset, y: c - bracketOffset, dx: 1, dy: 1 },   // TL
    { x: c + bracketOffset, y: c - bracketOffset, dx: -1, dy: 1 },  // TR
    { x: c - bracketOffset, y: c + bracketOffset, dx: 1, dy: -1 },  // BL
    { x: c + bracketOffset, y: c + bracketOffset, dx: -1, dy: -1 }, // BR
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      {/* Corner brackets */}
      {corners.map((corner, i) => (
        <g key={i}>
          {/* Horizontal arm */}
          <line
            x1={corner.x}
            y1={corner.y}
            x2={corner.x + bracketLen * corner.dx}
            y2={corner.y}
            stroke={color}
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
          {/* Vertical arm */}
          <line
            x1={corner.x}
            y1={corner.y}
            x2={corner.x}
            y2={corner.y + bracketLen * corner.dy}
            stroke={color}
            strokeWidth={strokeW}
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Cardinal tick marks (N/S/E/W) */}
      <line x1={c} y1={c - bracketOffset + 2} x2={c} y2={c - bracketOffset + 2 + tickLen} stroke={color} strokeWidth={1} opacity={0.5} strokeLinecap="round" />
      <line x1={c} y1={c + bracketOffset - 2} x2={c} y2={c + bracketOffset - 2 - tickLen} stroke={color} strokeWidth={1} opacity={0.5} strokeLinecap="round" />
      <line x1={c - bracketOffset + 2} y1={c} x2={c - bracketOffset + 2 + tickLen} y2={c} stroke={color} strokeWidth={1} opacity={0.5} strokeLinecap="round" />
      <line x1={c + bracketOffset - 2} y1={c} x2={c + bracketOffset - 2 - tickLen} y2={c} stroke={color} strokeWidth={1} opacity={0.5} strokeLinecap="round" />

      {/* Diamond lock indicator (visible on hover) */}
      {hovering && !textMode && (
        <motion.polygon
          points={`${c},${c - 8} ${c + 8},${c} ${c},${c + 8} ${c - 8},${c}`}
          fill="none"
          stroke={color}
          strokeWidth={1}
          opacity={0.4}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Outer ring (thin circle) */}
      <circle
        cx={c}
        cy={c}
        r={bracketOffset + 4}
        fill="none"
        stroke={color}
        strokeWidth={0.5}
        opacity={hovering ? 0.35 : 0.15}
        strokeDasharray={hovering ? 'none' : '2 4'}
      />
    </svg>
  );
};

export default CustomCursor;
