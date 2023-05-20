import React, { useContext } from "react";
import { skills } from "../../data/skills";
import Animate from "../Animate";
import Layout from "../Layout";
import Title from "../Title";
import SkillCard from "./SkillCard";
import { useMobile } from "../../hooks/useMobile";
import { AnimationContext } from "../../context/AnimationContext";

const SkillsSection = () => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  const renderSkillCard = (skill) => {
    if (isMobile && !isAnimationDisabled) {
      return (
        <Animate key={skill.name}>
          <SkillCard {...skill} />
        </Animate>
      );
    } else {
      return <SkillCard {...skill} />;
    }
  };

  return (
    <Layout>
      <Title title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 sm:mt-6">
        {skills.map((skill) => (
          <React.Fragment key={skill.name}>
            {renderSkillCard(skill)}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default SkillsSection;
