import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const homeNavLinks = [
  { label: 'Work',    href: '/#projects', targetId: 'projects', sectionIds: ['projects'], color: '#00d4ff' }, // teal
  { label: 'Skills',  href: '/#skills',   targetId: 'skills',   sectionIds: ['skills'],   color: '#ffd700' }, // gold
  { label: 'Experience', href: '/#experience', targetId: 'experience', sectionIds: ['experience'], color: '#ff6b00' }, // orange
  { label: 'About',   href: '/#about',    targetId: 'about',    sectionIds: ['about'],    color: '#b44fff' }, // purple
  { label: 'Contact', href: '/#contact',  targetId: 'contact',  sectionIds: ['contact'],  color: '#00fff2' }, // cyan
];

const caseStudyNavLinks = [
  { label: 'Vision',      href: '#overview',   targetId: 'overview',   sectionIds: ['overview', 'systems'],             color: '#00d4ff' },
  { label: 'Engineering', href: '#tech-stack', targetId: 'tech-stack', sectionIds: ['tech-stack', 'challenges'],       color: '#b44fff' },
  { label: 'Showcase',    href: '#features',   targetId: 'features',   sectionIds: ['features', 'gallery'],            color: '#00ff88' },
  { label: 'Results',     href: '#outcome',    targetId: 'outcome',    sectionIds: ['outcome', 'associated-with'],    color: '#ff6b6b' },
];

const HOME_SCROLL_OFFSET = 20;
const CASE_STUDY_SCROLL_OFFSET = 112;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isCaseStudy = location.pathname.startsWith('/project/');
  const navLinks = isCaseStudy ? caseStudyNavLinks : homeNavLinks;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = isCaseStudy ? CASE_STUDY_SCROLL_OFFSET : HOME_SCROLL_OFFSET;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      // give the route a tick to mount, then jump to top
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: pick the section whose midpoint is closest to the
  // viewport centre. IntersectionObserver alone fires on entry/exit
  // and gets confused on tall sections; midpoint-distance is stable.
  useEffect(() => {
    if (!isHome && !isCaseStudy) {
      setActiveSection(null);
      return;
    }

    const update = () => {
      if (isHome || isCaseStudy) {
        const hero = document.getElementById('hero');
        if (hero) {
          const heroRect = hero.getBoundingClientRect();
          if (heroRect.bottom > window.innerHeight / 2) {
            setActiveSection(null);
            return;
          }
        }
      }

      const viewportMid = window.innerHeight / 2;
      let bestLabel = null;
      let bestDist = Infinity;

      for (const link of navLinks) {
        for (const id of link.sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const r = el.getBoundingClientRect();
          if (r.bottom < CASE_STUDY_SCROLL_OFFSET || r.top > window.innerHeight) continue;
          const sectionMid = r.top + r.height / 2;
          const dist = Math.abs(sectionMid - viewportMid);
          if (dist < bestDist) {
            bestDist = dist;
            bestLabel = link.label;
          }
        }
      }

      setActiveSection(bestLabel);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isHome, isCaseStudy, navLinks]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      scrollToSection(id);
      return;
    }

    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (isHome) {
        scrollToSection(id);
      } else {
        // navigate to home then scroll
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{
          margin: '16px 24px',
          borderRadius: 12,
          background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s ease',
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
        }}>
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '2.75rem',
                letterSpacing: '-0.01em',
                color: '#f0f0f8',
                cursor: 'pointer',
              }}
            >
              PD<span style={{ color: '#00d4ff' }}>.</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: isCaseStudy ? 2 : 4, alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ color: link.color, scale: 1.04 }}
                  animate={{
                    color: isActive ? link.color : '#e8e8f4',
                    textShadow: isActive ? `0 0 18px ${link.color}99` : '0 0 0 rgba(0,0,0,0)',
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'relative',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: isCaseStudy ? '0.95rem' : '1rem',
                    fontWeight: 600,
                    padding: isCaseStudy ? '8px 14px' : '8px 18px',
                    borderRadius: 8,
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                </motion.button>
              );
            })}

            <motion.a
              href="mailto:prashamdesai9114@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#00d4ff',
                padding: '8px 22px',
                borderRadius: 8,
                border: '1px solid rgba(0,212,255,0.3)',
                marginLeft: 8,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              padding: 8,
              background: 'transparent',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={{
                  rotate: mobileOpen && i === 0 ? 45 : mobileOpen && i === 2 ? -45 : 0,
                  y: mobileOpen && i === 0 ? 7 : mobileOpen && i === 2 ? -7 : 0,
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
                style={{
                  display: 'block',
                  width: 22,
                  height: 1.5,
                  background: '#f0f0f8',
                  borderRadius: 1,
                  transformOrigin: 'center',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(8,8,15,0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#f0f0f8',
                  background: 'transparent',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
