import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Qualifications from "@/components/sections/Qualifications";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";

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
        <Qualifications />
        <Contact /> 
      </div>
      <Footer />
    </>
  );
}
