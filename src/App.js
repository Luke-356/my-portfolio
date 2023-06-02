import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-[#252525] font-poppins">
      <div className="max-w-screen-xl my-0 mx-auto px-6">
        {/* About Section */}
        <div className="h-[600px]">
          {/* nav bar */}
          <Navbar />

          {/* hero section */}
          <Hero />
        </div>

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
