import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Search from '../search/Search';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="shadow-md">
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        {/* logo */}
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1735059059/blog-logo_auxidm.png"
              alt="Logo"
            />
          </Link>
        </div>
        {/* nav menu for desktop */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex items-center gap-7">
              <li>
                <NavLink
                  className={`${pathname === '/' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${pathname === '/blogs' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/blogs`}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${pathname === '/about' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/about`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${pathname === '/contact' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/contact`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* search and color switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <Search />
          <div
            className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? 'justify-end' : 'justify-start'
              }`}
          >
            <button
              onClick={toggleDarkMode}
              className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
            >
              {isDarkMode ? (
                <FaMoon className="text-gray-500" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>
      {/* Drawer menu */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center space-y-6">
          {/* Close Button */}
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-2xl text-gray-600"
          >
            <FaTimes />
          </button>
          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col items-center gap-5 mt-10">
              <li>
                <NavLink
                  onClick={toggleDrawer}
                  className={`${pathname === '/' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleDrawer}
                  className={`${pathname === '/blogs' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/blogs`}
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleDrawer}
                  className={`${pathname === '/about' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/about`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleDrawer}
                  className={`${pathname === '/contact' ? 'text-green-500 font-bold' : 'text-black'
                    }`}
                  to={`/contact`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Dark mode toggle in drawer */}
          <div className="mt-4">
            <div
              className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? 'justify-end' : 'justify-start'
                }`}
            >
              <button
                onClick={toggleDarkMode}
                className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
              >
                {isDarkMode ? (
                  <FaMoon className="text-gray-500" />
                ) : (
                  <FaSun className="text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
