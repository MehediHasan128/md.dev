"use client";

import { IoMailOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import type { FieldValues } from "react-hook-form";
import GridBackgroundDemo from "@/components/UI/GridBackgroundDemo";
import MForm from "@/Form/MForm";
import MInput from "@/Form/MInput";
import MTextArea from "@/Form/MTextArea";
import GlassIcons from "@/components/UI/GlassIcons";
import Image from "next/image";
import Container from "@/components/UI/Container";
import { PinContainer } from "@/components/UI/3d-pin";

const items = [{ icon: <IoMailOutline />, color: "#5227ff", label: "Conatct" }];

const Contact = () => {
  const handleEmailSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="bg-radial-[at_75%_75%] from-[#130032] to-[#060010] to-75%"
    >
      <Container>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-0">
          <div className="xl:w-[50%]">
            <GlassIcons items={items} className="custom-class py-10" />
            <h1 className="text-5xl md:text-6xl font-extrabold">
              Get In Touch
            </h1>
            <p className="py-5 xl:py-10 xl:pr-36 text-justify text-gray-400 text-sm md:text-base">
              I specialize in developing modern full-stack applications using
              the MERN stack with a strong focus on performance and clean
              architecture. I’m passionate about solving real-world problems and
              continuously improving my skills. Let’s connect and discuss how I
              can contribute to your next project.
            </p>

            <div className="flex flex-wrap md:flex-row items-center gap-2 lg:gap-5 text-gray-400 text-sm md:text-base">
              <p>mehedihasanbaized@gmail.com</p>
              <span>
                <GoDotFill className="text-sm" />
              </span>
              <p>+8801302557956</p>
              <span>
                <GoDotFill className="text-sm" />
              </span>
              <p>Uttara Dhaka-1230, Bangladesh</p>
            </div>

            <div className="mt-16 lg:w-[70%] lg:mx-auto xl:mx-0 xl:w-[85%] relative">
              <div className="relative h-90">
                <Image
                  src={"/images/world2.png"}
                  alt="WorldMap"
                  fill
                  quality={100}
                />
              </div>
              <div className="absolute -top-[92px] -right-[75px] md:-top-9 md:right-2 lg:-top-11 lg:-right-1.5 xl:-top-16 xl:-right-8 2xl:-top-7 2xl:right-5">
                <PinContainer
                  title="I'm Here"
                />
              </div>
            </div>
          </div>

          <div className="xl:w-[50%] rounded-4xl overflow-hidden">
            <div className="relative h-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <GridBackgroundDemo />
              </div>
              <div className="bg-radial-[at_75%_25%] from-[#13003200] to-[#0b001bf9] to-35% absolute top-0 left-0 w-full h-full z-0" />
              {/* Form container */}
              <div className="w-full md:w-[75%] mx-auto md:flex md:justify-center md:items-center h-full z-10 relative px-5 py-10 md:px-0">
                <MForm onSubmit={handleEmailSubmit}>
                  <div className="space-y-5 w-full">
                    <div className="flex flex-col md:flex-row gap-5">
                      <MInput
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        label="First Name"
                      />
                      <MInput
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        label="Last Name"
                      />
                    </div>
                    <MInput
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      label="Email Address"
                    />
                    <MInput
                      type="text"
                      name="subject"
                      placeholder="Project inquiry / Collaboration / Hiring"
                      label="Subject"
                    />
                    <MTextArea
                      name="message"
                      placeholder="Tell me about your project, idea, or how I can help you..."
                      label="Message"
                    />
                    <input
                      type="submit"
                      value="Send Message"
                      className="rounded-md bg-primary px-10 py-3 cursor-target cursor-pointer"
                    />
                  </div>
                </MForm>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
