import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillGroups } from '../data/skills';

const SkillGroupIcon = ({ id }) => {
  const iconStyle = {
    width: 16,
    height: 16,
    display: 'block',
  };

  switch (id) {
    case 'core':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <path d="M8 5h8l4 7-4 7H8l-4-7 4-7Z" />
          <circle cx="12" cy="12" r="2.3" />
        </svg>
      );
    case 'networking':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <circle cx="6" cy="12" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="18" cy="17" r="2.2" />
          <path d="M8.1 11 15.9 7.9M8.1 13 15.9 16.1" />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <rect x="7" y="3.5" width="10" height="17" rx="2.5" />
          <path d="M10 6h4" />
          <circle cx="12" cy="17.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'backend':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="6" ry="2.5" />
          <path d="M6 6.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
          <path d="M6 11.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
        </svg>
      );
    case 'emerging':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <path d="M12 3 14.4 9.6 21 12 14.4 14.4 12 21 9.6 14.4 3 12 9.6 9.6 12 3Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={iconStyle} aria-hidden="true">
          <circle cx="12" cy="12" r="6" />
        </svg>
      );
  }
};

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  const currentGroup = skillGroups.find(g => g.id === activeGroup) || skillGroups[0];

  return (
    <section id="skills" ref={ref} className="skills-section" style={{
      padding: 'var(--section-space) 0',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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

        <div className="skills-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Left: Category selector — node map style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="skills-node-list" style={{ marginBottom: 24 }}>
              {skillGroups.map((group, i) => (
                <motion.button
                  key={group.id}
                  className="skill-node"
                  onClick={() => setActiveGroup(group.id)}
                  whileHover={{ x: 6 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
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
                    boxShadow: `inset 2px 0 0 ${activeGroup === group.id ? `${group.color}70` : 'rgba(255,255,255,0.08)'}`,
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
                      color: activeGroup === group.id ? group.color : '#9a9ac0',
                      border: `1px solid ${activeGroup === group.id ? `${group.color}40` : 'rgba(255,255,255,0.06)'}`,
                      transition: 'all 0.25s ease',
                    }}>
                      <SkillGroupIcon id={group.id} />
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
                      color: activeGroup === group.id ? group.color : '#9a9ac0',
                      transition: 'color 0.25s ease',
                      marginBottom: 2,
                    }}>
                      {group.label}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: '#61618a',
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
            <div className="skills-aux-card" style={{
              padding: '20px',
              background: 'rgba(13,13,26,0.6)',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: 'inset 2px 0 0 rgba(0,212,255,0.35)',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#6a6a92',
                letterSpacing: '0.1em',
                marginBottom: 12,
              }}>
                ALSO COMFORTABLE WITH
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['C++', 'Java', 'Python', 'MERN Stack', 'Unity Addressables', 'DOTween', 'Vibe Coding', 'Figma'].map(tech => (
                  <span key={tech} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#9090b5',
                    padding: '5px 12px',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
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
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="skills-panel"
                style={{
                  background: 'rgba(13,13,26,0.6)',
                  border: `1px solid ${currentGroup.color}20`,
                  borderRadius: 16,
                  padding: '32px 32px',
                  boxShadow: `inset 2px 0 0 ${currentGroup.color}55`,
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
                    color: currentGroup.color,
                  }}>
                    <SkillGroupIcon id={currentGroup.id} />
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
        @media (max-width: 980px) {
          #skills .skills-layout {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 720px) {
          #skills .skills-node-list {
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          #skills .skills-node-list::-webkit-scrollbar {
            display: none;
          }

          #skills .skill-node {
            margin-bottom: 0 !important;
            padding: 12px 16px !important;
            flex-shrink: 0;
            min-width: 150px;
          }

          #skills .skills-panel {
            padding: 22px 18px !important;
          }

          #skills .skills-aux-card {
            margin-top: 16px;
          }
        }

        @media (max-width: 480px) {
          #skills .skill-node {
            min-width: 130px;
            padding: 10px 14px !important;
          }

          #skills .skills-panel {
            padding: 18px 14px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
