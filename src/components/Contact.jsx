import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './SocialIcons';

const InputField = ({ label, type = 'text', value, onChange, placeholder, multiline }) => {
  const [focused, setFocused] = useState(false);

  const sharedStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(13,13,26,0.8)',
    border: `1px solid ${focused ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.06)'}`,
    borderRadius: 10,
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.88rem',
    color: '#f0f0f8',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxShadow: focused ? '0 0 0 3px rgba(0,212,255,0.06)' : 'none',
    resize: 'none',
    display: 'block',
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'block',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: focused ? '#00d4ff' : '#444460',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: 8,
        transition: 'color 0.25s ease',
      }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle, placeholder: '#333348' }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
        />
      )}
    </div>
  );
};

const contactLinks = [
  {
    label: 'Email',
    value: 'prashamdesai9114@gmail.com',
    href: 'mailto:prashamdesai9114@gmail.com',
    color: '#00d4ff',
    Icon: MailIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/prashamd9114',
    href: 'https://github.com/prashamdesai',
    color: '#ffd700',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/prashamdesai',
    href: 'https://www.linkedin.com/in/prashamdesai',
    color: '#b44fff',
    Icon: LinkedInIcon,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  return (
    <section id="contact" className="contact-section" style={{
      padding: 'var(--section-space) 0',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        right: -200,
        bottom: -100,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Get In Touch</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.6rem, 6.4vw, 4.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            color: '#ffffff',
            lineHeight: 1.06,
            marginBottom: 20,
            maxWidth: 880,
          }}>
            Let's Build{' '}
            <span style={{
              display: 'inline-block',
              color: '#7fefff',
              background: 'linear-gradient(135deg, #5fe7ff, #d6a3ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              paddingBottom: '0.06em',
            }}>
              Something Great
            </span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.05rem',
            color: '#c8c8dc',
            lineHeight: 1.7,
            maxWidth: 560,
          }}>
            Open to studio roles, freelance projects, and collaborations. Let's talk.
          </p>
        </motion.div>

        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48, alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -28, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 + 0.1 }}
                whileHover={{ x: 4, borderColor: `${item.color}40` }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 20px',
                  background: 'rgba(13,13,26,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: 12,
                  boxShadow: `inset 2px 0 0 ${item.color}55`,
                  marginBottom: 12,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 10,
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  flexShrink: 0,
                }}>
                  <item.Icon size={24} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: item.color,
                    marginBottom: 5,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.02rem',
                    color: '#e5e5f2',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                  }}>
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            <div style={{
              marginTop: 24,
              padding: '16px 20px',
              background: 'rgba(0,212,255,0.04)',
              borderRadius: 12,
              border: '1px solid rgba(0,212,255,0.1)',
              boxShadow: 'inset 2px 0 0 rgba(0,212,255,0.45)',
            }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#00d4ff', letterSpacing: '0.1em', marginBottom: 4 }}>
                LOCATION
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: '#f0f0f8', fontWeight: 500 }}>
                Ahmedabad, Gujarat, India
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#8888aa', marginTop: 2 }}>
                Open to remote & relocation
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-form-card" style={{
              background: 'rgba(17,17,32,0.7)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
              padding: 32,
              boxShadow: 'inset 2px 0 0 rgba(0,212,255,0.35)',
            }}>
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 300,
                      textAlign: 'center',
                      gap: 16,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [0.8, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'rgba(0,255,136,0.12)',
                        border: '1px solid rgba(0,255,136,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00ff88',
                        marginBottom: 8,
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#f0f0f8' }}>
                      Message Sent!
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa' }}>
                      I'll get back to you within 24 hours.
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#00d4ff',
                        padding: '10px 24px',
                        borderRadius: 8,
                        border: '1px solid rgba(0,212,255,0.3)',
                        background: 'transparent',
                        marginTop: 8,
                      }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                      <InputField
                        label="Name"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Prasham"
                      />
                      <InputField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="you@studio.com"
                      />
                    </div>
                    <InputField
                      label="Subject"
                      value={form.subject}
                      onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                      placeholder="Job opportunity / Collaboration / Project"
                    />
                    <InputField
                      label="Message"
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about the opportunity..."
                      multiline
                    />

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.25)' }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: 10,
                        background: status === 'sending'
                          ? 'rgba(0,212,255,0.3)'
                          : '#00d4ff',
                        color: '#08080f',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        letterSpacing: '-0.01em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ width: 16, height: 16, border: '2px solid rgba(8,8,15,0.3)', borderTopColor: '#08080f', borderRadius: '50%' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #contact .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          #contact .contact-form-grid {
            grid-template-columns: 1fr !important;
          }

          #contact .contact-form-card {
            padding: 24px 20px !important;
          }
        }

        @media (max-width: 480px) {
          #contact .contact-form-card {
            padding: 20px 16px !important;
            border-radius: 12px !important;
          }

          #contact .contact-layout > div:first-child a {
            padding: 14px 16px !important;
          }
        }

        #contact input::placeholder,
        #contact textarea::placeholder {
          color: #8a8aa8;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Contact;
