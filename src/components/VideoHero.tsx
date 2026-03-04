"use client";

import { useEffect, useState } from "react";
import styles from "./VideoHero.module.css";

export default function VideoHero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={styles.videoHero}>
            
            <div className={styles.videoWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.heroVideo}
                    src="/background.mp4"
                >
                    
                    <div className={styles.chromeNoise} />
                </video>
                <div className={styles.videoOverlay} />
            </div>

            
            <div className={styles.content}>
                <div className={`${styles.titleWrapper} ${loaded ? styles.revealed : ""}`}>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>
                            {"CRYOSPIN".split("").map((letter, i) => (
                                <span
                                    key={i}
                                    className={styles.letter}
                                    style={{ transitionDelay: `${400 + i * 60}ms` }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </span>
                    </h1>
                </div>

                <p className={`${styles.tagline} ${loaded ? styles.taglineVisible : ""}`}>
                    Le collier connecté qui vous rafraîchit
                </p>
            </div>

            
            <div className={`${styles.scrollHint} ${loaded ? styles.scrollVisible : ""}`}>
                <span className={styles.scrollText}>Scroll</span>
                <div className={styles.scrollLine}>
                    <div className={styles.scrollDot} />
                </div>
            </div>
        </section>
    );
}
