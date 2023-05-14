import Layout from "../Layout";
import Title from "../Title";

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Portuguese", level: "Beginner" },
  { name: "German", level: "Beginner" },
];

const Language = ({ name, level }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-700 dark:text-white font-bold">{name}</div>
      <div className="flex items-center">
        <div className="bg-blue-600 dark:bg-[#00e1fe] h-2 w-8 rounded-md mr-2"></div>
        <div className="text-gray-500 dark:text-gray-300">{level}</div>
      </div>
    </div>
  );
};

const LanguageSection = () => {
  return (
    <Layout>
      <Title title="Languages" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-8">
        {languages.map((language, index) => (
          <div
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4"
            key={index}
          >
            <Language {...language} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default LanguageSection;
