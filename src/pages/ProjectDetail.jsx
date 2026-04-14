import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getProjectById, projects } from '../data/projects';

const StickyLabel = ({ children }) => (
  <div style={{
    position: 'sticky',
    top: 100,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#444460',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: 16,
  }}>
    {children}
  </div>
);

const SectionDivider = ({ color }) => (
  <div style={{
    height: 1,
    background: `linear-gradient(90deg, ${color || 'rgba(0,212,255,0.2)'}, transparent)`,
    margin: '80px 0',
  }} />
);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', color: '#f0f0f8', marginBottom: 16 }}>
            Project not found
          </div>
          <Link to="/" style={{ color: '#00d4ff', fontFamily: "'Space Grotesk', sans-serif" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          minHeight: '70vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          background: project.thumbnail ? `linear-gradient(to bottom, rgba(11,11,22,0.2) 0%, rgba(11,11,22,0.98) 100%), url(${project.thumbnail}) center/cover no-repeat` : project.coverColor,
        }}
      >
        {/* Parallax grid */}
        <motion.div
          style={{ y: heroY, position: 'absolute', inset: -50 }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${project.accentColor}08 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}08 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </motion.div>

        {/* Large background title */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            y: heroY,
          }}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(4rem, 15vw, 14rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.04)',
            userSelect: 'none',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}>
            {project.title}
          </div>
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, position: 'relative', zIndex: 2, width: '100%' }}
        >
          <div className="container" style={{ padding: '0 24px 64px' }}>
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: 40, paddingTop: 120 }}
            >
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.4)',
                  transition: 'color 0.2s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13 7H1M7 13L1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All Projects
              </Link>
            </motion.div>

            {/* Category + Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}
            >
              {[project.category, project.platform, project.year].map(tag => (
                <span key={tag} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem',
                  color: project.accentColor,
                  padding: '4px 12px',
                  border: `1px solid ${project.accentColor}40`,
                  borderRadius: 4,
                  background: `${project.accentColor}10`,
                  letterSpacing: '0.05em',
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
                color: '#f0f0f8',
                marginBottom: 20,
              }}
            >
              {project.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                maxWidth: 600,
              }}
            >
              {project.tagline}
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          background: 'linear-gradient(to top, var(--color-bg), transparent)',
          zIndex: 1,
        }} />
      </section>

      {/* Content Sections */}
      <div className="container" style={{ paddingTop: 80, paddingBottom: 120 }}>
        {/* Overview + Problem/Goal */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Overview</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: '#c0c0d0',
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              {project.overview}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{
                padding: '24px',
                background: 'rgba(17,17,32,0.7)',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeft: `3px solid ${project.accentColor}`,
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: project.accentColor, marginBottom: 10, letterSpacing: '0.1em' }}>
                  PROBLEM
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa', lineHeight: 1.7 }}>
                  {project.problem}
                </p>
              </div>
              <div style={{
                padding: '24px',
                background: 'rgba(17,17,32,0.7)',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.05)',
                borderLeft: '3px solid #ffd700',
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#ffd700', marginBottom: 10, letterSpacing: '0.1em' }}>
                  GOAL
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa', lineHeight: 1.7 }}>
                  {project.goal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionDivider color={`${project.accentColor}20`} />

        {/* Gameplay Systems */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Systems</StickyLabel>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#f0f0f8',
                letterSpacing: '-0.02em',
                marginBottom: 32,
              }}
            >
              Gameplay Systems Built
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {project.systems.map((system, i) => (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: `${project.accentColor}40`, y: -2 }}
                  style={{
                    padding: '20px 24px',
                    background: 'rgba(13,13,26,0.8)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: project.accentColor,
                      flexShrink: 0,
                    }} />
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#f0f0f8',
                    }}>
                      {system.name}
                    </div>
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    color: '#8888aa',
                    lineHeight: 1.6,
                  }}>
                    {system.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider color="rgba(255,215,0,0.15)" />

        {/* Tech Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Tech Stack</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {project.techStack.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    padding: '16px 20px',
                    background: 'rgba(13,13,26,0.8)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    minWidth: 140,
                  }}
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    color: '#444460',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}>
                    {group.category}
                  </div>
                  {group.items.map(item => (
                    <div key={item} style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#c0c0d0',
                      marginBottom: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}>
                      <span style={{ color: project.accentColor, fontSize: '0.5rem' }}>◆</span>
                      {item}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <SectionDivider color="rgba(180,79,255,0.15)" />

        {/* Challenges & Solutions */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Challenges</StickyLabel>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#f0f0f8',
                letterSpacing: '-0.02em',
                marginBottom: 32,
              }}
            >
              Challenges & Solutions
            </motion.h2>

            {project.challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 0,
                  marginBottom: 16,
                  borderRadius: 12,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div style={{
                  padding: '20px 24px',
                  background: 'rgba(255,71,87,0.05)',
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#ff4757', letterSpacing: '0.1em', marginBottom: 8 }}>
                    CHALLENGE
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#c0c0d0', lineHeight: 1.6 }}>
                    {item.challenge}
                  </p>
                </div>
                <div style={{ padding: '20px 24px', background: 'rgba(0,212,255,0.04)' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#00d4ff', letterSpacing: '0.1em', marginBottom: 8 }}>
                    SOLUTION
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#8888aa', lineHeight: 1.6 }}>
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionDivider color="rgba(0,255,136,0.1)" />

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Features</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {project.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.04, borderColor: `${project.accentColor}50` }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#c0c0d0',
                    padding: '10px 18px',
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(17,17,32,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ color: project.accentColor, fontSize: '0.6rem' }}>◆</span>
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Visual Showcase placeholder */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Gallery</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 12 }}>
              {[{ h: 240, label: 'Gameplay Screenshot' }, { h: 240, label: 'UI Overview' }, { h: 240, label: 'Menu Screen' }].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, borderColor: `${project.accentColor}40` }}
                  style={{
                    height: img.h,
                    background: `linear-gradient(135deg, ${project.coverColor}, rgba(13,13,26,0.8))`,
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(${project.accentColor}06 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}06 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }} />
                  <div style={{ fontSize: '2rem', opacity: 0.3 }}>🎮</div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#444460', letterSpacing: '0.1em' }}>
                    {img.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <SectionDivider color={`${project.accentColor}15`} />

        {/* Outcome & Learnings */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80 }}>
          <StickyLabel>Outcome</StickyLabel>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: '28px 32px',
                background: `${project.accentColor}08`,
                border: `1px solid ${project.accentColor}25`,
                borderRadius: 16,
                marginBottom: 20,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: project.accentColor, letterSpacing: '0.1em', marginBottom: 12 }}>
                RESULTS
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#c0c0d0', lineHeight: 1.8 }}>
                {project.outcome}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                padding: '28px 32px',
                background: 'rgba(255,215,0,0.05)',
                border: '1px solid rgba(255,215,0,0.2)',
                borderRadius: 16,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: '#ffd700', letterSpacing: '0.1em', marginBottom: 12 }}>
                KEY LEARNINGS
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#8888aa', lineHeight: 1.8, fontStyle: 'italic' }}>
                "{project.learnings}"
              </p>
            </motion.div>
          </div>
        </div>

        {/* Next project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 60 }}
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#444460', marginBottom: 20, letterSpacing: '0.1em' }}>
            NEXT PROJECT
          </div>
          <Link to={`/project/${nextProject.id}`} style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ x: 8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '24px 28px',
                background: 'rgba(13,13,26,0.6)',
                border: `1px solid ${nextProject.accentColor}20`,
                borderRadius: 16,
                gap: 16,
                cursor: 'pointer',
              }}
            >
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {nextProject.title}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#8888aa' }}>
                  {nextProject.tagline}
                </div>
              </div>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: `1px solid ${nextProject.accentColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: nextProject.accentColor,
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container > div[style*="gridTemplateColumns: 200px"] {
            display: block !important;
          }
          .container > div[style*="gridTemplateColumns: 200px"] > div:first-child {
            position: static !important;
            margin-bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
