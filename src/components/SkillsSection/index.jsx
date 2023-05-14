import Layout from "../Layout";
import Title from "../Title";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "Javascript",
    image: "/js.png",
  },

  {
    name: "React",
    image: "/react.png",
  },
  {
    name: "Typescript",
    image: "/ts.png",
  },
  {
    name: "React Native",
    image: "/react.png",
  },
  {
    name: "Node",
    image: "/node.png",
  },
  {
    name: "Next",
    image: "/next.svg",
  },
  {
    name: "Tailwind",
    image: "/tailwindcss.png",
  },
  {
    name: "Swift",
    image: "/swift.png",
  },
];

const SkillsSection = () => {
  return (
    <Layout>
      <Title title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 sm:mt-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </Layout>
  );
};

export default SkillsSection;
