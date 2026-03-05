"use client";

import dynamic from "next/dynamic";
import styles from "./Product.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

const ProductViewer3D = dynamic(() => import("./ProductViewer3D"), { ssr: false });

export default function Product() {

    return (
        <section className={styles.descriptionSection} id="product">
            <div className={styles.container}>

                <div className={styles.textGrid}>
                    <div className={styles.labelCol}>
                        <ScrollReveal variant="fade-up">
                            <span className={styles.sectionLabel}>Description</span>
                        </ScrollReveal>
                    </div>
                    <div className={styles.textCol}>
                        <TextReveal
                            text="Cryospin est un collier de refroidissement connecté conçu pour vos moments de chaleur. Le projet est ancré dans un profond respect du confort personnel, porté par un état d'esprit simple, épuré et axé sur la qualité."
                            as="h2"
                            className={styles.massiveText}
                            staggerDelay={40}
                            threshold={0.1}
                        />

                        <ScrollReveal variant="fade-up" delay={500}>
                            <button className={styles.readMoreBtn}>
                                <span className={styles.plusIcon}>+</span> Read more
                            </button>
                        </ScrollReveal>
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
                                <span className={styles.cardTitle}>Le Produit</span>
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
                                        <h3>Capteur de température</h3>
                                    </div>
                                    <p>Mesure en continu à la surface du cou pour un déclenchement précis et automatique.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureHeader}>
                                        <h3>Ventilation ajustable</h3>
                                    </div>
                                    <p>Puissance réglable de 0 à 100%, silencieux et efficace même à haute intensité.</p>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureHeader}>
                                        <h3>App WiFi</h3>
                                    </div>
                                    <p>Contrôle via ESP32. Pilotez-le depuis votre smartphone en temps réel.</p>
                                </div>
                            </div>
                            <div className={styles.cardFooter}>
                                <span className={styles.cardNum}>02</span>
                                <span className={styles.cardTitle}>Technologies</span>
                                <span className={styles.cardDetail}>ESP32</span>
                                <span className={styles.cardMeta}>Connecté</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
