import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";
import { user } from "../../data/user";
import "./ProfileSection.css";

const ProfileSection = () => {
  const isMobile = useMobile();

  return (
    <section className="container mx-auto md:p-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none">
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
              <h2 className=" text-gray-800 dark:text-white text-2xl md:text-3xl font-bold pt-2 pb-1">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-white">{user.headline}</p>
              <div className="flex items-center mt-3">
                <FiMapPin className="text-blue-600  dark:text-[#00e1fe] mr-1 h-6 w-6 " />
                <p className="text-gray-600  dark:text-white">
                  {user.location}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-2 mt-4">
            <HiOutlineMail className="text-blue-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
            <div>
              <a
                href={user.company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600  dark:text-white dark:hover:text-[#00e1fe] hover:text-blue-600 transition-colors duration-300"
              >
                {user.company.url}
              </a>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaGithub className="text-blue-600  dark:text-[#00e1fe] mr-2 h-6 w-6 " />
            <div>
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600  dark:text-white dark:hover:text-[#00e1fe] hover:text-blue-600 transition-colors duration-300"
              >
                {user.website.split(".com/")[1]}
              </a>
            </div>
          </div>
          <div className="mt-8">
            <Title title="About" />
            <p
              className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
              dangerouslySetInnerHTML={{
                __html: user.summary
                  .replace(
                    /(React)/i,
                    "<span class='text-blue-600 dark:text-[#00e1fe]'>$1</span>"
                  )
                  .replace(/(Frontend Developer)/i, "<em>$1</em>"),
              }}
            ></p>
          </div>
        </>
      ) : (
        <>
          <div
            className="relative rounded-t-lg overflow-hidden pb-[50%] bg-cover bg-top "
            style={{ backgroundImage: "url('/banner.webp')" }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="-translate-y-1/2">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-gray-800 dark:text-white text-2xl font-bold -translate-y-full">
              {user.name}
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <p className="text-gray-600 dark:text-white font-size-headline -translate-y-[1.5rem]">
                {user.headline}
              </p>
            </motion.div>
            <div className="flex items-center mt-2  -translate-y-full">
              <FiMapPin className="text-blue-600 dark:text-[#00e1fe] mr-1 h-6 w-6" />
              <p className="text-gray-600 dark:text-white font-size-headline ">
                {user.location}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-4 gap-4 w-40 h-10 dark:bg-opacity-10 bg-opacity-10 bg-gray-100 border dark:border-[#00e1fe] border-blue-600 rounded text-blue-600 flex dark:text-[#00e1fe] items-center justify-center font-size-14">
              Contact
            </button>
            <div className="mx-2"></div>
            <button className="px-4 gap-4 w-40 h-10 dark:bg-opacity-10 bg-opacity-10 bg-gray-100 border border-gray-900 dark:border-white rounded dark:text-white flex items-center justify-center whitespace-nowrap font-size-14">
              My Projects
            </button>
          </div>
          <div className="flex justify-center items-center mt-8  p-4">
            <div>
              <Title title="About" />
              <p
                className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
                dangerouslySetInnerHTML={{
                  __html: user.summary
                    .replace(
                      /(React)/i,
                      "<span class='text-blue-600 dark:text-[#00e1fe]'>$1</span>"
                    )
                    .replace(/(Frontend Developer)/i, "<em>$1</em>"),
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
