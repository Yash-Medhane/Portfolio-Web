import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-700 dark:bg-coral-700 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Title */}
        <h1 className="text-2xl font-extrabold text-teal-200 dark:text-coral-200">
          My Portfolio
        </h1>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-teal-200 dark:text-coral-200 hover:text-teal-100 dark:hover:text-coral-100 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:relative top-16 md:top-auto left-0 md:left-96 w-full md:w-auto bg-teal-700 dark:bg-coral-700 p-4 md:p-0 transition-transform ease-in-out duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer block py-2 px-4 text-lg font-semibold hover:bg-teal-600 dark:hover:bg-coral-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer block py-2 px-4 text-lg font-semibold hover:bg-teal-600 dark:hover:bg-coral-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer block py-2 px-4 text-lg font-semibold hover:bg-teal-600 dark:hover:bg-coral-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" cursor-pointer block py-2 px-4 text-lg font-semibold hover:bg-teal-600 dark:hover:bg-coral-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
