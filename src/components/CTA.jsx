import React from "react";
import { Link } from "react-router-dom";
import { linkedin, github } from "../assets/icons";
const CTA = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full flex items-center justify-between px-6 ">
      <span className="text-sm text-black sm:text-center dark:text-black"></span>
      <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500 dark:text-black sm:mt-0">
        <li>
          <Link
            to="https://www.linkedin.com/in/nam-hai-bui"
            className="me-4 md:me-6 px-2"
          >
            <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/NamHaiBui" className="me-4 md:me-6">
            <img src={github} alt="GitHub" className="mt-5 w-5 h-5" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default CTA;
