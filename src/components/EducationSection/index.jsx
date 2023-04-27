import Title from "../Title";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg"
    >
      <Title title="Education" />{" "}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-4 sm:mt-8 p-4 md:p-6">
        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-[#00e1fe]">
          Full Stack Javascript Developer
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          Soy Henry Bootcamp
        </p>
        <div className="flex items-center">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00e1fe] mr-2"></span>
          <span className="text-gray-600 dark:text-white">
            Aug 2020 - Jan 2021
          </span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
