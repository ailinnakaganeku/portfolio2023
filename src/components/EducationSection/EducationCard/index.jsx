import { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";
import { AnimationContext } from "../../../context/AnimationContext";

const EducationCard = (education) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  const renderEducationCard = (education) => {
    if (isMobile && !isAnimationDisabled) {
      return (
        <Animate>
          <Card {...education} />
        </Animate>
      );
    } else {
      return <Card {...education} />;
    }
  };

  return <>{renderEducationCard(education)}</>;
};

export default EducationCard;
