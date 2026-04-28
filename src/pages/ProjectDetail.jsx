import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getProjectById, projects } from '../data/projects';
import { getProjectAssets } from '../data/projectAssets';

let screenshotContext = null;
try {
  screenshotContext = require.context('../assets/screenshots', true, /\.(png|jpe?g|webp)$/i);
} catch {
  screenshotContext = null;
}

let projectIconContext = null;
try {
  projectIconContext = require.context('../assets/project-icons', true, /\.(png|jpe?g|webp|svg)$/i);
} catch {
  projectIconContext = null;
}

let caseStudyBannerContext = null;
try {
  caseStudyBannerContext = require.context('../assets/case-study-banners', false, /\.(png|jpe?g|webp)$/i);
} catch {
  caseStudyBannerContext = null;
}

const getProjectScreenshots = (project) => {
  if (!screenshotContext || !project) return [];

  const assets = getProjectAssets(project.id);
  if (!assets?.screenshotsFolder) return [];

  const folderPrefix = `./${assets.screenshotsFolder}/`;

  return screenshotContext
    .keys()
    .filter((key) => key.startsWith(folderPrefix))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((key) => screenshotContext(key));
};

const getProjectIcon = (project) => {
  if (!projectIconContext || !project) return null;

  const assets = getProjectAssets(project.id);
  if (!assets?.icon) return null;

  const targetKey = `./${assets.icon}`;
  if (!projectIconContext.keys().includes(targetKey)) return null;

  return projectIconContext(targetKey);
};

const getCaseStudyBanner = (project) => {
  if (!caseStudyBannerContext || !project) return null;

  const assets = getProjectAssets(project.id);
  if (!assets?.caseStudyBanner) return null;

  const targetKey = `./${assets.caseStudyBanner}`;
  if (!caseStudyBannerContext.keys().includes(targetKey)) return null;

  return caseStudyBannerContext(targetKey);
};

