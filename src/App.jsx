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

const user = {
  name: "Ailin Nakaganeku",
  headline: "Frontend Developer",
  location: "Argentina",
  summary:
    "Frontend Developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nulla id quam congue, eget dictum ex efficitur.",
  company: {
    name: "Email",
    url: "ailin.nakaganeku@icloud.com",
    logo: "https://media.licdn.com/dms/image/C4D03AQFEUfaCILFd2w/profile-displayphoto-shrink_800_800/0/1631379432907?e=1687996800&v=beta&t=q2m6WcM-eIA8hbuJwqxhtHGbOBOoOSzR6gIEw1EBz4E",
  },
  website: "https://github.com/ailinnakaganeku",
  banner:
    "https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg",
};

const App = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      <Banner />
      <ProfileSection user={user} />
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
