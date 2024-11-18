import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center font-poppins">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <a href="/" className="hover:text-gray-300">
              PenCrafted
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-bold"
            >
              Home
            </NavLink>
            <a
              href="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-bold"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-bold"
            >
              About Us
            </a>
            <NavLink
              to="/login"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-bold"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-bold"
            >
              Register
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="/login"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;