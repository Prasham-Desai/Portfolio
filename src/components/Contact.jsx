import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, MailIcon } from './SocialIcons';
import emailjs from '@emailjs/browser';

/* ──────────────────────────────────────────────
   CONTACT SECTION — EmailJS Integration
   ─ Updated fields: Name, Email, Opportunity,
     Company, Message
   ─ Client-side validation
   ─ Success / error / sending states
   ────────────────────────────────────────────── */

// ── EmailJS config — replace with your actual credentials ──
const EMAILJS_SERVICE_ID = 'service_yiloj2l';
const EMAILJS_TEMPLATE_ID = 'template_p7d29ke';
const EMAILJS_PUBLIC_KEY = 'B8cSW7XNCqrznUZxc';

const OPPORTUNITY_OPTIONS = [
  'Job Opportunity',
  'Freelance Project',
  'Collaboration',
  'Other',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  opportunity: '',
  company: '',
  message: '',
};

/* ── Input field with validation ── */
const InputField = ({ label, type = 'text', value, onChange, placeholder, multiline, required, error }) => {
  const [focused, setFocused] = useState(false);

  const sharedStyle = {
    width: '100%',
    padding: '14px 16px',
    background: 'rgba(13,13,26,0.8)',
    border: `1px solid ${error ? 'rgba(255,82,99,0.5)' : focused ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.06)'}`,
    borderRadius: 10,
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.88rem',
    color: '#f0f0f8',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxShadow: error ? '0 0 0 3px rgba(255,82,99,0.06)' : focused ? '0 0 0 3px rgba(0,212,255,0.06)' : 'none',
    resize: 'none',
    display: 'block',
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: error ? '#ff5263' : focused ? '#00d4ff' : '#444460',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: 8,
        transition: 'color 0.25s ease',
      }}>
        {label}
        {required && <span style={{ color: '#ff5263', fontSize: '0.7rem' }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={sharedStyle}
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
      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#ff5263',
              marginTop: 6,
              letterSpacing: '0.05em',
            }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Select dropdown ── */
const SelectField = ({ label, value, onChange, options, required, error }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: error ? '#ff5263' : focused ? '#00d4ff' : '#444460',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: 8,
        transition: 'color 0.25s ease',
      }}>
        {label}
        {required && <span style={{ color: '#ff5263', fontSize: '0.7rem' }}>*</span>}
      </label>
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '14px 40px 14px 16px',
            background: 'rgba(13,13,26,0.8)',
            border: `1px solid ${error ? 'rgba(255,82,99,0.5)' : focused ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 10,
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.88rem',
            color: value ? '#f0f0f8' : '#8a8aa8',
            outline: 'none',
            transition: 'all 0.25s ease',
            boxShadow: error ? '0 0 0 3px rgba(255,82,99,0.06)' : focused ? '0 0 0 3px rgba(0,212,255,0.06)' : 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="" style={{ background: '#0c0e18', color: '#8a8aa8' }}>Select type...</option>
          {options.map(opt => (
            <option key={opt} value={opt} style={{ background: '#0c0e18', color: '#f0f0f8' }}>{opt}</option>
          ))}
        </select>
        {/* Dropdown arrow */}
        <svg
          width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{
            position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
            pointerEvents: 'none', color: '#64748b',
          }}
        >
          <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.6rem',
              color: '#ff5263',
              marginTop: 6,
              letterSpacing: '0.05em',
            }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── Success confetti particles ── */
const SuccessParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 200 - 80,
    rotate: Math.random() * 360,
    scale: Math.random() * 0.6 + 0.4,
    color: ['#00d4ff', '#c084fc', '#34d399', '#ffbe0b', '#ff5263'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 0.3,
  }));

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', pointerEvents: 'none', zIndex: 1 }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 0 }}
          animate={{
            opacity: [1, 1, 0],
            x: p.x,
            y: p.y,
            rotate: p.rotate,
            scale: p.scale,
          }}
          transition={{ duration: 1, delay: p.delay, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: Math.random() > 0.5 ? '50%' : '1px',
            background: p.color,
            boxShadow: `0 0 6px ${p.color}60`,
          }}
        />
      ))}
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
    value: 'github.com/Prasham-Desai',
    href: 'https://github.com/Prasham-Desai',
    color: '#ffd700',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/prasham-desai-602094269',
    href: 'https://in.linkedin.com/in/prasham-desai-602094269',
    color: '#b44fff',
    Icon: LinkedInIcon,
  },
];

const Contact = () => {
  const [form, setForm] = useState({ ...INITIAL_FORM });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [cooldown, setCooldown] = useState(false);
  const formRef = useRef(null);

  // Validate form
  const validate = useCallback(() => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Invalid email format';
    }
    if (!form.opportunity) errs.opportunity = 'Please select an opportunity type';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  }, [form]);

  // Check if form is valid for enabling submit
  const isFormValid = form.name.trim() && form.email.trim() && form.opportunity && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    if (cooldown) return;

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          opportunity_type: form.opportunity,
          company: form.company || 'Not specified',
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('sent');
      setCooldown(true);
      setTimeout(() => setCooldown(false), 30000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(err?.text || 'Failed to send message. Please try again.');
    }
  };

  const resetForm = () => {
    setForm({ ...INITIAL_FORM });
    setErrors({});
    setStatus('idle');
    setErrorMsg('');
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(i * 0.06 + 0.1, 0.4) }}
                whileHover={{ borderColor: `${item.color}40` }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact-form-card" style={{
              background: 'rgba(17,17,32,0.7)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
              padding: 32,
              boxShadow: 'inset 2px 0 0 rgba(0,212,255,0.35)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <AnimatePresence mode="wait">
                {/* ── Success state ── */}
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 340,
                      textAlign: 'center',
                      gap: 16,
                      position: 'relative',
                    }}
                  >
                    <SuccessParticles />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'rgba(0,255,136,0.12)',
                        border: '1px solid rgba(0,255,136,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00ff88',
                        marginBottom: 8,
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      <motion.svg
                        width="28" height="28" viewBox="0 0 24 24" fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <motion.path
                          d="M5 12.5 9.5 17 19 7.5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        />
                      </motion.svg>
                    </motion.div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#f0f0f8', zIndex: 2 }}>
                      Message Transmitted!
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa', zIndex: 2 }}>
                      I'll get back to you within 24 hours.
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      onClick={resetForm}
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
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                    >
                      Send Another
                    </motion.button>
                  </motion.div>

                  /* ── Error state ── */
                ) : status === 'error' ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 340,
                      textAlign: 'center',
                      gap: 16,
                    }}
                  >
                    <motion.div
                      animate={{ scale: [0.8, 1.1, 1] }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'rgba(255,82,99,0.12)',
                        border: '1px solid rgba(255,82,99,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff5263',
                        marginBottom: 8,
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#f0f0f8' }}>
                      Transmission Failed
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa', maxWidth: 300 }}>
                      {errorMsg}
                    </div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setStatus('idle')}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#060610',
                          padding: '10px 24px',
                          borderRadius: 8,
                          border: 'none',
                          background: '#00d4ff',
                          cursor: 'pointer',
                        }}
                      >
                        Try Again
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        href={`mailto:prashamdesai9114@gmail.com?subject=${encodeURIComponent(form.opportunity || 'Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`)}`}
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#00d4ff',
                          padding: '10px 24px',
                          borderRadius: 8,
                          border: '1px solid rgba(0,212,255,0.3)',
                          background: 'transparent',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        Email Directly
                      </motion.a>
                    </div>
                  </motion.div>

                  /* ── Form ── */
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                      <InputField
                        label="Name"
                        value={form.name}
                        onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: undefined })); }}
                        placeholder="Your name"
                        required
                        error={errors.name}
                      />
                      <InputField
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: undefined })); }}
                        placeholder="you@studio.com"
                        required
                        error={errors.email}
                      />
                    </div>

                    <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
                      <SelectField
                        label="Opportunity Type"
                        value={form.opportunity}
                        onChange={e => { setForm(p => ({ ...p, opportunity: e.target.value })); setErrors(p => ({ ...p, opportunity: undefined })); }}
                        options={OPPORTUNITY_OPTIONS}
                        required
                        error={errors.opportunity}
                      />
                      <InputField
                        label="Company / Studio"
                        value={form.company}
                        onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        placeholder="Optional"
                      />
                    </div>

                    <InputField
                      label="Message"
                      value={form.message}
                      onChange={e => { setForm(p => ({ ...p, message: e.target.value })); setErrors(p => ({ ...p, message: undefined })); }}
                      placeholder="Tell me about the opportunity..."
                      multiline
                      required
                      error={errors.message}
                    />

                    <motion.button
                      type="submit"
                      disabled={status === 'sending' || !isFormValid}
                      whileHover={isFormValid && status !== 'sending' ? { scale: 1.02, boxShadow: '0 0 30px rgba(0,212,255,0.25)' } : {}}
                      whileTap={isFormValid ? { scale: 0.98 } : {}}
                      style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: 10,
                        background: status === 'sending'
                          ? 'rgba(0,212,255,0.3)'
                          : isFormValid
                            ? '#00d4ff'
                            : 'rgba(0,212,255,0.15)',
                        color: isFormValid ? '#08080f' : '#64748b',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        letterSpacing: '-0.01em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        transition: 'all 0.25s ease',
                        cursor: isFormValid && status !== 'sending' ? 'pointer' : 'not-allowed',
                        border: 'none',
                      }}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                          >
                            Transmitting
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                            >.</motion.span>
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                            >.</motion.span>
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                            >.</motion.span>
                          </motion.span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    {cooldown && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          textAlign: 'center',
                          marginTop: 12,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem',
                          color: '#64748b',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Please wait before sending another message
                      </motion.div>
                    )}
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

        #contact select {
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Contact;
