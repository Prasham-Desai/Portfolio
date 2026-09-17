import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ──────────────────────────────────────────────
   CINEMATIC LOADING SCREEN
   ─ Logo particle assembly → progress ring →
     live metrics → shatter exit
   ────────────────────────────────────────────── */

// Metrics that "tick up" during load
const METRICS = [
  { label: 'SHADERS', target: 2847, color: '#00d4ff' },
  { label: 'MATERIALS', target: 312, color: '#c084fc' },
  { label: 'BLUEPRINTS', target: 48, color: '#34d399' },
  { label: 'MESHES', target: 1204, color: '#ffbe0b' },
];

// Shatter grid config
const SHATTER_COLS = 5;
const SHATTER_ROWS = 4;
const TOTAL_TILES = SHATTER_COLS * SHATTER_ROWS;

// SVG ring config
const RING_SIZE = 160;
const RING_STROKE = 3;
const RING_RADIUS = (RING_SIZE - RING_STROKE * 2) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/* ── Animated counter ── */
const AnimatedCounter = ({ target, duration = 1.8, delay = 0.8 }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const end = start + duration * 1000;

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // easeOutExpo
      const eased = 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (now < end) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return value.toLocaleString();
};

/* ── Scanline + noise overlay ── */
const ScanlineOverlay = () => (
  <>
    {/* Removed Scanline sweep */}
    {/* Film grain */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10,
      opacity: 0.035,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      animation: 'noiseFlicker 0.15s steps(2) infinite',
    }} />
  </>
);

/* ── Particle for logo assembly ── */
const generateLogoParticles = (count = 24) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    // Scatter start position
    startX: (Math.random() - 0.5) * 300,
    startY: (Math.random() - 0.5) * 300,
    startRotate: Math.random() * 360,
    startScale: Math.random() * 0.4 + 0.1,
    // Delay for stagger
    delay: Math.random() * 0.6,
  }));

