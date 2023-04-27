import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";

const ProfileSection = ({ user }) => {
  const isMobile = useMobile();

  return (
    <section className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center mb-4 sm:mb-2">
        <div className="w-24 h-24 rounded-full overflow-hidden md:mr-4">
          <img
            src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:ml-2">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-600 dark:text-white">{user.headline}</p>
          <div className="flex items-center mt-2">
            <FiMapPin className="text-gray-600  dark:text-[#00e1fe] mr-1 h-6 w-6 " />
            <p className="text-gray-600  dark:text-white">{user.location}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-2 mt-4">
        <HiOutlineMail className="text-gray-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
        <div>
          <a
            href={user.company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600  dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            {user.company.url}
          </a>
        </div>
      </div>
      {user.website && (
        <div className="flex items-center mb-4">
          <FaGithub className="text-gray-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
          <div>
            <a
              href={user.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600  dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isMobile ? user.website.split(".com/")[1] : user.website}
            </a>
          </div>
        </div>
      )}
      <div className="mt-8">
        <Title title="About" />
        <p className="text-gray-700  dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4 ">
          {user.summary}
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
