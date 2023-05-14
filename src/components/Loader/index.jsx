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
        className="w-8 h-8 border-2 border-t-4 rounded-full animate-spin border-t-blue-600 dark:border-t-[#00e1fe] border-b-gray-100 dark:border-b-white"
      />
    </div>
  );
};

export default Loader;
