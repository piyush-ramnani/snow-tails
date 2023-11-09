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
  { target: "home", label: "Home" },
  { target: "about", label: "About race" },
  { target: "rules", label: "Rules" },
  { target: "cause", label: "Cause" },
  { target: "tips", label: "Tips and Travel" },
  { target: "ambassadors", label: "Ambassadors and Partners" },
  { target: "contact", label: "Contact us" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 backdrop-blur-lg backdrop-filter">
      <div className="flex items-center space-x-4">
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
