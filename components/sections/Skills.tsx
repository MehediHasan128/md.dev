import OrbitImages from "@/components/UI/OrbitImages";
import Container from "@/components/UI/Container";
import Image from "next/image";
import SectionHeading from "../UI/SectionHeading";

const frontend = [
  "/icons/html.png",
  "/icons/css.png",
  "/icons/js.png",
  "/icons/redux.png",
  "/icons/tailwind.png",
  "/icons/next2.png",
  "/icons/figma.png",
];
const backend = [
  "/icons/express.png",
  "/icons/node.png",
  "/icons/mongo.png",
  "/icons/mongoose.png",
  "/icons/ts.png",
  "/icons/jwt.png",
];

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <>
          <SectionHeading
            subTitle="My Professional"
            title={{
              firstPart: "Background Skills and",
              lastPart: "Accomplishments",
            }}
            description="I'm skilled in HTML, CSS, JavaScript and frameworks like React and
          Node.js. Ialso have experience with database management using MongoDB."
          />
          <div className="relative my-56 md:my-80">
            <div className="relative h-24 md:h-48 lg:h-40 xl:h-48 w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[12%] mx-auto">
              <Image src={"/images/brain.png"} alt="Brain" fill quality={100} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]">
              <OrbitImages
                images={frontend}
                shape="circle"
                baseWidth={1200}
                radiusX={200}
                radiusY={80}
                rotation={-8}
                duration={30}
                itemSize={120}
                responsive={true}
                radius={470}
                direction="normal"
                fill
                showPath
                pathColor="#ffffff"
                paused={false}
              />
            </div>
            <div className="text-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full lg:w-[75%] xl:w-[60%] 2xl:w-[45%]">
              <OrbitImages
                images={backend}
                shape="circle"
                baseWidth={1200}
                radiusX={200}
                radiusY={80}
                rotation={-8}
                duration={30}
                itemSize={120}
                responsive={true}
                radius={470}
                direction="reverse"
                fill
                showPath
                pathColor="#ffffff"
                paused={false}
              />
            </div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default Skills;
