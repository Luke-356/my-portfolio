import webIcon from "../Images/mdi_web.svg";
import paintIcon from "../Images/bx_paint.svg";
import heroIcon from "../Images/heroIcon.svg";

function Hero() {
  return (
    <div id="hero">
      <div className="flex items-start justify-between">
        <div className="text-white mt-20">
          {/* Title */}
          <p className="text-[24px] font-normal text-[#CCCCCC] no-underline relative after:absolute after:content-[''] after:h-[4px] after:bottom-[-10px] after:bg-[#6C9EE9] after:w-[113px] after:left-0 after-right-0 after:rounded-lg">
            Nyi Nyi Lwin
          </p>
          <h1 className="text-[46px] text-[#F0F0F0] font-semibold max-w-[740px] mt-6">
            Bridging the Gap Between Ideas and Reality with Programming
          </h1>

          {/* job title */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <img src={webIcon} alt="Web Logo" />
              <p className="text-[20px] text-[#CCCCCC]">Web Developer</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={paintIcon} alt="Web Logo" />
              <p className="text-[20px] text-[#CCCCCC]">Software Engineer</p>
            </div>
          </div>
        </div>

        <img src={heroIcon} alt="hero icon" />
      </div>

      {/* Call to Action buttons */}
      <div className="flex gap-10">
        <button className="p-2 bg-[#6C9EE9]">My Projects</button>
        <button>My Resume</button>
      </div>
    </div>
  );
}

export default Hero;
