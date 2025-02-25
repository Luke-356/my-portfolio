import React from "react";
import link from "../Images/link.svg";
import { projectDatas } from "../data/projectData";

function Projects({ borderbottom }) {
  return (
    <div id="projects" className="min-h-fit mt-14">
      <h1
        className={`text-lightwhite text-3xl ${borderbottom} lg:after:left-[50%] lg:after:translate-x-[-50%] lg:after:bottom-[-18px] lg:after:w-[160px] lg:text-center after:w-[130px]`}
      >
        My Projects
      </h1>

      {projectDatas.map((projectData) => {
        return (
          <div key={projectData.id}>
            <div className="mt-14 rounded-2xl bg-dimblack flex lg:flex-col items-center lg:max-w-lg lg:mx-auto">
              <img
                src={projectData.image}
                alt="food"
                className="rounded-l-2xl lg:rounded-t-2xl lg:rounded-none lg:w-full max-w-fit	w-[547px] h-[364px]"
              />

              <div className="p-8">
                <h2 className="text-[28px] text-white">{projectData.Title}</h2>
                <p className="text-[20px] text-dimwhite mt-5 pb-6 border-[#626262] border-b-2">
                  {projectData.Ptag}
                </p>

                <a href={projectData.link} target="_blank" rel="noreferrer">
                  <div className="flex w-fit cursor-pointer mt-5">
                    <p className="text-[20px] text-white">Github Link</p>
                    <img src={link} alt="linkicon" className="ml-2" />
                  </div>
                </a>
                

                <div className="flex gap-3 mt-[22px]">
                  {projectData.languages.map((language, index) => (
                    <p
                      key={index}
                      className="bg-[#212121] py-3 px-6 rounded-[10px] text-[#D8D8D8] text-[18px]"
                    >
                      {language}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
