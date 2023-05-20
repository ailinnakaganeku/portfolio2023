import { useEffect, useCallback, useContext } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimationContext } from "../../context/AnimationContext";

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

  const renderAnimation = useCallback(() => {
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
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }, [children, controls, ref]);

  return (
    <>
      {isAnimationDisabled || !inView ? (
        <div ref={ref}>{children}</div>
      ) : (
        renderAnimation()
      )}
    </>
  );
};

export default Animate;
