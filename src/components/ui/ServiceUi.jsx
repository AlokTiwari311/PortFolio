import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react"


export default function ServiceUi({ title, description, items }) {

  // const serviceRef = useRef(null);

  const serviceUi = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)
  const services = useRef(null)
  const line = useRef(null)


  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      // markers: true,
      start: "150px bottom",
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2)
        .to(line.current, { width: "100%", ease: "power4.inOut", duration: 1.5 }, 0.2)
        .to(services.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.5),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [serviceUi])


  return (
    <div ref={serviceUi} className="mt-10 grid grid-cols-1 gap-10 items-center justify-center text-center">
      {/* First column with two rows */}
      <div className="space-y-6">
        <div className="space-y-3 2xl:space-y-10">
          <h3 ref={heading} className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
            {title}
          </h3>
          <p ref={body} className="max-w-md xl:max-w-6xl text-body-1 2xl:text-3xl translate-y-10 opacity-0 mx-auto text-justify">
            {description}
          </p>
        </div>
        <div ref={line} className="h-1 w-full bg-accent-100 opacity-50"></div>
      </div>

      {/* Items layout with multiple columns if needed */}
      <div ref={services} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-secondary-500 translate-y-10 opacity-0">
        {items.map((item, index) => {
          return (
            <p key={index} className="font-general text-special 2xl:text-4xl font-extrabold">
              {item}
            </p>
          );
        })}
      </div>
      <div ref={line} className="h-1 w-full bg-accent-100 opacity-50"></div>
    </div>




  );
}
