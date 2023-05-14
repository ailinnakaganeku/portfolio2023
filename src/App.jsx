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
import { user } from "./data/user";

const App = () => {
  const isMobile = useMobile();

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      {!isMobile && <Banner />}
      <ProfileSection user={user} />
      <ExperienceSection />
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
