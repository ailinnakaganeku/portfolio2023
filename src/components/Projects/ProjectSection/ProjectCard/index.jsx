import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "../../../../hooks/useMobile";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ item, onItemClick }) => {
  const isMobile = useMobile();
  const modalButtonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => onItemClick(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            className={`absolute top-0 inset-x-0 flex justify-center items-end ${
              isHovered ? "" : "invisible"
            } dark:via-[#33333360] dark:to-[#33333390] hover:dark:from-[#33333360] absolute bottom-0 left-0 right-0 rounded-lg p-2 bg-gradient-to-t from-[rgba(255,255,255,0.3)] via-[rgba(255,255,255,0.1)] to-transparent`}
          >
            <button
              className={`text-gray-700  dark:text-white font-bold py-2 px-4 rounded text-xl `}
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
