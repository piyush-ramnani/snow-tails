import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const menuItems = [
  { target: "home", label: "HOME" },
  { target: "about", label: "ABOUT RACE" },
  { target: "rules", label: "RULES" },
  { target: "cause", label: "CAUSE" },
  { target: "tips", label: "TIPS AND TRAVEL" },
  { target: "ambassadors", label: "AMBASSADORS AND PARTNERS" },
  { target: "contact", label: "CONTACT US" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-5 px-6 backdrop-blur-lg backdrop-filter">
      <div className="flex items-center space-x-5">
        {menuItems.map((item) => (
          <Link
            key={item.target}
            to={item.target}
            smooth
            duration={200}
            className="text-white cursor-pointer"
            offset={-50}
            spy
            activeClass="nav-active"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="text-white cursor-pointer">
        <img src="/your-logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
