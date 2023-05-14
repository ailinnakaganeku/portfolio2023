import { education } from "../../data/education";
import Layout from "../Layout";
import Title from "../Title";
import EducationCard from "./EducationCard";

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
