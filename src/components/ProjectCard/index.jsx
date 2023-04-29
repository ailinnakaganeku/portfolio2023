import { motion } from "framer-motion";

const ProjectCard = ({ item, onItemClick }) => (
  <motion.div
    className="cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onItemClick(item)}
  >
    <motion.img
      src={item.image}
      className="w-full rounded-lg"
      alt={item.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
    <h2 className="text-lg font-bold mt-4 text-white dark:text-[#00e1fe]">
      {item.name}
    </h2>
    <p className="mt-2 text-white dark:text-gray-300">{item.description}</p>
  </motion.div>
);

export default ProjectCard;
