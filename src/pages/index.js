import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useState } from "react";
import ProjectList from "@/components/ProjectList";
import ParticleBackground from "@/components/ParticleBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [typing, setTyping] = useState(true);

  return (
    <div className={`${poppins.className}`}>
      <Hero typing={typing} setTyping={setTyping} />

      <div className="bg-white h-full w-screen absolute z-[10]">
        <div className="bg-[url('/hexagon-bg.svg')] h-full w-full opacity-[.1]"></div>
      </div>

      <About typing={typing} />

      <ProjectList />
    </div>
  );
}
