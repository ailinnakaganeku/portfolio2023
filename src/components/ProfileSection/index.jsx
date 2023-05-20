import { useContext } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Title from "../Title";
import { useMobile } from "../../hooks/useMobile";
import { user } from "../../data/user";
import "./ProfileSection.css";
import { AnimationContext } from "../../context/AnimationContext";

const ProfileSection = () => {
  const isMobile = useMobile();
  const { toggleAnimation } = useContext(AnimationContext);

  const renderContactSection = () => {
    const {
      company: { href: companyHref, url: companyUrl },
      website,
    } = user;

    return (
      <div className="flex items-center">
        <div className="flex items-center mr-6">
          <HiOutlineMail className="text-blue-600 dark:text-[#00e1fe] mr-2 h-6 w-6" />
          <a
            href={companyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white dark:hover:text-[#00e1fe] hover:text-blue-600 transition-colors duration-300"
          >
            {companyUrl}
          </a>
        </div>
        <div className="flex items-center">
          <FaGithub className="text-blue-600 dark:text-[#00e1fe] mr-2 h-6 w-6" />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white dark:hover:text-[#00e1fe] hover:text-blue-600 transition-colors duration-300"
          >
            {website.split(".com/")[1]}
          </a>
        </div>
      </div>
    );
  };

  const { image, name, headline, location, summary } = user;

  return (
    <section className="container mx-auto md:p-8 bg-white dark:bg-gray-900 shadow-lg dark:shadow-none">
      {!isMobile ? (
        <>
          <div className="flex">
            <div className="-translate-y-1/2">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:ml-2 -translate-y-1/4">
              <div className="flex items-center pt-6">
                <h2 className="text-gray-800 dark:text-white text-2xl md:text-3xl font-bold">
                  {name}
                  <span className="mx-1 text-gray-600 dark:text-white font-thin">
                    |
                  </span>
                </h2>

                <p className="text-gray-600 dark:text-white pt-1">{headline}</p>
              </div>
              <div className="flex items-center mt-2">
                <FiMapPin className="text-blue-600 dark:text-[#00e1fe] mr-1 h-6 w-6" />
                <p className="text-gray-600 dark:text-white">{location}</p>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/4">
            <Title title="About" />
            <p
              className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
              dangerouslySetInnerHTML={{
                __html: summary
                  .replace(
                    /(React)/i,
                    "<span class='text-blue-600 dark:text-[#00e1fe]'>$1</span>"
                  )
                  .replace(/(Frontend Developer)/i, "<em>$1</em>"),
              }}
            ></p>
          </div>
          {renderContactSection()}
        </>
      ) : (
        <>
          <div
            className="relative rounded-t-lg overflow-hidden pb-[50%] bg-cover bg-top "
            style={{ backgroundImage: "url('/banner.webp')" }}
          >
            <div className="absolute inset-0  opacity-50 bg-gray-900 dark:opacity-60"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="-translate-y-1/2">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-gray-800 dark:text-white text-2xl font-bold -translate-y-full">
              {name}
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              <p className="text-gray-600 dark:text-white font-size-headline -translate-y-[1.5rem]">
                {headline}
              </p>
            </motion.div>
            <div className="flex items-center mt-2  -translate-y-full">
              <FiMapPin className="text-blue-600 dark:text-[#00e1fe] mr-1 h-6 w-6" />
              <p className="text-gray-600 dark:text-white font-size-headline ">
                {location}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => toggleAnimation("contact")}
            >
              <button className="font-medium px-4 gap-4 w-40 h-10 dark:bg-opacity-10 bg-opacity-80 bg-gray-100 border dark:border-[#00e1fe] border-blue-600 rounded text-blue-600 flex dark:text-[#00e1fe] items-center justify-center font-size-14">
                Contact
              </button>
            </Link>
            <div className="mx-2"></div>
            <Link
              to="projects"
              smooth={true}
              duration={700}
              onClick={() => toggleAnimation("projects")}
            >
              <button className="font-medium px-4 gap-4 w-40 h-10 dark:bg-opacity-10 bg-opacity-80 bg-gray-100 border border-gray-900 dark:border-white rounded dark:text-white flex items-center justify-center whitespace-nowrap font-size-14">
                Projects
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-8  p-4">
            <div>
              <Title title="About" />
              <p
                className="text-gray-700 dark:text-gray-100 text-lg sm:text-base md:text-lg mt-4"
                dangerouslySetInnerHTML={{
                  __html: summary
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
