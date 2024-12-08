import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden "
    >
      <Heading title="Projects" />
      <div className="grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://studynotion-frontend.vercel.app/"
            img={ibgroup}
            alt="Study Notion website mockup"
            name="Study Notion website"
            type="Web Design • Full Stack Development"
            year="2023"
            tools="ReactJS • TailwindCSS • JavaScript • NodeJS •ExpressJS •MongoDB"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://fitnationbharat.netlify.app/"
            img={memento}
            alt="memento landing page mockup"
            name="FitNation Website"
            type="Frontend Development"
            year="2024"
            tools="ReactJS • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://codekoshtech.com/"
            img={daddy}
            alt="codekoshtech Website"
            name="codekoshtech Website"
            type="Frontend Development"
            year="2024"
            tools="ReactJS • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://konceptindiaenterprises.com/"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="konceptindiaenterprises website"
            type="Frontend Development"
            year="2024"
            tools="ReactJS • TailwindCSS • JavaScript"
          />

        </div>
      </div>
    </section>
  );
}
