import { useEffect, useState } from "react";

import Lottie from "lottie-react";
import GamingAnimation from "@/animations/Gaming.json";

import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";
import AnimatedDiv from "@/layout/AnimatedDiv";

const About = ({ typing }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    !typing &&
      setTimeout(() => {
        setShowContent(true);
      }, 1000);
  }, [typing]);

  return (
    <div className="relative z-10 flex items-start justify-center md:p-20 p-10">
      {/* {showContent && ( */}
      <>
        <div className="hidden md:block">
          <AnimatedDiv>
            <Lottie animationData={GamingAnimation} />
          </AnimatedDiv>
        </div>
        <AnimatedDiv>
          <div className="flex items-end md:mb-0 mb-10">
            <div className="md:hidden block w-28">
              <AnimatedDiv>
                <Lottie animationData={GamingAnimation} />
              </AnimatedDiv>
            </div>
            <h1 className="text-3xl font-semibold dark:text-light_purple text-purple mb-5">
              / about_me
            </h1>
          </div>
          <p className="md:w-[550px] w-full text-lg">
            I started my journey as a frontend developer in 2021 and proceeded
            to specialize in{" "}
            <span className="dark:text-light_purple text-purple">
              frontend development
            </span>{" "}
            with experties in{" "}
            <span className="dark:text-light_purple text-purple">React JS</span>
            . I love creating cool stuff that looks great and is easy to use. My
            focus is on making interfaces that are both visually stunning and
            user-friendly. I&apos;ve worked on multiple of projects, from small
            websites to big{" "}
            <span className="dark:text-light_purple text-purple">
              web applications
            </span>{" "}
            and{" "}
            <span className="dark:text-light_purple text-purple">
              mobile applications
            </span>
            .
            <br />
            <br />
            My main focus these days is building products and leading projects
            for our clients at{" "}
            <a
              href="https://onetechnologyservices.com/"
              rel="noreferrer"
              className="dark:text-light_purple text-purple underline font-semibold"
            >
              One Technology Services
            </a>
            . You can download my complete resumé from{" "}
            <a
              className="dark:text-light_purple text-purple font-semibold underline cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
            <br />
            <br />
            Here are few technologies I have been working with recently,
          </p>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              JavaScript
            </span>
            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              TypeScript
            </span>

            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              React
            </span>
            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              Next JS
            </span>
            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              React Native
            </span>
            <span className="flex items-center gap-2">
              <AiFillCaretRight className="text-xs dark:text-light_purple text-purple" />{" "}
              Angular
            </span>
          </div>
          <br />
          <p className="md:w-[550px] w-full text-lg">
            In my spare time I love to play games. I am enjoying{" "}
            <span className="dark:text-light_purple text-purple">
              Assasin's Creed
            </span>{" "}
            and{" "}
            <span className="dark:text-light_purple text-purple">
              The Backrooms
            </span>{" "}
            these days. Other than that I love hanging out with my two friends
            and spend time with my family.
          </p>
        </AnimatedDiv>
      </>
      {/* )} */}
    </div>
  );
};

export default About;
