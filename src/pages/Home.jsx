import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import Extension from "../components/home/Extension";
import Languages from "../components/home/Languages";
import Portfolio from "../components/home/Portfolio";
import Contact from "../components/home/Contact";
import { profile } from "../data/profile";

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name} | Desenvolvedor Back-End`;
  }, []);
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Extension />
      <Languages />
      <Portfolio />
      <Contact />
    </>
  );
}
