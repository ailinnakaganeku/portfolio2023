import Project from "./components/Project";
import LanguageSection from "./components/LanguageSection";
import ProfileSection from "./components/ProfileSection";
import Banner from "./components/Banner";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import { useMobile } from "./hooks/useMobile";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    description:"Contributed to the redesign and rebranding of the product, following an internal design system library. Resolved NPS-related issues. Created technical documentation for the product and internal processes. Maintained and improved the codebase, following clean code principles, resulting in a reduction in bugs. Worked with event tracking events, using tools like Segment. Integrated FullStory as the service to analyze UX and flows within the product. Collaborated on user experience improvements.",
    techStack: "Tech Stack: React, Redux, CSS, Node, MongoDB, and AWS.",
    date: "Oct, 2021 - Present",
    company: "Zenvia",
    companyLink: "https://www.linkedin.com/company/zenvia-inc/",
  },
  {
    id: 2,
    title: "React Mentor",
    description:
      "Provided guidance and support to students throughout the learning process. Provided mentorship to help students develop their skills and overcome challenges.",
    techStack: "Tech Stack: React, Context API, CSS Frameworks, and Firebase.",
    date: "Sep 2021 - Mar 2022",
    company: "Coderhouse",
    companyLink: "https://www.linkedin.com/school/coderhouse/",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description:
      "Contributed to the development of a Mobile application for CVS Pharmacy. Developed all the application from scratch. Collaborated  with the team using Agile Scrum Methodology to create user stories, prioritize tasks, and ensure collaboration. Communicated in English.",
    techStack: "Tech Stack: React Native, CSS, Node, Typescript, Figma, MongoDB, and AWS.",
    date: "Apr 2021 - Oct 2021",
    company: "TagLatam",
    companyLink: "https://www.linkedin.com/company/tag-latam/",
  },
];

const user = {
  name: "Ailin Nakaganeku",
  headline: "Frontend Developer",
  location: "Argentina",
  summary:
    "Hi there! I'm Ailin, a passionate Frontend Developer with over 2 years of experience using React. I have also worked with Javascript, React Native, Typescript, and Node. If you're looking for a developer who is always eager to learn and improve their skills in order to deliver high-quality work, I would love to hear from you!",
  company: {
    name: "Email",
    url: "ailinndev@gmail.com",
    href: "mailto:ailinndev@gmail.com",
    logo: "https://media.licdn.com/dms/image/C4D03AQFEUfaCILFd2w/profile-displayphoto-shrink_800_800/0/1631379432907?e=1687996800&v=beta&t=q2m6WcM-eIA8hbuJwqxhtHGbOBOoOSzR6gIEw1EBz4E",
  },
  website: "https://github.com/ailinnakaganeku",
  banner:
    "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
  image: "/me.jpeg",
};

const App = () => {
  const isMobile = useMobile();

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      {!isMobile && <Banner />}
      <ProfileSection user={user} />
      <ExperienceSection experiences={experiences} />
      <EducationSection />
      <Project />
      <SkillsSection />
      <LanguageSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
