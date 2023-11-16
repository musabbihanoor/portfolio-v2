"use-client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import GreetAnimation from "@/animations/Greetings.json";
import Lottie from "lottie-react";

import Typewriter from "typewriter-effect";
import AnimatedDiv from "@/layout/AnimatedDiv";
import { motion } from "framer-motion";

import { data } from "@/data/social";

const Hero = ({ typing, setTyping }) => {
  const [showRobo, setShowRobo] = useState(false);

  useEffect(() => {
    !typing &&
      setTimeout(() => {
        setShowRobo(true);
      }, 1000);
  }, [typing]);

  return (
    <Fragment>
      <div
        className={`md:h-[500px] h-[400px] flex items-center justify-center md:justify-between md:px-20 px-16 md:pt-32 p-32 pb-0 text-text_light bg-purple transition-all duration-150 ease-out hover:ease-in `}
      >
        <div className="bg-[url('/blobs.svg')] h-screen w-screen fixed z-10 left-0 opacity-[.1]"></div>
        <div className="relative z-20">
          <h1
            className={`md:text-5xl text-3xl font-semibold md:w-[500px] transform transition-all duration-700 ease-in hover:ease-in ${
              typing ? "md:translate-x-1/2" : "translate-x-0"
            }`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Hi there, ")
                  .pauseFor(1000)
                  .typeString("my name is Musabiha")
                  .deleteChars(3)
                  .typeString("bbiha N")
                  .deleteChars(7)
                  .typeString("biha Noor. ")
                  .pauseFor(1000)
                  .typeString("I am a frontend dev.")
                  .callFunction(() => {
                    setTyping(false);
                  })
                  .start();
              }}
            />
            {showRobo && (
              <div className="flex gap-3 md:justify-start justify-center mt-10">
                {data.map((x, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -(i * 50) }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {x.link && (
                      <a
                        href={x.link}
                        className="cursor-pointer hover:text-light_purple transition-all duration-300 ease-in"
                        target="_blank"
                      >
                        {x.icon}
                      </a>
                    )}
                    {x.value && (
                      <button
                        onClick={() => copyToClipboard(x.value, x.name)}
                        className="cursor-pointer hover:text-light_purple transition-all duration-300 ease-in"
                      >
                        {x.icon}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </h1>
        </div>
        {showRobo && (
          <div className="hidden md:block">
            <AnimatedDiv>
              <Lottie animationData={GreetAnimation} />
            </AnimatedDiv>
          </div>
        )}
      </div>
      <div className="image-container">
        <Image
          src="/wave-up.svg"
          alt="wave"
          width={500}
          height={300}
          layout="responsive"
        />
      </div>
    </Fragment>
  );
};

export default Hero;
