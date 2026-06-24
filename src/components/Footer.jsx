import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './SocialIcons';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Prasham-Desai',
    color: 'var(--color-teal)',
    hover: '#5fe7ff',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prashamdesai',
    color: 'var(--color-purple)',
    hover: '#d6a3ff',
    Icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:prashamdesai9114@gmail.com',
    color: 'var(--color-gold)',
    hover: '#ffe566',
    Icon: MailIcon,
  },
];

const Footer = () => {
  return (
    <footer className="site-footer" style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 0',
      background: 'var(--color-bg)',
    }}>
      <div className="container site-footer-layout" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#f0f0f8',
            marginBottom: 4,
          }}>
            Prasham Desai<span style={{ color: '#00d4ff' }}>.</span>
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.1em',
          }}>
            Game is game.
          </div>
        </div>

        <div className="site-footer-pillars" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.9rem',
          letterSpacing: '0.05em',
          textAlign: 'center',
          display: 'flex',
          gap: 8,
        }}>
          <span style={{ color: 'var(--color-teal)' }}>Systems.</span>
          <span style={{ color: 'var(--color-purple)' }}>Gameplay.</span>
          <span style={{ color: 'var(--color-green)' }}>Performance.</span>
        </div>

        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          {socialLinks.map(({ label, href, color, hover, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              whileHover={{ color: hover, y: -2, scale: 1.08 }}
              style={{
                width: 42,
                height: 42,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color,
                transition: 'all 0.2s ease',
              }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .site-footer-layout {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 20px !important;
          }

          .site-footer-pillars {
            flex-wrap: wrap;
            text-align: left !important;
          }
        }

        @media (max-width: 480px) {
          .site-footer {
            padding: 28px 0 !important;
          }

          .site-footer-pillars {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
