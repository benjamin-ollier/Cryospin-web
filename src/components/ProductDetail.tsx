"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import styles from "./ProductDetail.module.css";
import TextScrollReveal from "./TextScrollReveal";

export default function ProductDetail() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

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

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.splitLeft}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/collar.png"
                        alt="Cryospin Collar"
                        width={600}
                        height={600}
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.splitRight} ref={rightRef}>
                <div ref={textRef} className={styles.textContent}>
                    <TextScrollReveal
                        text="Cryospin's design follows a philosophy of total minimalism — every curve and every material was selected to sit seamlessly on the neck while ensuring maximum thermal diffusion. The color palette is derived directly from the product's identity: tone-on-tone to maintain a calm, clean, and refined expression."
                        className={styles.body}
                    />
                    <TextScrollReveal
                        text="The Cryospin necklace is not a gadget — it is a comfort tool designed for people who refuse to endure the heat. Simple. Precise. Discreet."
                        className={styles.bodySecond}
                    />
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
