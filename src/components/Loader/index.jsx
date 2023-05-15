import { motion } from "framer-motion";

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

const Loader = () => {

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        variants={loaderVariants}
        animate="animate"
        className="w-8 h-8 border-2 border-t-4 rounded-full animate-spin border-t-blue-600 dark:border-t-[#00e1fe] border-gray-100"
      />
    </div>
  );
};

export default Loader;
