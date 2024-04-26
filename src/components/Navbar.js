import { useTheme } from "@/context/theme";
import { RESUME_LINK } from "@/data/constant";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  //changes navbar background color as you scroll down
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setNavbarColor("bg-[#f8f8f8]/20");
    } else {
      setNavbarColor("bg-transparent");
    }
  };

  return (
    <nav
      className={`${navbarColor} fixed flex justify-between w-full text-black md:p-8 p-5 text-xl z-50 transition-all duration-300 ease-in`}
    >
      <div className="flex items-center gap-3">
        <Image
          height={50}
          width={50}
          src="/robo-icon.svg"
          alt="icon"
          className="h-7 w-7"
        />
        <h1 className="md:block hidden font-semibold">/ musabbiha_noor</h1>
      </div>
      <div className="flex gap-5">
        <a
          className="mt-[-2px] cursor-pointer hover:text-purple transition-all duration-300 ease-in "
          href="#about"
        >
          about
        </a>
        <a
          className="mt-[-2px] cursor-pointer hover:text-purple transition-all duration-300 ease-in "
          href="#portfolio"
        >
          portfolio
        </a>
        <a
          className="mt-[-2px] cursor-pointer hover:text-purple transition-all duration-300 ease-in "
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
        >
          resumé
        </a>

        {/* <button
          onClick={toggleTheme}
          className={`bg-light_purple transition-all duration-150 ease-out hover:ease-in h-6 w-10 rounded-full p-1 flex ${
            theme === "light" ? "justify-start" : "justify-end"
          }`}
        >
          <div className="h-4 w-4 bg-purple rounded-full" />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
