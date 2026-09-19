import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsPage from './pages/ProjectsPage';
import Resume from './pages/Resume';

import './styles/globals.css';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(2px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(0px)' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Handle scroll on route or hash change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait for AnimatePresence mode="wait" (duration: 0.55s) to unmount old page and mount new page
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const nav = document.querySelector('.site-nav');
          const navHeight = nav ? nav.getBoundingClientRect().height : 0;
          const paddingTop = parseFloat(window.getComputedStyle(el).paddingTop) || 0;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight + paddingTop - 50;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 600);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <HashRouter>
      <CustomCursor />
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {/* Key forces complete remount after loading screen, so IntersectionObserver
          triggers cleanly on first visit (fixes whileInView / useInView not firing). */}
      {loaded && <AppContent key="app-loaded" />}
    </HashRouter>
  );
};

export default App;
