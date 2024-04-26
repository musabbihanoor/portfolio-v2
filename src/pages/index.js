import Image from "next/image";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { useEffect, useRef, useState } from "react";
import ProjectList from "@/components/ProjectList";
import ParticleBackground from "@/components/ParticleBackground";
import Contact from "@/components/Contact";

import posthog from "posthog-js";
import initPostHog from "@/utils/posthog";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    initPostHog();
    posthog.capture("my event", { property: "value" });
  }, []);

  return (
    <div className={`${poppins.className}`}>
      <Hero typing={typing} setTyping={setTyping} />
      <About typing={typing} />
      <ProjectList />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
