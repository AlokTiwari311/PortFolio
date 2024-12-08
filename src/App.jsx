import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";
import Cursor from "./components/ui/Cursor";
import Preloader from "./components/ui/Preloader";
import GravityCoding from "./components/homepage/GravityCoding";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Preloader state
  const sectionRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize GSAP animations after preloader finishes and DOM is ready
  useEffect(() => {
    if (!isLoading) {
      gsap.registerPlugin(ScrollTrigger);

      const sectionHeadings = document.querySelectorAll(".section-heading");
      const triggers = [];

      sectionHeadings.forEach((heading) => {
        const headings = heading.querySelectorAll(".heading");
        headings.forEach((individualHeading) => {
          const trigger = ScrollTrigger.create({
            trigger: heading,
            start: "top 550px",
            end: "bottom 550px",
            animation: gsap.to(individualHeading, {
              opacity: 1,
              y: 0,
              ease: "power4.out",
              duration: 1,
            }),
            toggleActions: "play none none none",
          });
          triggers.push(trigger);
        });
      });

      // Cleanup GSAP triggers on unmount
      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }
  }, [isLoading]); // Reinitialize GSAP only when isLoading changes

  return (
    <div className="bg-secondary-100">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <NavBar sectionRefs={sectionRefs.current} />
          <Hero />
          <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
            <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
            <About />
            <GravityCoding />
            <Services />
            <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
            <Contact />
          </main>
          <Footer />
          <Cursor />
        </>
      )}
    </div>
  );
};

export default App;