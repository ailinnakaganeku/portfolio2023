import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";
import "./ProfileSection.css";

const ProfileSection = ({ user }) => {
  const isMobile = useMobile();

  return (
    <section className="bg-white dark:bg-gray-900 p-4 md:p-8 shadow-lg">
      {!isMobile ? (
        <>
          <div className="flex flex-col md:flex-row items-center  sm:mb-2">
            <div className="w-32 h-32 rounded-full overflow-hidden md:mr-4">
              <img
                src={user.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-2">
              <h2 className=" text-gray-800 dark:text-white text-2xl md:text-3xl font-bold pt-2">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-white">{user.headline}</p>
              <div className="flex items-center mt-2">
                <FiMapPin className="text-gray-600  dark:text-[#00e1fe] mr-1 h-6 w-6 " />
                <p className="text-gray-600  dark:text-white">
                  {user.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 mt-4">
            <HiOutlineMail className="text-gray-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
            <div>
              <a
                href={user.company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600  dark:text-white dark:hover:text-[#00e1fe] transition-colors duration-300"
              >
                {user.company.url}
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaGithub className="text-gray-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
            <div>
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600  dark:text-white dark:hover:text-[#00e1fe] transition-colors duration-300"
              >
                {user.website}
              </a>
            </div>
          </div>
          <div className="mt-8">
            <Title title="About" />
            <p
              className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
              dangerouslySetInnerHTML={{
                __html: user.summary.replace(
                  /(React)/i,
                  "<span class='text-[#00e1fe]'>$1</span>"
                ),
              }}
            ></p>
          </div>
        </>
      ) : (
        <>
          <div
            className="h-40 md:h-60 bg-cover bg-top relative rounded-t-lg"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/desktop-with-computer_23-2148110268.jpg?w=1800&t=st=1683118997~exp=1683119597~hmac=ec3bc482cfb62025dcd1a101edd8db6605471ebd52b91687ed9bf8fe795dc80b')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 dark:bg-gray-900 dark:opacity-60 rounded-t-lg"></div>
          </div>
          <div
            className="flex flex-col items-center justify-center sm:w-full"
            style={{ height: "calc(100vh / 2)" }}
          >
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src={user.image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-2">
              <h2 className="text-gray-800 dark:text-white text-2xl font-bold pt-4">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-white">{user.headline}</p>
              <div className="flex items-center mt-2">
                <FiMapPin className="text-gray-600 dark:text-[#00e1fe] mr-1 h-6 w-6" />
                <p className="text-gray-600 dark:text-white">{user.location}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <div className="mb-10">
              <div className="flex items-center mb-4 sm:w-full">
                <FaGithub className="text-gray-600 dark:text-[#00e1fe] mr-2 h-6 w-6" />
                <div>
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white dark:hover:text-[#00e1fe] transition-colors duration-300"
                  >
                    {isMobile ? user.website.split(".com/")[1] : user.website}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <HiOutlineMail className="text-gray-600 dark:text-[#00e1fe] mr-2 h-6 w-6" />
                <div>
                  <a
                    href={user.company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white dark:hover:text-[#00e1fe] transition-colors duration-300"
                  >
                    {user.company.url}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-8">
              <Title title="About" />
              <p
                className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
                dangerouslySetInnerHTML={{
                  __html: user.summary.replace(
                    /(React)/i,
                    "<span class='text-[#00e1fe]'>$1</span>"
                  ),
                }}
              ></p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProfileSection;
