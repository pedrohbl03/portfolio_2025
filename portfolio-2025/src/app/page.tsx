import AboutMe from "@/components/AboutMe";
import BlogPosts from "@/components/BlogPosts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
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
      <BlogPosts />
      <Newsletter />
      <Footer />
    </>
  );
}
