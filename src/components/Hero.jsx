import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/Avatar.jpeg';

const TAGLINES = [
  'Building games that players remember.',
  'Unity · C# · Mobile · Multiplayer · AR/VR.',
  'From prototype to product, end to end.',
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
          alignItems: 'center',
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
                { value: '7+', label: 'Games Shipped' },
                { value: '1yr+', label: 'Experience' },
                { value: '∞', label: 'Bug Solved' },
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
                  <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
              <MagneticButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: PROFILE CARD ── */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', marginTop: '40px' }}
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
          #hero .container > div { 
            grid-template-columns: 1fr !important; 
            gap: 40px !important; 
          }
          /* Removed display: none for the profile card to meet stacking requirements */
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
      height: '550px',          /* explicitly taller overall card */
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Ambient static background glow behind the card */}
      <div style={{
        position: 'absolute', inset: -30, zIndex: -1,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
        borderRadius: 40,
      }} />

      <motion.div
        whileHover={{
          boxShadow: '0 40px 90px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,212,255,0.3)',
          y: -5
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: 24,
          overflow: 'hidden',
          // Glassmorphism baseline & Neon border glow
          background: 'rgba(13, 13, 26, 0.95)', // Increased opacity for clarity
          boxShadow: '0 24px 64px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 20px rgba(0,212,255,0.1)',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          padding: '32px',
        }}
      >
        {/* ── TOP SECTION (Empty Square Image) ── */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          height: '50%',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          paddingBottom: '12px',
        }}>
          <motion.div
            whileHover={{ scale: 1.02, borderColor: 'rgba(0, 212, 255, 0.8)' }}
            style={{
              position: 'relative', /* For absolute overlay */
              maxWidth: '100%',
              height: '100%',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={AvatarImg}
              alt="Avatar"
              style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
            />
            {/* Overlay to keep the inset shadow over the image */}
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)', pointerEvents: 'none' }} />
          </motion.div>
        </div>

        {/* ── BOTTOM SECTION (Game Dev Vibes) ── */}
        <div style={{
          position: 'relative', zIndex: 1,
          height: '50%',
          display: 'flex', flexDirection: 'column', gap: '8px',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden'
        }}>
          {/* HUD Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px', marginBottom: '2px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#00d4ff', letterSpacing: '0.1em' }}>SYS.HUD_ACTIVE</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#00ff88', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              REC
            </motion.span>
          </div>

          {/* Skills / Stats Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[{ label: 'CREATIVITY', val: '99', color: '#00d4ff' }, { label: 'LOGIC', val: '85', color: '#b44fff' }, { label: 'CAFFEINE', val: '100', color: '#00ff88' }].map((stat, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Space Grotesk', sans-serif", color: '#fff', fontSize: '0.75rem', marginBottom: '4px', fontWeight: 600, letterSpacing: '0.05em' }}>
                  <span>{stat.label}</span>
                  <span>{stat.val}%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${stat.val}%` }} transition={{ duration: 1.5, delay: 0.2 + (i * 0.2), ease: 'easeOut' }} style={{ height: '100%', background: stat.color, boxShadow: `0 0 10px ${stat.color}` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Setup / Terminal Line */}
          <div style={{ marginTop: '4px', padding: '8px 12px', background: 'rgba(0, 212, 255, 0.05)', borderRadius: '8px', borderLeft: '2px solid #00d4ff' }}>
            <motion.div
              initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, delay: 1 }}
              style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#8888aa' }}>
                <span style={{ color: '#00d4ff' }}>&gt;</span> CURRENT_QUEST: <span style={{ color: '#f0f0f8' }}>Build epic experiences.</span>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
