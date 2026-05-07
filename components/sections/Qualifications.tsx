import Container from "@/components/UI/Container";
import AnimatedContent from "@/components/UI/AnimatedContent";
import SpotlightCard from "@/components/UI/SpotlightCard";
import Image from "next/image";
import SectionHeading from "../UI/SectionHeading";

const educationalQualifications = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Haider Ali High School and College",
    passingYear: "2016-2018",
    logo: "/logo/HASC.png",
    description:
      "Completed secondary education with a Science background, building strong fundamentals in Mathematics, English, and ICT. Developed early analytical and problem-solving skills.",
    spotLightColor: "#0b7244",
    delay: 0.3,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Uttara High School and College",
    passingYear: "2018-2020",
    logo: "/logo/UHSC.png",
    description:
      "Continued academic journey in Science, strengthening knowledge in mathematics and logical reasoning. Developed a deeper interest in technology and computing.",
    spotLightColor: "#fb0200",
    delay: 0.5,
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Uttara University",
    passingYear: "2022-2026",
    logo: "/logo/UU.png",
    description:
      "Specialized in full-stack web development with a strong focus on the MERN stack. Built multiple real-world projects, developing scalable applications and gaining practical experience in modern web technologies.",
    spotLightColor: "#1d45b6",
    delay: 0.7,
  },
];

const Qualifications = () => {
  return (
    <section id="qualifications">
      <Container>
        <div>
          <SectionHeading
            subTitle="Qualification & Journey"
            title={{
              firstPart: "Education Experience and",
              lastPart: "Development Journey",
            }}
            description="My academic background and continuous learning journey have helped me build strong problem-solving abilities and practical development skills in modern web technologies."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-20">
            {educationalQualifications.map((item, i) => (
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={2.5}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={item.delay}
                key={i}
              >
                <SpotlightCard
                  className="custom-spotlight-card w-full h-full hover:-translate-y-2.5 duration-500"
                  spotlightColor="#b8a9f5"
                >
                  <div className="text-black space-y-3 md:space-y-5">
                    <div className="flex flex-col md:flex-row gap-10">
                      <div className="relative w-[30%] mx-auto md:w-[20%] md:mx-0 flex items-center h-20">
                        <Image
                          src={item.logo}
                          alt={item.institution}
                          fill
                          quality={100}
                        />
                      </div>
                      <div className="w-full xl:w-[80%]">
                        <h1 className="md:text-lg font-bold">{item.degree}</h1>
                        <p className="font-medium text-gray-600 text-sm md:text-base">
                          {item.institution}
                        </p>
                        <p className="font-semibold text-primary text-sm md:text-base">
                          {item.passingYear}
                        </p>
                      </div>
                    </div>
                    <div className="text-justify font-medium text-gray-700 text-sm md:text-base">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Qualifications;
