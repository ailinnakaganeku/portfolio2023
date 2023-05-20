import { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animate = ({ children }) => {
  const controls = useAnimation();
  const { inView, ref } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.25, ease: "easeInOut" }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
