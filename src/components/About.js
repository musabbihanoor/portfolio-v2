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
    <div className="relative z-20 flex items-start justify-center p-20 text-text_dark">
      {showContent && (
        <>
          <AnimatedDiv>
            <Lottie animationData={GamingAnimation} />
          </AnimatedDiv>
          <AnimatedDiv>
            <h1 className="text-3xl font-semibold text-purple mb-5">
              / about_me
            </h1>
            <p className="w-[550px] text-lg">
              I started my journey as a web developer in 2021 and proceeded to
              specialize in{" "}
              <span className="text-purple">frontend development</span> with
              experties in <span className="text-purple">React JS</span>. I love
              creating cool stuff that looks great and is easy to use. My focus
              is on making interfaces that are both visually stunning and
              user-friendly. I&apos;ve worked on multiple of projects, from
              small websites to big{" "}
              <span className="text-purple">web applications</span> and{" "}
              <span className="text-purple">mobile applications</span>.
              <br />
              <br />
              My main focus these days is building products and leading projects
              for our clients at{" "}
              <a
                href="https://onetechnologyservices.com/"
                rel="noreferrer"
                className="text-purple underline font-semibold"
              >
                One Technology Services
              </a>
              . You can download my complete resumé from{" "}
              <a
                className="text-purple font-semibold underline cursor-pointer"
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
                <AiFillCaretRight className="text-xs text-purple" /> JavaScript
              </span>
              <span className="flex items-center gap-2">
                <AiFillCaretRight className="text-xs text-purple" /> TypeScript
              </span>

              <span className="flex items-center gap-2">
                <AiFillCaretRight className="text-xs text-purple" /> React
              </span>
              <span className="flex items-center gap-2">
                <AiFillCaretRight className="text-xs text-purple" /> Next JS
              </span>
              <span className="flex items-center gap-2">
                <AiFillCaretRight className="text-xs text-purple" /> React
                Native
              </span>
              <span className="flex items-center gap-2">
                <AiFillCaretRight className="text-xs text-purple" /> Angular
              </span>
            </div>
            <br />
            <p className="w-[550px] text-lg">
              In my spare time I love to play games. I am enjoying{" "}
              <span className="text-purple">Assasin's Creed</span> and{" "}
              <span className="text-purple">The Backrooms</span> these days.
              Other than that I love hanging out with my two friends and spend
              time with my family.
            </p>
          </AnimatedDiv>
        </>
      )}
    </div>
  );
};

export default About;