/* ── Main component ── */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('assembling'); // assembling | metrics | exit
  const [done, setDone] = useState(false);
  const particles = useMemo(() => generateLogoParticles(), []);

  // Shatter tile fragments
  const tiles = useMemo(() =>
    Array.from({ length: TOTAL_TILES }, (_, i) => {
      const col = i % SHATTER_COLS;
      const row = Math.floor(i / SHATTER_COLS);
      return {
        id: i,
        x: (col / SHATTER_COLS) * 100,
        y: (row / SHATTER_ROWS) * 100,
        w: 100 / SHATTER_COLS,
        h: 100 / SHATTER_ROWS,
        // Random exit direction
        exitX: (col - SHATTER_COLS / 2) * (120 + Math.random() * 80),
        exitY: (row - SHATTER_ROWS / 2) * (120 + Math.random() * 80),
        exitRotate: (Math.random() - 0.5) * 45,
        delay: Math.random() * 0.12,
      };
    }),
  []);

  const handleComplete = useCallback(() => {
    setDone(true);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase('metrics'), 1200);
    const t2 = setTimeout(() => setPhase('exit'), 2800);
    const t3 = setTimeout(handleComplete, 3200);

    // Progress bar (0→100 over ~2.6s)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 1.1;
      });
    }, 26);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed', inset: 0,
            background: '#060610',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <ScanlineOverlay />

          {/* Grid background */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Corner brackets */}
          {['tl', 'tr', 'bl', 'br'].map(pos => (
            <motion.div
              key={pos}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              style={{
                position: 'absolute',
                width: 36, height: 36,
                ...(pos.includes('t') ? { top: 28 } : { bottom: 28 }),
                ...(pos.includes('l') ? { left: 28 } : { right: 28 }),
                borderTop: pos.includes('t') ? '1px solid rgba(0,212,255,0.35)' : 'none',
                borderBottom: pos.includes('b') ? '1px solid rgba(0,212,255,0.35)' : 'none',
                borderLeft: pos.includes('l') ? '1px solid rgba(0,212,255,0.35)' : 'none',
                borderRight: pos.includes('r') ? '1px solid rgba(0,212,255,0.35)' : 'none',
              }}
            />
          ))}

          {/* Main content — will shatter on exit */}
          <AnimatePresence mode="wait">
            {phase !== 'exit' ? (
              <motion.div
                key="content"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 500, padding: '0 24px' }}
              >
                {/* ── Logo with particle assembly ── */}
                <div style={{ position: 'relative', marginBottom: 32 }}>
                  {/* Glow behind logo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: phase === 'metrics' ? 0.5 : 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 200, height: 200, borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* SVG Progress Ring */}
                  <div style={{ position: 'relative', width: RING_SIZE, height: RING_SIZE }}>
                    <svg width={RING_SIZE} height={RING_SIZE} style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
                      {/* Background ring */}
                      <circle
                        cx={RING_SIZE / 2}
                        cy={RING_SIZE / 2}
                        r={RING_RADIUS}
                        fill="none"
                        stroke="rgba(0,212,255,0.08)"
                        strokeWidth={RING_STROKE}
                      />
                      {/* Progress ring */}
                      <motion.circle
                        cx={RING_SIZE / 2}
                        cy={RING_SIZE / 2}
                        r={RING_RADIUS}
                        fill="none"
                        stroke="url(#ringGradient)"
                        strokeWidth={RING_STROKE}
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={RING_CIRCUMFERENCE * (1 - Math.min(progress, 100) / 100)}
                        style={{
                          filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.4))',
                          transition: 'stroke-dashoffset 0.05s linear',
                        }}
                      />
                      <defs>
                        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00d4ff" />
                          <stop offset="100%" stopColor="#00fff2" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Logo text inside ring */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.3, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '2.8rem',
                          fontWeight: 800,
                          letterSpacing: '-0.04em',
                          color: '#f1f5f9',
                          lineHeight: 1,
                          userSelect: 'none',
                        }}
                      >
                        PD<span style={{ color: '#00d4ff' }}>.</span>
                      </motion.div>
                    </div>

                    {/* Assembly particles */}
                    {particles.map(p => (
                      <motion.div
                        key={p.id}
                        initial={{
                          opacity: 0.8,
                          x: p.startX, y: p.startY,
                          rotate: p.startRotate,
                          scale: p.startScale,
                        }}
                        animate={{
                          opacity: 0,
                          x: 0, y: 0,
                          rotate: 0,
                          scale: 0,
                        }}
                        transition={{
                          duration: 0.9,
                          delay: p.delay,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%', left: '50%',
                          width: 3, height: 3,
                          borderRadius: '50%',
                          background: '#00d4ff',
                          boxShadow: '0 0 6px rgba(0,212,255,0.6)',
                          pointerEvents: 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    letterSpacing: '0.22em',
                    color: '#00d4ff',
                    textTransform: 'uppercase',
                    marginBottom: 36,
                    textAlign: 'center',
                  }}
                >
                  Gameplay & Systems Developer
                </motion.div>

                {/* ── Live metrics ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === 'metrics' ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 16,
                    width: '100%',
                    marginBottom: 32,
                  }}
                >
                  {METRICS.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: phase === 'metrics' ? 1 : 0, y: phase === 'metrics' ? 0 : 12 }}
                      transition={{ delay: i * 0.08 + 0.1, duration: 0.35 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '1.1rem', fontWeight: 700,
                        color: m.color,
                        lineHeight: 1.2,
                        textShadow: `0 0 10px ${m.color}40`,
                      }}>
                        <AnimatedCounter target={m.target} duration={1.6} delay={1.3 + i * 0.08} />
                      </div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.55rem',
                        letterSpacing: '0.12em',
                        color: '#64748b',
                        marginTop: 4,
                      }}>
                        {m.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ── Progress bar ── */}
                <div style={{ width: '100%', maxWidth: 320 }}>
                  <div style={{
                    height: 2,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 1,
                    overflow: 'hidden',
                    marginBottom: 10,
                  }}>
                    <motion.div style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #00d4ff, #00fff2)',
                      borderRadius: 1,
                      width: `${Math.min(progress, 100)}%`,
                      boxShadow: '0 0 8px rgba(0,212,255,0.4)',
                    }} />
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    color: 'rgba(148,163,184,0.5)',
                  }}>
                    <span>INITIALIZING EXPERIENCE</span>
                    <span>{Math.min(Math.round(progress), 100)}%</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── Shatter exit ── */
              <motion.div
                key="shatter"
                style={{
                  position: 'absolute', inset: 0,
                  pointerEvents: 'none',
                }}
              >
                {tiles.map(tile => (
                  <motion.div
                    key={tile.id}
                    initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                    animate={{
                      opacity: 0,
                      x: tile.exitX,
                      y: tile.exitY,
                      rotate: tile.exitRotate,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: tile.delay,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      position: 'absolute',
                      left: `${tile.x}%`,
                      top: `${tile.y}%`,
                      width: `${tile.w}%`,
                      height: `${tile.h}%`,
                      background: '#060610',
                      border: '1px solid rgba(0,212,255,0.06)',
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CSS Animations ── */}
          <style>{`
            @keyframes scanlineSweep {
              0% { top: -2px; }
              100% { top: 100%; }
            }
            @keyframes noiseFlicker {
              0% { opacity: 0.035; }
              50% { opacity: 0.02; }
              100% { opacity: 0.035; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
