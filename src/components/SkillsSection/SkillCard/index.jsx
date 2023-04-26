const SkillCard = ({ image, name }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-2 rounded-md shadow-md flex flex-col items-center justify-center">
      <img src={image} alt={name} className="h-8 w-8 mb-2" />
      <div className="text-md font-medium dark:text-white">{name}</div>
    </div>
  );
};

export default SkillCard;
