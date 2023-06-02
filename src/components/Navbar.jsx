import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-6 text-white text-lg">
      <Link href="/" className="text-xl cursor-pointer">
        Lwin
      </Link>
      <ul className="flex gap-14">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer border-b-4 border-white	"
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer"
        >
          Experience
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
