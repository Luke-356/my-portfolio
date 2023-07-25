import React from "react";
import FrontIcon from "../Images/FrontIcon.svg";
import BackIcon from "../Images/BackIcon.svg";
import ToolsIcon from "../Images/ToolsIcon.svg";

function Skills({ borderbottom }) {
  return (
    <div id="skills" className="mt-3">
      <h1
        className={`text-lightwhite text-3xl ${borderbottom} after:w-[100px]`}
      >
        My Skills
      </h1>

      <div className="grid gap-10 grid-cols-3 mt-14">
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
              <div>PHP</div>
              <div>MySQL</div>
            </div>
            <div className="flex gap-5 [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8]">
              <div>SQL Server</div>
              <div>NodeJs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
