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

                <ScrollReveal variant="fade-up" delay={100} duration={1000} className={styles.cardWrapper}>
                    <div className={`glass-card ${styles.card}`}>
                        <h3 className={styles.cardTitle}>Mode Automatique</h3>
                        <p className={styles.cardDesc}>
                            Programmez les seuils de température et laissez Cryospin gérer le
                            refroidissement automatiquement. Le collier se déclenche et
                            s&apos;arrête selon vos paramètres.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                Température de début — seuil de déclenchement
                            </li>
                            <li className={styles.param}>
                                Température de fin — seuil d&apos;arrêt
                            </li>
                            <li className={styles.param}>
                                Puissance du ventilateur ajustable
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>


                <ScrollReveal variant="fade-up" delay={250} duration={1000} className={styles.cardWrapper}>
                    <div className={`glass-card ${styles.card}`}>
                        <h3 className={styles.cardTitle}>Mode Manuel</h3>
                        <p className={styles.cardDesc}>
                            Prenez le contrôle total avec un simple bouton on/off et un curseur
                            de puissance. Ajoutez une durée optionnelle pour un arrêt
                            automatique.
                        </p>
                        <ul className={styles.paramList}>
                            <li className={styles.param}>
                                Bouton ON / OFF instantané
                            </li>
                            <li className={styles.param}>
                                Réglage de la puissance en temps réel
                            </li>
                            <li className={styles.param}>
                                Durée de fonctionnement optionnelle
                            </li>
                        </ul>
                    </div>
                </ScrollReveal>
            </div>


            <div className={styles.secondaryCards}>
                {[
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
                        title: "Historique",
                        desc: "Consultez l'historique de chaque session avec des courbes de température détaillées."
                    },
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
                        title: "Programmation avancée",
                        desc: "Durée de fonctionnement X, déclenchement toutes les Y minutes — personnalisez votre confort."
                    },
                    {
                        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
                        title: "Profils personnalisés",
                        desc: "Sauvegardez vos paramètres favoris et chargez-les en un clic pour chaque situation."
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
