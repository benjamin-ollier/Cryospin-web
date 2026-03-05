"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import { useMagneticHover } from "@/hooks/useAnimations";

export default function Hero() {
    const [loaded, setLoaded] = useState(false);
    const magneticRef1 = useMagneticHover(0.25);
    const magneticRef2 = useMagneticHover(0.2);
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

                <p className={`${styles.subtitle} ${loaded ? styles.subtitleVisible : ""}`}>
                    Cryospin est un collier de refroidissement connecté, piloté par application.
                    Mode automatique ou contrôle manuel — la température idéale, toujours.
                </p>

                <div className={`${styles.heroCtas} ${loaded ? styles.ctasVisible : ""}`}>
                    <a
                        href="#demo"
                        className={styles.primaryBtn}
                        ref={magneticRef1 as React.Ref<HTMLAnchorElement>}
                    >
                        <span>Voir la démo</span>
                        <span className={styles.btnArrow}>→</span>
                    </a>
                    <a
                        href="#product"
                        className={styles.secondaryBtn}
                        ref={magneticRef2 as React.Ref<HTMLAnchorElement>}
                    >
                        Découvrir le produit
                    </a>
                </div>


                <div className={`${styles.gaugeWrapper} ${loaded ? styles.gaugeVisible : ""}`}>
                    <div className={styles.gauge}>
                        <div className={styles.gaugeRing} />
                        <div className={styles.gaugeTemp}>
                            37.2<span className={styles.gaugeDeg}>°C</span>
                        </div>
                        <div className={styles.gaugeLabels}>
                            <span className={`${styles.gaugeLabel} ${styles.gaugeLabelFin}`}>
                                ↓ 36.5
                            </span>
                            <span className={`${styles.gaugeLabel} ${styles.gaugeLabelDebut}`}>
                                ↑ 38.0
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.scrollIndicator} ${loaded ? styles.scrollVisible : ""}`}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
