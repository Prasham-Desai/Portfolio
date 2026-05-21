import { motion } from 'framer-motion';

const experienceItems = [
  {
    company: 'Career Break',
    role: 'Professional Development',
    period: 'May 2026 - Present',
    duration: 'Ongoing',
    color: '#ff8c00',
    responsibilities: [
      'Learning Unreal Engine (Blueprints) and Unreal C++.',
      'Building prototypes to explore gameplay systems, tools, and performance patterns in UE.',
      'Studying engine architecture, C++ integration, and production workflows.',
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
];

const groupedExperience = experienceItems.reduce((groups, item) => {
  const existingGroup = groups.find((group) => group.company === item.company);

  if (existingGroup) {
    existingGroup.roles.push(item);
    existingGroup.isCurrent = existingGroup.isCurrent || /present/i.test(item.period);
    return groups;
  }

  groups.push({
    company: item.company,
    isCurrent: /present/i.test(item.period),
    roles: [item],
  });

  return groups;
}, []);

const Experience = () => {
  const companyCards = groupedExperience.map((group) => {
    const isCurrent = group.isCurrent;
    const totalRoles = group.roles.length;
    const firstRolePeriod = group.roles[0].period.split(' - ');
    const lastRolePeriod = group.roles[group.roles.length - 1].period.split(' - ');
    const companyPeriod =
      totalRoles > 1
        ? `${lastRolePeriod[0]} - ${firstRolePeriod[1] || 'Present'}`
        : group.roles[0].period;
    const summary = isCurrent
      ? 'Current company focused on active learning and production-ready Unreal Engine work.'
      : 'Past company where I progressed across multiple game development roles.';

    return {
      ...group,
      isCurrent,
      totalRoles,
      companyPeriod,
      summary,
      accentColor: isCurrent ? '#ff8c00' : '#00d4ff',
      borderColor: isCurrent ? '#ff8c0044' : '#00d4ff33',
      background: isCurrent
        ? 'linear-gradient(135deg, rgba(255,140,0,0.12), rgba(13,13,26,0.82))'
        : 'rgba(13,13,26,0.72)',
      badgeLabel: isCurrent ? 'Current company' : 'Past company',
    };
  });

  return (
    <section
      id="experience"
      className="experience-section"
      style={{
        padding: 'var(--section-space) 0',
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
          className="experience-layout"
          style={{
            display: 'grid',
            gap: 20,
            maxWidth: 940,
            margin: '0 auto',
          }}
        >
          {companyCards.map((card, index) => (
            <motion.div
              key={card.company}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -3 }}
              style={{
                background: card.background,
                border: `1px solid ${card.borderColor}`,
                borderRadius: 22,
                padding: 28,
                boxShadow: card.isCurrent ? `inset 2px 0 0 ${card.accentColor}66` : 'inset 2px 0 0 rgba(0,212,255,0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: card.isCurrent
                    ? 'linear-gradient(135deg, rgba(255,140,0,0.08), transparent 45%)'
                    : 'linear-gradient(135deg, rgba(0,212,255,0.05), transparent 40%)',
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', marginBottom: 18, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: card.accentColor,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}>
                      {card.badgeLabel}
                    </div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#f0f0f8',
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}>
                      {card.company}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      color: '#b4b4cb',
                    }}>
                      {card.totalRoles} {card.totalRoles === 1 ? 'role' : 'roles'} across {card.companyPeriod}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem',
                      color: card.accentColor,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: 6,
                    }}>
                      {card.isCurrent ? 'Current' : 'Past'}
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '6px 12px',
                      borderRadius: 999,
                      background: `${card.accentColor}12`,
                      border: `1px solid ${card.accentColor}24`,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#cfcfe2',
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: card.accentColor }} />
                      {card.isCurrent ? 'Active position' : 'Completed company'}
                    </div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  color: '#9090b5',
                  lineHeight: 1.8,
                  marginBottom: 22,
                  maxWidth: 640,
                }}>
                  {card.summary}
                </p>

                <div style={{ display: 'grid', gap: 14 }}>
                  {card.roles.map((role) => (
                    <div
                      key={`${role.company}-${role.role}-${role.period}`}
                      style={{
                        padding: 18,
                        borderRadius: 16,
                        background: 'rgba(255,255,255,0.02)',
                        border: `1px solid ${role.color}18`,
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'flex-start', marginBottom: 14, flexWrap: 'wrap' }}>
                        <div>
                          <div style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '1.22rem',
                            fontWeight: 700,
                            color: '#f0f0f8',
                            marginBottom: 6,
                          }}>
                            {role.role}
                          </div>
                          <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.62rem',
                            color: role.color,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            marginBottom: 8,
                          }}>
                            {role.company}
                          </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.72rem',
                            color: role.color,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: 6,
                          }}>
                            {role.period}
                          </div>
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 12px',
                            borderRadius: 999,
                            background: `${role.color}10`,
                            border: `1px solid ${role.color}24`,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            color: '#cfcfe2',
                          }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: role.color }} />
                            {role.duration}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gap: 10 }}>
                        {role.responsibilities.map((responsibility) => (
                          <div
                            key={responsibility}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 12,
                              padding: '12px 14px',
                              borderRadius: 12,
                              background: 'rgba(255,255,255,0.015)',
                            }}
                          >
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: role.color,
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
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #experience .experience-layout > div > div:first-child {
            flex-direction: column;
            gap: 12px !important;
          }

          #experience .experience-layout > div > div:first-child > div:last-child {
            text-align: left !important;
          }
        }

        @media (max-width: 560px) {
          #experience .experience-layout > div {
            padding: 20px 16px !important;
          }
        }

        @media (max-width: 480px) {
          #experience .experience-layout p {
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
