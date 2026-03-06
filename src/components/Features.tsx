"use client";

import styles from "./Features.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

export default function Features() {
    return (
        <section className={styles.features} id="features">
            <div className={styles.sectionHeader}>
                <ScrollReveal variant="fade-up">
                    <span className={styles.sectionLabel}></span>
                </ScrollReveal>

                <TextReveal
                    text="Two modes, total comfort"
                    as="h2"
                    className={styles.sectionTitle}
                    staggerDelay={70}
                />

                <ScrollReveal variant="blur" delay={200}>
                    <p className={styles.sectionSubtitle}>
                        Control your Cryospin however you want: let
                        automation handle it or take manual control.
                    </p>
                </ScrollReveal>
            </div>

            <div className={styles.mainCards}>

                <ScrollReveal variant="fade-up" delay={100} duration={1000} className={styles.cardWrapper}>
                    <div className={`glass-card ${styles.card}`}>
                        <h3 className={styles.cardTitle}>Automatic Mode</h3>
                        <p className={styles.cardDesc}>
                            Set temperature thresholds and let Cryospin handle
                            cooling automatically. The necklace starts and
                            stops according to your settings.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                Start / End Temperature 
                            </li>
                            <li className={styles.param}>
                                Start / Stop threshold
                            </li>
                            <li className={styles.param}>
                                Adjustable fan power
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>


                <ScrollReveal variant="fade-up" delay={250} duration={1000} className={styles.cardWrapper}>
                    <div className={`glass-card ${styles.card}`}>
                        <h3 className={styles.cardTitle}>Manual Mode</h3>
                        <p className={styles.cardDesc}>
                            Take full control with a simple on/off button and a
                            power slider. Add an optional runtime for
                            automatic shutdown.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                Instant ON/OFF button
                            </li>
                            <li className={styles.param}>
                                Real-time power adjustment
                            </li>
                            <li className={styles.param}>
                                Optional runtime duration
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>


            <div className={styles.secondaryCards}>
                {[
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
                        title: "History",
                        desc: "View each session history with detailed temperature curves."
                    },
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                        title: "Advanced Scheduling",
                        desc: "Run time X, trigger every Y minutes — personalize your comfort."
                    },
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
                        title: "Custom Profiles",
                        desc: "Save your favorite settings and load them in one click for every situation."
                    },
                ].map((item, i) => (
                    <ScrollReveal key={i} variant="scale" delay={300 + i * 150} duration={900}>
                        <div className={`glass-card ${styles.secondaryCard}`}>
                            <span className={styles.secondaryIcon}>{item.icon}</span>
                            <h4 className={styles.secondaryTitle}>{item.title}</h4>
                            <p className={styles.secondaryDesc}>{item.desc}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
