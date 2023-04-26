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
              />
            ))}
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-4 sm:mt-8 ">
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-[#00e1fe]">
              Experience 4
            </h3>
            <p className="text-gray-700 mb-2 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              accumsan nulla id quam congue, eget dictum ex efficitur.
              description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce accumsan nulla id quam congue, eget dictum ex
              efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Fusce accumsan nulla id quam congue, eget dictum ex
              efficitur.
            </p>
            <div className="flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00e1fe] mr-2"></span>
              <span className="text-gray-600 dark:text-white">January</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
