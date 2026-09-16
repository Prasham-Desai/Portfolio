import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/Avatar.jpeg';
import WireframeTerrain from './ParticleCanvas';

/* ──────────────────────────────────────────────
   HERO SECTION — IMMERSIVE FULL-VIEWPORT
   ─ Interactive wireframe terrain background
   ─ Character-by-character stagger title
   ─ 3D floating tech badges (proper orbit)
   ─ Scroll indicator
   ────────────────────────────────────────────── */

const TAGLINES = [
  'Building gameplay systems and C++ architecture in Unreal Engine.',
  'From shipped mobile titles to high-fidelity prototypes.',
  'Systems-first thinking. Production-tested delivery.',
];

const TECH_BADGES = [
  { label: 'UE5', color: '#c084fc', glow: 'rgba(192,132,252,0.3)' },
  { label: 'C++', color: '#00d4ff', glow: 'rgba(0,212,255,0.3)' },
  { label: 'Unity', color: '#34d399', glow: 'rgba(52,211,153,0.3)' },
  { label: 'Blueprint', color: '#ffbe0b', glow: 'rgba(255,190,11,0.3)' },
  { label: 'C#', color: '#fb923c', glow: 'rgba(251,146,60,0.3)' },
  { label: 'Gameplay', color: '#00d4ff', glow: 'rgba(0,212,255,0.3)' },
  { label: 'AI/ML', color: '#c084fc', glow: 'rgba(192,132,252,0.3)' },
  { label: 'Systems', color: '#34d399', glow: 'rgba(52,211,153,0.3)' },
];

// Fixed orbit config — consistent ellipse, widened to clear portrait
const ORBIT_RADIUS_X = 280; // horizontal radius in px
const ORBIT_RADIUS_Y = 210; // vertical radius in px
const ORBIT_SPEED = 0.12;   // radians per second

/* ── Character stagger title ── */
const StaggerTitle = ({ text, delay = 0 }) => {
  const chars = text.split('');
  return (
    <span style={{ display: 'inline-block' }}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/* ── Animated counter ── */
const AnimatedCounter = ({ value, suffix = '', delay = 0 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value) || 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(2, -10 * progress);
        setCount(Math.round(eased * numericValue));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);

    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  return `${count}${suffix}`;
};

/* ── Scroll indicator ── */
const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            zIndex: 5,
          }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#64748b',
          }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
              <rect x="1" y="1" width="18" height="26" rx="9" stroke="#64748b" strokeWidth="1.5" />
              <motion.circle
                cx="10" cy="8"
                r="2.5"
                fill="#00d4ff"
                animate={{ cy: [8, 16, 8] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Orbiting badges — single shared RAF, proper elliptical orbit ── */
const OrbitingBadges = ({ badges, mouseX, mouseY }) => {
  const badgeRefs = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now) => {
      const t = (now - start) / 1000;

      badges.forEach((badge, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;

        // Evenly spaced angle + slow rotation
        const baseAngle = (i / badges.length) * Math.PI * 2;
        const angle = baseAngle + t * ORBIT_SPEED;

        // Per-badge subtle bob
        const bobPhase = i * 0.8;
        const bob = Math.sin(t * 1.8 + bobPhase) * 5;

        const x = Math.cos(angle) * ORBIT_RADIUS_X;
        const y = Math.sin(angle) * ORBIT_RADIUS_Y + bob;

        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [badges]);

  return (
    <>
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          ref={el => badgeRefs.current[i] = el}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            zIndex: 2,
            willChange: 'transform',
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            padding: '5px 14px',
            borderRadius: 20,
            background: `${badge.color}10`,
            border: `1px solid ${badge.color}30`,
            color: badge.color,
            whiteSpace: 'nowrap',
            boxShadow: `0 0 16px ${badge.glow}`,
            backdropFilter: 'blur(4px)',
            userSelect: 'none',
          }}>
            {badge.label}
          </div>
        </motion.div>
      ))}
    </>
  );
};

