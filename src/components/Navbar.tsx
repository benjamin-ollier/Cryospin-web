"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContent}>
                <span className={styles.logo}>Cryospin</span>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#features" className={styles.navLink}>
                            Fonctionnalités
                        </a>
                    </li>
                    <li>
                        <a href="#demo" className={styles.navLink}>
                            Démo
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.navLink}>
                            Contact
                        </a>
                    </li>
                </ul>
                <a href="#contact" className={styles.ctaButton}>
                    Pré-commander
                </a>
            </div>
        </nav>
    );
}
