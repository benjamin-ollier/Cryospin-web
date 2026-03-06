"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback, useState } from "react";
import styles from "./ProductDetail.module.css";

const carouselImages = [
    { src: "/collar.png", alt: "Cryospin collar front view" },
    { src: "/collar3.png", alt: "Cryospin collar side view" },
    { src: "/fegr.png", alt: "Cryospin collar close-up view" },
];

export default function ProductDetail() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleScroll = useCallback(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const right = rightRef.current;
        if (!section || !text || !right) return;

        const sectionRect = section.getBoundingClientRect();
        const rightH = right.clientHeight;
        const textH = text.clientHeight;
        const maxOffset = rightH - textH;

        // progress: 0 when section top hits top of viewport, 1 when section bottom hits bottom of viewport
        const scrollable = sectionRect.height - window.innerHeight;
        const scrolled = -sectionRect.top;
        const progress = scrollable > 0 ? Math.max(0, Math.min(1, scrolled / scrollable)) : 0;

        const offset = progress * maxOffset;
        text.style.transform = `translateY(${offset}px)`;
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % carouselImages.length);
        }, 2600);

        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.splitLeft}>
                <div className={styles.imageContainer}>
                    <div className={styles.carousel} aria-label="Cryospin collar carousel">
                        {carouselImages.map((image, index) => (
                            <Image
                                key={image.src}
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={600}
                                className={`${styles.carouselImage} ${index === activeSlide ? styles.carouselImageActive : ""}`}
                                priority={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.splitRight} ref={rightRef}>
                <div ref={textRef} className={styles.textContent}>
                    <p className={styles.body}>
                        Cryospin&apos;s design follows a philosophy of total minimalism — every
                        curve and every material was selected to sit seamlessly on the neck while
                        ensuring maximum thermal diffusion. The color palette is derived directly
                        from the product&apos;s identity: tone-on-tone to maintain a calm, clean,
                        and refined expression.
                    </p>
                    <p className={styles.bodySecond}>
                        The Cryospin necklace is not a gadget — it is a comfort tool designed for
                        people who refuse to endure the heat. Simple. Precise. Discreet.
                    </p>
                </div>

                <div className={styles.specFooter}>
                    <div className={styles.specRow}>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>36–42</span>
                            <span className={styles.specLabel}>cm — universal fit</span>
                        </div>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>180g</span>
                            <span className={styles.specLabel}>ultra-light</span>
                        </div>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>8h</span>
                            <span className={styles.specLabel}>battery life</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
