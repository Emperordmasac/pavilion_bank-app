import * as React from "react";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="hookbank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }, idx) => (
          <li
            key={idx}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              idx === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isMenuOpen ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar}`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map(({ id, title }, idx) => (
              <li
                key={idx}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  idx === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
