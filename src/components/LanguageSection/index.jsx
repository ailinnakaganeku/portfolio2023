import { languages } from "../../data/languages";
import Layout from "../Layout";
import Title from "../Title";
import LanguageCard from "./LanguageCard";

const LanguageSection = () => {
  return (
    <Layout>
      <Title title="Languages" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">
        {languages?.map((language) => (
          <div
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4"
            key={language.name}
          >
            <LanguageCard {...language} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default LanguageSection;
