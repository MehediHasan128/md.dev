import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
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
      </div>
    </>
  );
}
