"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", once = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(element);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}

export function useParallax(speed: number = 0.5) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - window.innerHeight / 2;
            setOffset(center * speed * -0.1);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [speed]);

    return { ref, offset };
}

export function useMagneticHover(strength: number = 0.3) {
    const ref = useRef<HTMLElement>(null);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        },
        [strength]
    );

    const handleMouseLeave = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0, 0)";
        ref.current.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }, []);

    const handleMouseEnter = useCallback(() => {
        if (!ref.current) return;
        ref.current.style.transition = "transform 0.15s ease-out";
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
            element.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

    return ref;
}

export function useSmoothCounter(target: number, duration: number = 2000, isActive: boolean = true) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isActive) return;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased * 10) / 10);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target, duration, isActive]);

    return value;
}
