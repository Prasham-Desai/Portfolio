import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import AvatarImg from '../assets/Avatar.jpeg';
import ParticleGalaxy from './ParticleGalaxy';

/* ──────────────────────────────────────────────
   HERO SECTION — IMMERSIVE FULL-VIEWPORT
   ─ Deep Focus ambient spotlight background
   ─ Strict left-aligned typography grid
   ─ Glassmorphic stat bar
   ─ Frosted glass orbiting tech badges
   ────────────────────────────────────────────── */

const TAGLINES = [
  'Building gameplay systems and C++ architecture in Unreal Engine.',
  'From shipped mobile titles to high-fidelity prototypes.',
  'Systems-first thinking. Production-tested delivery.',
];

const TECH_BADGES = [
  { label: 'UE5', color: '#c084fc' },
  { label: 'C++', color: '#00d4ff' },
  { label: 'Unity', color: '#34d399' },
  { label: 'Blueprint', color: '#ffbe0b' },
  { label: 'C#', color: '#fb923c' },
  { label: 'Gameplay', color: '#00d4ff' },
  { label: 'AI/ML', color: '#c084fc' },
  { label: 'Systems', color: '#34d399' },
];

const ORBIT_RADIUS_X = 260; 
const ORBIT_RADIUS_Y = 200; 
const ORBIT_SPEED = 0.12;   

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
          transition={{ duration: 0.35, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
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
            position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 5,
          }}
        >
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748b' }}>
            Scroll to explore
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
              <rect x="1" y="1" width="18" height="26" rx="9" stroke="#64748b" strokeWidth="1.5" />
              <motion.circle cx="10" initial={{ cy: 8 }} animate={{ cy: [8, 16, 8] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} r="2.5" fill="#00d4ff" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Orbiting badges (Glassmorphic) ── */
const OrbitingBadges = ({ badges }) => {
  const badgeRefs = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      badges.forEach((badge, i) => {
        const el = badgeRefs.current[i];
        if (!el) return;
        const baseAngle = (i / badges.length) * Math.PI * 2;
        const angle = baseAngle + t * ORBIT_SPEED;
        const bob = Math.sin(t * 1.8 + i * 0.8) * 5;
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
          style={{ position: 'absolute', left: '50%', top: '50%', zIndex: 2, willChange: 'transform' }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.06em',
            padding: '6px 16px', borderRadius: 20,
            background: 'rgba(12,14,24,0.85)',
            border: `1px solid ${badge.color}60`,
            color: badge.color,
            boxShadow: `0 0 16px ${badge.color}30, inset 0 0 8px ${badge.color}20`,
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap', userSelect: 'none',
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

  const spotX = useSpring(useTransform(mx, [-1, 1], ['-20%', '20%']), { stiffness: 20, damping: 40 });
  const spotY = useSpring(useTransform(my, [-1, 1], ['-20%', '20%']), { stiffness: 20, damping: 40 });

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
    <section ref={containerRef} id="hero" className="home-hero" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#04040a', perspective: 1400 }}>
      
      {/* Dynamic Galaxy Background */}
      <ParticleGalaxy />

      {/* Main content wrapper */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: 'clamp(100px, 10vw, 128px) clamp(20px, 5vw, 64px) clamp(64px, 8vw, 84px)', boxSizing: 'border-box' }}>
        <div className="hero-grid">
          
          {/* LEFT: typography & stats */}
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } } }}>
            <FadeUp>
              <div className="section-label" style={{ marginBottom: 24 }}>Gameplay & Systems Developer</div>
            </FadeUp>

            <FadeUp>
              <h1 className="hero-title" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(3.2rem, 6vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 0.95, color: '#f1f5f9', margin: '0 0 24px 0' }}>
                <StaggerTitle text="Prasham" delay={0.3} /><br />
                <span style={{ background: 'linear-gradient(135deg,#00d4ff 30%,#00fff2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  <StaggerTitle text="Desai" delay={0.6} />
                </span>
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.3 }} style={{ color: '#00d4ff' }}>.</motion.span>
              </h1>
            </FadeUp>

            <FadeUp>
              <div className="hero-tagline-wrap" style={{ minHeight: 44, marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
                <AnimatePresence mode="wait">
                  <motion.p
                    className="hero-tagline"
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.36 }}
                    style={{ position: 'absolute', fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', fontWeight: 400, color: '#94a3b8', letterSpacing: '-0.01em', margin: 0, whiteSpace: 'nowrap' }}
                  >
                    {TAGLINES[taglineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </FadeUp>

            <FadeUp>
              {/* Vibrant Stat Bar */}
              <div style={{
                display: 'flex', gap: '32px', marginBottom: 48,
                background: 'rgba(6,6,16,0.6)',
                border: '1px solid rgba(0,212,255,0.2)',
                boxShadow: 'inset 0 0 20px rgba(0,212,255,0.05), 0 0 30px rgba(0,212,255,0.1)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                borderRadius: 16, padding: '24px 32px',
                width: 'fit-content',
                flexWrap: 'wrap',
              }}>
                {[
                  { v: 7, suffix: '+', l: 'Games Shipped' },
                  { v: 2, suffix: '', l: 'Game Engines' },
                  { v: null, label: 'C++', l: 'Primary Language' },
                ].map((s, i) => (
                  <div key={s.l} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', lineHeight: 1 }}>
                      {s.v !== null ? <AnimatedCounter value={s.v} suffix={s.suffix} delay={800 + i * 200} /> : s.label}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="hero-actions" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <MagneticButton primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200, transformStyle: 'preserve-3d', position: 'relative' }}
          >
            <div className="hero-badges-cloud" style={{ position: 'relative', width: '100%', maxWidth: 520, height: 480, margin: '0 auto', overflow: 'visible' }}>
              <OrbitingBadges badges={TECH_BADGES} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(220px, 50%)', zIndex: 3 }}>
                <PortraitFrame />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />

      <style>{`
        .home-hero .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(32px, 4vw, 64px); align-items: center; }
        .home-hero .hero-visual { display: flex; justify-content: center; }
        .home-hero .hero-button { justify-content: center; }
        
        @media (max-width: 1180px) {
          .home-hero .hero-grid { grid-template-columns: 1fr 1fr; gap: 28px !important; }
          .home-hero .hero-tagline-wrap { min-height: 64px !important; margin-bottom: 30px !important; }
          .home-hero .hero-tagline { white-space: normal !important; max-width: min(38ch, 100%); line-height: 1.4 !important; }
        }
        
        @media (max-width: 900px) {
          .home-hero .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .home-hero .hero-copy { text-align: left; display: flex; flexDirection: column; alignItems: flex-start; }
          .home-hero .hero-visual { max-width: min(480px, 100%); width: 100%; margin: 0 auto; justify-content: center !important; }
          .home-hero .hero-tagline { white-space: normal !important; max-width: 100%; line-height: 1.4 !important; }
        }
        
        @media (max-width: 767px) {
          .home-hero .hero-title { font-size: clamp(2.6rem, 11vw, 3.4rem) !important; line-height: 0.95 !important; margin-bottom: 18px !important; }
          .home-hero .hero-tagline-wrap { min-height: 48px !important; margin-bottom: 24px !important; }
          .home-hero .hero-tagline { font-size: 0.95rem !important; position: relative !important; }
          .home-hero .hero-actions { flex-wrap: wrap; width: 100%; }
          .home-hero .hero-actions > * { flex: 1 1 auto; min-width: 140px; }
          .home-hero .hero-button { padding: 14px 22px !important; }
        }
      `}</style>
    </section>
  );
};

const FadeUp = ({ children }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
    {children}
  </motion.div>
);

const PortraitFrame = () => (
  <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
    <motion.div animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.1)', '0 0 35px rgba(0,212,255,0.25)', '0 0 20px rgba(0,212,255,0.1)'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', inset: -2, borderRadius: 26, border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none', zIndex: 2 }} />
    <div style={{ aspectRatio: '1', borderRadius: 24, overflow: 'hidden', background: '#0a0a14' }}>
      <img src={AvatarImg} alt="Prasham Desai" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)', pointerEvents: 'none' }} />
    </div>
  </div>
);

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
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick}
      style={{
        x: sx, y: sy,
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '1rem',
        padding: '14px 32px', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 8,
        letterSpacing: '-0.01em',
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.08)',
        background: primary ? '#f1f5f9' : 'transparent',
        color: primary ? '#060610' : '#f1f5f9',
        cursor: 'pointer',
      }}
      whileHover={primary ? { scale: 1.05, boxShadow: '0 0 24px rgba(255,255,255,0.2)' } : { scale: 1.04, borderColor: 'rgba(255,255,255,0.2)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
};

export default Hero;