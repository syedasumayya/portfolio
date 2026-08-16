import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
       <Skills />
      <Experience />
      <Projects />
      <Education />
      <ContactCTA />
    </main>
  );
}