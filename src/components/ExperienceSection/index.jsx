import { experiences } from "../../data/experiences";
import Layout from "../Layout";
import Title from "../Title";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <Title title="Experience" />
        <div className="relative">
          {/* Experience items */}
          <div className="mt-4 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences?.map((experience) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceSection;
