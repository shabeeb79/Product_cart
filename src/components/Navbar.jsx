import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl font-extrabold hover:text-yellow-300 transition-all duration-300"
            >
              ShopMate
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 px-3 py-1 rounded-md transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-green-400 hover:via-yellow-400 hover:to-red-400 px-3 py-1 rounded-md transition-all duration-300"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 px-3 py-1 rounded-md transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="relative bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold px-4 py-2 rounded-full hover:from-yellow-500 hover:to-red-600 shadow-lg transition-all duration-300"
            >
              Cart
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col space-y-3 mt-2 px-2 pb-4">
            <Link
              to="/"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 px-3 py-1 rounded-md transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-green-400 hover:via-yellow-400 hover:to-red-400 px-3 py-1 rounded-md transition-all duration-300"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-white font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 px-3 py-1 rounded-md transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="relative bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold px-4 py-2 rounded-full hover:from-yellow-500 hover:to-red-600 shadow-lg transition-all duration-300"
            >
              Cart
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
