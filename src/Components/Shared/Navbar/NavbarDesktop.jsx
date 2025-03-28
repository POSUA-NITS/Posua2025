import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RedBorder } from "../../RedBorder/index";

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
];

const NavbarDesktop = () => {
  const location = useLocation();
  const [navBlur, setNavBlur] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setNavBlur(true);
    } else {
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

  // useEffect(() => {
  //   console.log(navBlur);
  // }, [navBlur]);

  return (
    <nav className={``}>
      <div
        className={`flex ${
          navBlur ? "backdrop-blur-2xl" : ""
        } items-center justify-between font-gotham h-20 px-44 gap-8 fixed z-[100] w-full ${
          location.pathname.startsWith("/gallery") ? "bg-[rgba(248,234,208,1)]" : ""
        } `}
      >
        <div className="w-1/4 relative z-10">
          <a href={"/"}>
            <img
              className="h-[70px] w-auto"
              src="https://res.cloudinary.com/dmezugavw/image/upload/v1742786688/logo_mgsmjo.gif"
              width={200}
              height={100}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex items-center justify-between gap-8 text-[#141301] relative z-10">
          {NavOptions.map((option, index) => {
            return (
              <NavLink
                key={index}
                className={`font-medium text-[1.05rem] border-[#E85F5F] ${
                  location.pathname === option.to ? "border-b-[3px]" : ""
                }`}
                to={option.to}
              >
                {option.text}
              </NavLink>
            );
          })}
          <NavLink
            className={`font-bold text-[1.05rem] border-[#E85F5F] ${
              location.pathname === "/artist"
                ? "border-b-[3px] text-[#CB2229]"
                : "text-[#E85F5F]"
            }`}
            to={"/artist"}
          >
            Artist
          </NavLink>
        </div>
        <div
          className={`w-full h-full absolute left-0 ${
            location.pathname.startsWith("/gallery") ? "" : "hidden"
          } z-5`}
        >
          <div className="w-4 md:w-6 absolute top-0 left-[6%] md:left-[9%] h-full z-[8]">
            <RedBorder />
          </div>
          <div className="w-4 md:w-6 absolute top-0 z-[8] right-[6%] md:right-[9%] h-full">
            <RedBorder />
          </div>
        </div>
      </div>
      <div
        className={`w-full absolute z-20 top-[5rem] h-2 bg-[#dc6b71c6]`}
      ></div>
    </nav>
  );
};
export default NavbarDesktop;
