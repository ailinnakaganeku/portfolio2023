import { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";
import { AnimationContext } from "../../../context/AnimationContext";

const ExperienceCard = (experience) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  const renderExperienceCard = () => {
    if (isMobile && !isAnimationDisabled) {
      return (
        <Animate>
          <Card {...experience} />
        </Animate>
      );
    } else {
      return <Card {...experience} />;
    }
  };

  return <>{renderExperienceCard()}</>;
};

export default ExperienceCard;
