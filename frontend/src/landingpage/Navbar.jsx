import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container ">
      <nav className="  flex  w-full h-33 mx-auto  justify-between items-center px-10 ">
        <a
          href="/"
          className=" ml-6 text-7xl font-bold  text-white hover:text-blue-600 transition-colors duration-200"
        >
          {" "}
          Thoughts
        </a>
        <div className="  text-2xl font-bold text-white space-x-10 px-7 ">
          <Link
            to="/about"
            className=" hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className=" hover:text-blue-600 transition-colors duration-200"
          >
            Signup
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
