import React from 'react';
import { motion } from 'framer-motion';

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
        maxWidth: 850, 
        margin: '0 auto', 
        padding: '0 24px',
        position: 'relative'
      }}>
        
        {/* Floating Action Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 32,
            position: 'sticky',
            top: 80,
            zIndex: 10
          }}
        >
          <a 
            href="/Prasham_Desai_Resume.pdf" 
            download="Prasham_Desai_Resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 20px',
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              borderRadius: 8,
              color: '#00d4ff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
        </motion.div>

        {/* Paper-like Resume Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'rgba(20, 22, 35, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: '48px clamp(24px, 5vw, 64px)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          }}
        >
          
          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: 40 }}>
            <h1 style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontWeight: 800, 
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: 8 
            }}>
              Prasham Desai
            </h1>
            <h2 style={{ 
              fontSize: '1.2rem', 
              color: '#00d4ff', 
              fontWeight: 500,
              marginBottom: 20
            }}>
              Game Developer | Unreal Engine | Gameplay Programming
            </h2>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '12px 24px',
              fontSize: '0.9rem',
              color: '#94a3b8'
            }}>
              <span>📍 Ahmedabad, India</span>
              <a href="tel:+919726733369" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91-9726733369</a>
              <a href="mailto:prashamdesai@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>✉️ prashamdesai@gmail.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>🔗 LinkedIn</a>
              <a href="https://github.com/Prasham-Desai" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>💻 GitHub</a>
            </div>
          </header>

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
