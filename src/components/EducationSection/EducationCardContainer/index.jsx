import React, { useContext } from "react";
import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import EducationCard from "./EducationCard";
import { AnimationContext } from "../../../context/AnimationContext";

const EducationCardContainer = React.memo(({ education }) => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  const renderEducationCard = () => {
    if (isMobile && !isAnimationDisabled) {
      return (
        <Animate>
          <EducationCard {...education} />
        </Animate>
      );
    } else {
      return <EducationCard {...education} />;
    }
  };

  return <>{renderEducationCard()}</>;
});

EducationCardContainer.displayName = "EducationCardContainer";

export default EducationCardContainer;
