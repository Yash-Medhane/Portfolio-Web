import { Link } from 'react-scroll';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-teal-800 dark:bg-coral-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 justify-between items-start">
        
        {/* Contact Information */}
        <div className="footer-section flex-1">
          <h2 className="text-2xl font-bold text-teal-200 dark:text-coral-200 mb-4">Contact Information</h2>
          <p className="text-gray-300 dark:text-gray-200 mb-2">Email: <a href="mailto:yashmedhane43@gmail.com" className="text-teal-300 dark:text-coral-300 hover:underline">yashmedhane43@gmail.com</a></p>
          <p className="text-gray-300 dark:text-gray-200 mb-2">Phone: <span className="text-teal-300 dark:text-coral-300">705805XXXX</span></p>
          <p className="text-gray-300 dark:text-gray-200">Address: <span className="text-teal-300 dark:text-coral-300">My Address Here</span></p>
        </div>
        
        {/* Follow Me */}
        <div className="footer-section flex-1">
          <h2 className="text-2xl font-bold text-teal-200 dark:text-coral-200 mb-4">Follow Me</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="https://www.instagram.com/yash_medhane_01/" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-gray-700 dark:hover:text-coral-100 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yash-medhane-403970267/" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-gray-700 dark:hover:text-coral-100 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Yash-Medhane/" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-gray-200 hover:text-gray-700 dark:hover:text-coral-100 transition duration-300 flex items-center">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="footer-section flex-1">
          <h2 className="text-2xl font-bold text-teal-200 dark:text-coral-200 mb-4">Quick Links</h2>
          <ul className="flex flex-col">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-lg font-semibold text-gray-300 dark:text-gray-200 hover:text-teal-100 dark:hover:text-coral-100 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-lg font-semibold text-gray-300 dark:text-gray-200 hover:text-teal-100 dark:hover:text-coral-100 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-lg font-semibold text-gray-300 dark:text-gray-200 hover:text-teal-100 dark:hover:text-coral-100 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom mt-8 border-t border-teal-600 dark:border-coral-600 pt-4 text-center text-gray-300 dark:text-gray-200">
        <p className="font-bold text-xl">© 2024 Yash Medhane Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
