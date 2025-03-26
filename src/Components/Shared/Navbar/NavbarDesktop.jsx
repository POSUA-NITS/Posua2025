import { NavLink, useLocation } from "react-router-dom";

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
  const location = useLocation()
  return (
    <nav className={``}>
      <div className={`flex items-center justify-between font-gotham h-20 px-40 gap-8 fixed z-[100] w-full ${location.pathname !== "/" ? 'bg-[#F8EAD0]/10' : ''} `}>
        <div className="w-1/4">
          <NavLink to={"/"}>
            <img
              className="h-[70px] w-auto"
              src="https://res.cloudinary.com/dmezugavw/image/upload/v1742786688/logo_mgsmjo.gif"
              width={200}
              height={100}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex items-center justify-between gap-8 text-[#141301]">
          {NavOptions.map((option, index) => {
            return (
              <NavLink
                key={index}
                className={`font-medium text-[1.05rem] border-[#E85F5F] ${location.pathname === option.to ? 'border-b-[3px]' : ''}`}
                to={option.to}
              >
                {option.text}
              </NavLink>
            );
          })}
          <NavLink
            className={`font-bold text-[1.05rem] border-[#E85F5F] ${location.pathname === "/artist" ? 'border-b-[3px] text-[#CB2229]' : 'text-[#E85F5F]'}`}
            to={"/artist"}
          >
            Artist
          </NavLink>
        </div>
      </div>
      <div className={`w-full absolute z-20 top-[5rem] h-2 bg-[#dc6b71c6]`}></div>
    </nav>
  );
};
export default NavbarDesktop;
