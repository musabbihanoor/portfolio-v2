import AnimatedDiv from "@/layout/AnimatedDiv";
import Lottie from "lottie-react";
import GamingAnimation from "@/animations/Gaming.json";

import { AiFillCaretRight } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="bg-[#f8f8f8] relative z-10 flex items-center justify-center md:px-20 sm:py-40 p-10">
      <div className="hidden md:block">
        <AnimatedDiv>
          <Lottie animationData={GamingAnimation} />
        </AnimatedDiv>
      </div>
      <div>
        <div className="flex items-end md:mb-0 mb-10">
          <div className="md:hidden block w-28">
            <AnimatedDiv>
              <Lottie animationData={GamingAnimation} />
            </AnimatedDiv>
          </div>
          <h1 className="text-3xl font-semibold dark:text-light_purple text-purple mb-5">
            / contact
          </h1>
        </div>

        <p className="md:w-[550px] w-full text-lg">
          You can reach to me through my{" "}
          <a
            href="mailto:musabbihanoor33@gmail.com"
            className="dark:text-light_purple text-purple font-bold"
          >
            email
          </a>
          . I usually respond within 2 to 3 days. You can also find me on{" "}
          <a
            href="mailto:musabbihanoor33@gmail.com"
            className="dark:text-light_purple text-purple font-bold"
          >
            linkedin
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
