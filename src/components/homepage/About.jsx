import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Alok Tiwari"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className="translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am a <strong style={{ color: "#3498db" }}>fourth-year ECE student at BPIT</strong>, aspiring to work as a Software Development Engineer.
              <br></br>
              <br></br>I have developed several web applications, utilizing technologies like <strong style={{ color: "#e74c3c" }}>HTML, CSS, JavaScript, React, and Node.js</strong>, and have honed my skills by working on both frontend and backend development.
              <br></br>
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.linkedin.com/in/alok-tiwari-714230241/"
                style={{ fontWeight: "bold", color: "#0077b5" }}
              >
                LinkedIn
              </a> and interacting with other tech enthusiasts.
              <br></br>
              <br></br>Currently, I am open to taking on any web development projects and am confident in my ability to complete them successfully and efficiently.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
