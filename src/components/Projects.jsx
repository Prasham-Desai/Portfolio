import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" style={{
      padding: '130px 0',
      background: 'var(--color-bg)',
      position: 'relative',
    }}>
      <div className="container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div className="section-label" style={{ fontSize: '0.8rem', marginBottom: 18 }}>
            Featured Work
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
              color: '#f0f0f8',
              lineHeight: 1.05,
              maxWidth: 500,
            }}>
              Games I've{' '}
              <span style={{
                background: 'linear-gradient(135deg,#00d4ff,#00fff2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Built & Shipped
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.97rem',
                color: '#8888aa',
                maxWidth: 310,
                lineHeight: 1.65,
              }}
            >
              Production games across mobile and web real users, real metrics, real lessons.
            </motion.p>
          </div>
        </motion.div>

        {/* ── GRID — fixed 3-col, equal card heights ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '420px',   /* same as CARD_HEIGHT in ProjectCard */
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #projects .container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #projects .container > div:last-child {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
