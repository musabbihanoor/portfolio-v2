import { Fragment } from "react";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { data } from "@/data/social";
import ParticleBackground from "./ParticleBackground";

const Hero = ({}) => {
  return (
    <Fragment>
      <div
        className={`relative z-10 overflow-hidden md:h-[700px] h-[400px] md:px-20 px-16 md:pt-32 p-32 pb-0 transition-all duration-150 ease-out hover:ease-in `}
      >
        <ParticleBackground />

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full">
          <h1
            className={`text-purple text-center md:text-5xl text-3xl font-semibold md:w-[500px] transform transition-all duration-700 ease-in hover:ease-in`}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("/musabiha")
                  .pauseFor(1000)
                  .deleteChars(3)
                  .typeString("bbiha_n")
                  .deleteChars(7)
                  .typeString("biha_noor.")
                  .callFunction(() => {})
                  .start();
              }}
            />
          </h1>

          <hr className="border-black w-[300px] my-5" />

          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl"
          >
            Welcome to my page.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-center mt-2"
          >
            I am a frontend developer currently working <br />
            as a software engineer for
            <a
              href="https://www.onetechnologyservices.com/"
              rel="noreferrer"
              target="_blank"
            >
              OTS.
            </a>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-3 text-black text-3xl justify-center mt-10"
          >
            {data.map((x, i) => (
              <div>
                <a
                  href={x.link}
                  className="cursor-pointer hover:text-light_purple transition-all duration-300 ease-in"
                  target="_blank"
                >
                  {x.icon}
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
