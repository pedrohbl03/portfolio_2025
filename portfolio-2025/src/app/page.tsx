import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
    </>
  );
}
