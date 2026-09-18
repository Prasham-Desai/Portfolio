import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const homeNavLinks = [
  { label: 'Work', href: '/#projects', targetId: 'projects', sectionIds: ['projects'], color: '#00d4ff' },
  { label: 'Skills', href: '/#skills', targetId: 'skills', sectionIds: ['skills'], color: '#ffbe0b' },
  { label: 'Experience', href: '/#experience', targetId: 'experience', sectionIds: ['experience'], color: '#fb923c' },
  { label: 'About', href: '/#about', targetId: 'about', sectionIds: ['about'], color: '#c084fc' },
  { label: 'Contact', href: '/#contact', targetId: 'contact', sectionIds: ['contact'], color: '#00fff2' },
];

const caseStudyNavLinks = [
  { label: 'Vision', href: '#overview', targetId: 'overview', sectionIds: ['overview', 'systems'], color: '#00d4ff' },
  { label: 'Engineering', href: '#tech-stack', targetId: 'tech-stack', sectionIds: ['tech-stack', 'challenges'], color: '#c084fc' },
  { label: 'Showcase', href: '#features', targetId: 'features', sectionIds: ['features', 'gallery'], color: '#34d399' },
  { label: 'Results', href: '#outcome', targetId: 'outcome', sectionIds: ['outcome', 'associated-with'], color: '#ff5263' },
];

