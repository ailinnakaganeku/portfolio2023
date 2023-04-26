import { ProjectCard } from "../ProjectCard";
import Title from "../Title";

export const ProjectSection = ({ items, onItemClick }) => (
  <section
    id="experience"
    className="p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none "
  >
    <Title title="Projects" />
    <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items?.map((item) => (
        <ProjectCard key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  </section>
);
