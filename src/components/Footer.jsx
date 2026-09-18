import { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon, MailIcon } from './SocialIcons';

/* ──────────────────────────────────────────────
   PREMIUM FOOTER
   ─ Cinematic CTA banner
   ─ 3-column footer grid
   ─ Responsive at 900px / 600px
   ────────────────────────────────────────────── */

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Prasham-Desai',
    color: '#ffbe0b',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://in.linkedin.com/in/prasham-desai-602094269',
    color: '#c084fc',
    Icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:prashamdesai9114@gmail.com',
    color: '#00d4ff',
    Icon: MailIcon,
  },
];

const quickLinks = [
  { label: 'Work', sectionId: 'projects', href: '/#projects' },
  { label: 'Skills', sectionId: 'skills', href: '/#skills' },
  { label: 'Experience', sectionId: 'experience', href: '/#experience' },
  { label: 'About', sectionId: 'about', href: '/#about' },
  { label: 'Contact', sectionId: 'contact', href: '/#contact' },
];

const pageLinks = [
  { label: 'All Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
];

/* ── Floating particles for the CTA banner ── */
const BannerParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 3,
        color: ['#00d4ff', '#c084fc', '#34d399', '#ffbe0b'][
          Math.floor(Math.random() * 4)
        ],
      })),
    []
  );

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -20, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 8px ${p.color}60`,
          }}
        />
      ))}
    </div>
  );
};

/* ── Corner bracket decoration ── */
const CornerBracket = ({ position }) => {
  const isTop = position.includes('t');
  const isLeft = position.includes('l');
  return (
    <div
      style={{
        position: 'absolute',
        width: 28,
        height: 28,
        ...(isTop ? { top: 16 } : { bottom: 16 }),
        ...(isLeft ? { left: 16 } : { right: 16 }),
        borderTop: isTop
          ? '1px solid rgba(0,212,255,0.3)'
          : 'none',
        borderBottom: !isTop
          ? '1px solid rgba(0,212,255,0.3)'
          : 'none',
        borderLeft: isLeft
          ? '1px solid rgba(0,212,255,0.3)'
          : 'none',
        borderRight: !isLeft
          ? '1px solid rgba(0,212,255,0.3)'
          : 'none',
        pointerEvents: 'none',
      }}
    />
  );
};

/* ── CTA Banner ── */
const FooterCTA = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleCTAClick = useCallback(() => {
    if (isHome) {
      const el = document.getElementById('contact');
      if (el) {
        const nav = document.querySelector('.site-nav');
        const navHeight = nav ? nav.getBoundingClientRect().height : 0;
        const computedStyle = window.getComputedStyle(el);
        const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
        const gap = 50;
        const top =
          el.getBoundingClientRect().top +
          window.scrollY -
          navHeight +
          paddingTop -
          gap;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, [isHome, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="footer-cta-banner"
      style={{
        position: 'relative',
        margin: '0 auto',
        maxWidth: 1440,
        padding: '80px 48px',
        borderRadius: 20,
        background:
          'linear-gradient(145deg, rgba(6,6,16,0.95) 0%, rgba(12,14,24,0.9) 100%)',
        border: '1px solid rgba(0,212,255,0.12)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Purple secondary glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating particles */}
      <BannerParticles />

      {/* Corner brackets */}
      {['tl', 'tr', 'bl', 'br'].map((pos) => (
        <CornerBracket key={pos} position={pos} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 9999,
            border: '1px solid rgba(52,211,153,0.25)',
            background: 'rgba(52,211,153,0.06)',
            marginBottom: 28,
          }}
        >
          {/* Pulsing green dot */}
          <span
            style={{
              position: 'relative',
              width: 8,
              height: 8,
              display: 'inline-block',
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: '#34d399',
              }}
            />
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: '#34d399',
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: '#34d399',
              textTransform: 'uppercase',
            }}
          >
            Available for Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.1,
            marginBottom: 16,
            color: '#f1f5f9',
          }}
        >
          Let's Build{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Something Legendary
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 32px',
          }}
        >
          Open to studio roles, freelance projects, and creative
          collaborations. Let's talk about your next big idea.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 40px rgba(0,212,255,0.35)',
          }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCTAClick}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1rem',
            fontWeight: 700,
            color: '#060610',
            background: 'linear-gradient(135deg, #00d4ff, #00fff2)',
            border: 'none',
            borderRadius: 12,
            padding: '16px 40px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            boxShadow:
              '0 0 24px rgba(0,212,255,0.25), inset 0 2px 4px rgba(255,255,255,0.3)',
            letterSpacing: '-0.01em',
          }}
        >
          Get In Touch
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

/* ── Scroll-to-section helper ── */
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const nav = document.querySelector('.site-nav');
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;
  const computedStyle = window.getComputedStyle(el);
  const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
  const gap = 50;
  const top =
    el.getBoundingClientRect().top + window.scrollY - navHeight + paddingTop - gap;
  window.scrollTo({ top, behavior: 'smooth' });
};

/* ── Main Footer ── */
const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleQuickLink = useCallback(
    (sectionId, href) => {
      if (isHome) {
        scrollToSection(sectionId);
      } else {
        window.location.href = href;
      }
    },
    [isHome]
  );

  return (
    <footer
      className="site-footer"
      style={{
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── CTA Banner ── */}
      <div
        style={{
          padding: '0 clamp(20px, 4vw, 48px)',
          marginBottom: 64,
        }}
      >
        <FooterCTA />
      </div>

      {/* ── Separator line ── */}
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 48px)',
        }}
      >
        <div
          style={{
            height: 1,
            background:
              'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(192,132,252,0.15), transparent)',
          }}
        />
      </div>

      {/* ── Footer Grid ── */}
      <div
        className="container footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1fr',
          gap: 48,
          padding: '56px clamp(20px, 4vw, 48px)',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        {/* Column 1: Logo & Tagline */}
        <div>
          <Link
            to="/"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                color: '#f1f5f9',
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}
            >
              PD<span style={{ color: '#00d4ff' }}>.</span>
            </div>
          </Link>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: 280,
              marginBottom: 20,
            }}
          >
            Gameplay & Systems Developer crafting immersive interactive
            experiences with Unreal Engine & Unity.
          </p>

          {/* Pillars */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <span style={{ color: 'var(--color-teal)' }}>Systems.</span>
            <span style={{ color: 'var(--color-purple)' }}>Gameplay.</span>
            <span style={{ color: 'var(--color-green)' }}>Performance.</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              color: '#00d4ff',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Navigation
          </div>
          <div
            className="footer-link-list"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {quickLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleQuickLink(link.sectionId, link.href)}
                  whileHover={{ color: '#00d4ff', x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="footer-link-item"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    color: '#94a3b8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                <span
                  style={{
                    width: 12,
                    height: 1,
                    background: 'rgba(0,212,255,0.25)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                {link.label}
              </motion.button>
            ))}

            {/* Divider */}
            <div
              style={{
                height: 1,
                width: 32,
                background: 'rgba(255,255,255,0.08)',
                margin: '4px 0',
              }}
            />

            {pageLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ x: 4 }}>
                <Link
                  to={link.to}
                  className="footer-link-item"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#c084fc')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#94a3b8')
                  }
                >
                  <span
                    style={{
                      width: 12,
                      height: 1,
                      background: 'rgba(192,132,252,0.25)',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 3: Connect */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              color: '#c084fc',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Connect
          </div>
          <div
            className="footer-link-list"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {socialLinks.map(({ label, href, color, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 4, color }}
                transition={{ duration: 0.2 }}
                className="footer-link-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textDecoration: 'none',
                  color: '#94a3b8',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${color}0a`,
                    border: `1px solid ${color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color,
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.88rem',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Location chip */}
          <div
            style={{
              marginTop: 24,
              padding: '10px 14px',
              background: 'rgba(0,212,255,0.04)',
              borderRadius: 10,
              border: '1px solid rgba(0,212,255,0.08)',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.55rem',
                color: '#00d4ff',
                letterSpacing: '0.1em',
                marginBottom: 3,
                textTransform: 'uppercase',
              }}
            >
              Location
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem',
                color: '#f0f0f8',
                fontWeight: 500,
              }}
            >
              Ahmedabad, India
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                color: '#64748b',
                marginTop: 2,
              }}
            >
              Open to remote & relocation
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 48px)',
        }}
      >
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.05)',
            marginBottom: 24,
          }}
        />
      </div>

      <div
        className="footer-bottom-bar"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 clamp(20px, 4vw, 48px) 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            color: '#4a4a68',
            letterSpacing: '0.05em',
          }}
        >
          © {new Date().getFullYear()} Prasham Desai. All rights reserved.
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.62rem',
            color: '#3a3a55',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          Built with
          <span style={{ color: '#00d4ff' }}>React</span>
          &
          <span style={{ color: '#c084fc' }}>Framer Motion</span>
        </div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }

          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }

          .footer-cta-banner {
            padding: 56px 32px !important;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
            text-align: center !important;
          }

          .footer-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer-cta-banner {
            padding: 48px 24px !important;
            border-radius: 16px !important;
          }

          .footer-link-list {
            align-items: center !important;
          }

          .footer-link-item {
            justify-content: center !important;
          }

          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: center !important;
            gap: 8px !important;
            padding-bottom: 24px !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
