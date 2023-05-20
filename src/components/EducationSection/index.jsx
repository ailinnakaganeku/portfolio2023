import { education } from "../../data/education";
import EducationCardContainer from "./EducationCardContainer";
import Layout from "../Layout";
import Title from "../Title";

const EducationSection = () => {
  return (
    <Layout>
      <Title title="Education" />
      <div className="mt-4 md:mt-6 sm:mt-6">
        {education?.map(({ id, ...education }) => (
          <EducationCardContainer key={id} education={education} />
        ))}
      </div>
    </Layout>
  );
};

export default EducationSection;
