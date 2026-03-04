"use client";

import styles from "./Features.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

export default function Features() {
    return (
        <section className={styles.features} id="features">
            <div className={styles.sectionHeader}>
                <ScrollReveal variant="fade-up">
                    <span className={styles.sectionLabel}>Fonctionnalités</span>
                </ScrollReveal>

                <TextReveal
                    text="Deux modes, un confort total"
                    as="h2"
                    className={styles.sectionTitle}
                    staggerDelay={70}
                />

                <ScrollReveal variant="blur" delay={200}>
                    <p className={styles.sectionSubtitle}>
                        Contrôlez votre Cryospin comme vous le souhaitez : laissez
                        l&apos;automatisation gérer ou prenez le contrôle manuellement.
                    </p>
                </ScrollReveal>
            </div>

            <div className={styles.mainCards}>
                
                <ScrollReveal variant="fade-up" delay={100} duration={1000}>
                    <div className={`glass-card ${styles.card}`}>
                        <div className={`${styles.cardIcon} ${styles.iconBlue}`}>❄️</div>
                        <h3 className={styles.cardTitle}>Mode Automatique</h3>
                        <p className={styles.cardDesc}>
                            Programmez les seuils de température et laissez Cryospin gérer le
                            refroidissement automatiquement. Le collier se déclenche et
                            s&apos;arrête selon vos paramètres.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotRed}`} />
                                Température de début — seuil de déclenchement
                            </li>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotBlue}`} />
                                Température de fin — seuil d&apos;arrêt
                            </li>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotCyan}`} />
                                Puissance du ventilateur ajustable
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>

                
                <ScrollReveal variant="fade-up" delay={250} duration={1000}>
                    <div className={`glass-card ${styles.card}`}>
                        <div className={`${styles.cardIcon} ${styles.iconRed}`}>🎛️</div>
                        <h3 className={styles.cardTitle}>Mode Manuel</h3>
                        <p className={styles.cardDesc}>
                            Prenez le contrôle total avec un simple bouton on/off et un curseur
                            de puissance. Ajoutez une durée optionnelle pour un arrêt
                            automatique.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotRed}`} />
                                Bouton ON / OFF instantané
                            </li>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotBlue}`} />
                                Réglage de la puissance en temps réel
                            </li>
                            <li className={styles.param}>
                                <span className={`${styles.paramDot} ${styles.dotCyan}`} />
                                Durée de fonctionnement optionnelle
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>

            
            <div className={styles.secondaryCards}>
                {[
                    { icon: "📊", title: "Historique", desc: "Consultez l'historique de chaque session avec des courbes de température détaillées." },
                    { icon: "⏱️", title: "Programmation avancée", desc: "Durée de fonctionnement X, déclenchement toutes les Y minutes — personnalisez votre confort." },
                    { icon: "⚙️", title: "Profils personnalisés", desc: "Sauvegardez vos paramètres favoris et chargez-les en un clic pour chaque situation." },
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
