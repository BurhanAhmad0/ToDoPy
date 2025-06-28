// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black py-6 text-sm text-gray-500 bg-white dark:bg-green-900 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Codiqon ToDo App. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link
            to="/about"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            Privacy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            Terms
          </Link>
          <a
            href="mailto:support@codiqon.com"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
