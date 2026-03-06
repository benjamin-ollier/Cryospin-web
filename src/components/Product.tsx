"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./Product.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";
import { useMagneticHover } from "@/hooks/useAnimations";

const ProductViewer3D = dynamic(() => import("./ProductViewer3D"), { ssr: false });

export default function Product() {
    const [loaded, setLoaded] = useState(false);
    const magneticRef1 = useMagneticHover(0.25);
    const magneticRef2 = useMagneticHover(0.2);

    useEffect(() => {
        const timer = window.setTimeout(() => setLoaded(true), 100);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <section className={styles.descriptionSection} id="product">
            <div className={styles.container}>
                <div className={styles.heroTransferTop}>
                    <p className={`${styles.productSubtitle} ${loaded ? styles.productSubtitleVisible : ""}`}>
                        Cryospin is a connected cooling necklace controlled through an app.
                        Automatic mode or manual control — the ideal temperature, always.
                    </p>

                    <div className={`${styles.productHeroCtas} ${loaded ? styles.productCtasVisible : ""}`}>
                        <a
                            href="#demo"
                            className={styles.productPrimaryBtn}
                            ref={magneticRef1 as React.Ref<HTMLAnchorElement>}
                        >
                            <span>Watch the demonstration</span>
                            <span className={styles.productBtnArrow}>→</span>
                        </a>
                        <a
                            href="#product"
                            className={styles.productSecondaryBtn}
                            ref={magneticRef2 as React.Ref<HTMLAnchorElement>}
                        >
                            Discover the product
                        </a>
                    </div>

                    <div className={`${styles.productGaugeWrapper} ${loaded ? styles.productGaugeVisible : ""}`}>
                        <div className={styles.productGauge}>
                            <div className={styles.productGaugeRing} />
                            <div className={styles.productGaugeTemp}>
                                37.2<span className={styles.productGaugeDeg}>°C</span>
                            </div>
                            <div className={styles.productGaugeLabels}>
                                <span className={`${styles.productGaugeLabel} ${styles.productGaugeLabelFin}`}>
                                    ↓ 36.5
                                </span>
                                <span className={`${styles.productGaugeLabel} ${styles.productGaugeLabelDebut}`}>
                                    ↑ 38.0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.textGrid}>
                    <div className={styles.labelCol}>
                        <ScrollReveal variant="fade-up">
                            <span className={styles.sectionLabel}></span>
                        </ScrollReveal>
                    </div>
                    <div className={styles.textCol}>
                        <TextReveal
                            text="Cryospin is a connected cooling necklace designed for moments of heat. The project is rooted in deep respect for personal comfort, guided by a simple, refined mindset focused on quality."
                            as="h2"
                            className={styles.massiveText}
                            staggerDelay={40}
                            threshold={0.1}
                        />
                    </div>
                </div>


                <div className={styles.imageGrid}>
                    <ScrollReveal variant="fade-up" delay={200} duration={1200}>
                        <div className={styles.imageCard}>
                            <div className={styles.imageWrapper}>
                                <ProductViewer3D />
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.cardNum}>01</span>
                                <span className={styles.cardTitle}>The Product</span>
                                <span className={styles.cardDetail}>Chrome Silver</span>
                                <span className={styles.cardMeta}>Design</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="fade-up" delay={400} duration={1200}>
                        <div className={`${styles.imageCard} ${styles.featureCard}`}>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureHeader}>
                                        <h3>Temperature Sensor</h3>
                                    </div>
                                    <p>Continuously measures neck-surface temperature for precise, automatic activation.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureHeader}>
                                        <h3>Adjustable Ventilation</h3>
                                    </div>
                                    <p>Power adjustable from 0 to 100%, quiet and efficient even at high intensity.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureHeader}>
                                        <h3>Wi-Fi App</h3>
                                    </div>
                                    <p>Control via ESP32. Manage it from your smartphone in real time.</p>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.cardNum}>02</span>
                                <span className={styles.cardTitle}>Technology</span>
                                <span className={styles.cardDetail}>ESP32</span>
                                <span className={styles.cardMeta}>Connected</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
