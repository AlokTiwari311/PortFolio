import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function Preloader() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => console.log("Preloader animation completed")} // Notify App that preloader is done
            className={styles.introduction}
        >
            {dimension.width > 0 && (
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter">
                        <span></span>
                        {words[index]}
                    </motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            )}
        </motion.div>
    );

}