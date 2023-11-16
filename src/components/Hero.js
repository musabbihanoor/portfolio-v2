"use-client";

import { Fragment, useEffect, useState } from "react";

import GreetAnimation from "@/animations/Greetings.json";
import Lottie from "lottie-react";

import Typewriter from "typewriter-effect";
import AnimatedDiv from "@/layout/AnimatedDiv";
import Image from "next/image";
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
        className={`h-[500px] flex items-center justify-between p-20 text-text_light bg-purple transition-all duration-150 ease-out hover:ease-in `}
      >
        <div className="bg-[url('/blobs.svg')] h-screen w-screen fixed z-[20] opacity-[.1]"></div>
        <div>
          <h1
            className={`text-5xl font-semibold w-[500px] transform transition-all duration-700 ease-in hover:ease-in ${
              typing ? "translate-x-1/2" : "translate-x-0"
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
              <div className="flex gap-3 mt-10">
                {data.map((x, i) => (
                  <>
                    {x.link && (
                      <a href={x.link} target="_blank">
                        {x.icon}
                      </a>
                    )}
                    {x.value && <button>{x.icon}</button>}
                  </>
                ))}
              </div>
            )}
          </h1>
        </div>
        {showRobo && (
          <AnimatedDiv>
            <Lottie animationData={GreetAnimation} />
          </AnimatedDiv>
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
