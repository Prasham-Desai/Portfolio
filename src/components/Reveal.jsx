import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* Scroll reveal — triggers early via rootMargin, animates with
   a smooth ease that feels natural, not choppy or laggy. */
const Reveal = ({
  children,
  y = 24,
  x = 0,
  scale = 1,
  blur = 0,
  delay = 0,
  duration = 0.5,
  threshold = 0.05,
  as = 'div',
  style,
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    // Fire when element is 40px from entering the viewport
    rootMargin: '0px 0px -40px 0px',
  });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={{ opacity: 0, y, x, scale }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : undefined
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
