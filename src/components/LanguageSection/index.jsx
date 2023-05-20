import { useContext } from "react";
import { languages } from "../../data/languages";
import Layout from "../Layout";
import Title from "../Title";
import LanguageCard from "./LanguageCard";
import Animate from "../Animate";
import { useMobile } from "../../hooks/useMobile";
import { AnimationContext } from "../../context/AnimationContext";

const LanguageSection = () => {
  const isMobile = useMobile();
  const { isAnimationDisabled } = useContext(AnimationContext);

  return (
    <Layout>
      <Title title="Languages" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">
        {languages?.map((language) => (
          <div key={language.name}>
            {isMobile && !isAnimationDisabled ? (
              <Animate>
                <LanguageCard {...language} />
              </Animate>
            ) : isMobile && isAnimationDisabled ? (
              <LanguageCard {...language} />
            ) : (
              <LanguageCard {...language} />
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default LanguageSection;
