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
      <div className="flex items-center justify-between lg6:flex-col">
        <div className="text-white mt-20">
          {/* Title */}
          <p
            className={`text-[24px] font-normal text-[#CCCCCC] no-underline ${borderbottom} lg6:after:left-[50%] lg6:after:translate-x-[-50%] lg6:after:bottom-[-10px] lg6:after:w-[150px] lg6:text-center after:w-[114px] lg6:text-center`}
          >
            Nyi Nyi Lwin
          </p>
          <h1 className="text-[46px] lg:text-[40px] text-[#F0F0F0] font-semibold max-w-[740px] lg5:w-[500px] lg1:text-[38px] lg5:text-[34px] lg6:text-center mt-6">
            Bridging the Gap Between Ideas and Reality with Programming
          </h1>

          {/* job title */}
          <div className="flex items-center gap-4 mt-4 lg6:justify-center">
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
          <div className="flex gap-10 mt-6 lg6:justify-center">
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

        <img
          src={heroIcon}
          alt="hero-icon"
          className="mr-[-4rem] lg5:w-full lg6:w-[560px] lg6:mt-10 lg6:justify-center"
        />
      </div>

      <div className="mt-6 lg6:hidden">
        <img src={dot} alt="download" />
      </div>
    </div>
  );
}

export default Hero;
