import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/Avatar.jpeg';

const TAGLINES = [
  'Building games that players remember.',
  'Unity · C# · Mobile · Multiplayer · AR/VR.',
  'From prototype to product, end to end.',
];

/* Shapes scattered in free pockets that never sit behind the text
   column (left 0-46%, top 26-78%) or the portrait card
   (left 54-92%, top 22-82%). Each one has a unique top/left so no
   two land on the same horizontal line. */
/* Free zones (won't collide with text/portrait):
     · Top band:    top  6-18%, any left
     · Bottom band: top 82-95%, any left
     · Far-left:    left 2-6%,  middle rows
     · Far-right:   left 94-97%, middle rows
     · Centre seam: left 48-52%, narrow vertical strip between columns
   Each shape gets a unique top/left so none share a row. */
const SHAPES = [
  // Top band — 4 across, evenly spaced
  { id: 'cube',     kind: 'cube',  top: '8%',  left: '8%',  size: 50, color: '#00d4ff', spin: 22 },
  { id: 'pixel-1',  kind: 'pixel', top: '12%', left: '32%', size: 26, color: '#00d4ff', spin: 32 },
  { id: 'plus-1',   kind: 'plus',  top: '10%', left: '64%', size: 26, color: '#ff4757', spin: 0  },
  { id: 'tri-1',    kind: 'tri',   top: '14%', left: '90%', size: 32, color: '#ffd700', spin: 0  },

  // Mid-row edges — left/right rails only, never centre
  { id: 'ring',     kind: 'ring',  top: '42%', left: '3%',  size: 42, color: '#00fff2', spin: 0  },
  { id: 'octa',     kind: 'octa',  top: '50%', left: '95%', size: 38, color: '#b44fff', spin: 26 },

  // Bottom band — 4 across, evenly spaced
  { id: 'plus-2',   kind: 'plus',  top: '86%', left: '6%',  size: 24, color: '#ff4757', spin: 0  },
  { id: 'dpad',     kind: 'dpad',  top: '90%', left: '30%', size: 38, color: '#00ff88', spin: 0  },
  { id: 'coin',     kind: 'coin',  top: '88%', left: '60%', size: 34, color: '#ffd700', spin: 14 },
  { id: 'tri-2',    kind: 'tri',   top: '92%', left: '92%', size: 30, color: '#00ff88', spin: 0  },

  // Centre seam — single accent between the columns
  { id: 'pixel-2',  kind: 'pixel', top: '54%', left: '50%', size: 22, color: '#b44fff', spin: 32 },
];

