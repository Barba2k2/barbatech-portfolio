import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
