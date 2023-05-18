import { useRef } from "react";
import { motion } from "framer-motion";
import { useMobile } from "../../../../hooks/useMobile";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ item, onItemClick }) => {
  const isMobile = useMobile();
  const modalButtonRef = useRef(null);

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
          <div className="absolute bottom-0 inset-x-0 flex justify-center">
            <button
              className="text-gray-900 font-bold py-2 px-4 rounded text-xl "
              id="view-project-details"
              aria-label="View Project Details"
              role="button"
              tabIndex="0"
              onClick={() => onItemClick(item)}
              ref={modalButtonRef}
            >
              View Project Details
            </button>
          </div>
        )}
        {isMobile && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-between">
            {item.isFirstCard ? (
              <div className="invisible">
                <FiArrowLeft className="dark:text-[#00e1fe] text-white text-xl font-bold" />
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-tr-md rounded-bl-md"
                id={`left ${item.id}`}
                aria-label="Left"
              >
                <FiArrowLeft className="dark:text-[#00e1fe] text-white text-xl font-bold" />
              </button>
            )}
            {item.isLastCard ? (
              <div className="invisible">
                <FiArrowRight className="dark:text-[#00e1fe] text-white text-xl font-bold" />
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-tl-md rounded-br-md"
                id={`right ${item.id}`}
                aria-label="Right"
              >
                <FiArrowRight className="dark:text-[#00e1fe] text-white text-xl font-bold" />
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
