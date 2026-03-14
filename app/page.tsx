import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Experience from "@/components/pages/Experience";
import Footer from "@/components/pages/Footer";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";
import Hero from "@/components/ui/Hero";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </main>
      <Footer />
    </>
  )
}