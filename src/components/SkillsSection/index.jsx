import { skills } from "../../data/skills";
import Layout from "../Layout";
import Title from "../Title";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <Layout>
      <Title title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 sm:mt-6">
        {skills?.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </Layout>
  );
};

export default SkillsSection;
