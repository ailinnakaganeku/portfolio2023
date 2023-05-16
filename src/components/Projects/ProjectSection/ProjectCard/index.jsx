import { motion } from "framer-motion";
import { useMobile } from "../../../../hooks/useMobile";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ item, onItemClick }) => {
  const isMobile = useMobile();
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onItemClick(item)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative h-64 md:h-80 bg-cover bg-center rounded-lg w-full"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        {!isMobile && (
          <div
            className={`absolute inset-0 bg-[#FBFAF5] dark:bg-black opacity-0 hover:opacity-60 transition-opacity duration-300 rounded-lg`}
          >
            <div className="flex items-center justify-center h-full">
              <button
                className={`text-gray-900 dark:text-white font-bold text-xl`}
                id="Read More"
                aria-label="Read More"
              >
                Read More
              </button>
            </div>
          </div>
        )}
        {isMobile && (
          <div className="absolute bottom-0 w-full flex justify-between">
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-tr-md rounded-bl-md"
              id={`left ${item.id}`}
              aria-label="Left"
            >
              <FiArrowLeft className="dark:text-[#00e1fe] text-white text-xl font-bold" />
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-tl-md rounded-br-md"
              id={`right ${item.id}`}
              aria-label="Right"
            >
              <FiArrowRight className="dark:text-[#00e1fe] text-white text-xl font-bold" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
