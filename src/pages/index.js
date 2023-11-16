import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [typing, setTyping] = useState(true);

  return (
    <div className={`${poppins.className}`}>
      <Hero typing={typing} setTyping={setTyping} />
      <About typing={typing} />
    </div>
  );
}