import { useEffect, useRef } from "react";

export const useOpenModalOnEnter = (onEnter) => {
  const handleKeyPress = useRef((event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  });

  useEffect(() => {
    const eventListener = handleKeyPress.current;
    document.addEventListener("keydown", eventListener);
    return () => {
      document.removeEventListener("keydown", eventListener);
    };
  }, [onEnter]);
};
