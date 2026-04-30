import Image from "next/image";

const Navbar = () => {
  return (
    <header className="border rounded-full w-[80%] mx-auto mt-5 py-5 px-20">
      {/* Logo */}
      <div className="relative h-10 w-[10%]">
        <Image src="/logo/logo.png" alt="Logo" fill />
      </div>
      {/* Navigation */}
      <nav></nav>
      {/* Get in touch button */}
      <div></div>
    </header>
  );
};

export default Navbar;
