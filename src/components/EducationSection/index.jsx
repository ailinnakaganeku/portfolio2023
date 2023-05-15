import { education } from "../../data/education";
import Layout from "../Layout";
import Title from "../Title";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  return (
    <Layout>
      <Title title="Education" />
      <div className="mt-4 md:mt-6 sm:mt-6">
        {education?.map((education) => (
          <EducationCard key={education.id} {...education} />
        ))}
      </div>
    </Layout>
  );
};

export default EducationSection;
