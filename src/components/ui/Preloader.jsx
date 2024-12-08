import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "../Preloader/Preloader.module.css"

const words = ["Hello", "Bonjour", "नमस्ते", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

const slideUp = {
    initial: { top: 0 },
    exit: {
        top: "-100vh",
        transition: { duration: 2, ease: [0.76, 0, 0.24, 1], delay: 1 },
    },
};

const Preloader = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="preloader"
            initial="initial"
            animate="initial"
            exit="exit"
            variants={slideUp}
        >
            <div className="preloader-text">
                {words[index]}
                <span></span>
            </div>
        </motion.div>
    );
};

export default Preloader;