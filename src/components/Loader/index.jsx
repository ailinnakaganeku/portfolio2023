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
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        variants={loaderVariants}
        animate="animate"
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ccc",
          borderTopColor: "#00bcd4",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Loader;