const PROXIMITY_RADIUS = 140; // px — shapes only react inside this radius

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);

  // Cursor position normalised to [-1, 1]
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Portrait card 3D tilt — subtle
  const tiltX = useSpring(useTransform(my, [-1, 1], [4, -4]), { stiffness: 80, damping: 22 });
  const tiltY = useSpring(useTransform(mx, [-1, 1], [-5, 5]), { stiffness: 80, damping: 22 });

  // Centre glow drifts gently with cursor
  const glowX = useSpring(useTransform(mx, [-1, 1], [-40, 40]), { stiffness: 50, damping: 22 });
  const glowY = useSpring(useTransform(my, [-1, 1], [-40, 40]), { stiffness: 50, damping: 22 });

  useEffect(() => {
    const id = setInterval(() => setTaglineIndex(p => (p + 1) % TAGLINES.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
      my.set(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        height: '100vh',
        minHeight: 720,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
        perspective: 1400,
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.028) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 10%,transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 10%,transparent 100%)',
      }} />

      {/* Centre glow with cursor drift */}
      <motion.div style={{
        position: 'absolute',
        top: 'calc(50% - 450px)',
        left: 'calc(50% - 450px)',
        width: 900, height: 900,
        borderRadius: '50%',
        x: glowX, y: glowY,
        background: 'radial-gradient(circle,rgba(0,212,255,0.07) 0%,transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Floating shapes — only react when cursor is close to each shape */}
      {SHAPES.map(shape => (
        <FloatingShape
          key={shape.id}
          {...shape}
          onInteract={() => setHasInteracted(true)}
        />
      ))}

      {/* Drag-me hint, fades after first interaction */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            style={{
              position: 'absolute',
              top: 110, right: 48,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#8888aa',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', gap: 10,
              zIndex: 4,
              pointerEvents: 'none',
            }}
          >
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ width: 6, height: 6, background: '#00d4ff', borderRadius: '50%', boxShadow: '0 0 8px #00d4ff' }}
            />
            drag the shapes
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content layer */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}>
          {/* LEFT: text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } } }}
          >
            <FadeUp>
              <div className="section-label" style={{ marginBottom: 24 }}>Game Developer</div>
            </FadeUp>

            <FadeUp>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(3.6rem, 7.5vw, 6rem)',
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 0.92,
                color: '#f0f0f8',
                marginBottom: 24,
              }}>
                Prasham<br />
                <span style={{
                  background: 'linear-gradient(135deg,#00d4ff 30%,#00fff2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Desai
                </span>
                <span style={{ color: '#00d4ff' }}>.</span>
              </h1>
            </FadeUp>

            <FadeUp>
              <div style={{ height: 36, marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.36 }}
                    style={{
                      position: 'absolute',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                      fontWeight: 400,
                      color: '#8888aa',
                      letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {TAGLINES[taglineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </FadeUp>

            <FadeUp>
              <div style={{ display: 'flex', gap: 36, marginBottom: 44 }}>
                {[
                  { v: '7+',   l: 'Games Shipped' },
                  { v: '1yr+', l: 'Experience' },
                  { v: '∞',    l: 'Bugs Solved' },
                ].map(s => (
                  <motion.div key={s.l} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.9rem', fontWeight: 800,
                      color: '#00d4ff', letterSpacing: '-0.03em', lineHeight: 1,
                    }}>{s.v}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem', color: '#444460',
                      letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6,
                    }}>{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div style={{ display: 'flex', gap: 14 }}>
                <MagneticButton primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </MagneticButton>
                <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact
                </MagneticButton>
              </div>
            </FadeUp>
          </motion.div>

          {/* RIGHT: portrait card with deeper 3D tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformPerspective: 1200,
              transformStyle: 'preserve-3d',
            }}
          >
            <PortraitCard />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          #hero .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          #hero .hero-shape { display: none !important; }
        }
      `}</style>
    </section>
  );
};

const FadeUp = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
    }}
  >
    {children}
  </motion.div>
);

/* ──────────────────────────────────────────────────────────────
   FloatingShape — proximity-reactive:
     · stays still while the cursor is far away
     · gently pushes away from the cursor only when within
       PROXIMITY_RADIUS, so the entire hero doesn't shift on
       every mouse move
     · still draggable (springs back to origin)
     · still idle-floats and spins
────────────────────────────────────────────────────────────── */
const FloatingShape = ({ kind, top, left, size, color, spin, onInteract }) => {
  const ref = useRef(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 20, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 90, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < PROXIMITY_RADIUS) {
        // Falloff: 1 at center, 0 at edge of radius
        const falloff = 1 - dist / PROXIMITY_RADIUS;
        // Push AWAY from cursor — feels like the shape is shy
        const strength = 26 * falloff;
        const angle = Math.atan2(dy, dx);
        px.set(-Math.cos(angle) * strength);
        py.set(-Math.sin(angle) * strength);
      } else {
        px.set(0);
        py.set(0);
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [px, py]);

  const floatRange = 14;
  const floatDuration = 5;

  return (
    <motion.div
      ref={ref}
      className="hero-shape"
      style={{
        position: 'absolute',
        top, left,
        width: size, height: size,
        x: sx, y: sy,
        zIndex: 1,
        opacity: 0.92,
      }}
    >
      <motion.div
        drag
        dragSnapToOrigin
        dragElastic={0.7}
        dragTransition={{ bounceStiffness: 220, bounceDamping: 16 }}
        onDragStart={onInteract}
        onTap={onInteract}
        whileHover={{ scale: 1.18 }}
        whileDrag={{ scale: 1.28, zIndex: 10 }}
        style={{ width: '100%', height: '100%' }}
      >
        <motion.div
          animate={{
            y: [0, -floatRange, 0],
            rotate: spin > 0 ? 360 : 0,
          }}
          transition={{
            y: { duration: floatDuration, repeat: Infinity, ease: 'easeInOut' },
            rotate: spin > 0
              ? { duration: spin, repeat: Infinity, ease: 'linear' }
              : { duration: 0 },
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <ShapeGraphic kind={kind} size={size} color={color} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ShapeGraphic = ({ kind, size, color }) => {
  const stroke = 2;
  const glow = `drop-shadow(0 0 12px ${color}66)`;

  switch (kind) {
    case 'cube':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <polygon points="50,8 90,30 90,70 50,92 10,70 10,30" fill="none" stroke={color} strokeWidth={stroke} />
          <polygon points="50,8 50,50 10,30" fill={color} opacity="0.18" />
          <polygon points="50,8 50,50 90,30" fill={color} opacity="0.32" />
          <polygon points="50,50 10,30 10,70 50,92" fill={color} opacity="0.10" />
          <line x1="50" y1="8"  x2="50" y2="50" stroke={color} strokeWidth={stroke} opacity="0.7" />
          <line x1="50" y1="50" x2="10" y2="30" stroke={color} strokeWidth={stroke} opacity="0.7" />
          <line x1="50" y1="50" x2="90" y2="30" stroke={color} strokeWidth={stroke} opacity="0.7" />
          <line x1="50" y1="50" x2="50" y2="92" stroke={color} strokeWidth={stroke} opacity="0.7" />
        </svg>
      );
    case 'octa':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={color} strokeWidth={stroke} />
          <polygon points="50,5 50,95 5,50" fill={color} opacity="0.14" />
          <polygon points="50,5 50,95 95,50" fill={color} opacity="0.28" />
          <line x1="5" y1="50" x2="95" y2="50" stroke={color} strokeWidth={stroke} opacity="0.7" />
          <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth={stroke} opacity="0.7" />
        </svg>
      );
    case 'dpad':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <path d="M35 12 H65 V35 H88 V65 H65 V88 H35 V65 H12 V35 H35 Z" fill={color} opacity="0.16" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
          <circle cx="50" cy="50" r="6" fill={color} opacity="0.7" />
        </svg>
      );
    case 'coin':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <circle cx="50" cy="50" r="42" fill={color} opacity="0.12" stroke={color} strokeWidth={stroke} />
          <circle cx="50" cy="50" r="34" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
          <text x="50" y="63" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="36" fill={color} opacity="0.95">$</text>
        </svg>
      );
    case 'pixel':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <rect x="8"  y="8"  width="38" height="38" fill={color} opacity="0.85" />
          <rect x="54" y="8"  width="38" height="38" fill="none" stroke={color} strokeWidth="3" opacity="0.7" />
          <rect x="8"  y="54" width="38" height="38" fill="none" stroke={color} strokeWidth="3" opacity="0.7" />
          <rect x="54" y="54" width="38" height="38" fill={color} opacity="0.5" />
        </svg>
      );
    case 'tri':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <polygon points="20,15 90,50 20,85" fill={color} opacity="0.20" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
    case 'plus':
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <path d="M40 10 H60 V40 H90 V60 H60 V90 H40 V60 H10 V40 H40 Z" fill={color} opacity="0.22" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
    case 'ring':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" style={{ filter: glow }}>
          <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth={stroke} />
          <circle cx="50" cy="50" r="32" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
          <circle cx="50" cy="50" r="6"  fill={color} />
        </svg>
      );
  }
};

