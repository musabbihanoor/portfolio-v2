import Lottie from "lottie-react";
import GreetingAnimation from "@/animations/Greetings.json";

import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";
import AnimatedDiv from "@/layout/AnimatedDiv";

const About = () => {
  return (
    <div className="bg-[#f8f8f8] relative z-10 flex items-start justify-center md:px-20 sm:py-40 p-10">
      <div className="hidden md:block">
        <AnimatedDiv>
          <Lottie animationData={GreetingAnimation} />
        </AnimatedDiv>
      </div>
      <AnimatedDiv>
        <div className="flex items-end md:mb-0 mb-10">
          <div className="md:hidden block w-28">
            <AnimatedDiv>
              <Lottie animationData={GreetingAnimation} />
            </AnimatedDiv>
          </div>
          <h1 className="text-3xl font-semibold dark:text-light_purple text-purple mb-5">
            / about_me
          </h1>
        </div>

        <p className="md:w-[550px] w-full text-lg">
          Hey, I am Musabbiha. I am from Karachi, Pakistan. I am a{" "}
          <span className="dark:text-light_purple text-purple">
            Software Engineer
          </span>{" "}
          by profession and I love to code. My love for coding started back in{" "}
          <span className="dark:text-light_purple text-purple">2017</span> when
          I started learning C++. I loved the creativity programming brought and
          found algorithm writing to be quite an artistic process. I enjoyed
          coming up with different solutions to solve different problems.
          <br />
          <br />I got enrolled in{" "}
          <span className="dark:text-light_purple text-purple">
            Bahria University
          </span>{" "}
          in <span className="dark:text-light_purple text-purple">2018</span> as
          a{" "}
          <span className="dark:text-light_purple text-purple">
            Computer Science
          </span>{" "}
          major and graduated with honors in{" "}
          <span className="dark:text-light_purple text-purple">2022</span>.
          During my final year I got the chance to work on an{" "}
          <a
            href="https://www.goddard-discovery.com/"
            target="_blank"
            rel="noreferrer"
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer"
          >
            AI based product
          </a>{" "}
          as an internee. Fast forward to today, I have had a priviledge for
          working with an{" "}
          <a
            href="https://codebusterspro.com/"
            target="_blank"
            rel="noreferrer"
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer"
          >
            alumini-led startup
          </a>
          , a{" "}
          <a
            href="https://www.dotsnpix.com/"
            target="_blank"
            rel="noreferrer"
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer"
          >
            UX/UI Design Agency
          </a>{" "}
          and a{" "}
          <a
            href="https://fotodino-events.de/"
            target="_blank"
            rel="noreferrer"
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer"
          >
            photography studio
          </a>
          .
          <br />
          <br />
          My main focus these days is working in the product team at{" "}
          <a
            href="https://www.onetechnologyservices.com/"
            target="_blank"
            rel="noreferrer"
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer"
          >
            OTS
          </a>{" "}
          as a{" "}
          <span className="dark:text-light_purple text-purple">
            frontend developer
          </span>
          . You can download my complete resumé from{" "}
          <a
            className="dark:text-light_purple text-purple font-semibold hover:underline cursor-pointer cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . Here are few technologies I have been working with recently,
        </p>

        <div className="grid sm:grid-cols-3 grid-cols-2 gap-3 mt-5">
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
          these days. Other than that I love hanging out with my two friends and
          spend time with my family.
        </p>
      </AnimatedDiv>
    </div>
  );
};

export default About;
