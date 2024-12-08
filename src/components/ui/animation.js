import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateElements = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-section",
      pin: true,
      start: "50% 50%",
      end: "300% 50%",
      scrub: true,
    },
  });

  // Define animation sequence for each skill
  const skills = [
    "animation",
    "logo",
    "social",
    "seo",
    "adobe",
    "reels",
    "html",
    "digital",
    "webflow",
    "figma",
    "javascript",
    "wordpress",
    "css",
  ];

  skills.forEach((skill, index) => {
    tl.to(`#${skill}`, {
      opacity: 1,
      filter: "blur(0px)",
      delay: index === 0 ? 0 : -0.3, // Stagger effect
    });
  });
};
