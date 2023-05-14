// Loader.js
import { motion } from "framer-motion";

const Loader = () => {
  const loaderVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      },
    },
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        variants={loaderVariants}
        animate="animate"
        className="w-12 h-12 border-4 border-blue-600 dark:border-[#00e1fe] border-t-4 rounded-full animate-spin"
      />
    </div>
  );
};

export default Loader;
