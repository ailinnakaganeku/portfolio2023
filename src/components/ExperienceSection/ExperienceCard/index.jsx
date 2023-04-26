const ExperienceCard = ({ description, date }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg relative z-10">
      <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-[#00e1fe]">
        Experience 1
      </h3>
      <p className="text-gray-700 mb-2 dark:text-gray-200">{description}</p>
      <div className="flex items-center">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00e1fe] mr-2"></span>
        <span className="text-gray-600 dark:text-white">{date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
