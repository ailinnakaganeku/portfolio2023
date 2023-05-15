import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "./Link";
import Title from "../Title";
import Layout from "../Layout";

const ContactSection = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <Title title="Contact" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-4 sm:mt-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
              <HiOutlineMail className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">
                Email:
              </span>
            </div>
            <Link
              hrefLink="mailto:ailinndev@gmail.com"
              link="ailinndev@gmail.com"
            />
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
              <FaTelegram className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">
                Phone:
              </span>
            </div>
            <Link hrefLink="https://t.me/ailinndev" link="@ailinndev" />
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
              <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
              <span className="text-gray-700 dark:text-white font-medium">
                LinkedIn:
              </span>
            </div>
            <Link
              hrefLink="https://www.linkedin.com/in/ailinak/"
              link="ailinak"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactSection;
