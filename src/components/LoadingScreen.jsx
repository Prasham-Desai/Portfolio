import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: 'UNITY ENGINE', delay: 0.2, status: 'OK' },
  { text: 'LOADING ASSETS', delay: 0.5, status: 'OK' },
  { text: 'INITIALIZING PHYSICS', delay: 0.8, status: 'OK' },
  { text: 'COMPILING SHADERS', delay: 1.1, status: 'OK' },
  { text: 'CONNECTING TO BACKEND', delay: 1.4, status: 'OK' },
  { text: 'PORTFOLIO v1.0.0', delay: 1.7, status: 'READY' },
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 25);

    // Show boot lines sequentially
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, line.delay * 1000);
    });

    // Trigger exit
    const exitTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 700);
    }, 2600);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#08080f',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {/* Grid background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Corner decorators */}
          {['tl', 'tr', 'bl', 'br'].map(pos => (
            <motion.div
              key={pos}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              style={{
                position: 'absolute',
                width: 40,
                height: 40,
                ...(pos.includes('t') ? { top: 32 } : { bottom: 32 }),
                ...(pos.includes('l') ? { left: 32 } : { right: 32 }),
                borderTop: pos.includes('t') ? '1px solid rgba(0,212,255,0.4)' : 'none',
                borderBottom: pos.includes('b') ? '1px solid rgba(0,212,255,0.4)' : 'none',
                borderLeft: pos.includes('l') ? '1px solid rgba(0,212,255,0.4)' : 'none',
                borderRight: pos.includes('r') ? '1px solid rgba(0,212,255,0.4)' : 'none',
              }}
            />
          ))}

          {/* Main content */}
          <div style={{ position: 'relative', width: '100%', maxWidth: 480, padding: '0 24px' }}>
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 40, textAlign: 'center' }}
            >
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '2.4rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#f0f0f8',
                lineHeight: 1,
              }}>
                PRASHAM<span style={{ color: '#00d4ff' }}> DESAI</span>
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#00d4ff',
                marginTop: 8,
                textTransform: 'uppercase',
              }}>
                Unity 3D Programmer
              </div>
            </motion.div>

            {/* Boot lines terminal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              style={{
                background: 'rgba(13,13,26,0.8)',
                border: '1px solid rgba(0,212,255,0.12)',
                borderRadius: 8,
                padding: '16px 20px',
                marginBottom: 24,
                minHeight: 160,
              }}
            >
              {bootLines.map((line, i) => (
                <AnimatePresence key={i}>
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem',
                        marginBottom: 6,
                        color: '#8888aa',
                      }}
                    >
                      <span>
                        <span style={{ color: 'rgba(0,212,255,0.5)', marginRight: 8 }}>›</span>
                        {line.text}
                      </span>
                      <span style={{
                        color: line.status === 'READY' ? '#00ff88' : '#00d4ff',
                        fontWeight: 500,
                      }}>
                        [{line.status}]
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}

              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 14,
                  background: '#00d4ff',
                  marginTop: 6,
                  verticalAlign: 'middle',
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div style={{
              height: 2,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 1,
              overflow: 'hidden',
              marginBottom: 12,
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00d4ff, #00fff2)',
                  borderRadius: 1,
                  width: `${Math.min(progress, 100)}%`,
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.65rem',
              color: 'rgba(136,136,170,0.6)',
            }}>
              <span>BOOTING EXPERIENCE</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
