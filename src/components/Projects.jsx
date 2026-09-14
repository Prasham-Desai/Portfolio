import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const unrealFeatured = projects.filter(p => p.engine === 'Unreal Engine' && p.featured);
const unityFeatured = projects.filter(p => p.engine === 'Unity' && p.featured);
const totalProjects = projects.length;

const EngineHeader = ({ engine, color, count }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 30,
  }}>
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.72rem',
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 4,
      background: `${color}10`,
      border: `1px solid ${color}25`,
      color: color,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: color, boxShadow: `0 0 6px ${color}`,
      }} />
      {engine}
    </div>
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.68rem',
      color: '#64748b',
      letterSpacing: '0.08em',
    }}>
      {count} FEATURED
    </span>
    <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.06)' }} />
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section" style={{
      padding: 'var(--section-space) 0',
      background: 'var(--color-bg)',
      position: 'relative',
    }}>
      <div className="container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label" style={{ fontSize: '0.8rem', marginBottom: 18 }}>
            Project Highlights
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 20,
          }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#f1f5f9',
              lineHeight: 1.05,
              maxWidth: 500,
            }}>
              Featured{' '}
              <span style={{
                background: 'linear-gradient(135deg,#00d4ff,#00fff2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Work
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.97rem',
                color: '#94a3b8',
                maxWidth: 340,
                lineHeight: 1.65,
              }}
            >
              Prototypes, production games, and technical showcases across Unreal Engine and Unity.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Unreal Engine Highlights ── */}
        {unrealFeatured.length > 0 && (
          <div style={{ marginBottom: 64 }}>
            <EngineHeader engine="Unreal Engine" color="#c084fc" count={unrealFeatured.length} />
            <div className="projects-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '420px',
              gap: 24,
            }}>
              {unrealFeatured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── Unity Engine Highlights ── */}
        {unityFeatured.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <EngineHeader engine="Unity" color="#00d4ff" count={unityFeatured.length} />
            <div className="projects-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '420px',
              gap: 24,
            }}>
              {unityFeatured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* ── View All Projects CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 16,
          }}
        >
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.03, borderColor: 'rgba(0,212,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 32px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.10)',
                background: 'rgba(12,14,24,0.6)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                color: '#f1f5f9',
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease',
              }}
            >
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                color: '#00d4ff',
                letterSpacing: '0.08em',
              }}>
                [{totalProjects}]
              </span>
              Explore Full Project Archive
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M7 1L13 7L7 13" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style>{`
        #projects .project-card {
          min-width: 0;
        }

        @media (max-width: 1120px) {
          #projects .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 720px) {
          #projects .projects-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
            gap: 18px !important;
          }

          #projects .project-card {
            height: auto !important;
          }

          #projects .project-card-thumb {
            height: 200px !important;
          }

          #projects .project-card-body {
            padding: 16px 18px 18px !important;
          }

          #projects .container > div:first-child {
            margin-bottom: 40px !important;
          }
        }

        @media (max-width: 480px) {
          #projects .project-card-thumb {
            height: 172px !important;
          }

          #projects .project-card-body {
            padding: 14px 16px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
