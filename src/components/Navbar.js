import { RESUME_LINK } from "@/data/constant";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between w-full text-text_light p-8 text-xl">
      <div className="flex items-center gap-3">
        <img src="/robo-icon.svg" alt="icon" className="h-7 w-7" />
        <h1 className="text-2xl font-semibold">/ musabbiha_noor</h1>
      </div>
      <div className="flex gap-5">
        <a
          className="underline cursor-pointer"
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
