import { experiences } from "../../data/experiences";
import ExperienceCardContainer from "./ExperienceCardContainer";
import Layout from "../Layout";
import Title from "../Title";

const ExperienceSection = () => {
  return (
    <Layout>
      <Title title="Experience" />
      <div className="relative">
        <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences?.map((experience) => (
            <ExperienceCardContainer
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceSection;

