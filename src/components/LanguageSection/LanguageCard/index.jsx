const LanguageCard = (language) => {
  const { name, level } = language;
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

export default LanguageCard;
