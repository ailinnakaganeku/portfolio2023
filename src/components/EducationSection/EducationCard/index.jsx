import { useMobile } from "../../../hooks/useMobile";
import Animate from "../../Animate";
import Card from "./Card";

const EducationCard = (education) => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <Animate>
          <Card {...education} />
        </Animate>
      ) : (
        <Card {...education} />
      )}
    </>
  );
};

export default EducationCard;
