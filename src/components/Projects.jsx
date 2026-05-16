// src/components/Projects.jsx

import React from "react";
import link from "../Images/link.svg";

function Projects({ borderbottom, projectDatas }) {
  return (
    <div id="projects" className="min-h-fit mt-14">
      <h1
        className={`text-lightwhite text-3xl ${borderbottom} lg:after:left-[50%] lg:after:translate-x-[-50%] lg:after:bottom-[-18px] lg:after:w-[200px] lg:text-center after:w-[130px]`}
      >
        Projects
      </h1>

      {(projectDatas || []).map((projectData) => {
        return (
          <div key={projectData.id}>
            <div className="mt-14 rounded-2xl bg-dimblack grid grid-cols-[45%_55%] lg:grid-cols-1 lg:max-w-lg lg:mx-auto overflow-hidden">
              
              <div className="relative min-h-[380px] lg:min-h-[300px]">
                <img
                  src={projectData.image}
                  alt={projectData.Title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-8 sm1:p-4 flex flex-col justify-center">
                <h2 className="text-[28px] text-white sm1:text-xl">
                  {projectData.Title}
                </h2>

                <p className="text-[18px] text-dimwhite mt-5 pb-6 border-[#626262] border-b-2 sm1:text-base leading-relaxed">
                  {projectData.Ptag}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {projectData.languages.map((lang, index) => (
                    <div
                      key={index}
                      className="bg-[#212121] text-[#D8D8D8] px-4 py-2 rounded-lg text-sm"
                    >
                      {lang}
                    </div>
                  ))}
                </div>

                <a href={projectData.link} target="_blank" rel="noreferrer">
                  <div className="flex w-fit cursor-pointer mt-6 items-center gap-2">
                    <p className="text-[18px] text-white">GitHub Repository</p>
                    <img src={link} alt="link" className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;