const HOME_SCROLL_OFFSET = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';
  const isCaseStudy = location.pathname.startsWith('/project/');
  // eslint-disable-next-line no-unused-vars
  const isResumePage = location.pathname === '/resume';
  const navLinks = isCaseStudy ? caseStudyNavLinks : homeNavLinks;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Dynamically measure the navbar's actual rendered height
    const nav = document.querySelector('.site-nav');
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    // Dynamically measure the target element's padding-top so we scroll to the actual content
    const computedStyle = window.getComputedStyle(el);
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;

    const gap = 50; // 30px distance between navbar bottom and content top (2.5x original)
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight + paddingTop - gap;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy
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
          if (r.bottom < HOME_SCROLL_OFFSET || r.top > window.innerHeight) continue;
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

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const handleNavClick = (href) => {
    setMobileOpen(false);

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
        navigate(href);
      }
    }
  };

  return (
    <>
      <motion.nav
        className="site-nav"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <div className="site-nav-shell" style={{
          background: scrolled
            ? 'rgba(6,6,16,0.92)'
            : 'rgba(6,6,16,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.10)'
            : '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
            <motion.div
              className="site-nav-logo"
              whileHover={{ scale: 1.02 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#f1f5f9',
                cursor: 'pointer',
              }}
            >
              PD<span style={{ color: '#00d4ff' }}>.</span>
            </motion.div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="desktop-nav">
            {/* Scroll Links Group */}
            {(isHome || isCaseStudy) && (
              <>
                <div style={{ display: 'flex', gap: isCaseStudy ? 2 : 4, alignItems: 'center' }}>
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.label;

                    return (
                      <div key={link.label}>
                        <motion.button
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
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          {link.label}
                        </motion.button>
                      </div>
                    );
                  })}
                </div>

                {/* Vertical Divider */}
                <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.15)' }} />
              </>
            )}

            {/* Page Links Group */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <AnimatePresence mode="popLayout">
                {/* Home link */}
                {!isHome && (
                  <motion.div
                    key="nav-home"
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(52,211,153,0.6), inset 0 2px 4px rgba(255,255,255,0.4)' }}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          padding: '8px 16px',
                          borderRadius: 9999,
                          letterSpacing: '0.01em',
                          whiteSpace: 'nowrap',
                          color: '#04040a',
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                          boxShadow: '0 0 15px rgba(52,211,153,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        Home
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}

                {/* All Projects link */}
                {!isProjectsPage && (
                  <motion.div
                    key="nav-projects"
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,212,255,0.6), inset 0 2px 4px rgba(255,255,255,0.4)' }}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          padding: '8px 16px',
                          borderRadius: 9999,
                          letterSpacing: '0.01em',
                          whiteSpace: 'nowrap',
                          color: '#04040a',
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #00d4ff 0%, #00fff2 100%)',
                          boxShadow: '0 0 15px rgba(0,212,255,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        Projects
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}

                {/* Resume link */}
                {!isResumePage && (
                  <motion.div
                    key="nav-resume"
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    layout
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(192,132,252,0.6), inset 0 2px 4px rgba(255,255,255,0.4)' }}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          padding: '8px 16px',
                          borderRadius: 9999,
                          letterSpacing: '0.01em',
                          whiteSpace: 'nowrap',
                          color: '#04040a',
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #c084fc 0%, #ff7bf5 100%)',
                          boxShadow: '0 0 15px rgba(192,132,252,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        Resume
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 6,
              padding: 8,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 1001,
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
              style={{ display: 'block', width: 24, height: 2, background: '#f1f5f9', borderRadius: 1 }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -4 : 0 }}
              style={{ display: 'block', width: mobileOpen ? 24 : 16, height: 2, background: '#f1f5f9', borderRadius: 1, alignSelf: 'flex-end' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(6,6,16,0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {(isHome || isCaseStudy) && (
              <>
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
                      color: '#f1f5f9',
                      background: 'transparent',
                      border: 'none',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Mobile Horizontal Divider */}
                <motion.hr
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: navLinks.length * 0.08 }}
                  style={{
                    width: '40px',
                    border: 'none',
                    height: '1px',
                    background: 'rgba(255,255,255,0.15)',
                    margin: '8px 0',
                    transformOrigin: 'center'
                  }}
                />
              </>
            )}

            {/* Mobile Page Links Group */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
              {/* Mobile Home link */}
              {!isHome && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.08 }}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/');
                  }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#04040a',
                    background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                    boxShadow: '0 0 14px rgba(52,211,153,0.25), inset 0 2px 4px rgba(255,255,255,0.25)',
                    border: 'none',
                    borderRadius: 9999,
                    padding: '9px 20px',
                    letterSpacing: '0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    textTransform: 'none'
                  }}
                >
                  Home
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </motion.button>
              )}

              {/* Mobile Projects link */}
              {!isProjectsPage && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.08 }}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/projects');
                  }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#04040a',
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00fff2 100%)',
                    boxShadow: '0 0 24px rgba(0,212,255,0.5), inset 0 2px 4px rgba(255,255,255,0.4)',
                    border: 'none',
                    borderRadius: 9999,
                    padding: '12px 32px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer'
                  }}
                >
                  All Projects
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.button>

              )}

              {/* Mobile Resume link */}
              {!isResumePage && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 2) * 0.08 }}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate('/resume');
                  }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#04040a',
                    background: 'linear-gradient(135deg, #c084fc 0%, #ff7bf5 100%)',
                    boxShadow: '0 0 18px rgba(192,132,252,0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                    border: 'none',
                    borderRadius: 9999,
                    padding: '10px 24px',
                    letterSpacing: '0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    cursor: 'pointer'
                  }}
                >
                  Resume
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .site-nav-shell {
          margin: 0;
          padding: 0 clamp(24px, 4vw, 48px);
          min-height: clamp(56px, 6vw, 64px);
          border-radius: 0;
          max-width: 100%;
        }

        .site-nav-logo {
          font-size: clamp(1.8rem, 4vw, 2.75rem);
        }

        @media (max-width: 1080px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }

        @media (max-width: 767px) {
          .site-nav-shell {
            padding: 0 16px;
            min-height: 54px;
          }

          .mobile-menu-panel {
            padding: 88px 24px 40px;
            gap: 22px !important;
          }

          .mobile-menu-panel button {
            font-size: clamp(1.4rem, 7vw, 1.8rem) !important;
          }
        }

        @media (max-width: 480px) {
          .site-nav-shell {
            padding: 0 14px;
            min-height: 50px;
          }

          .site-nav-logo {
            font-size: 1.6rem !important;
          }

          .mobile-menu-panel {
            padding: 80px 20px 32px;
            gap: 18px !important;
          }

          .mobile-menu-panel button {
            font-size: clamp(1.2rem, 6vw, 1.5rem) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
