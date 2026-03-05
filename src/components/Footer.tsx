import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span className={styles.footerLogo}>Cryospin</span>
                <ul className={styles.footerLinks}>
                    <li>
                        <a href="#features" className={styles.footerLink}>
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#demo" className={styles.footerLink}>
                            Demonstration
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className={styles.footerLink}>
                            Contact
                        </a>
                    </li>
                </ul>
                <p className={styles.footerCopy}>
                    © {new Date().getFullYear()} Cryospin. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
