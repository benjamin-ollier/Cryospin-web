"use client";

import { useState } from "react";
import styles from "./Demo.module.css";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

export default function Demo() {
    const [activeTab, setActiveTab] = useState<"auto" | "manual">("auto");
    const [tempStart, setTempStart] = useState(38.0);
    const [tempEnd, setTempEnd] = useState(36.5);
    const [fanPower, setFanPower] = useState(70);
    const [manualOn, setManualOn] = useState(false);
    const [manualPower, setManualPower] = useState(50);

    return (
        <section className={styles.demo} id="demo">
            <div className={styles.demoHeader}>
                <ScrollReveal variant="fade-up">
                    <span className={styles.sectionLabel}>Démo interactive</span>
                </ScrollReveal>

                <TextReveal
                    text="Essayez l'interface Cryospin"
                    as="h2"
                    className={styles.sectionTitle}
                    staggerDelay={70}
                />

                <ScrollReveal variant="blur" delay={200}>
                    <p className={styles.sectionSubtitle}>
                        Interagissez avec une simulation fidèle de l&apos;application.
                    </p>
                </ScrollReveal>
            </div>

            <ScrollReveal variant="scale" duration={1200} delay={200}>
                <div className={styles.phoneWrapper}>
                    <div className={`${styles.phone} ${manualOn && activeTab === "manual" ? styles.phoneGlow : ""}`}>
                        <div className={styles.phoneNotch}>
                            <div className={styles.notchPill} />
                        </div>

                        <div className={styles.phoneBody}>
                            
                            <div className={styles.tabBar}>
                                <button
                                    className={`${styles.tab} ${activeTab === "auto" ? styles.tabActive : ""}`}
                                    onClick={() => setActiveTab("auto")}
                                >
                                    ❄️ AUTO
                                </button>
                                <button
                                    className={`${styles.tab} ${activeTab === "manual" ? styles.tabActive : ""}`}
                                    onClick={() => setActiveTab("manual")}
                                >
                                    🎛️ MANUEL
                                </button>
                            </div>

                            {activeTab === "auto" ? (
                                <>
                                    
                                    <div className={styles.demoGauge}>
                                        <div className={styles.arcContainer}>
                                            <svg className={styles.arcSvg} viewBox="0 0 200 200">
                                                <path
                                                    className={styles.arcTrack}
                                                    d="M 30 140 A 80 80 0 1 1 170 140"
                                                />
                                                <path
                                                    className={styles.arcRed}
                                                    d="M 30 140 A 80 80 0 0 1 60 60"
                                                />
                                                <path
                                                    className={styles.arcBlue}
                                                    d="M 100 20 A 80 80 0 0 1 170 140"
                                                />
                                            </svg>
                                        </div>
                                        <div className={styles.gaugeCenter}>
                                            <span className={styles.tempIcon}>🌡️</span>
                                            <span className={styles.currentTemp}>
                                                37.2<span className={styles.tempUnit}>°C</span>
                                            </span>
                                        </div>
                                        <div className={styles.gaugeFooter}>
                                            <div>
                                                <span className={styles.valLabel}>Fin</span>
                                                <span className={`${styles.gaugeVal} ${styles.valFin}`}>
                                                    ↓ {tempEnd.toFixed(1)}
                                                </span>
                                            </div>
                                            <div style={{ textAlign: "right" }}>
                                                <span className={styles.valLabel}>Début</span>
                                                <span className={`${styles.gaugeVal} ${styles.valDebut}`}>
                                                    ↑ {tempStart.toFixed(1)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className={styles.controlsPanel}>
                                        <h4 className={styles.controlsTitle}>Seuils de déclenchement</h4>

                                        <div className={styles.sliderGroup}>
                                            <div className={styles.sliderHeader}>
                                                <span className={styles.sliderLabel}>Température de début</span>
                                                <span className={styles.sliderValue}>{tempStart.toFixed(1)}°C</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="36"
                                                max="42"
                                                step="0.1"
                                                value={tempStart}
                                                onChange={(e) => setTempStart(parseFloat(e.target.value))}
                                                className={`${styles.slider} ${styles.sliderRed}`}
                                                style={{
                                                    background: `linear-gradient(to right, var(--accent-red) 0%, var(--accent-red) ${((tempStart - 36) / 6) * 100}%, var(--chrome-600) ${((tempStart - 36) / 6) * 100}%, var(--chrome-600) 100%)`,
                                                }}
                                            />
                                        </div>

                                        <div className={styles.sliderGroup}>
                                            <div className={styles.sliderHeader}>
                                                <span className={styles.sliderLabel}>Température de fin</span>
                                                <span className={styles.sliderValue}>{tempEnd.toFixed(1)}°C</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="34"
                                                max="39"
                                                step="0.1"
                                                value={tempEnd}
                                                onChange={(e) => setTempEnd(parseFloat(e.target.value))}
                                                className={`${styles.slider} ${styles.sliderBlue}`}
                                                style={{
                                                    background: `linear-gradient(to right, var(--accent-blue) 0%, var(--accent-blue) ${((tempEnd - 34) / 5) * 100}%, var(--chrome-600) ${((tempEnd - 34) / 5) * 100}%, var(--chrome-600) 100%)`,
                                                }}
                                            />
                                        </div>

                                        <div className={styles.sliderGroup}>
                                            <div className={styles.sliderHeader}>
                                                <span className={styles.sliderLabel}>Puissance ventilateur</span>
                                                <span className={styles.sliderValue}>{fanPower}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                step="1"
                                                value={fanPower}
                                                onChange={(e) => setFanPower(parseInt(e.target.value))}
                                                className={styles.slider}
                                                style={{
                                                    background: `linear-gradient(to right, var(--accent-cyan) 0%, var(--accent-cyan) ${fanPower}%, var(--chrome-600) ${fanPower}%, var(--chrome-600) 100%)`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.manualControls}>
                                        <button
                                            className={`${styles.powerButton} ${manualOn ? styles.powerButtonOn : ""}`}
                                            onClick={() => setManualOn(!manualOn)}
                                        >
                                            <span className={`${styles.fanIcon} ${manualOn ? styles.fanSpinning : ""}`}>
                                                ⏻
                                            </span>
                                        </button>
                                        <span
                                            className={`${styles.powerLabel} ${manualOn ? styles.powerLabelOn : styles.powerLabelOff}`}
                                        >
                                            {manualOn ? "Actif" : "Inactif"}
                                        </span>

                                        <div className={styles.manualSliderGroup}>
                                            <div className={styles.controlsPanel}>
                                                <div className={styles.sliderGroup}>
                                                    <div className={styles.sliderHeader}>
                                                        <span className={styles.sliderLabel}>Puissance</span>
                                                        <span className={styles.sliderValue}>{manualPower}%</span>
                                                    </div>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="100"
                                                        step="1"
                                                        value={manualPower}
                                                        onChange={(e) => setManualPower(parseInt(e.target.value))}
                                                        className={`${styles.slider} ${styles.sliderBlue}`}
                                                        style={{
                                                            background: `linear-gradient(to right, var(--accent-blue) 0%, var(--accent-blue) ${manualPower}%, var(--chrome-600) ${manualPower}%, var(--chrome-600) 100%)`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
