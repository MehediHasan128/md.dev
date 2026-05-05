import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import TechStack from "@/sections/TechStack";

export default function Home() {
  return (
    <>
      <div className="fixed top-3 xl:top-10 left-1/2 transform -translate-x-1/2 right-0 z-50 w-[95%] md:w-[80%]">
        <Navbar />
      </div>
      <div>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
