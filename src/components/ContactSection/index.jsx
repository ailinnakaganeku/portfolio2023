import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "./Link";
import Title from "../Title";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mx-auto p-4 md:p-8 bg-white dark:bg-gray-900 shadow-md"
    >
      <div className="container mx-auto">
        <Title title="Contact Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-4 sm:mt-8">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <HiOutlineMail className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">Email:</span>
            </div>
            <Link
              hrefLink="mailto:ailinndev@gmail.com"
              link="ailinndev@gmail.com"
            />
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaTelegram className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">Phone:</span>
            </div>
            <Link hrefLink="https://t.me/ailinndev" link="@ailinndev" />
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaLinkedin className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">LinkedIn:</span>
            </div>
            <Link
              hrefLink="https://www.linkedin.com/in/ailinak/"
              link="ailinak"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
