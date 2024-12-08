// src/App.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import '../../styles/style.css';
import { div } from 'framer-motion/client';
import Heading from '../ui/Heading';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main-section',
                pin: true,
                start: '50% 50%',
                end: '200% 50%',
                scrub: true,
                // markers: true,
            }
        });

        const skillIds = [
            "#animation", "#logo", "#social", "#seo", "#adobe",
            "#reels", "#html", "#digital", "#webflow", "#figma",
            "#javascript", "#wordpress", "#css", "#nodejs", "#ExpressJs", "#MongoDB", "#SQL", "#Github", "NoSQL"
        ];

        skillIds.forEach((id, index) => {
            tl.to(id, {
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (

        <div id="main-gc" className=' relative  mt-48 px-16 py-8 rounded-2xl'>
            <div className='sticky mt-12'>
                <Heading title="Skills" />
            </div>
            <div className=" d-flex-c ">
                {/* <div className=" text-center ">
                    <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight  ">
                    my expertises.
                    </h3>
                    <p className="max-w-md xl:max-w-6xl text-body-1  2xl:text-3xl   mx-auto t">
                    I specialize in design and web development, aiming to create innovative and engaging digital solutions. My focus is on delivering impactful experiences that elevate user interactions and leave a lasting impression.
                    </p>
                    </div> */}
            </div>
            <div className="main-section d-flex ">
                <div className=' p-8'>
                    <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight ">
                        my expertises.
                    </h3>
                    <p className="max-w-md xl:max-w-6xl text-body-1  2xl:text-3xl   mx-auto t">
                        I specialize in design and web development, aiming to create innovative and engaging digital solutions. My focus is on delivering impactful experiences that elevate user interactions and leave a lasting impression.
                    </p>
                </div>
                <div className="skills d-flex">
                    {/* <div className=" text-center mb-10 ">
                        <h3 className="text-heading-3 2xl:text-7xl font-semibold leading-tight  ">
                            my expertises.
                        </h3>
                        <p className="max-w-md xl:max-w-6xl text-body-1  2xl:text-3xl   mx-auto t">
                            I specialize in design and web development, aiming to create innovative and engaging digital solutions. My focus is on delivering impactful experiences that elevate user interactions and leave a lasting impression.
                        </p>
                    </div> */}
                    <h2 id="figma">HTML</h2>
                    <h2 id="adobe">CSS</h2>
                    <h2 id="html">JavaScript</h2>
                    <h2 id="css">ReactJs</h2>
                    <h2 id="javascript">Bootstrap</h2>
                    <h2 id="webflow">Tailwind CSS</h2>
                    <h2 id="wordpress">Redux</h2>
                    <h2 id="animation">Axios</h2>
                    <h2 id="seo">Gsap</h2>
                    <h2 id="digital">NextJs</h2>
                    <h2 id="logo">Framer Motion</h2>
                    <h2 id="nodejs">NodeJs</h2>
                    <h2 id="ExpressJs">ExpressJs</h2>
                    <h2 id="MongoDB">MongoDB</h2>
                </div>
            </div>
        </div>

    );
};

export default App;