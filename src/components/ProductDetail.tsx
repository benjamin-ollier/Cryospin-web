"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback, useState } from "react";
import styles from "./ProductDetail.module.css";

type CarouselItem =
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; ariaLabel: string };

const carouselItems: CarouselItem[] = [
    { type: "image", src: "/collar.png", alt: "Cryospin collar front view" },
    { type: "image", src: "/mannequin_profil.png", alt: "Cryospin mannequin profile view" },
    { type: "image", src: "/fegr.png", alt: "Cryospin collar close-up view" },
    { type: "video", src: "/video.mp4", ariaLabel: "Cryospin product video" },
];

export default function ProductDetail() {
    const IMAGE_SLIDE_DURATION_MS = 2600;
    const VIDEO_SLIDE_FALLBACK_DURATION_MS = 4000;

    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [videoSlideDurationMs, setVideoSlideDurationMs] = useState(VIDEO_SLIDE_FALLBACK_DURATION_MS);

    const handleScroll = useCallback(() => {
        const section = sectionRef.current;
        const text = textRef.current;
        const right = rightRef.current;
        if (!section || !text || !right) return;

        const sectionRect = section.getBoundingClientRect();
        const rightH = right.clientHeight;
        const textH = text.clientHeight;
        const maxOffset = rightH - textH;

        // progress: 0 when section top hits top of viewport, 1 when section bottom hits bottom of viewport
        const scrollable = sectionRect.height - window.innerHeight;
        const scrolled = -sectionRect.top;
        const progress = scrollable > 0 ? Math.max(0, Math.min(1, scrolled / scrollable)) : 0;

        const offset = progress * maxOffset;
        text.style.transform = `translateY(${offset}px)`;
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const activeItem = carouselItems[activeSlide];
        const slideDurationMs =
            activeItem.type === "video" ? videoSlideDurationMs : IMAGE_SLIDE_DURATION_MS;

        const timeoutId = window.setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % carouselItems.length);
        }, slideDurationMs);

        return () => window.clearTimeout(timeoutId);
    }, [activeSlide, videoSlideDurationMs]);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.splitLeft}>
                <div className={styles.imageContainer}>
                    <div className={styles.carousel} aria-label="Cryospin collar carousel">
                        {carouselItems.map((item, index) =>
                            item.type === "image" ? (
                                <Image
                                    key={item.src}
                                    src={item.src}
                                    alt={item.alt}
                                    width={600}
                                    height={600}
                                    className={`${styles.carouselImage} ${index === activeSlide ? styles.carouselImageActive : ""}`}
                                    priority={index === 0}
                                />
                            ) : (
                                <video
                                    key={item.src}
                                    src={item.src}
                                    className={`${styles.carouselVideo} ${index === activeSlide ? styles.carouselImageActive : ""}`}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    aria-label={item.ariaLabel}
                                    onLoadedMetadata={(event) => {
                                        const duration = event.currentTarget.duration;
                                        if (!Number.isFinite(duration) || duration <= 0) return;
                                        // Keep one full playback + a small buffer for transition.
                                        setVideoSlideDurationMs(
                                            Math.max(
                                                IMAGE_SLIDE_DURATION_MS,
                                                Math.ceil(duration * 1000) + 400,
                                            ),
                                        );
                                    }}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.splitRight} ref={rightRef}>
                <div ref={textRef} className={styles.textContent}>
                    <p className={styles.body}>
                        Cryospin&apos;s design follows a philosophy of total minimalism — every
                        curve and every material was selected to sit seamlessly on the neck while
                        ensuring maximum thermal diffusion. The color palette is derived directly
                        from the product&apos;s identity: tone-on-tone to maintain a calm, clean,
                        and refined expression.
                    </p>
                    <p className={styles.bodySecond}>
                        The Cryospin necklace is not a gadget — it is a comfort tool designed for
                        people who refuse to endure the heat. Simple. Precise. Discreet.
                    </p>
                </div>

                <div className={styles.specFooter}>
                    <div className={styles.specRow}>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>36–42</span>
                            <span className={styles.specLabel}>cm — universal fit</span>
                        </div>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>180g</span>
                            <span className={styles.specLabel}>ultra-light</span>
                        </div>
                        <div className={styles.spec}>
                            <span className={styles.specValue}>8h</span>
                            <span className={styles.specLabel}>battery life</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
