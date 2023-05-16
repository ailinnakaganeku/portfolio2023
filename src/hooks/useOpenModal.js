import { useEffect } from "react";

export const useOpenModalOnEnter = (onEnter) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
};
