import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

/**
 * Navbar Component
 *
 * The navigation bar includes:
 * - A logo on the left.
 * - Navigation links for larger screens.
 * - A mobile-friendly hamburger menu for small screens.
 * - A toggle feature to open/close the mobile menu.
 *
 * @component
 * @returns {JSX.Element} The Navbar UI
 */
const Navbar = () => {
  const [toggle, setToggle] = useState(false); // State to control mobile menu visibility

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo Section */}
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* Desktop Navigation Menu (Hidden on Small Screens) */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Menu (Visible on Small Screens) */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* Hamburger Menu Icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Sidebar Menu (Appears when toggled) */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
