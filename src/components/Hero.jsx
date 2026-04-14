import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const TAGLINES = [
  'Building games that players remember.',
  'Unity · Godot · Mobile · WebGL · AR/VR.',
  'From prototype to shipped — end to end.',
];

const Hero = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [6, -6]), { stiffness: 70, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-6, 6]), { stiffness: 70, damping: 22 });

  useEffect(() => {
    const id = setInterval(() => setTaglineIndex(p => (p + 1) % TAGLINES.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - (r.left + r.width / 2));
      mouseY.set(e.clientY - (r.top + r.height / 2));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg)',
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.028) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%,black 10%,transparent 100%)',
      }} />

      {/* Centre glow */}
      <div style={{
        position: 'absolute', top: '45%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(0,212,255,0.05) 0%,transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* ── MAIN LAYOUT ── */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'stretch',
        }}>

          {/* ── LEFT: TEXT ── */}
          <motion.div variants={stagger} initial="hidden" animate="show"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >

            <motion.div variants={fadeUp} className="section-label" style={{ marginBottom: 28 }}>
              Game Developer
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(3.8rem, 7.5vw, 6rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: '#f0f0f8',
              marginBottom: 28,
            }}>
              Prasham
              <br />
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg,#00d4ff 30%,#00fff2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Desai
              </span>
              <span style={{ color: '#00d4ff', WebkitTextFillColor: '#00d4ff' }}>.</span>
            </motion.h1>

            {/* Rotating tagline */}
            <motion.div variants={fadeUp} style={{ height: 36, marginBottom: 40, overflow: 'hidden', position: 'relative' }}>
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
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 36, marginBottom: 48 }}>
              {[
                { value: '7+',   label: 'Games Shipped' },
                { value: '1yr+', label: 'Experience'    },
                { value: '4.4★', label: 'Avg Rating'    },
              ].map(s => (
                <motion.div key={s.label} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.9rem', fontWeight: 800,
                    color: '#00d4ff', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem', color: '#444460',
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 5,
                  }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14 }}>
              <MagneticButton primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </MagneticButton>
              <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PROFILE CARD ── */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <ProfileCard />
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero .container > div { grid-template-columns: 1fr !important; }
          #hero .container > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
};

/* ──────────────────────────────────────
   MAGNETIC BUTTON
────────────────────────────────────── */
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

/* ──────────────────────────────────────
   PROFILE CARD — tall vertical rectangle,
   height matches the left text column.
   Content differs from left side.
────────────────────────────────────── */

