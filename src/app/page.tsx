import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubRepos from "@/components/GitHubRepos";
import Education from "@/components/Education";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects limit={4} />
      <Skills />
      <GitHubRepos />
      <Education />
      <ResumeCTA />
      <Contact />
    </main>
  );
}