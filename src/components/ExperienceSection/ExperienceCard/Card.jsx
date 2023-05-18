import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Card = (experience) => {
  const { title, description, date, company, companyLink, techStack } =
    experience;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="p-4 md:p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg relative z-10">
      <h3 className="text-lg font-medium mb-4">
        <span className="text-blue-600 dark:text-[#00e1fe]">{title}</span>{" "}
        <span className="text-black dark:text-white">at</span>{" "}
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative dark:text-white"
        >
          <span className="pb-1">{company}</span>
          <span className="absolute bg-gray-800 dark:bg-white dark:text-white left-0 right-0 h-[3px] bottom-[-1px]"></span>
        </a>
      </h3>
      <div className="flex items-center mb-4">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00e1fe] mr-2"></span>
        <span className="text-gray-600 dark:text-white font-light">{date}</span>
      </div>
      {showDescription ? (
        <>
          <div>
            <p className="text-gray-700 mb-2 dark:text-gray-200">
              {description}
            </p>
            <p className="text-blue-600 dark:text-[#00e1fe] mb-4">
              {techStack}
            </p>
          </div>
          <button
            className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white font-medium py-2 px-4 rounded flex items-center space-x-2"
            onClick={() =>
              setShowDescription((showDescription) => !showDescription)
            }
            id={`job ${experience.title} ${experience.company}`}
            aria-label="Job Description"
          >
            <span>Hide Job Description</span>
            <FaChevronUp className="h-5 w-5" />
          </button>
        </>
      ) : (
        <button
          className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white font-medium py-2 px-4 rounded flex items-center space-x-2"
          onClick={() =>
            setShowDescription((showDescription) => !showDescription)
          }
          id={`job ${experience.title} ${experience.company}`}
          aria-label="Job Description"
        >
          <span>Read Job Description</span>
          <FaChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Card;
