import Container from "@/components/UI/Container";
import ProfileCard from "@/components/UI/ProfileCard";
import React from "react";

const roles = [
  {
    label: "Frontend Magic",
    value:
      "Crafting responsive and interactive UI/UX using React.js, Tailwind CSS, and HTML5/CSS3.",
  },
  {
    label: "Backend Power",
    value:
      "Building scalable server-side applications and RESTful APIs with Node.js and Express.js.",
  },
  {
    label: "Database Management",
    value:
      "Designing structured and efficient data models using MongoDB and Mongoose.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-radial-[at_25%_25%] from-[#130032] to-[#060010] to-75%"
    >
      <Container>
        <div className="text-white mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-center">
            <div className="text-start w-full">
              <div className="h-1 xl:w-[160%] bg-primary my-8 rounded-full" />
              <h1 className="text-4xl md:text-7xl lg:text-6xl font-extrabold uppercase">
                about.
              </h1>
              <p className="text-sm md:text-base py-5 md:py-8 text-justify">
                Hi there! I{`'`}m Mehedi Hasan, a Junior Full-Stack Web
                Developer specializing in the MERN Stack. I am passionate about
                creating efficient, user-friendly, and modern web applications
                from the ground up.
              </p>
              <p className="text-base md:text-lg font-medium">
                Here is what I bring to the table
              </p>
              <ul className="p-3 md:p-5 list-inside list-disc space-y-2">
                {roles.map((role, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base lg:text-sm xl:text-base text-gray-400 text-justify"
                  >
                    <span className="font-semibold text-white">
                      {role.label}:{" "}
                    </span>
                    {role.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex justify-center">
              <ProfileCard
                name="Mehedi Hasan"
                title="Software Engineer"
                handle="Mehedi Hasan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={"/images/mehedi2.png"}
                showUserInfo
                enableTilt={true}
                enableMobileTilt
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                iconUrl={"/icons/code-02-01.png"}
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
