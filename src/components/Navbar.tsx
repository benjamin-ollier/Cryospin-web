"use client";

import Link from "next/link";
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
                <Link href="/" className={styles.logo} aria-label="Go to homepage">
                    Cryospin
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/#features" className={styles.navLink}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href="/#demo" className={styles.navLink}>
                            Demonstration
                        </Link>
                    </li>
                    <li>
                        <Link href="/presentation" className={styles.navLink}>
                            Story
                        </Link>
                    </li>
                    <li>
                        <a href="https://palmyre-flanelle-shop.myshopify.com/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                            Shop
                        </a>
                    </li>
                    <li>
                        <Link href="/#contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link href="/#contact" className={styles.ctaButton}>
                    Pre-order
                </Link>
            </div>
        </nav>
    );
}
