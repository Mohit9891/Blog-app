import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="  flex  w-full h-33 mx-auto  justify-between items-center px-10 ">
        <a
          href="/"
          className=" ml-6 text-5xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
        >
          {" "}
          Thoughts
        </a>
        <div className="  text-xl text-indigo-400 space-x-10 ">
          <Link
            to="/about"
            className=" hover:text-indigo-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" hover:text-indigo-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/signup"
            className=" hover:text-indigo-300 transition-colors duration-200"
          >
            Signup
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
