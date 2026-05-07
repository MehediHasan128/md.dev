import Image from "next/image";

const techStacks = [
  {
    text: "MongoDB",
    image: "/icons/mongo.png",
  },
  {
    text: "Express",
    image: "/icons/express-black.png",
  },
  {
    text: "React",
    image: "/icons/react.png",
  },
  {
    text: "Node",
    image: "/icons/node.png",
  },
  {
    text: "MongoDB",
    image: "/icons/mongo.png",
  },
  {
    text: "Express",
    image: "/icons/express-black.png",
  },
  {
    text: "React",
    image: "/icons/react.png",
  },
  {
    text: "Node",
    image: "/icons/node.png",
  },
];

const TechStack = () => {
  return (
    <section className="relative text-black">
      <div className="bg-primary absolute top-0 h-full w-full z-0 -skew-2" />
      <div className="relative bg-white z-10 skew-2 py-3 2xl:py-5">
        <div className="absolute top-0 left-0 w-10 md:w-16 lg:w-24 h-full bg-linear-to-r from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />

        <div className="flex gap-3 md:gap-5 lg:gap-10 2xl:gap-20 overflow-hidden">
          {techStacks.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 md:gap-5 2xl:gap-10"
            >
              <div className="relative h-12 w-5 md:w-10 xl:w-12 2xl:w-16 -skew-2">
                <Image src={tech.image} alt={tech.text} fill />
              </div>
              <h1 className="text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl font-medium -skew-2">
                {tech.text}
              </h1>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-10 md:w-16 lg:w-24 h-full bg-linear-to-l from-[#2c2c2c] via-[#9a9a9ac4] to-[#ffffff53]" />
      </div>
    </section>
  );
};

export default TechStack;
