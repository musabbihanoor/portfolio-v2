import { Fragment } from "react";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { data } from "@/data/social";
import ParticleBackground from "./ParticleBackground";

const Hero = ({}) => {
  return (
    <Fragment>
      <div
        className={`relative z-10 overflow-hidden flex flex-col items-center justify-center md:h-[700px] h-[600px] md:px-20 px-16 md:pt-32 py-10 pb-0 transition-all duration-150 ease-out hover:ease-in `}
      >
        <ParticleBackground />
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

        <hr className="border-[#ccc] w-[300px] my-5" />

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
          Hey, I am a software engineer with a <br />
          focus on{" "}
          <span className="text-purple font-semibold">
            frontend development
          </span>
          .
          {/* <a
            href="https://www.onetechnologyservices.com/"
            rel="noreferrer"
            target="_blank"
            className="text-purple font-semibold hover:underline"
          >
            OTS.
          </a> */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-3 text-black text-3xl justify-center mt-10"
        >
          {data.map((x, i) => (
            <div key={i}>
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

        {/* <a
          target="_blank"
          rel="noreferrer"
          href="#about"
          className="mt-10 border-2 border-purple text-lg px-6 py-2 rounded-lg text-purple hover:text-white hover:bg-purple transition-all"
        >
          Visit
        </a> */}
      </div>
    </Fragment>
  );
};

export default Hero;
