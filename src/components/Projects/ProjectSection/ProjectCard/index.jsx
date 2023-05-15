import { motion } from "framer-motion";
import { useMobile } from "../../../../hooks/useMobile";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
        src={item.image}
        alt={item.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative h-64 md:h-80 bg-cover bg-center rounded-lg w-full"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
      >
        {isMobile && (
          <div className="absolute bottom-0 w-full flex justify-between">
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              id={`left ${item.id}`}
              aria-label="Left"
            >
              <FiChevronLeft className="dark:text-[#00e1fe] text-white" />
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              id={`right ${item.id}`}
              aria-label="Right"
            >
              <FiChevronRight className="dark:text-[#00e1fe] text-white" />
            </button>
          </div>
        )}
      </motion.div>
      {!isMobile && (
        <>
          <h2 className="text-xl font-bold pt-4 md:pt-6 text-gray-900 dark:text-[#00e1fe]">
            {item.name}
          </h2>
          <p className="mt-2 md:mb-8 text-gray-900 dark:text-white">
            {item.description}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;
