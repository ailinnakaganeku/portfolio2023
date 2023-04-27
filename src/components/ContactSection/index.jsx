import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "./Link";
import Title from "../Title";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 shadow-lg mx-auto p-4 md:p-8">
      <div className="container mx-auto">
        <Title title="Contact Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-4 sm:mt-8">
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <HiOutlineMail className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-white font-medium">Email:</span>
            </div>
            <Link
              hrefLink="mailto:john@example.com"
              link="ailin.nakaganeku@icloud.com"
            />
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaTelegram className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-white font-medium">Phone:</span>
            </div>
            <Link
              hrefLink="t.me/ailinndev"
              link="@ailinndev"
            />
          </div>
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaLinkedin className="h-6 w-6 text-[#00e1fe] mr-4" />
              <span className="text-white font-medium">LinkedIn:</span>
            </div>
            <Link
              hrefLink="mailto:john@example.com"
              link="ailin.nakaganeku@icloud.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
