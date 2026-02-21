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
          className={`text-lightwhite text-[46px] ${borderbottom} after:w-[176px] lg6:text-[40px] sm1:text-2xl sm1:after:w-[120px]`}
        >
          About Me
        </h1>

        <p className="mt-10 w-[533px] text-[20px] text-dimwhite sm1:w-full sm1:text-base sm1:mt-6">
        I am a recently graduated Masters in Computer Science student at Pace University. I enjoy solving problems and building software that works efficiently.
        I am currently preparing for my PhD in Computer Science admission and would love to collaborate with researchers and professionals. <br /><br />

        My goal is to conduct research in Compuer Vision and also gain hands-on experience software engineering projects. I am eager to work in a research team, learn from professionals, and contribute to exciting projects.
        Feel free to contact me for internship opportunities or collaborations. <br /><br />
        
        You can reach me at nyinyilwin356@gmail.com or nl55428n@pace.edu.
        </p>

      </div>

      <img src={guy} alt="about" className="mt-[-20px] w-[40%] sm1:w-full sm1:mt-0 lg3:rounded-xl" />
    </div>
  );
}

export default About;
