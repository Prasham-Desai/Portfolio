import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/Avatar.jpeg';

const TAGLINES = [
  'Building gameplay systems and C++ architecture in Unreal Engine.',
  'From shipped mobile titles to high-fidelity prototypes.',
  'Systems-first thinking. Production-tested delivery.',
];

// Sparse dot field for parallax
const DOT_COUNT = 40;
const generateDots = () =>
  Array.from({ length: DOT_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    opacity: Math.random() * 0.35 + 0.08,
    parallax: Math.random() * 0.6 + 0.2,
  }));

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const containerRef = useRef(null);
  const dots = useMemo(() => generateDots(), []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tiltX = useSpring(useTransform(my, [-1, 1], [4, -4]), { stiffness: 80, damping: 22 });
  const tiltY = useSpring(useTransform(mx, [-1, 1], [-5, 5]), { stiffness: 80, damping: 22 });
  const glowX = useSpring(useTransform(mx, [-1, 1], [-40, 40]), { stiffness: 50, damping: 22 });
  const glowY = useSpring(useTransform(my, [-1, 1], [-40, 40]), { stiffness: 50, damping: 22 });

  // Mouse-driven parallax values for dots
  const dotShiftX = useSpring(useTransform(mx, [-1, 1], [-20, 20]), { stiffness: 40, damping: 30 });
  const dotShiftY = useSpring(useTransform(my, [-1, 1], [-20, 20]), { stiffness: 40, damping: 30 });

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
      className="home-hero"
      style={{
        minHeight: '100svh',
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

      {/* Centre glow */}
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

      {/* Parallax dot field */}
      <div className="hero-dot-field" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        {dots.map(dot => (
          <ParallaxDot key={dot.id} dot={dot} dotShiftX={dotShiftX} dotShiftY={dotShiftY} />
        ))}
      </div>

      {/* ── Main content wrapper ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(100px, 10vw, 128px) clamp(20px, 5vw, 64px) clamp(64px, 8vw, 84px)',
        boxSizing: 'border-box',
      }}>
        <div className="hero-grid">

          {/* LEFT: text */}
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } } }}
          >
            <FadeUp>
              <div className="section-label" style={{ marginBottom: 24 }}>Gameplay & Systems Developer</div>
            </FadeUp>

            <FadeUp>
              <h1 className="hero-title" style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(3.2rem, 6.5vw, 5.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 0.92,
                color: '#f1f5f9',
                marginBottom: 28,
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
              <div className="hero-tagline-wrap" style={{ minHeight: 44, marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    className="hero-tagline"
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.36 }}
                    style={{
                      position: 'absolute',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                      fontWeight: 400,
                      color: '#94a3b8',
                      letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap',
                      margin: 0,
                    }}
                  >
                    {TAGLINES[taglineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="hero-stats" style={{ display: 'flex', flexWrap: 'wrap', gap: 36, marginBottom: 44 }}>
                {[
                  { v: '7+', l: 'Games Shipped' },
                  { v: '2', l: 'Game Engines' },
                  { v: 'C++', l: 'Primary Language' },
                ].map(s => (
                  <motion.div className="hero-stat" key={s.l} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.9rem', fontWeight: 800,
                      color: '#00d4ff', letterSpacing: '-0.03em', lineHeight: 1,
                    }}>{s.v}</div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem', color: '#64748b',
                      letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 6,
                    }}>{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
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

          {/* RIGHT: portrait card */}
          <motion.div
            className="hero-visual"
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
        /* ── Grid ── */
        .home-hero .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 64px);
          align-items: center;
        }

        /* ── Portrait card centering ── */
        .home-hero .hero-visual {
          display: flex;
          justify-content: center;
        }

        /* ── Button centering ── */
        .home-hero .hero-button {
          justify-content: center;
        }

        /* ── 1180px: slightly tighter ── */
        @media (max-width: 1180px) {
          .home-hero .hero-grid {
            gap: 28px !important;
          }
          .home-hero .hero-tagline-wrap {
            min-height: 64px !important;
            margin-bottom: 30px !important;
          }
          .home-hero .hero-tagline {
            white-space: normal !important;
            max-width: min(38ch, 100%);
            line-height: 1.4 !important;
          }
          .home-hero .hero-stats {
            gap: 22px !important;
            margin-bottom: 36px !important;
          }
        }

        /* ── 900px: stack vertically, text on top ── */
        @media (max-width: 900px) {
          .home-hero .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .home-hero .hero-copy {
            text-align: left;
          }
          .home-hero .hero-visual {
            max-width: min(480px, 100%);
            width: 100%;
            margin: 0 auto;
            justify-content: center !important;
          }
          .home-hero .hero-tagline-wrap {
            min-height: 52px !important;
          }
          .home-hero .hero-tagline {
            white-space: normal !important;
            max-width: 100%;
            line-height: 1.4 !important;
          }
          .home-hero .hero-dot-field {
            opacity: 0.4;
          }
        }

        /* ── 767px: mobile ── */
        @media (max-width: 767px) {
          .home-hero .hero-title {
            font-size: clamp(2.6rem, 11vw, 3.4rem) !important;
            line-height: 0.95 !important;
            margin-bottom: 18px !important;
          }
          .home-hero .hero-tagline-wrap {
            min-height: 48px !important;
            margin-bottom: 24px !important;
          }
          .home-hero .hero-tagline {
            white-space: normal !important;
            line-height: 1.45 !important;
            font-size: 0.95rem !important;
            position: relative !important;
          }
          .home-hero .hero-stats {
            display: flex !important;
            flex-wrap: wrap;
            gap: 20px 28px !important;
            margin-bottom: 30px !important;
          }
          .home-hero .hero-actions {
            flex-wrap: wrap;
          }
          .home-hero .hero-actions > * {
            flex: 1 1 auto;
            min-width: 140px;
          }
          .home-hero .hero-button {
            padding: 14px 22px !important;
          }
          .home-hero .hero-portrait-card {
            padding: 18px !important;
            border-radius: 22px !important;
          }
          .home-hero .hero-identity-strip {
            flex-direction: row;
            align-items: center !important;
            gap: 12px;
            flex-wrap: wrap;
          }
          .home-hero .hero-visual {
            max-width: 100%;
          }
        }

        /* ── 560px ── */
        @media (max-width: 560px) {
          .home-hero .hero-title {
            font-size: clamp(2.2rem, 12vw, 3rem) !important;
          }
          .home-hero .hero-visual {
            max-width: 100%;
          }
          .home-hero .hero-actions {
            gap: 10px !important;
          }
          .home-hero .hero-actions > * {
            width: 100%;
            flex: unset;
          }
          .home-hero .hero-button {
            width: 100%;
          }
        }

        /* ── 420px: very small phones ── */
        @media (max-width: 420px) {
          .home-hero .hero-title {
            font-size: clamp(2rem, 13vw, 2.6rem) !important;
            margin-bottom: 14px !important;
          }
          .home-hero .hero-tagline-wrap {
            min-height: 56px !important;
          }
          .home-hero .hero-stats {
            gap: 16px 24px !important;
          }
          .home-hero .hero-portrait-card {
            padding: 14px !important;
            border-radius: 18px !important;
          }
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

const PortraitCard = () => (
  <div className="hero-portrait-frame" style={{
    position: 'relative',
    maxWidth: 480,
    width: '100%',
    margin: '0 auto',
    transformStyle: 'preserve-3d',
  }}>
    <div style={{
      position: 'absolute', inset: -40, zIndex: -1,
      background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,212,255,0.10) 0%, transparent 60%)',
      pointerEvents: 'none',
      borderRadius: 40,
    }} />
    <div className="hero-portrait-card" style={{
      background: 'rgba(12,14,24,0.92)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 28,
      padding: 26,
      boxShadow: '0 40px 100px rgba(0,0,0,0.75), inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 44px rgba(0,212,255,0.08)',
      transformStyle: 'preserve-3d',
    }}>
      {/* HUD top bar — clean engine telemetry */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 14,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.66rem',
        letterSpacing: '0.14em',
        transform: 'translateZ(10px)',
      }}>
        <span style={{ color: '#94a3b8' }}>ENGINE: <span style={{ color: '#c084fc' }}>UE5</span> + <span style={{ color: '#00d4ff' }}>UNITY</span></span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#34d399' }}>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399' }}
          />
          READY
        </span>
      </div>

      {/* Avatar */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/10',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(0,212,255,0.18)',
        background: '#0a0a14',
        marginBottom: 14,
        transform: 'translateZ(10px)',
      }}>
        <img
          src={AvatarImg}
          alt="Prasham Desai"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          boxShadow: 'inset 0 0 50px rgba(0,0,0,0.6)',
          pointerEvents: 'none',
        }} />
        <Bracket pos="tl" />
        <Bracket pos="tr" />
        <Bracket pos="bl" />
        <Bracket pos="br" />
      </div>

      {/* Identity strip — clean, professional */}
      <div className="hero-identity-strip" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 14px',
        background: 'rgba(0,212,255,0.04)',
        borderRadius: 10,
        borderLeft: '2px solid #00d4ff',
        transform: 'translateZ(10px)',
      }}>
        <div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem', color: '#64748b',
            letterSpacing: '0.12em', marginBottom: 2,
          }}>ROLE</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#f1f5f9' }}>
            Game Developer
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem', color: '#64748b',
            letterSpacing: '0.12em', marginBottom: 2,
          }}>BASE</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#f1f5f9' }}>
            Ahmedabad
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Bracket = ({ pos }) => {
  const base = { position: 'absolute', width: 14, height: 14 };
  const styles = {
    tl: { ...base, top: 8, left: 8, borderTop: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' },
    tr: { ...base, top: 8, right: 8, borderTop: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' },
    bl: { ...base, bottom: 8, left: 8, borderBottom: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' },
    br: { ...base, bottom: 8, right: 8, borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' },
  };
  return <div style={styles[pos]} />;
};

const MagneticButton = ({ children, primary, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      className={`hero-button ${primary ? 'hero-button-primary' : 'hero-button-secondary'}`}
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
        color: primary ? '#060610' : '#f1f5f9',
        cursor: 'pointer',
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

const ParallaxDot = ({ dot, dotShiftX, dotShiftY }) => {
  const x = useTransform(dotShiftX, v => v * dot.parallax);
  const y = useTransform(dotShiftY, v => v * dot.parallax);
  
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${dot.x}%`,
        top: `${dot.y}%`,
        width: dot.size,
        height: dot.size,
        borderRadius: '50%',
        backgroundColor: '#00d4ff',
        opacity: dot.opacity,
        x,
        y,
      }}
    />
  );
};

export default Hero;