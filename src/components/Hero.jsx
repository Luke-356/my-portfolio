import webIcon from "../Images/mdi_web.svg";
import paintIcon from "../Images/bx_paint.svg";
import heroIcon from "../Images/heroIcon.svg";
import arrowDown from "../Images/arrow-down.svg";
import download from "../Images/download.svg";
import dot from "../Images/dots.svg";
import { Link } from "react-scroll";

function Hero({ borderbottom }) {
  return (
    <div id="hero" className="h-[600px]">
      <div className="flex items-center justify-between">
        <div className="text-white mt-20">
          {/* Title */}
          <p
            className={`text-[24px] font-normal text-[#CCCCCC] no-underline ${borderbottom} after:w-[114px]`}
          >
            Nyi Nyi Lwin
          </p>
          <h1 className="text-[46px] text-[#F0F0F0] font-semibold max-w-[740px] mt-6">
            Bridging the Gap Between Ideas and Reality with Programming
          </h1>

          {/* job title */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <img src={webIcon} alt="Web Logo" />
              <p className="text-[20px] text-dimwhite">Web Developer</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={paintIcon} alt="Web Logo" />
              <p className="text-[20px] text-dimwhite">Software Engineer</p>
            </div>
          </div>

          {/* Call to Action buttons */}
          <div className="flex gap-10 mt-6">
            <Link
              className="p-2 bg-lightblue flex items-center gap-4 text-white text-lg py-4 px-4 cursor-pointer rounded-md "
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p>My Projects</p>
              <img src={arrowDown} alt="arrow-down" />
            </Link>

            <div className="p-2 bg-dimblack flex items-center gap-4 text-white text-lg py-4 px-4 cursor-pointer rounded-md ">
              <p>My Resume</p>
              <img src={download} alt="download" />
            </div>
          </div>
        </div>

        <img src={heroIcon} alt="hero-icon" className="mr-[-4rem]" />
      </div>

      <div className="mt-6">
        <img src={dot} alt="download" />
      </div>
    </div>
  );
}

export default Hero;
