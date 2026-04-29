// src/components/About.jsx

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

        <p className="mt-10 w-[533px] text-[20px] text-dimwhite sm1:w-full sm1:text-base sm1:mt-6 leading-relaxed">
          I am a Computer Science graduate with a strong interest in DevOps,
          cloud infrastructure, backend systems, and deployment automation.
          I enjoy building practical systems, troubleshooting technical issues,
          and improving reliability across applications and infrastructure.
          <br />
          <br />
          My experience includes deploying containerized applications on AWS EC2,
          working with Docker, Linux environments, SQL databases, REST APIs,
          and structured data systems.
          <br />
          <br />
          I prefer practical engineering and hands-on problem solving,
          especially in areas related to infrastructure, system operations,
          cloud deployments, and automation.
          <br />
          <br />
          Email:{" "}
          <a
            href="mailto:nyinyilwin356@gmail.com"
            className="text-lightblue"
          >
            nyinyilwin356@gmail.com
          </a>
        </p>
      </div>

      <img
        src={guy}
        alt="about"
        className="mt-[-20px] w-[40%] sm1:w-full sm1:mt-0 lg3:rounded-xl"
      />
    </div>
  );
}

export default About;