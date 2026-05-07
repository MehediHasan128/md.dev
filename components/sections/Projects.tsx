import Container from "@/components/UI/Container";
import TiltedCard from "@/components/UI/TiltedCard";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../UI/SectionHeading";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%"
    >
      <Container>
        <div>
          <SectionHeading
            subTitle="Portfolio Showcase"
            title={{
              firstPart: "Selected Projects That",
              lastPart: "Reflect My Skills",
            }}
            description="I enjoy building modern, scalable, and user-friendly web applications. Each project represents my passion for clean design, efficient backend systems, and seamless user experiences using the MERN stack and modern development tools."
          />

          <div className="py-20 lg:py-42 flex flex-col-reverse xl:flex-row gap-10 lg:gap-16 xl:gap-0">
            <div className="xl:w-[50%]">
              <div className="flex items-end">
                <h1 className="text-8xl md:text-9xl font-extrabold">01</h1>
                <span className="py-3">
                  <h1 className="text-xl md:text-3xl font-bold">Laivaly</h1>
                  <p className="text-sm md:text-base text-gray-400">
                    A modern full-stack clothing e-commerce platform
                  </p>
                </span>
              </div>
              <div className="text-justify md:mr-10 my-5 text-xs md:text-sm text-gray-300">
                <p>
                  Laivaly is a full-stack clothing e-commerce web application
                  built using the MERN stack. It allows users to browse
                  products, add to cart, and securely complete purchases using
                  multiple payment methods. The platform includes a dedicated
                  backend server for handling authentication, orders, and
                  payments.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:gap-5">
                <div className="md:w-[50%]">
                  <h1 className="font-medium">Key Features</h1>
                  <ul className="my-5 text-xs md:text-sm text-gray-400 list-disc list-inside space-y-2">
                    <li>User authentication with JWT & protected routes</li>
                    <li>Add to cart & wishlist functionality</li>
                    <li>Secure checkout with Stripe, PayPal & COD</li>
                    <li>Order management system</li>
                    <li>Admin dashboard for product & order control</li>
                    <li>Responsive and modern UI</li>
                  </ul>
                </div>
                <div className="md:w-[50%]">
                  <h1 className="font-medium">Tech Stack</h1>
                  <ul className="my-5 text-xs md:text-sm text-gray-400 list-disc list-inside space-y-2">
                    <li>
                      <span className="font-semibold text-gray-200">
                        Frontend:
                      </span>{" "}
                      Next.js, TypeScript, Tailwind CSS, ShadcnUI.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Backend:
                      </span>{" "}
                      Node.js, Express.js, TypeScript.
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Database:
                      </span>{" "}
                      MongoDB (Mongoose).
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Authentication:
                      </span>{" "}
                      JSON Web Token
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5 space-x-2.5">
                <a
                  href="https://github.com/MehediHasan128/laivaly-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border text-xs md:text-base px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target"
                >
                  Client Repository
                </a>
                <a
                  href="https://github.com/MehediHasan128/laivaly-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border text-xs md:text-base px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target"
                >
                  Server Repository
                </a>
                <a
                  href="https://client.laivaly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border text-xs md:text-base px-5 py-2 rounded-md hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300 cursor-target"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="xl:w-[50%] rounded-2xl relative h-96 md:h-[550px]">
              <TiltedCard
                imageSrc={"/projects/laivaly.png"}
                altText="Laivaly Project"
                captionText="Laivaly - Client Portal"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <div className="absolute top-5 right-5 bg-white text-black rounded-full p-2.5 text-lg cursor-target">
                    <a
                      href="http://client.laivaly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
