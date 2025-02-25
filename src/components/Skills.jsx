import React from "react";
import FrontIcon from "../Images/FrontIcon.svg";
import BackIcon from "../Images/BackIcon.svg";
import ToolsIcon from "../Images/ToolsIcon.svg";

function Skills({ borderbottom }) {
  return (
    <div id="skills" className="mt-3 lg6:mt-96">
      <h1
        className={`text-lightwhite text-3xl ${borderbottom} lg3:after:left-[50%] lg3:after:translate-x-[-50%] lg3:after:bottom-[-18px] lg3:after:w-[126px] lg3:text-center after:w-[100px]`}
      >
        My Skills
      </h1>

      <div className="grid gap-10 grid-cols-3 lg3:grid-cols-1 lg3:max-w-md lg3:mx-auto mt-14">
        <div className="bg-dimblack p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] text-white">Front-end</h2>
            <img src={ToolsIcon} alt="Frontend Icon" />
          </div>
          <div className="">
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>HTML</div>
              <div>CSS</div>
            </div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>Javascript</div>
              <div>React</div>
            </div>
          </div>
        </div>
        <div className="bg-dimblack p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] text-white">Front-end Tools</h2>
            <img src={FrontIcon} alt="Frontend Icon" />
          </div>
          <div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>Sass</div>
              <div>Tailwind CSS</div>
            </div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>Redux</div>
              <div>Next JS</div>
            </div>
          </div>
        </div>
        <div className="bg-dimblack p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] text-white">Back-end</h2>
            <img src={BackIcon} alt="Frontend Icon" />
          </div>
          <div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>Python</div>
              <div>SQL</div>
            </div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>C++</div>
              <div>NodeJs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
