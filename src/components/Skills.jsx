import React from "react";

function Skills({ borderbottom, skillCards }) {
  return (
    <div id="skills" className="mt-3 lg6:mt-8">
      <h1
        className={`text-lightwhite text-3xl ${borderbottom} lg3:after:left-[50%] lg3:after:translate-x-[-50%] lg3:after:bottom-[-18px] lg3:after:w-[126px] lg3:text-center after:w-[100px]`}
      >
        My Skills
      </h1>

      <div className="grid gap-10 grid-cols-3 lg3:grid-cols-1 lg3:max-w-md lg3:mx-auto mt-14 sm1:gap-5">
        {(skillCards || []).map((card) => (
          <div key={card.id} className="bg-dimblack p-4 rounded-xl sm1:p-3">
            <div className="flex items-center justify-between sm1:gap-2">
              <h2 className="text-[24px] text-white sm1:text-lg">{card.title}</h2>
              <div className="w-12 h-12 rounded-full bg-lightblue p-2 flex items-center justify-center sm1:w-10 sm1:h-10">
                <img
                  src={`https://unpkg.com/feather-icons@4.29.2/dist/icons/${card.icon}.svg`}
                  alt={`${card.title} icon`}
                  className="w-8 h-8"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>
            <div>
              <div className="flex gap-5 flex-wrap [&>*]:bg-[#212121] [&>*]:rounded-lg [&>*]:py-3 [&>*]:px-5 text-center text-[20px] mt-5 text-[#D8D8D8] sm1:gap-2 sm1:[&>*]:text-sm sm1:[&>*]:px-2 sm1:[&>*]:py-2">
                {card.tags.map((tag, i) => (
                  <div key={i}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
