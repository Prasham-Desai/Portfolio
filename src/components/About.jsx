import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2022',
    title: 'CS Degree Begins',
    body: 'Enrolled at LJ Institute of Engineering & Technology, Ahmedabad. Started combining CS fundamentals with game dev experiments.',
    color: '#00d4ff',
    icon: '▸',
  },
  {
    year: '2023',
    title: 'First game',
    body: 'Discovered Unity while studying CS. Built a simple 2D platformer in a weekend and got hooked instantly.',
    color: '#b44fff',
    icon: '▸',
  },
  {
    year: '2024',
    title: 'Shipping Consistently',
    body: 'Shipped games across puzzle, arcade, and multiplayer genres. Integrated Firebase, AdMob, Photon, and custom backend systems.',
    color: '#00ff88',
    icon: '▸',
  },
  {
    year: '2025',
    title: 'Addressables & DOTS',
    body: 'Built UFO.io with Addressables and remote scene loading. Adopted DOTS/ECS architecture and started exploring AR/VR and engine-level optimization.',
    color: '#ff6b6b',
    icon: '▸',
  },
  {
    year: 'Now',
    title: 'Looking Forward',
    body: 'Focused on Unreal Engine Blueprints, Unreal C++, gameplay prototypes, and studio-ready production workflows while continuing to sharpen multiplayer architecture and AR/VR systems.',
    color: '#00d4ff',
    icon: '◈',
  },
];

const About = () => {
  return (
    <section id="about" className="about-section" style={{
      padding: 'var(--section-space) 0',
      background: 'var(--color-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blur */}
      <div style={{
        position: 'absolute',
        left: -200,
        top: '30%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 80 }}
        >
          <div className="section-label">The Story</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#f0f0f8',
            lineHeight: 1.1,
            maxWidth: 500,
          }}>
            About
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #b44fff, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Prasham Desai
            </span>
          </h2>
        </motion.div>

        <div className="about-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          {/* Left: Bio cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                background: 'rgba(17,17,32,0.7)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: 32,
                marginBottom: 20,
                boxShadow: 'inset 2px 0 0 rgba(0,212,255,0.35)',
              }}
            >
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.08rem',
                color: '#c0c0d0',
                lineHeight: 1.85,
                marginBottom: 20,
              }}>
                Game developer with hands-on experience building and deploying mobile games. I specialize in Unity (2D & 3D), gameplay systems, performance optimization, and backend-connected features.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.97rem',
                color: '#c0c0d0',
                lineHeight: 1.7,
                marginBottom: 20,
              }}>
                Currently on a professional development career break (May 2026 – Present) to learn Unreal Engine, with a focus on Blueprints, Unreal C++, and gameplay prototype development.
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.97rem',
                color: '#8888aa',
                lineHeight: 1.85,
              }}>
                My approach: every system should be performant, every interaction should feel intentional, and every game should respect the player's time. Right now I’m building Unreal prototypes, studying engine architecture, and translating everything I learned in Unity into a broader studio workflow.
              </p>
            </motion.div>

            {/* Credential cards */}
            <div className="about-credentials" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { label: 'Education', value: 'BE Computer Science', sub: 'LJIET, Ahmedabad', color: '#00d4ff' },
                { label: 'Specialty', value: 'Mobile Games', sub: 'Android & iOS', color: '#ffd700' },
                { label: 'Engine', value: 'Unity 3D/2D', sub: '2021 – 2023 LTS', color: '#b44fff' },
                { label: 'Approach', value: 'DOTS + OOP', sub: 'Performance-first', color: '#00ff88' },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 + 0.25 }}
                  whileHover={{ borderColor: `${card.color}40`, scale: 1.02 }}
                  style={{
                    padding: '16px 20px',
                    background: 'rgba(13,13,26,0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 12,
                    boxShadow: `inset 2px 0 0 ${card.color}50`,
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    color: card.color,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}>
                    {card.label}
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.97rem',
                    fontWeight: 600,
                    color: '#f0f0f8',
                    marginBottom: 3,
                  }}>
                    {card.value}
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.82rem',
                    color: '#444460',
                  }}>
                    {card.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <div style={{ position: 'relative' }}>
              {timelineItems.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
                  style={{
                    display: 'flex',
                    gap: 24,
                    marginBottom: 32,
                    position: 'relative',
                  }}
                >
                  {/* Segment line to next node */}
                  {i < timelineItems.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      left: 16,
                      top: 16, /* Center of current dot */
                      bottom: -48, /* Crosses 32px gap + arrives exactly at 16px center of next dot */
                      width: 1,
                      background: `linear-gradient(to bottom, ${item.color}80, ${timelineItems[i+1].color}80)`,
                      zIndex: 0,
                    }} />
                  )}

                  {/* Dot */}
                  <div style={{
                    width: 33,
                    height: 33,
                    borderRadius: '50%',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.6rem',
                    color: item.color,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div style={{ paddingTop: 4 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 6,
                    }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem',
                        color: item.color,
                        letterSpacing: '0.05em',
                      }}>
                        {item.year}
                      </span>
                      <div style={{ height: 1, width: 20, background: `${item.color}40` }} />
                    </div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#f0f0f8',
                      marginBottom: 6,
                    }}>
                      {item.title}
                    </div>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.92rem',
                      color: '#8888aa',
                      lineHeight: 1.7,
                    }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          #about .about-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 560px) {
          #about .about-credentials {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          #about .about-layout > div:first-child > div:first-child {
            padding: 24px 20px !important;
          }

          #about .about-layout > div:last-child > div > div {
            gap: 18px !important;
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
