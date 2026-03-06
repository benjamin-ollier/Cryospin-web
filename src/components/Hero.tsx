"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const cursorGlowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!cursorGlowRef.current) return;
            cursorGlowRef.current.style.left = `${e.clientX}px`;
            cursorGlowRef.current.style.top = `${e.clientY}px`;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroBg}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroVideo}
                    src="/background.mp4"
                />
                <div className={styles.videoOverlay} />
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
                <div className={`${styles.orb} ${styles.orb3}`} />

                <div ref={cursorGlowRef} className={styles.cursorGlow} />
            </div>

            <div className={styles.heroContent}>
                <div className={`${styles.titleBlock} ${loaded ? styles.titleVisible : ""}`}>
                    <Image
                        src="/palmyre_flanelle.png"
                        alt="Palmyre Flanelle"
                        width={1502}
                        height={750}
                        className={styles.titleImage}
                        priority
                    />
                </div>
            </div>


        </section>
    );
}
