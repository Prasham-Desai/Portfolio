import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '../data/skills';

const SkillBar = ({ name, level, color, inView, delay }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7,
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '0.97rem',
    }}>
      <span style={{ color: '#c0c0d0', fontWeight: 500 }}>{name}</span>
      <span style={{ color: '#444460', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem' }}>
        {level}%
      </span>
    </div>
    <div style={{
      height: 3,
      background: 'rgba(255,255,255,0.05)',
      borderRadius: 2,
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${color}, ${color}bb)`,
          borderRadius: 2,
          boxShadow: `0 0 8px ${color}40`,
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState('core');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const currentGroup = skillGroups.find(g => g.id === activeGroup) || skillGroups[0];

  return (
    <section id="skills" ref={ref} style={{
      padding: '120px 0',
      background: 'var(--color-bg-2)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label">Technical Arsenal</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#f0f0f8',
            lineHeight: 1.1,
          }}>
            Skills &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Expertise
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Left: Category selector — node map style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: 24 }}>
              {skillGroups.map((group, i) => (
                <motion.button
                  key={group.id}
                  className="skill-node"
                  onClick={() => setActiveGroup(group.id)}
                  whileHover={{ x: 6 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: 12,
                    marginBottom: 8,
                    background: activeGroup === group.id
                      ? `${group.color}10`
                      : 'transparent',
                    border: activeGroup === group.id
                      ? `1px solid ${group.color}30`
                      : '1px solid rgba(255,255,255,0.04)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    textAlign: 'left',
                  }}
                >
                  {/* Node indicator */}
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: activeGroup === group.id ? `${group.color}20` : 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      border: `1px solid ${activeGroup === group.id ? `${group.color}40` : 'rgba(255,255,255,0.06)'}`,
                      transition: 'all 0.25s ease',
                    }}>
                      {group.icon}
                    </div>
                    {activeGroup === group.id && (
                      <motion.div
                        layoutId="activeNodeGlow"
                        style={{
                          position: 'absolute',
                          inset: -4,
                          borderRadius: 14,
                          background: `${group.color}15`,
                          zIndex: -1,
                        }}
                      />
                    )}
                  </div>

                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: activeGroup === group.id ? group.color : '#8888aa',
                      transition: 'color 0.25s ease',
                      marginBottom: 2,
                    }}>
                      {group.label}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#444460',
                    }}>
                      {group.skills.length} skills
                    </div>
                  </div>

                  {activeGroup === group.id && (
                    <motion.div
                      layoutId="activeArrow"
                      style={{ marginLeft: 'auto' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M8 3L13 8L8 13" stroke={group.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Quick tech tags */}
            <div style={{
              padding: '20px',
              background: 'rgba(13,13,26,0.6)',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.05)',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#444460',
                letterSpacing: '0.1em',
                marginBottom: 12,
              }}>
                ALSO COMFORTABLE WITH
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['C++', 'Java', 'REST APIs', 'GitLab CI', 'Addressables', 'DOTween', 'MAX Mediation', 'Unity UI Toolkit'].map(tech => (
                  <span key={tech} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#666688',
                    padding: '5px 12px',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.05)',
                    background: 'rgba(255,255,255,0.02)',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(13,13,26,0.6)',
                  border: `1px solid ${currentGroup.color}20`,
                  borderRadius: 16,
                  padding: '32px 32px',
                }}
              >
                {/* Group header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 32,
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${currentGroup.color}15`,
                    border: `1px solid ${currentGroup.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}>
                    {currentGroup.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: currentGroup.color,
                    }}>
                      {currentGroup.label}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem',
                      color: '#444460',
                    }}>
                      {currentGroup.skills.length} tracked skills
                    </div>
                  </div>
                </div>

                {/* Skill bars */}
                {currentGroup.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      color={currentGroup.color}
                      inView={inView}
                      delay={0.2 + i * 0.12}
                    />
                    {i < currentGroup.skills.length - 1 && (
                      <div style={{ height: 1, background: 'rgba(255,255,255,0.03)', margin: '10px 0' }} />
                    )}
                  </div>
                ))}

                {/* Experience note */}
                <div style={{
                  marginTop: 24,
                  padding: '12px 16px',
                  background: `${currentGroup.color}08`,
                  borderRadius: 8,
                  borderLeft: `2px solid ${currentGroup.color}`,
                }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#8888aa',
                    lineHeight: 1.5,
                  }}>
                    ▸ {currentGroup.skills[0].years} hands-on experience in {currentGroup.label.toLowerCase()}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
