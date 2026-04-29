// src/components/Hero.jsx

import heroIcon from "../Images/heroIcon.svg";
import arrowDown from "../Images/arrow-down.svg";
import { Link } from "react-scroll";

function Hero({ borderbottom }) {
  return (
    <div id="hero" className="h-[600px] lg6:h-auto lg6:mt-20">
      <div className="flex items-center justify-between lg6:flex-col">
        <div className="text-white mt-20 lg6:mt-0">
          <p
            className={`text-[24px] font-normal text-[#CCCCCC] no-underline ${borderbottom} lg6:after:left-[50%] lg6:after:translate-x-[-50%] lg6:after:bottom-[-10px] lg6:after:w-[150px] lg6:text-center after:w-[114px]`}
          >
            Nyi Nyi Lwin
          </p>

          <h1 className="text-[46px] lg:text-[40px] text-[#F0F0F0] font-semibold max-w-[740px] lg5:w-[500px] lg1:text-[38px] lg5:text-[34px] lg6:text-center lg6:w-auto lg6:mx-auto mt-6">
            DevOps & Systems Engineer
          </h1>

          <p className="mt-6 text-[20px] text-[#BDBDBD] max-w-[680px] leading-relaxed lg6:text-center lg6:mx-auto sm1:text-base">
            Master’s graduate in Computer Science focused on cloud infrastructure,
            deployment automation, backend systems, and reliable application delivery.
            Experienced with AWS EC2, Docker, Linux, FastAPI, SQL databases,
            and practical troubleshooting across real-world deployments.
          </p>

          <div className="flex items-center gap-4 mt-8 lg6:justify-center sm1:flex-wrap">
            <a
              href="https://github.com/Luke-356"
              target="_blank"
              rel="noreferrer"
              className="bg-lightblue text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              GitHub
            </a>

           <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-[#4A4A4A] text-white px-6 py-3 rounded-xl hover:bg-[#1E1E1E] transition"
            >
              View Resume
            </a>
          </div>

          <div className="flex gap-8 mt-10 text-[#9E9E9E] text-[17px] lg6:justify-center sm1:flex-wrap">
            <span>AWS EC2</span>
            <span>Docker</span>
            <span>Linux</span>
            <span>Python</span>
            <span>SQL</span>
          </div>
        </div>

        <div className="lg6:mt-12">
          <img
            src={heroIcon}
            alt="hero"
            className="w-[450px] lg:w-[380px] sm1:w-[280px]"
          />
        </div>
      </div>

      <div className="flex justify-center mt-16 animate-bounce">
        <Link to="about" smooth duration={500}>
          <img src={arrowDown} alt="arrow down" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;