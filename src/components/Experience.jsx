import { motion } from 'framer-motion';

const experienceItems = [
  {
    company: 'Indianic Infotech Ltd',
    role: 'Game Developer Trainee',
    period: 'May 2025 - Oct 2025',
    duration: '6 months',
    color: '#00d4ff',
    responsibilities: [
      'Built and polished gameplay systems in Unity for casual and multiplayer mobile titles.',
      'Implemented UI flows, balancing tweaks, and content iteration based on internal playtests.',
      'Supported bug fixing, optimization passes, and feature integration across active game builds.',
    ],
  },
  {
    company: 'Indianic Infotech Ltd',
    role: 'Jr Game Developer',
    period: 'Nov 2025 - Apr 2026',
    duration: '6 months',
    color: '#b44fff',
    responsibilities: [
      'Owned feature implementation from prototype to production, including gameplay loops and progression systems.',
      'Integrated backend-connected systems such as leaderboards, matchmaking, analytics, and live game data.',
      'Collaborated with design and QA to ship stable builds while improving performance on Android and iOS devices.',
    ],
  },
];

const companyFacts = [
  { label: 'Total Tenure', value: '1 Year', color: '#00d4ff' },
  { label: 'Growth Path', value: 'Trainee to Junior', color: '#b44fff' },
  { label: 'Focus', value: 'Unity Mobile Games', color: '#ff6b00' },
  { label: 'Environment', value: 'Team Production', color: '#00ff88' },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: '120px 0',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -180,
          top: 80,
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,79,255,0.06) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Professional Experience</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#f0f0f8',
              lineHeight: 1.1,
              marginBottom: 18,
              maxWidth: 760,
            }}
          >
            Shipping Games in a{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ffd700, #ff6b00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Studio Environment
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.02rem',
              color: '#b8b8d0',
              lineHeight: 1.8,
              maxWidth: 620,
            }}
          >
            Progressed from trainee to junior developer while contributing to production-ready mobile games,
            feature delivery, and live-build quality improvements.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.4fr',
            gap: 44,
            alignItems: 'start',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -28, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(17,17,32,0.7)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 18,
              padding: 28,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#00d4ff',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Company
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.45rem',
                fontWeight: 700,
                color: '#f0f0f8',
                lineHeight: 1.2,
                marginBottom: 12,
              }}
            >
              Indianic Infotech Ltd
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                color: '#9090b5',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              Worked across gameplay, systems, optimization, and production support for mobile game projects in an
              iterative studio workflow.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div style={{ width: 28, height: 1, background: 'rgba(0,212,255,0.45)' }} />
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.64rem',
                  color: '#7b7ba0',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Snapshot
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {companyFacts.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                  style={{
                    padding: '14px 14px',
                    borderRadius: 12,
                    background: 'rgba(13,13,26,0.7)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: `inset 2px 0 0 ${item.color}50`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.62rem',
                      color: item.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginBottom: 6,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#e8e8f4',
                    }}
                  >
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div
              style={{
                position: 'absolute',
                left: 8,
                top: 40,
                bottom: 40,
                width: 1,
                background: 'linear-gradient(to bottom, rgba(0,212,255,0.24), rgba(180,79,255,0.24))',
                pointerEvents: 'none',
              }}
            />
            {experienceItems.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, x: 28, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.82, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ borderColor: `${item.color}35`, y: -2 }}
                style={{
                  position: 'relative',
                  background: 'rgba(13,13,26,0.72)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 18,
                  padding: 28,
                  marginBottom: 18,
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: -32,
                    top: 32,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'var(--color-bg)',
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 0 4px ${item.color}14`,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 18,
                    marginBottom: 18,
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: '#f0f0f8',
                        marginBottom: 6,
                      }}
                    >
                      {item.role}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <div style={{ width: 22, height: 1, background: `${item.color}55` }} />
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.62rem',
                          color: item.color,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Role Track
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.96rem',
                        color: '#b4b4cb',
                      }}
                    >
                      {item.company}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem',
                        color: item.color,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: 6,
                      }}
                    >
                      {item.period}
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 12px',
                        borderRadius: 999,
                        background: `${item.color}10`,
                        border: `1px solid ${item.color}24`,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        color: '#cfcfe2',
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: item.color }} />
                      {item.duration}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gap: 10,
                  }}
                >
                  {item.responsibilities.map((responsibility) => (
                    <div
                      key={responsibility}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: '12px 14px',
                        borderRadius: 12,
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: item.color,
                          marginTop: 8,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.94rem',
                          color: '#aeb0c8',
                          lineHeight: 1.75,
                        }}
                      >
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
