import { RESUME_LINK } from "@/data/constant";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between w-full text-text_light p-8 text-xl z-20">
      <div className="flex items-center gap-3">
        <img src="/robo-icon.svg" alt="icon" className="h-7 w-7" />
        <h1 className="md:text-2xl font-semibold">/ musabbiha_noor</h1>
      </div>
      <div className="flex gap-5">
        <a
          className="mt-[-2px] underline cursor-pointer hover:text-light_purple transition-all duration-300 ease-in "
          href={RESUME_LINK}
          target="_blank"
          rel="noreferrer"
        >
          resumé
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
