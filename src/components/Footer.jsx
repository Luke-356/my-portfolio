import React from "react";
import { Link } from "react-scroll";
import linkedin from "../Images/linkedin.svg";
import facebook from "../Images/facebook.svg";
import github from "../Images/github.svg";
import arrowRight from "../Images/arrowRight.svg";

function Footer() {
  return (
    <div className="bg-[#505050] h-[590px] mt-36 flex justify-around pt-14 lg6:pt-28 lg6:pb-28 lg6:gap-20 lg6:flex-col lg6:h-[1300px] lg6:items-center">
      <div className="lg6:text-center">
        <h2 className="text-[26px] text-[#f1f1f1]">Navigate To</h2>
        <div className="flex flex-col mt-8 gap-6">
          <Link
            href="/"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-xl cursor-pointer text-[#f1f1f1]"
          >
            Home
          </Link>
          <Link
            href="/"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-xl cursor-pointer text-[#f1f1f1]"
          >
            Projects
          </Link>
          <Link
            href="/"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-xl cursor-pointer text-[#f1f1f1]"
          >
            About
          </Link>
          <Link
            href="/"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-xl cursor-pointer text-[#f1f1f1]"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <div className="lg6:text-center">
          <h2 className="text-[26px] text-[#f1f1f1]">Social Media</h2>

          <div className="flex gap-5 mt-8 lg6:justify-center">
            <img src={linkedin} alt="linkedin" className="cursor-pointer" />
            <img src={facebook} alt="facebook" className="cursor-pointer" />
            <img src={github} alt="github" className="cursor-pointer" />
          </div>
        </div>

        <div className="mt-12 lg6:text-center">
          <h2 className="text-[26px] text-[#f1f1f1]">Contact Details</h2>

          <div className="flex flex-col mt-8 gap-6">
            <a
              href="mailto:nyinyilwin356@gmail.com"
              className="text-xl text-[#f1f1f1]"
            >
              nyinyilwin356@gmail.com
            </a>
            <a href="tel:+13475360536" className="text-xl text-[#f1f1f1]">
              +13475360536
            </a>
          </div>
        </div>
      </div>
      <div className="w-64">
        <h2 className="text-[26px] text-[#f1f1f1] lg6:text-center">
          Contact Me
        </h2>

        <div className="mt-8 flex flex-col gap-8">
          <div>
            <label htmlFor="email" className="text-xl text-[#f1f1f1] text-left">
              Email
            </label>{" "}
            <br />
            <input
              type="email"
              name="textEmail"
              id="email"
              className="mt-2 h-12 w-full bg-[#7A7A7A] rounded-[9px] pl-2 border-transparent border-2 focus:outline-none focus:border-lightblue focus:border-2 focus:ring-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xl text-[#f1f1f1]">
              Message
            </label>{" "}
            <br />
            <textarea
              name="txtMessage"
              id="message"
              cols="20"
              rows="7"
              className="mt-2 w-full bg-[#7A7A7A] rounded-[9px] pl-2 pt-2 border-transparent border-2 focus:outline-none focus:border-lightblue focus:border-2 focus:ring-1"
            ></textarea>
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="flex gap-4 bg-lightblue text-xl text-white pl-8 pr-4 py-3 rounded-xl"
              >
                Submit <img src={arrowRight} alt="arrowRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
