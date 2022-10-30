import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="gradient relative flex h-full items-center justify-center bg-gray-900 text-white">
      <div className="relative mx-auto flex h-full w-full flex-col items-center justify-center lg:h-3/4 lg:w-3/4 xl:h-2/3 xl:w-2/3 2xl:h-1/2 2xl:w-1/2">
        <div className="absolute -top-1 left-0">
          <Image
            src="/image/corner_top_left.svg"
            height="180px"
            width="180px"
            alt="top left corner border"
          />
        </div>
        <div className="flex w-4/5 flex-col items-center justify-center lg:w-full">
          <div className="flex flex-row">
            <Image
              src="/image/HandIcon.svg"
              height="48px"
              width="48px"
              alt="hand"
              className="animate-swing overflow-visible"
            />
            <h1 className="p-5 font-title text-3xl font-bold sm:text-5xl  lg:text-7xl">
              Hi there!
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="h-full w-[0.1rem] bg-gradient-to-b from-[#3a349e] via-[#2c7c8c] to-[#09793f] xl:w-1"></div>
            <div className="ml-2 flex flex-col">
              <span className="w-full p-1 text-left text-[0.5rem] sm:text-[0.8rem] lg:text-xl">
                I&apos;m Chong Yih, a Computer Engineering student in Nanyang
                Technological University.
              </span>
              <span className="w-full p-1 text-left text-[0.5rem] sm:text-[0.8rem] lg:text-xl">
                I&apos;ve developed an interest in web development ever since my
                intern in mid 2022! <br></br>I&apos;m excited to explore new
                technologies and improve my skill set in this vast space.
              </span>
            </div>
          </div>
          <button
            className="mt-8 hidden rounded-md border-2 border-[#2c7c8c] bg-transparent p-1 hover:bg-[#2c7c8c] hover:bg-opacity-20 md:block lg:p-3"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="bg-gradient-to-r from-[#3a349e] via-[#2c7c8c] to-[#09793f] bg-clip-text font-bold text-transparent lg:text-2xl">
              Contact Me
            </span>
          </button>
        </div>
        <div className="absolute -bottom-2 right-0 hidden sm:block">
          <Image
            src="/image/corner_bottom_right.svg"
            height="180px"
            width="180px"
            alt="top left corner border"
          />
        </div>
      </div>
      <div className="absolute bottom-3 h-6 w-4 rounded-t-xl rounded-b-xl border-[1px] border-white bg-transparent lg:h-10 lg:w-6" />
      <div className="absolute bottom-10 h-1 w-1 animate-scroll-lg rounded-sm bg-gray-100 lg:animate-scroll" />
    </div>
  );
};

export default About;
