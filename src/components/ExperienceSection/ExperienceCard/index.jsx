import { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";
import { AnimationContext } from "../../../context/AnimationContext";

const ExperienceCard = (experience) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  return (
    <>
      {isMobile && !isAnimationDisabled ? (
        <Animate>
          <Card {...experience} />
        </Animate>
      ) : isMobile && isAnimationDisabled ? (
        <Card {...experience} />
      ) : (
        isMobile && <Card {...experience} />
      )}
    </>
  );
};

export default ExperienceCard;
