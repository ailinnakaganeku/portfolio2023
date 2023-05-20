import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectSection from "./ProjectSection";
import ProjectModal from "./ProjectModal";

const Project = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div id="projects">
      <ProjectSection items={projects} onItemClick={handleItemClick} />
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
