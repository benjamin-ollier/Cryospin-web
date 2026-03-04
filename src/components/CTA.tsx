"use client";

import styles from "./CTA.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";
import { useMagneticHover } from "@/hooks/useAnimations";

export default function CTA() {
    const magneticRef = useMagneticHover(0.2);

    return (
        <section className={styles.cta} id="contact">
            <div className={styles.ctaOrb1} />
            <div className={styles.ctaOrb2} />

            <ScrollReveal variant="scale" duration={1200}>
                <div className={styles.ctaInner}>
                    <TextReveal
                        text="Prêt à rester au frais ?"
                        as="h2"
                        className={styles.ctaTitle}
                        staggerDelay={80}
                    />
                    <ScrollReveal variant="blur" delay={300}>
                        <p className={styles.ctaSubtitle}>
                            Rejoignez les premiers utilisateurs du Cryospin. Pré-commandez dès
                            maintenant et profitez d&apos;un tarif de lancement exclusif.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={500}>
                        <a
                            href="mailto:contact@cryospin.fr"
                            className={styles.ctaButton}
                            ref={magneticRef as React.Ref<HTMLAnchorElement>}
                        >
                            Pré-commander maintenant
                            <span>→</span>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={600}>
                        <p className={styles.ctaInfo}>
                            Aucun engagement — annulation gratuite à tout moment.
                        </p>
                    </ScrollReveal>
                </div>
            </ScrollReveal>
        </section>
    );
}
