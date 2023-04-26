import Project from "./components/Project";
import LanguageSection from "./components/LanguageSection";
import ProfileSection from "./components/ProfileSection";
import Banner from "./components/Banner";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

const experiences = [
  {
    id: 1,
    title: "Item 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur.",
    date: "January - Present",
  },
  {
    id: 1,
    title: "Item 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur.",
    date: "January - Present",
  },
  {
    id: 1,
    title: "Item 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur.",
    date: "January - Present",
  },
];

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      <Banner />
      <ProfileSection />
      <ExperienceSection experiences={experiences} />
      <Project />
      <SkillsSection />
      <LanguageSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
