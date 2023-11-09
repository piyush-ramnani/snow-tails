import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 backdrop-blur-lg backdrop-filter">
      <div className="flex items-center space-x-4">
        {/* Add your menu items here */}
        <Link
          to="home"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          About race
        </Link>
        <Link
          to="rules"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Rules
        </Link>
        <Link
          to="cause"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Cause
        </Link>
        <Link
          to="tips"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Tips and Travel
        </Link>
        <Link
          to="ambassadors"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Ambassadors and Partners
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          className="text-white cursor-pointer"
          offset={-50}
        >
          Contact us
        </Link>
      </div>
      <div className="text-white cursor-pointer">
        <img src="/your-logo.png" alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
