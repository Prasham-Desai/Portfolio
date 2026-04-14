import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '40px 0',
      background: 'var(--color-bg)',
    }}>
      <div className="container" style={{
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
            fontSize: '1.1rem',
            color: '#f0f0f8',
            marginBottom: 4,
          }}>
            Prasham Desai<span style={{ color: '#00d4ff' }}>.</span>
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: '#444460',
            letterSpacing: '0.1em',
          }}>
            Game Developer
          </div>
        </div>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#444460',
          letterSpacing: '0.05em',
          textAlign: 'center',
        }}>
          Crafted with React + Framer Motion
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'GitHub', href: 'https://github.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'Email', href: 'mailto:prashamdesai@example.com' },
          ].map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ color: '#00d4ff', y: -2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 500,
                color: '#8888aa',
                transition: 'all 0.2s ease',
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