/* ──────────────────────────────────────
   PORTRAIT CARD — slimmer, deeper tilt,
   scanlines + corner brackets
────────────────────────────────────── */
const PortraitCard = () => {
  return (
    <div style={{
      position: 'relative',
      maxWidth: 520,
      width: '100%',
      margin: '0 auto',
      transformStyle: 'preserve-3d',
    }}>
      {/* Ambient glow behind card */}
      <div style={{
        position: 'absolute', inset: -40, zIndex: -1,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,212,255,0.10) 0%, transparent 60%)',
        pointerEvents: 'none',
        borderRadius: 40,
      }} />

      <div style={{
        background: 'rgba(13,13,26,0.92)',
        border: '1px solid rgba(0,212,255,0.18)',
        borderRadius: 28,
        padding: 26,
        boxShadow: '0 40px 100px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 44px rgba(0,212,255,0.10)',
        transformStyle: 'preserve-3d',
      }}>
        {/* HUD top bar — sits forward in 3D */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 14,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.66rem',
          letterSpacing: '0.14em',
          transform: 'translateZ(10px)',
        }}>
          <span style={{ color: '#00d4ff' }}>PLAYER_01</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#00ff88' }}>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }}
            />
            ONLINE
          </span>
        </div>

        {/* Avatar — landscape, pushed forward in Z */}
        <div style={{
          position: 'relative',
          aspectRatio: '16/10',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(0,212,255,0.22)',
          background: '#0a0a14',
          marginBottom: 14,
          transform: 'translateZ(10px)',
        }}>
          <img
            src={AvatarImg}
            alt="Prasham Desai"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* scanlines */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,212,255,0.04) 2px 3px)',
            pointerEvents: 'none',
          }} />
          {/* inset darkening */}
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.7)',
            pointerEvents: 'none',
          }} />
          {/* corner brackets */}
          <Bracket pos="tl" />
          <Bracket pos="tr" />
          <Bracket pos="bl" />
          <Bracket pos="br" />
        </div>

        {/* Identity strip — pushed forward in Z */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '10px 14px',
          background: 'rgba(0,212,255,0.05)',
          borderRadius: 10,
          borderLeft: '2px solid #00d4ff',
          transform: 'translateZ(10px)',
        }}>
          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#444460',
              letterSpacing: '0.12em',
              marginBottom: 2,
            }}>CLASS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#f0f0f8' }}>
              Game Developer
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#444460',
              letterSpacing: '0.12em',
              marginBottom: 2,
            }}>BASE</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#f0f0f8' }}>
              Ahmedabad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bracket = ({ pos }) => {
  const base = { position: 'absolute', width: 14, height: 14 };
  const styles = {
    tl: { ...base, top: 8,    left: 8,    borderTop:    '2px solid #00d4ff', borderLeft:  '2px solid #00d4ff' },
    tr: { ...base, top: 8,    right: 8,   borderTop:    '2px solid #00d4ff', borderRight: '2px solid #00d4ff' },
    bl: { ...base, bottom: 8, left: 8,    borderBottom: '2px solid #00d4ff', borderLeft:  '2px solid #00d4ff' },
    br: { ...base, bottom: 8, right: 8,   borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' },
  };
  return <div style={styles[pos]} />;
};

/* MagneticButton — unchanged behaviour, kept inline */
const MagneticButton = ({ children, primary, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        x: sx, y: sy,
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600, fontSize: '1rem',
        padding: '14px 32px', borderRadius: 10,
        display: 'flex', alignItems: 'center', gap: 8,
        letterSpacing: '-0.01em',
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.12)',
        background: primary ? '#00d4ff' : 'transparent',
        color: primary ? '#08080f' : '#f0f0f8',
      }}
      whileHover={primary
        ? { scale: 1.05, boxShadow: '0 0 36px rgba(0,212,255,0.3)' }
        : { scale: 1.04, borderColor: 'rgba(0,212,255,0.45)' }
      }
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default Hero;
