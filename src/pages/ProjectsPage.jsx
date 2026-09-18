import { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'unreal', label: 'Unreal Engine' },
  { key: 'unity', label: 'Unity' },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : activeFilter === 'unreal'
      ? projects.filter(p => p.engine === 'Unreal Engine')
      : projects.filter(p => p.engine === 'Unity');

  const counts = {
    all: projects.length,
    unreal: projects.filter(p => p.engine === 'Unreal Engine').length,
    unity: projects.filter(p => p.engine === 'Unity').length,
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      paddingTop: 'clamp(100px, 10vw, 128px)',
      paddingBottom: 'var(--section-space)',
    }}>
      <div className="container">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <div className="section-label" style={{ fontSize: '0.8rem', marginBottom: 18 }}>
                Complete Archive
              </div>
              <h1 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                color: '#f1f5f9',
                lineHeight: 1.05,
                margin: 0,
              }}>
                All{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#00d4ff,#00fff2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Projects
                </span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/"
                className="icon-btn-mobile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 20px',
                  borderRadius: 8,
                  background: 'rgba(10,12,20,0.8)',
                  border: '1px solid #00d4ff50',
                  color: '#00d4ff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(16,20,32,0.95)';
                  e.currentTarget.style.borderColor = '#00d4ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5), 0 0 12px #00d4ff20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10,12,20,0.8)';
                  e.currentTarget.style.borderColor = '#00d4ff50';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19L5 12L12 5"/></svg>
                <span className="btn-text">Home</span>
              </Link>
            </motion.div>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.02rem',
            color: '#94a3b8',
            maxWidth: 560,
            lineHeight: 1.7,
          }}>
            Every prototype, production game, and technical showcase — filtered by engine.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="projects-filter-bar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            display: 'flex',
            gap: 8,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}
        >
          {FILTERS.map(filter => {
            const isActive = activeFilter === filter.key;
            return (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 20px',
                  borderRadius: 8,
                  border: isActive
                    ? '1px solid rgba(0,212,255,0.35)'
                    : '1px solid rgba(255,255,255,0.08)',
                  background: isActive
                    ? 'rgba(0,212,255,0.08)'
                    : 'rgba(12,14,24,0.5)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isActive ? '#00d4ff' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                {filter.label}
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: isActive ? '#00d4ff' : '#64748b',
                  letterSpacing: '0.05em',
                }}>
                  ({counts[filter.key]})
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <div className="all-projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '420px',
          gap: 24,
        }}>
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .all-projects-grid .project-card {
          min-width: 0;
        }

        .all-projects-grid .project-card:hover .project-card-accent-bar {
          transform: scaleX(1) !important;
        }

        @media (max-width: 1120px) {
          .all-projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 720px) {
          .all-projects-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
            gap: 18px !important;
          }

          .all-projects-grid .project-card {
            height: auto !important;
          }

          .all-projects-grid .project-card-thumb {
            height: 200px !important;
          }

          .all-projects-grid .project-card-body {
            padding: 16px 18px 18px !important;
          }
        }

        @media (max-width: 480px) {
          .all-projects-grid .project-card-thumb {
            height: 172px !important;
          }

          .all-projects-grid .project-card-body {
            padding: 14px 16px 16px !important;
          }
        }

        @media (max-width: 767px) {
          .icon-btn-mobile .btn-text { display: none; }
          .icon-btn-mobile { 
            padding: 12px 14px !important; 
            border-radius: 12px !important; 
            gap: 0 !important; 
          }
          .icon-btn-mobile svg { margin: 0 !important; }
        }
      `}</style>
    </main>
  );
};

export default ProjectsPage;
