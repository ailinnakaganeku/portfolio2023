import Layout from "../Layout";
import Title from "../Title";
import EducationCard from "./EducationCard";

const education = [
  {
    id: 1,
    title: "Swift Developer",
    academy: "Alura Brasil",
    date: "Feb 2023 - Present",
  },
  {
    id: 1,
    title: "Full Stack Javascript Developer",
    academy: "Soy Henry Bootcamp",
    date: "Aug 2020 - Jan 2021",
  },
];

const EducationSection = () => {
  return (
    <Layout>
      <Title title="Education" />
      {education?.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </Layout>
  );
};

export default EducationSection;
