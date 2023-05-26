import { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useClickOutside } from "../../../hooks/useCloseModal";
import { useMobile } from "../../../hooks/useMobile";

const ProjectModal = ({ item, onClose }) => {
  const isMobile = useMobile();

  const modalRef = useReducer(null);
  useClickOutside(modalRef, onClose);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackgroundClick}
      >
        <motion.div
          className="p-4 overflow-hidden max-w-lg w-full mx-auto rounded-lg bg-white md:p-6"
          layoutId={`item-${item.id}`}
        >
          <button
            className="absolute top-0 right-0 p-4"
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Esc") {
                console.log("esc");
              }
            }}
            tabIndex="0"
            id="close"
            aria-label="Close"
          >
            <div className="dark:bg-white bg-white rounded-full p-1">
              <div className="dark:bg-white bg-white rounded-full p-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6  dark:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </button>
          <motion.img
            src={item.image}
            className="w-full rounded-lg"
            alt={item.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="mt-4">
            <h2 className="text-xl font-bold text-blue-600">{item.name}</h2>
            <p className="mt-2 text-gray-900">{item.description}</p>
          </div>
          <div className="flex flex-col mt-4 mb-3">
            <div className="flex items-center mb-1">
              <FaExternalLinkAlt className="h-4 w-4 md:w-5 md:h-5 text-blue-600 mr-2" />

              <h3 className="font-bold text-gray-900">Website</h3>
            </div>
            <div className="ml-6 md:ml-7">
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300 mr-2"
              >
                {item.website}
              </a>
            </div>
          </div>
          {item.github && (
            <div className="flex items-center mt-1 md:mt-2">
              <FaGithub className="h-4 w-4 md:w-5 md:h-5 text-blue-600 mr-2" />
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              >
                {item.github.split("https://")[1]}
              </a>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
