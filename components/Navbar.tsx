import Image from "next/image";
import GooeyNav from "./UI/GooeyNav";
import { MdOutlineArrowOutward } from "react-icons/md";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Qualifications", href: "#qualifications" },
];

const Navbar = () => {
  return (
    <header className="border rounded-full w-full mx-auto py-3 px-3 flex justify-center xl:justify-between items-center backdrop-blur-lg">
      {/* Logo */}
      <div className="relative h-5 xl:h-10 w-[20%] xl:w-[10%] xl:mx-10">
        <Image src="/logo/logo.png" alt="Logo" fill />
      </div>
      {/* Navigation */}
      <nav className="hidden xl:flex">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </nav>
      {/* Get in touch button */}
      <div className="hidden xl:flex">
        <a
          href="#contact"
          className="border-2 bg-white font-medium text-black rounded-full flex items-center p-0.5 cursor-target active:scale-95 duration-200"
        >
          <span className="px-3 font-semibold">Get in Touch</span>
          <span className="bg-[#5227ff] rounded-full text-white p-3">
            <MdOutlineArrowOutward />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
