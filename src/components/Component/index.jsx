import { lazy } from "react";
import { useMobile } from "../../hooks/useMobile";

const Banner = lazy(() => import("../Banner"));
const ProfileSection = lazy(() => import("../ProfileSection"));
const ExperienceSection = lazy(() => import("../ExperienceSection"));
const EducationSection = lazy(() => import("../EducationSection"));
const Projects = lazy(() => import("../Projects"));
const SkillsSection = lazy(() => import("../SkillsSection"));
const LanguageSection = lazy(() => import("../LanguageSection"));
const ContactSection = lazy(() => import("../ContactSection"));
const Footer = lazy(() => import("../Footer"));

const Component = () => {
  const isMobile = useMobile();

  return (
    <>
      {!isMobile && <Banner />}
      <ProfileSection />
      <ExperienceSection />
      <EducationSection />
      <Projects />
      <SkillsSection />
      <LanguageSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Component;
