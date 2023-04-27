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
          Education ...
        </h3>
        <p className="text-gray-700 dark:text-gray-200 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          accumsan nulla id quam congue, eget dictum ex efficitur. Description:
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id
          quam congue, eget dictum ex efficitur.
        </p>
      </div>
    </section>
  );
};

export default EducationSection;
