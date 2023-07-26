import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { createContext } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
export const ThemeContext = createContext(null);

function App() {
  const borderbottomClass =
    "relative after:absolute after:content-[''] after:h-[4px] after:bottom-[-10px] after:bg-lightblue after:w-[100%] after:left-0 after-right-0 after:rounded-lg";

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
        <Skills borderbottom={borderbottomClass} />

        {/* Projects Section */}
        <Projects borderbottom={borderbottomClass} />

        {/* About Me Section */}
        <About borderbottom={borderbottomClass} />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
