import { createContext, useState } from "react";

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isAnimationDisabled, setIsAnimationDisabled] = useState(false);

  const toggleAnimation = (section) => {
    scrollTo(section, {
      duration: 500,
      smooth: true,
    });
    setIsAnimationDisabled(true);
  };
  
  const contextValue = {
    isAnimationDisabled,
    toggleAnimation,
  };

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};
