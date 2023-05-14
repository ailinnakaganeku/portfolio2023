import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectSection } from "../ProjectSection";
import ProjectModal from "../ProjectModal";

const data = [
  {
    id: 1,
    name: "Item",
    image:
      "https://cdn.dribbble.com/users/215379/screenshots/18273351/media/83a6e325e12c65b1ee310239329f6682.png?compress=1&resize=1600x1200&vertical=top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 2,
    name: "Item",
    image:
      "https://cdn.dribbble.com/users/1622978/screenshots/14630836/media/b2d896c1b0c3efea7ab7411b70b959e2.jpg?compress=1&resize=1600x1200&vertical=top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://cdn.dribbble.com/users/2577653/screenshots/16365396/media/167c1eab836b602a8d0488560cd8cbfb.png?compress=1&resize=1600x1200&vertical=top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 4,
    name: "Item",
    image:
      "https://cdn.dribbble.com/users/215379/screenshots/18171230/media/908c2748093c46c303975eb52cd4476d.png?compress=1&resize=1600x1200&vertical=top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 3,
    name: "Item",
    image:
      "https://cdn.dribbble.com/userupload/3227954/file/original-a3abf06a736e024c9a46464fd2a61d41.png?compress=1&resize=1504x1128",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. ",
    github: "https://github.com/ailinnakaganeku",
    website: "ailu.com",
  },
  {
    id: 5,
    name: "Item",
    image:
      "https://cdn.dribbble.com/userupload/3072907/file/original-6d2e0a61795f9d7685034423b45948d5.png?compress=1&resize=1504x1128",
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
