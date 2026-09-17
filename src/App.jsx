import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 24, filter: 'blur(2px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -12, filter: 'blur(0px)' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
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
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <CustomCursor />
      <LoadingScreen onComplete={() => setLoaded(true)} />
      {/* Key forces complete remount after loading screen, so IntersectionObserver
          triggers cleanly on first visit (fixes whileInView / useInView not firing). */}
      {loaded && <AppContent key="app-loaded" />}
    </BrowserRouter>
  );
};

export default App;
