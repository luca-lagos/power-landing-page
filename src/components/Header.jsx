import React from "react";
import { useState } from "react";
import {
  RiCheckboxBlankCircleFill as CircleIcon,
  RiMenu3Fill as MenuIcon,
  RiCloseLine as CloseIcon,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const HandleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="flex w-full items-center justify-between xl:justify-start p-4 h-[10vh] z-50">
      <div className="xl:w-1/6 text-center">
        <a href="#" className="text-2xl font-bold relative bg-white p-1">
          Power<span className="text-primary">.</span>{" "}
          <CircleIcon className="absolute text-primary -left-3 -bottom-3 -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row justify-center items-center gap-12 transition-all duration-500 xl:duration-300`}
      >
        <a href="#" className="hover:text-primary transition-all duration-200">
          Home
        </a>
        <a href="#" className="hover:text-primary transition-all duration-200">
          About Us
        </a>
        <a href="#" className="hover:text-primary transition-all duration-200">
          Services
        </a>
        <a href="#" className="hover:text-primary transition-all duration-200">
          Products
        </a>
      </nav>
      <button
        onClick={HandleShowMenu}
        className="text-2xl p-2 flex xl:hidden flex-col items-center justify-center"
      >
        <MenuIcon
          className={`${
            showMenu ? "hidden" : "block"
          } hover:text-primary transition-all duration-300`}
        />
        <CloseIcon
          className={`text-3xl text-primary ${
            showMenu ? "block" : "hidden"
          } hover:text-black transition-all duration-300`}
        />
      </button>
    </header>
  );
};

export default Header;
