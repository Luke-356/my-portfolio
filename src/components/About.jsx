import React from "react";
import guy from "../Images/guy.svg";
import linkedin from "../Images/linkedin.svg";
import facebook from "../Images/facebook.svg";
import github from "../Images/github.svg";
import arrowdown from "../Images/arrowonedown.svg";

function About({ borderbottom }) {
  return (
    <div
      id="about"
      className="mt-32 flex justify-center items-center gap-20 lg3:flex-col"
    >
      <div>
        <h1
          className={`text-lightwhite text-[46px] ${borderbottom} after:w-[176px] lg6:text-[40px]`}
        >
          About Me
        </h1>

        <p className="mt-10 w-[533px] text-[20px] text-dimwhite">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper ac viverra mollis tellus ultrices orci elit. Quis massa
          posuere eros, non. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aenean ullamcorper ac viverra mollis tellus ultrices.
        </p>

        <div className="flex justify-between mt-8">
          <div className="flex gap-5">
            <img src={linkedin} alt="linkedin" className="cursor-pointer" />
            <img src={facebook} alt="facebook" className="cursor-pointer" />
            <img src={github} alt="github" className="cursor-pointer" />
          </div>

          <div className="flex gap-4 items-center">
            <hr className="border-dashed border-[2px] border-[#B8B8B8] w-[214px]" />
            <div className="flex gap-2 cursor-pointer">
              <p className="text-white text-[20px]">Read More</p>
              <img src={arrowdown} alt="arrowdown" />
            </div>
          </div>
        </div>
      </div>

      <img src={guy} alt="about" className="mt-[-20px] lg3:hidden" />
    </div>
  );
}

export default About;