const ProfileCard = () => {
  return (
    <div style={{
      position: 'relative',
      height: '100%',           /* fills grid row — matches left column height */
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Ambient glow behind card */}
      <div style={{
        position: 'absolute', inset: -20, zIndex: -1,
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        whileHover={{ boxShadow: '0 40px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.16)' }}
        transition={{ duration: 0.3 }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 24,
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)',
          background: '#0d0d1a',
        }}
      >
        {/* ── VISUAL BANNER — tall vertical rectangle, ~58% of card height ── */}
        <div style={{
          flex: '0 0 58%',
          position: 'relative',
          background: 'linear-gradient(170deg, #090f1e 0%, #0b0720 50%, #0e0e26 100%)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 14,
        }}>
          {/* Hex grid */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.09 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hxP" x="0" y="0" width="54" height="48" patternUnits="userSpaceOnUse">
                <polygon points="27,2 50,14 50,36 27,48 4,36 4,14" fill="none" stroke="#00d4ff" strokeWidth="0.7"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hxP)"/>
          </svg>

          {/* Radial glow */}
          <div style={{
            position: 'absolute',
            width: 260, height: 260, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.13) 0%, rgba(180,79,255,0.07) 45%, transparent 70%)',
          }} />

          {/* Corner brackets — game-UI style */}
          {[
            { top: 16, left: 16, borderTop: '2px solid rgba(0,212,255,0.4)', borderLeft: '2px solid rgba(0,212,255,0.4)' },
            { top: 16, right: 16, borderTop: '2px solid rgba(0,212,255,0.4)', borderRight: '2px solid rgba(0,212,255,0.4)' },
            { bottom: 16, left: 16, borderBottom: '2px solid rgba(0,212,255,0.4)', borderLeft: '2px solid rgba(0,212,255,0.4)' },
            { bottom: 16, right: 16, borderBottom: '2px solid rgba(0,212,255,0.4)', borderRight: '2px solid rgba(0,212,255,0.4)' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              style={{ position: 'absolute', width: 22, height: 22, ...s }}
            />
          ))}

          {/* Outer orbit ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 160, height: 160, borderRadius: '50%',
              border: '1px solid transparent',
              borderTop: '1px solid rgba(0,212,255,0.5)',
              borderRight: '1px solid rgba(0,212,255,0.15)',
            }}
          />
          {/* Inner orbit ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              width: 112, height: 112, borderRadius: '50%',
              border: '1px solid transparent',
              borderBottom: '1px solid rgba(180,79,255,0.5)',
              borderLeft: '1px solid rgba(180,79,255,0.15)',
            }}
          />

          {/* Avatar circle */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 160 }}
            style={{
              position: 'relative', zIndex: 2,
              width: 84, height: 84, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.16), rgba(180,79,255,0.16))',
              border: '2px solid rgba(0,212,255,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0,212,255,0.2), inset 0 0 28px rgba(0,212,255,0.06)',
            }}
          >
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.8rem', fontWeight: 800,
              background: 'linear-gradient(135deg, #00d4ff, #b44fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              userSelect: 'none',
            }}>
              PD
            </span>
          </motion.div>

          {/* Name + role — in banner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
          >
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.3rem', fontWeight: 800,
              color: '#f0f0f8', letterSpacing: '-0.025em', lineHeight: 1.1,
            }}>
              Prasham Desai
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem', letterSpacing: '0.14em',
              color: '#00d4ff', marginTop: 5,
            }}>
              GAME DEVELOPER
            </div>
          </motion.div>

          {/* Scanline overlay — subtle texture */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
          }} />
        </div>

        {/* ── INFO SECTION — bottom 42% of card ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 22px',
          gap: 0,
        }}>

          {/* Row 1: Specialty */}
          <InfoRow
            delay={0.65}
            label="Specialty"
            accent="#00d4ff"
            content={
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Mobile', 'Multiplayer', 'AR/VR'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.82rem', fontWeight: 600,
                    color: '#c8c8e0', padding: '2px 10px',
                    borderRadius: 5,
                    background: 'rgba(0,212,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}>{tag}</span>
                ))}
              </div>
            }
          />

          <Divider />

          {/* Row 2: Engine stack */}
          <InfoRow
            delay={0.75}
            label="Engine Stack"
            accent="#ffd700"
            content={
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.88rem', fontWeight: 600,
                color: '#c8c8e0', letterSpacing: '-0.01em',
              }}>
                Unity 3D / 2D &nbsp;·&nbsp; DOTS/ECS &nbsp;·&nbsp; C#
              </div>
            }
          />

          <Divider />

          {/* Row 3: Education */}
          <InfoRow
            delay={0.83}
            label="Education"
            accent="#b44fff"
            content={
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.88rem', fontWeight: 600, color: '#c8c8e0' }}>
                  BE Computer Science
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem', color: '#555572', marginTop: 2 }}>
                  LJIET · Ahmedabad · 2024
                </div>
              </div>
            }
          />

          <Divider />

          {/* Status bar — pinned to bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            style={{
              marginTop: 'auto',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '9px 13px',
              background: 'rgba(0,255,136,0.05)',
              borderRadius: 9,
              border: '1px solid rgba(0,255,136,0.13)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <motion.div
                animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#00ff88', flexShrink: 0 }}
              />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.83rem', fontWeight: 600, color: '#00ff88' }}>
                Open to work
              </span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.64rem', color: '#444460' }}>
              Ahmedabad, IN
            </span>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

/* Small reusable pieces inside the card */
const InfoRow = ({ label, content, accent, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    style={{ padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 6 }}
  >
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.62rem', letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: accent, opacity: 0.7,
    }}>
      {label}
    </div>
    {content}
  </motion.div>
);

const Divider = () => (
  <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />
);

export default Hero;
