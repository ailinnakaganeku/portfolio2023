import { useState, useEffect, useCallback } from "react";

const MOBILE_WIDTH = 767;

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return isMobile;
};
