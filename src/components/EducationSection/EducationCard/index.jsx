import { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";
import { AnimationContext } from "../../../context/AnimationContext";

const EducationCard = (education) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  return (
    <>
      {isMobile && !isAnimationDisabled ? (
        <Animate>
          <Card {...education} />
        </Animate>
      ) : isMobile && isAnimationDisabled ? (
        <Card {...education} />
      ) : (
        <Card {...education} />
      )}
    </>
  );
};

export default EducationCard;
