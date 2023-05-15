import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import Title from "../Title";
import Layout from "../Layout";
import ContactCard from "./Card";
import Animate from "../Animate";
import { useMobile } from "../../hooks/useMobile";

const contactInfo = [
  {
    icon: (
      <HiOutlineMail className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
    ),
    label: "Email:",
    hrefLink: "mailto:ailinndev@gmail.com",
    link: "ailinndev@gmail.com",
  },
  {
    icon: (
      <FaTelegram className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
    ),
    label: "Phone:",
    hrefLink: "https://t.me/ailinndev",
    link: "@ailinndev",
  },
  {
    icon: (
      <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-[#00e1fe] mr-4" />
    ),
    label: "LinkedIn:",
    hrefLink: "https://www.linkedin.com/in/ailinak/",
    link: "ailinak",
  },
];

const ContactSection = () => {
  const isMobile = useMobile();

  return (
    <Layout>
      <Title title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 sm:mt-6">
        {contactInfo.map((info, index) => (
          <React.Fragment key={index}>
            {isMobile ? (
              <Animate>
                <ContactCard key={index} {...info} />
              </Animate>
            ) : (
              <ContactCard key={index} {...info} />
            )}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default ContactSection;
