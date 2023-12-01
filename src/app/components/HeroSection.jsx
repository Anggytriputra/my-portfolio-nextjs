"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* motion: untuk animasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Anggy Triputra",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Back End Developer",
                1000,
                "Data Ethusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Loren ipsum dolor amet consectetur adipisicing elit. Quisq
            voluptatum
          </p>
          <div>
            <button className="px-6 py-6 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-secondary-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-500 hover:bg-slate-800 text-white  mt-1">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mb-6 mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#e04343] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/GST_8683.png"
              alt="image anggy"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={280}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
