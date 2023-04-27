import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ExperienceCard = ({
  title,
  description,
  date,
  company,
  companyLink,
  techStack,
}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg relative z-10">
      <h3 className="text-lg  font-medium mb-2 text-gray-800 dark:text-[#00e1fe]">
        {title} at{" "}
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          {company}
        </a>
      </h3>
      {showDescription ? (
        <div>
          <p className="text-gray-700 mb-2 dark:text-gray-200">{description}</p>
          <p className="text-gray-700 mb-2  dark:text-[#00e1fe]">{techStack}</p>
        </div>
      ) : (
        <button
          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white font-medium py-2 px-4 rounded flex items-center space-x-2"
          onClick={() => setShowDescription(true)}
        >
          <span>Read job description</span>
          <FaChevronDown className="h-5 w-5" />
        </button>
      )}
      <div className="flex items-center mt-2">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00e1fe] mr-2"></span>
        <span className="text-gray-600 dark:text-white font-light">{date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
