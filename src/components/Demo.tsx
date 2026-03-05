"use client";

import Image from "next/image";
import styles from "./Demo.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

export default function Demo() {
    return (
        <section className={styles.demo} id="demo">
            <div className={styles.demoHeader}>
                <ScrollReveal variant="fade-up">
                    <span className={styles.sectionLabel}></span>
                </ScrollReveal>

                <TextReveal
                    text="Discover the Cryospin interface"
                    as="h2"
                    className={styles.sectionTitle}
                    staggerDelay={70}
                />

                <ScrollReveal variant="blur" delay={200}>
                    <p className={styles.sectionSubtitle}>
                        All your temperature data, history, and settings in the palm of your hand.
                    </p>
                </ScrollReveal>
            </div>

            <ScrollReveal variant="scale" duration={1200} delay={200}>
                <div className={styles.phoneWrapper}>
                    <div className={styles.phoneGlowContainer}>
                        <Image
                            src="/app-screenshot.png"
                            alt="Cryospin app screenshot"
                            width={320}
                            height={650}
                            className={styles.appScreenshot}
                        />
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={300} duration={800}>
                <div className={styles.downloadWrapper}>
                    <a href="#download" className={styles.downloadBtn}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.downloadIcon}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download the app
                    </a>
                </div>
            </ScrollReveal>
        </section>
    );
}