const StickyLabel = ({ children, color }) => (
  <div style={{
    position: 'sticky',
    top: 100,
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.88rem',
    color: color || '#6a6a92',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    marginBottom: 16,
    fontWeight: 500,
    textShadow: color ? `0 0 16px ${color}22` : 'none',
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

const defaultAssociation = {
  type: 'company',
  name: 'Indianic Infotech Ltd',
  description: 'This project was built as part of my work at Indianic Infotech Ltd, contributing to the studio\'s mobile game portfolio.',
  badge: 'Studio Project',
  color: '#00d4ff',
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const [imageOrientation, setImageOrientation] = useState({});

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectScreenshots = useMemo(() => getProjectScreenshots(project), [project]);
  const projectIcon = useMemo(() => getProjectIcon(project), [project]);
  const caseStudyBanner = useMemo(() => getCaseStudyBanner(project), [project]);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const amount = Math.max(260, Math.floor(carouselRef.current.clientWidth * 0.8));
    carouselRef.current.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (!carouselRef.current) return;
      const rect = carouselRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!visible) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollCarousel('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollCarousel('prev');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
  const associatedWith = project.associatedWith || defaultAssociation;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        style={{
          minHeight: '70vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          background: caseStudyBanner ? `linear-gradient(to bottom, rgba(11,11,22,0.2) 0%, rgba(11,11,22,0.98) 100%), url(${caseStudyBanner}) center/cover no-repeat` : project.coverColor,
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

        {/* Large background title fallback (only when no hero image) */}
        {!caseStudyBanner && (
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
        )}

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
                  fontSize: '0.92rem',
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
                  fontSize: '0.75rem',
                  color: project.accentColor,
                  padding: '6px 14px',
                  border: `1px solid ${project.accentColor}40`,
                  borderRadius: 4,
                  background: `${project.accentColor}10`,
                  letterSpacing: '0.05em',
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title + icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
              marginBottom: 20,
            }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.045em',
                  lineHeight: 0.96,
                  background: `linear-gradient(135deg, ${project.accentColor} 0%, #f0f0f8 55%, ${project.accentColor}cc 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 0,
                  filter: `drop-shadow(0 4px 24px ${project.accentColor}33)`,
                }}
              >
                {project.title}
              </motion.h1>

              {projectIcon && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.48, duration: 0.5 }}
                  style={{
                    width: 'clamp(198px, 21vw, 264px)',
                    height: 'clamp(198px, 21vw, 264px)',
                    borderRadius: 'clamp(34px, 3.8vw, 52px)',
                    border: `1px solid ${project.accentColor}55`,
                    background: `linear-gradient(135deg, ${project.accentColor}18, rgba(13,13,26,0.9))`,
                    boxShadow: `0 16px 36px rgba(0,0,0,0.35), 0 0 0 1px ${project.accentColor}1f`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0,
                    marginRight: 'clamp(24px, 4.2vw, 88px)',
                  }}
                >
                  <img
                    src={projectIcon}
                    alt={`${project.title} icon`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              )}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.35rem, 3.1vw, 2rem)',
                color: 'rgba(255,255,255,0.62)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                maxWidth: 720,
                marginTop: 18,
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
        <div id="overview" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Overview</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.15rem, 1.5vw, 1.32rem)',
              color: '#d4d4e2',
              lineHeight: 1.78,
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
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: project.accentColor, marginBottom: 12, letterSpacing: '0.14em', fontWeight: 600 }}>
                  PROBLEM
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.08rem', color: '#b0b0c8', lineHeight: 1.72 }}>
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
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: '#ffd700', marginBottom: 12, letterSpacing: '0.14em', fontWeight: 600 }}>
                  GOAL
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.08rem', color: '#b0b0c8', lineHeight: 1.72 }}>
                  {project.goal}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionDivider color={`${project.accentColor}20`} />

        {/* Gameplay Systems */}
        <div id="systems" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Systems</StickyLabel>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.9rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: '#f0f0f8',
                letterSpacing: '-0.025em',
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
                      fontSize: '1.04rem',
                      fontWeight: 600,
                      color: '#f0f0f8',
                    }}>
                      {system.name}
                    </div>
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.94rem',
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
        <div id="tech-stack" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Tech Stack</StickyLabel>
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
                    fontSize: '0.68rem',
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
                      fontSize: '0.96rem',
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
        <div id="challenges" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Challenges</StickyLabel>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.9rem, 3vw, 2.4rem)',
                fontWeight: 700,
                color: '#f0f0f8',
                letterSpacing: '-0.025em',
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
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: '#ff4757', letterSpacing: '0.14em', marginBottom: 10, fontWeight: 600 }}>
                    CHALLENGE
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.08rem', color: '#d4d4e2', lineHeight: 1.7 }}>
                    {item.challenge}
                  </p>
                </div>
                <div style={{ padding: '20px 24px', background: 'rgba(0,212,255,0.04)' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: '#00d4ff', letterSpacing: '0.14em', marginBottom: 10, fontWeight: 600 }}>
                    SOLUTION
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.08rem', color: '#b0b0c8', lineHeight: 1.7 }}>
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionDivider color="rgba(0,255,136,0.1)" />

        {/* Features */}
        <div id="features" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Features</StickyLabel>
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
                    fontSize: '0.95rem',
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

        {/* Visual Showcase */}
        <div id="gallery" style={{ display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Gallery</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ minWidth: 0 }}
          >
            {projectScreenshots.length > 0 ? (
              <>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 14,
                  }}>
                    <motion.button
                      onClick={() => scrollCarousel('prev')}
                      whileHover={{ scale: 1.08, background: `${project.accentColor}22`, boxShadow: `0 0 20px ${project.accentColor}33` }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      aria-label="Previous screenshot"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        border: `1px solid ${project.accentColor}4a`,
                        color: project.accentColor,
                        background: `${project.accentColor}12`,
                        fontSize: '1rem',
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {'<'}
                    </motion.button>

                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.76rem',
                      color: '#7d7d9f',
                      letterSpacing: '0.08em',
                      textAlign: 'center',
                    }}>
                      IN-GAME SCREENSHOTS ({projectScreenshots.length})
                    </div>

                    <motion.button
                      onClick={() => scrollCarousel('next')}
                      whileHover={{ scale: 1.08, background: `${project.accentColor}22`, boxShadow: `0 0 20px ${project.accentColor}33` }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                      aria-label="Next screenshot"
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 11,
                        border: `1px solid ${project.accentColor}4a`,
                        color: project.accentColor,
                        background: `${project.accentColor}12`,
                        fontSize: '1rem',
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {'>'}
                    </motion.button>
                  </div>

                  <div style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                    <div
                      ref={carouselRef}
                      tabIndex={0}
                      style={{
                        display: 'flex',
                        gap: 14,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        paddingBottom: 8,
                        scrollSnapType: 'x mandatory',
                        width: '100%',
                        maxWidth: '100%',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)',
                        maskImage: 'linear-gradient(to right, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)',
                        outline: 'none',
                      }}
                    >
                      {projectScreenshots.map((src, i) => {
                        const orientation = imageOrientation[src] || 'landscape';
                        // Landscape: 16:9 (605×340) so 1920×1080/736×414 sources fit without cropping.
                        // Portrait: 9:16-ish (220×340) for phone screenshots.
                        const cardWidth = orientation === 'portrait' ? 220 : 605;

                        return (
                          <motion.div
                            key={`${project.id}-${i}`}
                            whileHover={{ y: -3, borderColor: `${project.accentColor}55` }}
                            style={{
                              width: cardWidth,
                              height: 340,
                              flex: '0 0 auto',
                              borderRadius: 14,
                              border: '1px solid rgba(255,255,255,0.08)',
                              background: 'rgba(10,10,20,0.9)',
                              overflow: 'hidden',
                              scrollSnapAlign: 'start',
                            }}
                          >
                            <img
                              src={src}
                              alt={`${project.title} screenshot ${i + 1}`}
                              onLoad={(e) => {
                                const isPortrait = e.currentTarget.naturalHeight > e.currentTarget.naturalWidth;
                                setImageOrientation((prev) => ({
                                  ...prev,
                                  [src]: isPortrait ? 'portrait' : 'landscape',
                                }));
                              }}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: orientation === 'landscape' ? 'contain' : 'cover',
                                background: '#0a0a14',
                              }}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div style={{
                padding: '18px 20px',
                borderRadius: 12,
                border: '1px dashed rgba(255,255,255,0.14)',
                background: 'rgba(13,13,26,0.5)',
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.74rem',
                  color: '#8c8cb0',
                  lineHeight: 1.7,
                }}>
                  Add screenshots under src/assets/screenshots/{project.id}/ and they will appear here automatically.
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <SectionDivider color={`${project.accentColor}15`} />

        {/* Outcome & Learnings */}
        <div id="outcome" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={project.accentColor}>Outcome</StickyLabel>
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
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: project.accentColor, letterSpacing: '0.14em', marginBottom: 14, fontWeight: 600 }}>
                RESULTS
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#d4d4e2', lineHeight: 1.78 }}>
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
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: '#ffd700', letterSpacing: '0.14em', marginBottom: 14, fontWeight: 600 }}>
                KEY LEARNINGS
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', color: '#b0b0c8', lineHeight: 1.78, fontStyle: 'italic' }}>
                "{project.learnings}"
              </p>
            </motion.div>
          </div>
        </div>

        <SectionDivider color={`${associatedWith.color || project.accentColor}18`} />

        <div id="associated-with" style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 80, scrollMarginTop: 112 }}>
          <StickyLabel color={associatedWith.color || project.accentColor}>Associated With</StickyLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              padding: '28px 32px',
              background: 'rgba(13,13,26,0.72)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 16,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 20,
                marginBottom: 18,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: associatedWith.color || project.accentColor, letterSpacing: '0.14em', marginBottom: 10, fontWeight: 600 }}>
                  {associatedWith.type === 'self' ? 'INDEPENDENT WORK' : 'COMPANY'}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', letterSpacing: '-0.02em' }}>
                  {associatedWith.name}
                </div>
              </div>

              <div
                style={{
                  padding: '8px 14px',
                  borderRadius: 999,
                  border: `1px solid ${(associatedWith.color || project.accentColor)}30`,
                  background: `${associatedWith.color || project.accentColor}10`,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: '#d8d8e8',
                  letterSpacing: '0.06em',
                }}
              >
                {associatedWith.badge}
              </div>
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.02rem', color: '#b0b0c8', lineHeight: 1.82 }}>
              {associatedWith.description}
            </p>
          </motion.div>
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
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.56rem', fontWeight: 700, color: '#f0f0f8', letterSpacing: '-0.02em', marginBottom: 4 }}>
                  {nextProject.title}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: '#8888aa' }}>
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
