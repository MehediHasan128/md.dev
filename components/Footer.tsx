import { IoMdArrowRoundUp } from "react-icons/io";
import Container from "./UI/Container";
import TextPressure from "./UI/TextPressure";

const socailMedia = [
  { label: "github", href: "https://github.com/MehediHasan128" },
  { label: "linkedin", href: "" },
  { label: "facebook", href: "" },
];

const Footer = () => {
  return (
    <footer className="bg-radial-[at_75%_25%] from-[#130032] to-[#060010] to-75%">
      <Container>
        <div>
          <div className="flex">
            <div className="h-px bg-linear-to-r from-[#ffffff00] to-[#ffffff] w-full" />
            <div className="h-px bg-white w-full" />
            <div className="h-px bg-linear-to-l from-[#ffffff00] to-[#ffffff] w-full" />
          </div>
          <div className="flex justify-between items-center py-10 md:py-20">
            <h1 className="text-xs md:text-base">
              &copy; {new Date().getFullYear()} Mehedi Hasan. All rights
              reserved.
            </h1>
            <a
              href="#home"
              className="flex items-center gap-3 cursor-target text-sm md:text-base"
            >
              Back To Top{" "}
              <div className="rounded-full text-xl md:text-3xl p-1.5 md:p-2 bg-primary ">
                <IoMdArrowRoundUp />
              </div>
            </a>
          </div>
          <div>
            <p className="uppercase text-lg font-medium">
              have a project in mind?
            </p>
            <TextPressure
              text="Let's Talk"
              flex
              alpha={false}
              stroke
              width={false}
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              minFontSize={36}
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0 py-16 md:py-20">
            <div className="space-x-5">
              {socailMedia.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="border px-5 py-2 md:px-16 md:py-4 text-lg uppercase rounded-full cursor-target hover:shadow-2xl hover:shadow-primary/50 duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="text-xs md:text-base">
              <h1 className="font-light text-gray-400">
                Design by{" "}
                <span className="md:text-lg font-semibold text-white">
                  Mehedi Hasan
                </span>
              </h1>
              <h1 className="font-light text-gray-400">
                Development by{" "}
                <span className="md:text-lg font-semibold text-white">
                  Mehedi Hasan
                </span>
              </h1>
            </div>
          </div>
          <div className="text-center pb-24 leading-16">
            <h1 className="text-5xl font-medium">Thank You</h1>

            <div className="flex items-center">
              <div className="h-px bg-linear-to-r from-[#ffffff00] to-[#ffffff] w-full hidden md:flex" />
              <p className="text-gray-400 w-full text-xs md:text-base">
                for visiting my portfolio. Your time and attention mean a lot!
              </p>
              <div className="h-px bg-linear-to-l from-[#ffffff00] to-[#ffffff] w-full hidden md:flex" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
