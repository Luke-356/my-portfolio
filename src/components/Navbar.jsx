import { Link } from "react-scroll";
import Logo from "../Images/Logo.svg";

function Navbar({ borderbottom }) {
  // const borderbottomClass = "bg-lightblue";
  return (
    <div className="py-6 px-10 text-white text-lg fixed top-0 w-full bg-[#252525] z-10 border-b-[1px] border-gray-700">
      <div className="flex justify-between items-center max-w-screen-xl my-0 mx-auto">
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
        <ul className="flex gap-14">
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
