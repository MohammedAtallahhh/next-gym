import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    const handle = () => {
      setScreenSize(window.innerWidth);
    };

    handle();

    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return { screenSize, isMobile: screenSize < 768 };
};
