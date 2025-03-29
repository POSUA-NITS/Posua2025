
import { useState, useEffect } from "react";

import ArtistDesktop from "./ArtistDesktop";
import ArtistMobile from "./ArtistMobileView";

const Artist = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ArtistMobile /> : <ArtistDesktop />;
};

export default Artist;