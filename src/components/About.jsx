import React from "react";
import guy from "../Images/mystyle.jpg";

function About({ borderbottom }) {
  return (
    <div
      id="about"
      className="mt-32 flex justify-center items-center gap-20 lg3:flex-col sm1:mt-16 sm1:gap-6"
    >
      <div className="sm1:px-4">
        <h1
          className={`text-lightwhite text-[46px] ${borderbottom} after:w-[176px] lg6:text-[40px] sm1:text-2xl`}
        >
          About Me
        </h1>

        <p className="mt-10 w-[533px] text-[20px] text-dimwhite sm1:w-full sm1:text-base sm1:mt-6">
        I am a graduate student at Pace University, studying Computer Science. I enjoy solving problems and building software that works efficiently.
        I am looking for a Software Engineering Internship for the summer of 2025. <br /><br />

        My goal is to gain hands-on experience in software engineering. I am eager to work in a team, learn from professionals, and contribute to exciting projects.
        Feel free to contact me for internship opportunities or collaborations. <br /><br />
        
        You can reach me at nyinyilwin356@gmail.com or nl55428n@pace.edu.
        </p>

      </div>

      <img src={guy} alt="about" className="mt-[-20px] w-[40%] sm1:w-full sm1:mt-0 lg3:rounded-xl" />
    </div>
  );
}

export default About;
