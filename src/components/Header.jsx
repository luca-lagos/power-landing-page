import React from "react";
import { useState } from "react";
import {
  RiCheckboxBlankCircleFill as CircleIcon,
  RiMenu3Fill as MenuIcon,
  RiCloseLine as CloseIcon,
} from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const HandleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="sticky top-0 z-[9] bg-white flex w-full items-center justify-between xl:justify-start px-8 py-4 h-[10vh]">
      <div className="xl:w-1/6 text-center z-50 opacity-80 hover:opacity-100 transition-all duration-300">
        <Link smooth to="#" className="text-2xl font-bold relative bg-white p-1">
          Power<span className="text-primary">.</span>{" "}
          <CircleIcon className="absolute text-primary -left-3 -bottom-3 -z-10" />
        </Link>
      </div>
      <nav
        className={`fixed w-[80%] bg-white md:w-[40%] xl:w-full ${
          showMenu ? "right-0" : "-right-full "
        } max-[1279px]:h-[200vh] max-[1279px]:mt-[500px] xl:static flex-1 flex flex-col xl:flex-row justify-center items-center gap-12 transition-all duration-200`}
      >
        <CloseIcon
          className={`${showMenu ? "block"  : "hidden"} text-3xl text-primary absolute -mt-[500px] cursor-pointer hover:text-black transition-all duration-300`} onClick={HandleShowMenu}
        />
        <Link smooth to="#" className="hover:text-primary transition-all duration-200">
          Home
        </Link>
        <Link smooth
          to="/#clients"
          className="hover:text-primary transition-all duration-200"
        >
          Clients
        </Link>
        <Link smooth
          to="/#works"
          className="hover:text-primary transition-all duration-200"
        >
          Works
        </Link>
        <Link smooth
          to="/#reviews"
          className="hover:text-primary transition-all duration-200"
        >
          Reviews
        </Link>
        <Link smooth
          to="/#services"
          className="hover:text-primary transition-all duration-200"
        >
          Services
        </Link>
      </nav>
      <button
        onClick={HandleShowMenu}
        className="text-2xl p-2 flex xl:hidden flex-col items-center justify-center"
      >
        <MenuIcon
          className= "hover:text-primary transition-all duration-300"
        />
      </button>
    </header>
  );
};

export default Header;
