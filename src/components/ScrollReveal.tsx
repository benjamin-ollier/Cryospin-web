"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import styles from "./ScrollReveal.module.css";

interface ScrollRevealProps {
    children: ReactNode;
    variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "blur" | "clip-up";
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    stagger?: number;
    as?: keyof HTMLElementTagNameMap;
}

export default function ScrollReveal({
    children,
    variant = "fade-up",
    delay = 0,
    duration = 1000,
    threshold = 0.15,
    className = "",
    stagger = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin: "0px 0px -60px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${styles[variant]} ${isVisible ? styles.visible : ""} ${className}`}
            style={{
                transitionDelay: `${delay + stagger}ms`,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* Text reveal component — splits text into words and reveals them */
interface TextRevealProps {
    text: string;
    className?: string;
    staggerDelay?: number;
    threshold?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
    text,
    className = "",
    staggerDelay = 60,
    threshold = 0.15,
    as: Tag = "h2",
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold]);

    const words = text.split(" ");

    return (
        <div ref={ref} className={className}>
            <Tag className={styles.textRevealContainer}>
                {words.map((word, i) => (
                    <span key={i} className={styles.wordWrapper}>
                        <span
                            className={`${styles.word} ${isVisible ? styles.wordVisible : ""}`}
                            style={{ transitionDelay: `${i * staggerDelay}ms` }}
                        >
                            {word}
                        </span>
                    </span>
                ))}
            </Tag>
        </div>
    );
}
