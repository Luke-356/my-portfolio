import { Link } from "react-scroll";
import Logo from "../Images/Logo.svg";
import { useState, useRef, useEffect } from "react";

function Navbar({ borderbottom, openAdmin }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="py-4 px-6 sm1:px-4 text-white text-lg fixed top-0 w-full bg-[#252525] z-10 border-b-[1px] border-gray-700">
      <div className="flex justify-between items-center max-w-[1279px] my-0 mx-auto">
        <Link
          href="/"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-xl cursor-pointer"
        >
          <img src={Logo} alt="Lwin" />
        </Link>

        {/* dropdown */}
        <div className="hidden sm1:block relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-dimblack dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>

          {dropdownOpen && (
            <div
              className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-[17px] text-gray-700 dark:text-gray-200"
              >
                <li>
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    onClick={closeDropdown}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    onClick={closeDropdown}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    onClick={closeDropdown}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-180}
                    duration={500}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    onClick={closeDropdown}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <ul className="flex gap-14 sm1:hidden">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            activeClass={borderbottom}
          >
            Home
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            activeClass={borderbottom}
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            activeClass={borderbottom}
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-180}
            duration={500}
            className="cursor-pointer"
            activeClass={borderbottom}
          >
            About
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
