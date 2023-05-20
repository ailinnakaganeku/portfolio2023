import React, { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import { AnimationContext } from "../../../context/AnimationContext";
import ExperienceCard from "./ExperienceCard";

const ExperienceCardContainer = React.memo(({ experience }) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  const renderExperienceCard = () => {
    if (isMobile && !isAnimationDisabled) {
      return (
        <Animate>
          <ExperienceCard {...experience} />
        </Animate>
      );
    } else {
      return <ExperienceCard {...experience} />;
    }
  };

  return <>{renderExperienceCard()}</>;
});

ExperienceCardContainer.displayName = "ExperienceCardContainer";

export default ExperienceCardContainer;
