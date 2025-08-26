import Services from "./components/Services";
import Hero from "./components/Hero";
import { NavbarV1 } from "./components/ui/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Partners from "./components/Partners";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-black via-black to-blue-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-8 px-5">
      <div className="max-w-7xl w-full">
        <NavbarV1 />
        <Hero />
        <About />
        <Partners />
        <WhyUs />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
