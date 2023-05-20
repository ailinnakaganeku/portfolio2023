import { useEffect, useContext } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimationContext } from "../../context/AnimationContext";

const animationVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
};

const Animate = ({ children }) => {
  const controls = useAnimation();
  const { inView, ref } = useInView({
    triggerOnce: true,
  });
  const { isAnimationDisabled } = useContext(AnimationContext);

  useEffect(() => {
    if (inView && !isAnimationDisabled) {
      controls.start("visible");
    }
  }, [controls, inView, isAnimationDisabled]);

  if (isAnimationDisabled) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? controls : "hidden"}
        variants={animationVariants}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Animate;
