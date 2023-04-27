import Project from "./components/Project";
import LanguageSection from "./components/LanguageSection";
import ProfileSection from "./components/ProfileSection";
import Banner from "./components/Banner";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Redesigned and rebranded the Sirena product into Zenvia Conversion, improving user satisfaction by prioritizing and resolving NPS-related issues. Created technical documentation for the product and internal processes. Maintained and improved the codebase, following clean code principles and reducing bugs, using React, Redux, CSS, CSS Framework (Material UI), MongoDB, and AWS.",
    date: "October, 2021 - Present",
    company: "Zenvia",
    companyLink: "https://www.linkedin.com/company/zenvia-inc/",
  },
  {
    id: 2,
    title: "React Mentor",
    description:
      "Taught students the fundamentals of React to build dynamic and scalable web applications. Implemented a comprehensive curriculum for the course, incorporating best practices. Provided guidance and support to students throughout the learning process. Employed tools and technologies, including React, Context API, CSS Framework (Bootstrap), and Firebase.",
    date: "September 2021 - March 2022",
    company: "Coderhouse",
    companyLink: "https://www.linkedin.com/school/coderhouse/",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description:
      "Contributed to the development of the Mobile HealthHub Application for CVS Pharmacy. Developed it from scratch while working closely with the UX/UI team and communicating exclusively in English. Worked with Agile Scrum Methodology to create user stories, prioritize tasks, and ensure collaboration with the team. Used React Native, CSS, MongoDB, and AWS as the main tech stack.",
    date: "April 2021 - October 2021",
    company: "TagLatam SA",
    companyLink: "https://www.linkedin.com/company/tag-latam/",
  },
];

const user = {
  name: "Ailin Nakaganeku",
  headline: "Frontend Developer",
  location: "Argentina",
  summary:
    "Hi there! I'm Ailin, a passionate Frontend Developer with over 2 years of experience using React. I have also worked with Javascript, React Native, Typescript, and Node. My secret power lies in my ability to write clean and maintainable code that follows best practices. If you're looking for a developer who is always eager to learn new technologies and improve their skills to deliver high-quality work, I would love to hear from you!",
  company: {
    name: "Email",
    url: "ailin.nakaganeku@icloud.com",
    logo: "https://media.licdn.com/dms/image/C4D03AQFEUfaCILFd2w/profile-displayphoto-shrink_800_800/0/1631379432907?e=1687996800&v=beta&t=q2m6WcM-eIA8hbuJwqxhtHGbOBOoOSzR6gIEw1EBz4E",
  },
  website: "https://github.com/ailinnakaganeku",
  banner:
    "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
  image: "../public/images/me.jpeg",
};

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      <Banner />
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
