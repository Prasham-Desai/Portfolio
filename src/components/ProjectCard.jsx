import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TAG_COLORS = {
  'Unity':      '#00d4ff',
  'Multiplayer':'#ff6b6b',
  'Firebase':   '#ffd700',
  'Mobile':     '#00ff88',
  'Physics':    '#b44fff',
  'DOTS':       '#00fff2',
  'AdMob':      '#ff6b00',
  'WebGL':      '#00d4ff',
  'Procedural': '#ffd700',
  'AI':         '#ff6b6b',
  'Casual':     '#00ff88',
  'Real-time':  '#b44fff',
  'Puzzle':     '#ffd700',
};

const CARD_HEIGHT   = 420;   // total card height — fixed for all cards
const THUMB_HEIGHT  = 188;   // thumbnail zone

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-CARD_HEIGHT / 2, CARD_HEIGHT / 2], [7, -7]), { stiffness: 220, damping: 32 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-7, 7]),                        { stiffness: 220, damping: 32 });
  const glowX   = useTransform(mouseX, [-200, 200], [0, 100]);
  const glowY   = useTransform(mouseY, [-CARD_HEIGHT / 2, CARD_HEIGHT / 2], [0, 100]);

  const onMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (r.left + r.width  / 2));
    mouseY.set(e.clientY - (r.top  + r.height / 2));
  };
  const onLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.4, 0, 0.2, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 900, height: CARD_HEIGHT }}
    >
      <Link to={`/project/${project.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
        <motion.div
          style={{
            rotateX, rotateY,
            transformStyle: 'preserve-3d',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(160deg, rgba(17,17,32,0.95), rgba(11,11,22,0.98))',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 18,
            overflow: 'hidden',
            position: 'relative',
          }}
          whileHover={{
            borderColor: `${project.accentColor}45`,
            boxShadow: `0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px ${project.accentColor}18`,
          }}
          transition={{ duration: 0.25 }}
        >
          {/* Mouse-tracked glow */}
          <motion.div
            style={{
              position: 'absolute', inset: 0, zIndex: 0,
              background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${project.accentColor}12, transparent 55%)`,
              pointerEvents: 'none',
            }}
          />

          {/* ── THUMBNAIL ── */}
          <div style={{
            height: THUMB_HEIGHT,
            flexShrink: 0,
            background: project.coverColor,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            {project.thumbnail ? (
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ) : (
              <>
                {/* Grid pattern */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `linear-gradient(${project.accentColor}09 1px,transparent 1px),linear-gradient(90deg,${project.accentColor}09 1px,transparent 1px)`,
                  backgroundSize: '28px 28px',
                }} />

                {/* Ghost title */}
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'rgba(255,255,255,0.1)',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {project.title}
                </div>
              </>
            )}

            {/* Project index */}
            <div style={{
              position: 'absolute', top: 14, left: 16,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '0.12em',
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={{ scale: 1.15, borderColor: project.accentColor }}
              style={{
                position: 'absolute', top: 14, right: 14,
                width: 30, height: 30,
                borderRadius: '50%',
                border: `1px solid ${project.accentColor}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke={project.accentColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            {/* Accent bar at bottom */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                transformOrigin: 'left',
              }}
            />
          </div>

          {/* ── BODY ── flex column, footer pinned to bottom */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '18px 22px 20px',
            position: 'relative',
            zIndex: 1,
            minHeight: 0,
          }}>
            {/* Category + Year */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                color: project.accentColor,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {project.category}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                color: '#333350',
              }}>
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: '#f0f0f8',
              marginBottom: 8,
              lineHeight: 1.2,
            }}>
              {project.title}
            </h3>

            {/* Tagline */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              color: '#8888aa',
              lineHeight: 1.55,
              marginBottom: 0,
              flex: 1,            /* pushes footer down */
            }}>
              {project.tagline}
            </p>

            {/* ── FOOTER: tags + link ── always at bottom */}
            <div style={{ paddingTop: 16 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {project.tags.map(tag => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.06 }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: TAG_COLORS[tag] || '#8888aa',
                      padding: '3px 10px',
                      borderRadius: 5,
                      border: `1px solid ${TAG_COLORS[tag] || '#8888aa'}28`,
                      background: `${TAG_COLORS[tag] || '#8888aa'}0a`,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: project.accentColor,
                  opacity: 0.75,
                }}
                whileHover={{ opacity: 1, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                View Case Study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
