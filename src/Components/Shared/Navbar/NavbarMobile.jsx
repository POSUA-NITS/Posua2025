"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavOptions = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Gallery",
    to: "/gallery",
  },
  {
    text: "Events",
    to: "/events",
  },
  {
    text: "Team",
    to: "/team",
  },
  {
    text: "Sponsors",
    to: "/sponsors",
  },
  {
    text: "Artist",
    to: "/artist",
  }
];
const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [navBlur, setNavBlur] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    if(currentScrollY > 50){
      setNavBlur(true);
    }
    else{
      setNavBlur(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav>
      <div
        className={` ${isVisible ? "opacity-100" : "opacity-0"} ${navBlur?" backdrop-blur-lg shadow-xl":"" } font-gotham fixed z-[200] h-20 w-full transition-opacity duration-300 ease-linear`}
      >
        <div className="flex h-full w-full items-center justify-between px-6">
          <a href={"/"}>
            <img
              src="https://res.cloudinary.com/dmezugavw/image/upload/v1742786688/logo_mgsmjo.gif"
              width={100}
              alt="logo"
            ></img>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-[350] flex h-full w-16 items-center justify-center"
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
        <div
          className={`relative backdrop-blur-lg bottom-20 z-[300] flex border-l-4 border-white rounded-l-2xl h-screen w-[45vw] flex-col items-center gap-16 pt-10 ${isMenuOpen ? "left-[55vw]" : "left-[130vw]"
            } overflow-scroll transition-all delay-100 duration-300 ease-in`}
        >
          <div
            key={1000}
            className="flex w-full flex-col items-start justify-start gap-4 ml-[30%] mt-10"
          >
            {NavOptions.map((option, index) => {
              return (
                <div key={option.text + index}>
                  <NavLink
                    onClick={() => setIsMenuOpen(false)}
                    key={index}
                    to={option.to}
                    className="h-10 w-full"
                  >
                    {option.text}{" "}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='w-full absolute z-20 top-[4.9rem] h-2 bg-[#dc6b71c6]'></div>
    </nav>
  );
};

export default NavbarMobile;
