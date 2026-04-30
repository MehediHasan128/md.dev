import Image from "next/image";
import GooeyNav from "./UI/GooeyNav";

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Qualifications", href: "#qualifications" },
];

const Navbar = () => {
  return (
    <header className="border rounded-full w-[80%] mx-auto mt-5 py-5 px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="relative h-10 w-[10%]">
        <Image src="/logo/logo.png" alt="Logo" fill />
      </div>
      {/* Navigation */}
      <nav>
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
      <div></div>
    </header>
  );
};

export default Navbar;
