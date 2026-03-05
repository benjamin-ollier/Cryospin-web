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
                        text="No reason to stop !"
                        as="h2"
                        className={styles.ctaTitle}
                        staggerDelay={80}
                    />
                    <ScrollReveal variant="blur" delay={300}>
                        <p className={styles.ctaSubtitle}>
                            Join the first Cryospin users. Pre-order now and get
                            an exclusive launch price.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={500}>
                        <a
                            href="mailto:contact@cryospin.fr"
                            className={styles.ctaButton}
                            ref={magneticRef as React.Ref<HTMLAnchorElement>}
                        >
                            Pre-order now
                            <span>→</span>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal variant="fade-up" delay={600}>
                        <p className={styles.ctaInfo}>
                            No commitment — free cancellation at any time.
                        </p>
                    </ScrollReveal>
                </div>
            </ScrollReveal>
        </section>
    );
}
