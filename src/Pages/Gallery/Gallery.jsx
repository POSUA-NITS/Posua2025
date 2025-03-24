
import { useState, useEffect } from "react";

import GalleryDesktop from "./GalleryDesktop";
import GalleryMobile from "./GalleryMobile";

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <GalleryMobile /> : <GalleryDesktop />;
};

export default Gallery;
