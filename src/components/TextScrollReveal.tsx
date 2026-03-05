"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./TextScrollReveal.module.css";

interface TextScrollRevealProps {
    text: string;
    className?: string;
}

function Word({ word, progress, start, end }: {
    word: string;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    start: number;
    end: number;
}) {
    const opacity = useTransform(progress, [start, end], [0.15, 1]);

    return (
        <motion.span className={styles.word} style={{ opacity }}>
            {word}{" "}
        </motion.span>
    );
}

export default function TextScrollReveal({ text, className = "" }: TextScrollRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.4"],
    });

    return (
        <div ref={containerRef} className={`${styles.container} ${className}`}>
            <p className={styles.text}>
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = Math.min(1, (i + 1) / words.length + 0.05);
                    return (
                        <Word
                            key={i}
                            word={word}
                            progress={scrollYProgress}
                            start={start}
                            end={end}
                        />
                    );
                })}
            </p>
        </div>
    );
}
