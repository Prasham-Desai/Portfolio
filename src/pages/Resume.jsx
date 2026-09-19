import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className="resume-page" style={{ 
      minHeight: '100vh', 
      paddingTop: 120, 
      paddingBottom: 80,
      background: 'radial-gradient(ellipse at top, #111424, #060610 80%)',
      color: '#e2e8f0',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div className="container" style={{ 
        maxWidth: 1100, 
        margin: '0 auto', 
        padding: '0 24px',
        position: 'relative'
      }}>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <div className="section-label" style={{ fontSize: '0.8rem', marginBottom: 18 }}>
                Professional Profile
              </div>
              <h1 style={{ 
                fontFamily: "'Space Grotesk', sans-serif", 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
                fontWeight: 800, 
                color: '#fff',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0
              }}>
                Prasham{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#c084fc,#ff007f)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Desai
                </span>
              </h1>
            </div>

            <motion.div
              className="resume-back-btn-wrapper"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
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
                  border: '1px solid #c084fc50',
                  color: '#c084fc',
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
                  e.currentTarget.style.borderColor = '#c084fc';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5), 0 0 12px #c084fc20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10,12,20,0.8)';
                  e.currentTarget.style.borderColor = '#c084fc50';
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
            margin: '0 0 24px 0',
          }}>
            Game Developer | Unreal Engine | Gameplay Programming
          </p>

          <div className="resume-contact-info" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'flex-start', 
            gap: '12px 24px',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            <span>📍 Ahmedabad, India</span>

            <a href="mailto:prashamdesai@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>✉️ prashamdesai@gmail.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>🔗 LinkedIn</a>
            <a href="https://github.com/Prasham-Desai" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>💻 GitHub</a>
          </div>

          <div className="resume-download-btn-wrapper" style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-start' }}>
            <a 
              href="/Prasham_Desai_Resume.pdf" 
              download="Prasham_Desai_Resume.pdf"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 24px',
                background: 'rgba(192, 132, 252, 0.1)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                borderRadius: 999,
                color: '#c084fc',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(192, 132, 252, 0.2)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(192, 132, 252, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(192, 132, 252, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* Paper-like Resume Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: 'rgba(20, 22, 35, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: '48px clamp(24px, 5vw, 64px)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
            position: 'relative',
          }}
        >

          <Section title="SUMMARY">
            <p style={{ lineHeight: 1.6, color: '#cbd5e1' }}>
              Game Developer with professional experience building and deploying mobile games across Android and iOS using Unity and C#. Currently focused on Unreal Engine 5 through independent development, building gameplay systems, vehicle mechanics, AI, UMG interfaces, animation systems, input handling, and interactive environments using Blueprints. Strong foundation in gameplay programming, multiplayer networking, performance optimization, and scalable game architecture, with hands-on experience independently learning and applying Unreal Engine systems.
            </p>
          </Section>

          <Section title="TECHNICAL SKILLS">
            <SkillItem 
              category="Unreal Engine" 
              skills="Unreal Engine 5.6, Blueprint Visual Scripting, UMG, Enhanced Input, Blueprint Interfaces, Animation Blueprints, Behavior Trees, Blackboards, NavMesh, Chaos Vehicles, Paper2D" 
            />
            <SkillItem 
              category="Gameplay Systems" 
              skills="Character Movement, Vehicle Systems, AI & Navigation, Combat Systems, Interaction Systems, UI/UX, Camera Systems, Level Design, Game State Management" 
            />
            <SkillItem 
              category="Unity & Game Development" 
              skills="Unity 2D/3D, C#, Gameplay Systems, Multiplayer Networking, Unity DOTS, Performance Optimization, Mobile Deployment, Firebase, Photon" 
            />
            <SkillItem 
              category="Networking & Backend" 
              skills="Photon Multiplayer, Firebase, REST API Integration, MERN Stack" 
            />
            <SkillItem 
              category="Deployment & Tools" 
              skills="Android, iOS, Google Play Store, Xcode, Git, GitHub, GitLab, Visual Studio, VS Code" 
            />
          </Section>

          <Section title="WORK EXPERIENCE">
            <ExperienceItem 
              title="Unity 3D Programmer"
              company="IndiaNIC Infotech LTD."
              date="May 2025 – April 2026"
              location="Ahmedabad, India"
            >
              <ul>
                <li>Developed and deployed multiple production mobile games across Android and iOS using Unity and C#, contributing across gameplay, online systems, UI/UX, optimization, monetization, and release pipelines.</li>
                <li>Engineered end-to-end online multiplayer systems spanning matchmaking, room creation and lifecycle management, player sessions, friends, leaderboards, and real-time gameplay synchronization using Photon and backend services.</li>
                <li>Implemented client–backend communication and persistent online features using Firebase, supporting player data, analytics, cloud-backed systems, and game-service integrations.</li>
                <li>Designed multiplayer gameplay flows covering player connection states, joining/leaving rooms, matchmaking transitions, synchronized game state, and session handling across online matches.</li>
                <li>Optimized large-scale gameplay scenarios using Unity DOTS while improving UI/UX and maintaining responsive performance across mobile devices.</li>
              </ul>
            </ExperienceItem>
          </Section>

          <Section title="SELECTED UNREAL ENGINE PROJECTS">
            <ExperienceItem 
              title="Jetpack Journey"
              company="UE 5.6, Blueprints, Chaos Vehicles, Enhanced Input"
              date=""
              location=""
            >
              <ul>
                <li>Built a 3D platformer with ground movement, fuel-based jetpack traversal, dynamic platforms, pressure-plate interactions, and level progression.</li>
                <li>Built and integrated a 4-wheel AWD automatic vehicle from scratch using Chaos Vehicles, configuring drivetrain, suspension, torque, braking, steering, and vehicle physics.</li>
                <li>Implemented seamless on-foot/vehicle transitions using possession switching, input mapping contexts, Blueprint Interfaces, camera blending, skeletal vehicle animation, and custom physics assets.</li>
              </ul>
            </ExperienceItem>
            
            <ExperienceItem 
              title="ShooterGameUI"
              company="UE 5.6, UMG, Blueprints, Enhanced Input"
              date=""
              location=""
            >
              <ul>
                <li>Built a production-style main menu and settings system with reusable UMG widgets, animated transitions, hover/click feedback, audio interaction, and touch support.</li>
                <li>Implemented runtime graphics presets, gamma and difficulty controls, Blueprint Interface communication, and a 3D sci-fi environment with Lumen lighting and character animation.</li>
              </ul>
            </ExperienceItem>

            <ExperienceItem 
              title="Red Hood"
              company="UE 5.6, Blueprints, Paper2D, AI"
              date=""
              location=""
            >
              <ul>
                <li>Developed a 2D action platformer using Paper2D with modular dungeon layouts, flipbook animation, combat, health, pickups, and interactive level elements.</li>
                <li>Implemented enemy AI using AI Controllers, Behavior Trees, Blackboards, NavMesh pathfinding, and patrol, chase, and attack states.</li>
              </ul>
            </ExperienceItem>
          </Section>

          <Section title="EDUCATION">
            <ExperienceItem 
              title="Bachelor of Engineering – Computer Science"
              company="LJ Institute of Engineering and Technology"
              date="November 2022 – August 2026"
              location="Ahmedabad"
            />
          </Section>
        </motion.div>
      </div>

      <style>{`
        .resume-page ul {
          padding-left: 20px;
          margin: 12px 0;
          color: '#cbd5e1';
        }
        .resume-page li {
          margin-bottom: 8px;
          line-height: 1.6;
          color: #cbd5e1;
        }
        .resume-page li::marker {
          color: #00d4ff;
        }
        @media (max-width: 767px) {
          .resume-header {
            text-align: left !important;
          }
          .resume-contact-info {
            justify-content: flex-start !important;
          }
          .resume-download-btn-wrapper {
            justify-content: flex-start !important;
          }
          .icon-btn-mobile .btn-text { display: none; }
          .icon-btn-mobile { 
            padding: 12px 14px !important; 
            border-radius: 12px !important; 
            gap: 0 !important; 
          }
          .icon-btn-mobile svg { margin: 0 !important; }
        }
      `}</style>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section style={{ marginBottom: 40 }}>
    <h3 style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#fff',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: 8,
      marginBottom: 20,
      letterSpacing: '0.05em'
    }}>
      {title}
    </h3>
    {children}
  </section>
);

const SkillItem = ({ category, skills }) => (
  <div style={{ marginBottom: 12, lineHeight: 1.5 }}>
    <strong style={{ color: '#fff' }}>{category}:</strong> <span style={{ color: '#cbd5e1' }}>{skills}</span>
  </div>
);

const ExperienceItem = ({ title, company, date, location, children }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
      <h4 style={{ 
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '1.1rem', 
        fontWeight: 700, 
        color: '#fff',
        margin: 0
      }}>
        {title}
      </h4>
      {date && <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>{date}</span>}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
      <div style={{ fontWeight: 600, color: '#00d4ff' }}>{company}</div>
      {location && <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{location}</span>}
    </div>
    {children}
  </div>
);

export default Resume;
