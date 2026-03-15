import AboutMe from "@/components/AboutMe";
import BlogPosts from "@/components/BlogPosts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import { getBlogPosts, getProjects, getExperiences, getSkills, getSiteConfig } from "@/lib/sanity";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  const siteConfig = await getSiteConfig();
  return generateSEOMetadata(siteConfig);
}

export default async function Home() {
  // Fetch all data from Sanity in parallel
  const [blogPosts, projects, experiences, skills, siteConfig] = await Promise.all([
    getBlogPosts(),
    getProjects(),
    getExperiences(),
    getSkills(),
    getSiteConfig(),
  ]);

  // Get component visibility settings (default all to true if not configured)
  const visibility = siteConfig?.componentVisibility || {
    showHero: true,
    showAboutMe: true,
    showSkills: true,
    showExperience: true,
    showPortfolio: true,
    showBlog: true,
    showNewsletter: true,
    showFooter: true,
  };

  // Check for maintenance mode
  if (siteConfig?.siteSettings?.maintenanceMode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Site Under Maintenance</h1>
          <p className="text-muted-foreground">
            We&apos;re currently making some improvements. Please check back soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      {visibility.showHero && <Hero />}
      {visibility.showAboutMe && <AboutMe />}
      {visibility.showSkills && <Skills skills={skills} />}
      {visibility.showExperience && <Experience experiences={experiences} />}
      {visibility.showPortfolio && <Portfolio projects={projects} />}
      {visibility.showBlog && <BlogPosts posts={blogPosts} />}
      {visibility.showNewsletter && <Newsletter />}
      {visibility.showFooter && <Footer />}
    </>
  );
}
