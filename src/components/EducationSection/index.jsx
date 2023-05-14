import Title from "../Title";
import EducationCard from "./EducationCard";

const education = [
  {
    id: 1,
    title: "Swift Developer",
    academy: "Alura Brasil",
    date: "Feb 2023 - Present",
  },
  {
    id: 1,
    title: "Full Stack Javascript Developer",
    academy: "Soy Henry Bootcamp",
    date: "Aug 2020 - Jan 2021",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="p-4 md:p-8 bg-white dark:bg-gray-900 shadow-lg"
    >
      <Title title="Education" />
      {education?.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </section>
  );
};

export default EducationSection;
