import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";

const ExperienceCard = (experience) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <Animate>
          <Card {...experience} />
        </Animate>
      ) : (
        <Card {...experience} />
      )}
    </>
  );
};

export default ExperienceCard;
