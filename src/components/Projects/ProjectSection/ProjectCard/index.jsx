import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "../../../../hooks/useMobile";
import "./ProjectCard.css";
import { AiOutlinePlus } from "react-icons/ai";

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
            }  absolute bottom-0 left-0 right-0 rounded-b-lg p-2 bg-gradient-to-t from-[#00000070]  via-transparent to-transparent`}
          >
            <button
              className={`text-white dark:text-white font-bold py-2 px-4 rounded text-xl`}
              id="view-project-details"
              aria-label="View Project Details"
              role="button"
              tabIndex="0"
              onClick={() => onItemClick(item)}
              ref={modalButtonRef}
            >
              <span className="flex items-center">
                <span className="mr-2">
                  <AiOutlinePlus className="h-6 w-6" />
                </span>
                <span className="font-semibold">View Project Details</span>
              </span>
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
