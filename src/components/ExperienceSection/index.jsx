import Title from "../Title";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experiences }) => {
  return (
    <section
      id="experience"
      className="p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg"
    >
      <div className="container mx-auto">
        <Title title="Experience" />
        <div className="relative">
          {/* Experience items */}
          <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences?.map((experience) => (
              <ExperienceCard
                key={experience.id}
                title={experience.title}
                description={experience.description}
                date={experience.date}
                company={experience.company}
                companyLink={experience.companyLink}
                techStack={experience.techStack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