/* ── Main Hero ── */
const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const containerRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const tiltX = useSpring(useTransform(my, [-1, 1], [3, -3]), { stiffness: 80, damping: 22 });
  const tiltY = useSpring(useTransform(mx, [-1, 1], [-4, 4]), { stiffness: 80, damping: 22 });

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
      {/* Interactive wireframe terrain */}
      <WireframeTerrain />

      {/* Centre glow */}
      <div style={{
        position: 'absolute',
        top: 'calc(50% - 450px)',
        left: 'calc(50% - 450px)',
        width: 900, height: 900,
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

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
                <StaggerTitle text="Prasham" delay={0.3} />
                <br />
                <span style={{
                  background: 'linear-gradient(135deg,#00d4ff 30%,#00fff2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <StaggerTitle text="Desai" delay={0.6} />
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.3 }}
                  style={{ color: '#00d4ff' }}
                >.</motion.span>
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
                  { v: 7, suffix: '+', l: 'Games Shipped' },
                  { v: 2, suffix: '', l: 'Game Engines' },
                  { v: null, label: 'C++', l: 'Primary Language' },
                ].map((s, i) => (
                  <motion.div className="hero-stat" key={s.l} whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.9rem', fontWeight: 800,
                      color: '#00d4ff', letterSpacing: '-0.03em', lineHeight: 1,
                    }}>
                      {s.v !== null ? <AnimatedCounter value={s.v} suffix={s.suffix} delay={800 + i * 200} /> : s.label}
                    </div>
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

          {/* RIGHT: portrait + floating badges */}
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
              position: 'relative',
            }}
          >
            {/* Portrait + orbiting tech badges */}
            <div className="hero-badges-cloud" style={{
              position: 'relative',
              width: '100%',
              maxWidth: 520,
              height: 480,
              margin: '0 auto',
              overflow: 'visible',
            }}>
              {/* Orbiting badges */}
              <OrbitingBadges badges={TECH_BADGES} mouseX={mx} mouseY={my} />

              {/* Centre portrait */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(220px, 50%)',
                zIndex: 3,
              }}>
                <PortraitFrame />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

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
          .home-hero .hero-badges-cloud {
            max-width: 380px !important;
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
          .home-hero .hero-badges-cloud {
            max-width: 360px !important;
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
          .home-hero .hero-badges-cloud {
            max-width: 300px !important;
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
          .home-hero .hero-badges-cloud {
            max-width: 260px !important;
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
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

/* ── Portrait frame (hexagonal-feel rounded frame) ── */
const PortraitFrame = () => (
  <div style={{
    position: 'relative',
    borderRadius: 24,
    overflow: 'hidden',
  }}>
    {/* Glow ring */}
    <motion.div
      animate={{
        boxShadow: [
          '0 0 20px rgba(0,212,255,0.3), inset 0 0 20px rgba(0,212,255,0.1)',
          '0 0 35px rgba(0,212,255,0.5), inset 0 0 30px rgba(0,212,255,0.15)',
          '0 0 20px rgba(0,212,255,0.3), inset 0 0 20px rgba(0,212,255,0.1)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', inset: -2,
        borderRadius: 26,
        border: '2px solid rgba(0,212,255,0.35)',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />

    {/* Avatar image */}
    <div style={{
      aspectRatio: '1',
      borderRadius: 24,
      overflow: 'hidden',
      background: '#0a0a14',
    }}>
      <img
        src={AvatarImg}
        alt="Prasham Desai"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Inner vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)',
        pointerEvents: 'none',
      }} />
    </div>

    {/* HUD overlay — bottom bar */}
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '10px 14px',
      background: 'linear-gradient(transparent, rgba(6,6,16,0.9))',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.1em',
      zIndex: 3,
    }}>
      <span style={{ color: '#94a3b8' }}>
        <span style={{ color: '#c084fc' }}>UE5</span> + <span style={{ color: '#00d4ff' }}>UNITY</span>
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#34d399' }}>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px #34d399', display: 'inline-block' }}
        />
        READY
      </span>
    </div>

    {/* Corner brackets */}
    <Bracket pos="tl" />
    <Bracket pos="tr" />
    <Bracket pos="bl" />
    <Bracket pos="br" />
  </div>
);

const Bracket = ({ pos }) => {
  const base = { position: 'absolute', width: 12, height: 12, zIndex: 4 };
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
  const sx = useSpring(x, { stiffness: 200, damping: 22 });
  const sy = useSpring(y, { stiffness: 200, damping: 22 });

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

export default Hero;