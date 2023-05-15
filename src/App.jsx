import { lazy, Suspense } from "react";
import { useMobile } from "./hooks/useMobile";
import Loader from "./components/Loader";

const Banner = lazy(() => import("./components/Banner"));
const ProfileSection = lazy(() => import("./components/ProfileSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const Projects = lazy(() => import("./components/Projects"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const LanguageSection = lazy(() => import("./components/LanguageSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const isMobile = useMobile();

  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent ">
      <Suspense fallback={<Loader />}>
        {!isMobile && <Banner />}
        <ProfileSection />
        <ExperienceSection />
        <EducationSection />
        <Projects />
        <SkillsSection />
        <LanguageSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
