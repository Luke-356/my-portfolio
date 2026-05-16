import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { createContext, useEffect, useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { projectDatas } from "./data/projectData";
import { skillCards as defaultSkillCards } from "./data/skillData";
export const ThemeContext = createContext(null);

function App() {
  const borderbottomClass =
    "relative after:absolute after:content-[''] after:h-[4px] after:bottom-[-10px] after:bg-lightblue after:w-[100%] after:left-0 after-right-0 after:rounded-lg";

  const ADMIN_PASSWORD = "admin-secret";

  const getInitialData = (key, fallback) => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  };

  const [projects, setProjects] = useState(() => getInitialData("projects", projectDatas));
  const [skills, setSkills] = useState(() => getInitialData("skills", defaultSkillCards));
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    window.localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    if (showAdmin) {
      const adminSection = document.getElementById("admin");
      if (adminSection) {
        setTimeout(() => adminSection.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [showAdmin]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "y") {
        const password = window.prompt("Enter admin password");
        if (password === ADMIN_PASSWORD) {
          setIsAdminUnlocked(true);
          setShowAdmin(true);
        } else if (password !== null) {
          window.alert("Incorrect password");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleAddProject = (project) => setProjects((current) => [project, ...current]);
  const handleUpdateProject = (project) => setProjects((current) => current.map((item) => (item.id === project.id ? project : item)));
  const handleDeleteProject = (id) => setProjects((current) => current.filter((item) => item.id !== id));

  const handleAddSkill = (skill) => setSkills((current) => [skill, ...current]);
  const handleUpdateSkill = (skill) => setSkills((current) => current.map((item) => (item.id === skill.id ? skill : item)));
  const handleDeleteSkill = (id) => setSkills((current) => current.filter((item) => item.id !== id));

  // const dark = "#252525";
  // const light = "#FFFFF";
  // const [theme, setTheme] = useState("#252525");

  // const toggleTheme = () => {
  //    setTheme((curr) => (curr === "#FFFFF" ? "#252525" : "#FFFFF"));
  // };

  return (
    <div className="bg-[#252525] font-poppins h-full overflow-hidden">
      {/* nav bar */}
      <Navbar borderbottom={borderbottomClass} />

      <div className="max-w-[1279px] my-0 mx-auto px-8 pt-20">
        {/* hero section */}
        <Hero borderbottom={borderbottomClass} />

        {/* Skills Section */}
        <Skills borderbottom={borderbottomClass} skillCards={skills} />

        {/* Projects Section */}
        <Projects borderbottom={borderbottomClass} projectDatas={projects} />

        {/* About Me Section */}
        <About borderbottom={borderbottomClass} />
        {showAdmin && isAdminUnlocked && (
          <Admin
            projects={projects}
            skills={skills}
            onAddProject={handleAddProject}
            onUpdateProject={handleUpdateProject}
            onDeleteProject={handleDeleteProject}
            onAddSkill={handleAddSkill}
            onUpdateSkill={handleUpdateSkill}
            onDeleteSkill={handleDeleteSkill}
            onClose={() => setShowAdmin(false)}
          />
        )}
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
