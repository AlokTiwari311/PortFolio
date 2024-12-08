import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Version Control",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "Webflow",
    "GSAP",
    "TailwindCSS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "RESTful APIs",
    "SQL"

  ];



  return (
    <section className="h-[40vh] opacity-0 pointer-events-none" aria-label="services">
      <Heading title="services" />
      <div className="">
        {/* <ServiceUi
          title="my expertises."
          description="I specialize in design and web development, aiming to create innovative and engaging digital solutions. My focus is on delivering impactful experiences that elevate user interactions and leave a lasting impression."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        /> */}


      </div>
    </section>
  );
}
