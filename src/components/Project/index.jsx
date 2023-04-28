import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectSection } from "../ProjectSection";
import ProjectModal from "../ProjectModal";

const data = [
  {
    id: 1,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 2,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
];

const Project = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div id="portfolio">
      <ProjectSection items={data} onItemClick={handleItemClick} />
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
