import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* Premium scroll reveal — fades, lifts, gently un-blurs as it crosses
   into view. Uses react-intersection-observer for reliable triggering
   on long pages. Pass `delay` to stagger siblings. */
const Reveal = ({
  children,
  y = 48,
  x = 0,
  scale = 0.98,
  blur = 8,
  delay = 0,
  duration = 0.9,
  threshold = 0.15,
  as = 'div',
  style,
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin: '0px 0px -8% 0px',
  });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, x, scale, filter: `blur(${blur}px)` }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, y, x, scale, filter: `blur(${blur}px)` }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
