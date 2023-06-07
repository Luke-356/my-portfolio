import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const borderbottomClass =
    "relative after:absolute after:content-[''] after:h-[4px] after:bottom-[-10px] after:bg-lightblue after:w-[100%] after:left-0 after-right-0 after:rounded-lg";
  return (
    <div className="bg-[#252525] font-poppins">
      {/* nav bar */}
      <Navbar borderbottom={borderbottomClass} />

      <div className="max-w-screen-xl my-0 mx-auto pl-14 pt-20">
        {/* hero section */}
        <Hero />

        {/* Skills Section */}
        <div id="skills" className="bg-slate-100 h-[600px]">
          Skills
        </div>

        {/* Skills Section */}
        <div id="experience" className="bg-slate-100 h-[600px] mt-10">
          Experience
        </div>
      </div>
    </div>
  );
}

export default App;
