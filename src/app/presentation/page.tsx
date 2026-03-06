import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Présentation Produit — Cryospin",
  description:
    "Présentation complète de Cryospin, collier thermorégulateur intelligent connecté.",
};

const appCapabilities = [
  "Activer manuellement l'envoi d'air froid",
  "Utiliser un mode automatique dans lequel le collier détecte les signes de surchauffe et régule la température sans intervention",
  "Consulter les rapports d'utilisation après chaque soirée pour comparer les statistiques de température et d'activité",
  "Afficher le rythme cardiaque dans l'application et le lier aux données des soirées",
  "Enregistrer des contacts d'urgence",
  "Préenregistrer ses amis pour partager sa localisation",
  "Commander un taxi directement depuis l'application",
  "Envoyer son adresse ou sa position GPS",
  "Conserver les tickets vestiaires ou invitations de soirée",
];

export default function ProductPresentationPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`glass-card ${styles.heroVisual}`}>
            <div className={styles.viewerWrap}>
              <Image
                src="/jury2.png"
                alt="Jury visual"
                width={1200}
                height={700}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <article className={`glass-card ${styles.article}`}>
            <h1 className={styles.title}>Cryospin, le collier thermorégulateur intelligent</h1>

            <p>
              Cryospin est un collier technologique conçu pour accompagner les utilisateurs dans
              des environnements intenses, festifs ou physiquement exigeants. Inspiré de
              l&apos;esthétique industrielle et de la culture nocturne, il associe design agressif
              et fonction protectrice, transformant un accessoire en véritable dispositif de
              régulation corporelle.
            </p>

            <p>
              Au cœur du collier se trouve un module thermoélectrique Peltier capable de capter la
              chaleur et de générer du froid. Le système fonctionne grâce à deux
              micro-ventilateurs intégrés : l&apos;un aspire l&apos;air ambiant tandis que
              l&apos;autre diffuse l&apos;air refroidi vers la peau du porteur. Ce mécanisme
              permet de réduire rapidement la sensation de surchauffe, particulièrement utile dans
              des lieux chauds comme les clubs, festivals ou événements prolongés.
            </p>

            <p>
              Le collier est également équipé de LED intégrées qui signalent les différentes phases
              de fonctionnement : activation du refroidissement, régulation thermique ou veille.
              Ces indications lumineuses offrent un retour visuel discret tout en renforçant
              l&apos;identité esthétique futuriste de l&apos;objet.
            </p>

            <p>
              Cryospin est connecté à l&apos;Apple Watch et à l&apos;iPhone grâce à
              l&apos;application dédiée Cryospin App. 
            </p>

            <p>
              Cette interface permet à l&apos;utilisateur de :
            </p>

            <ul className={styles.list}>
              {appCapabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>

            <p>
              Dans une logique communautaire, Cryospin peut également fonctionner avec des
              partenariats événementiels : certains utilisateurs peuvent recevoir des entrées
              offertes ou des avantages pour des soirées partenaires.
            </p>

            <p>
              Malgré son apparence volontairement tranchante et presque défensive, inspirée de
              formes organiques et de pointes métalliques, le collier est conçu comme un objet
              protecteur. Cette dualité entre agressivité visuelle et fonction de soin constitue le
              cœur du storytelling : un accessoire qui semble dangereux, mais qui est en réalité
              pensé pour protéger, refroidir et sécuriser son porteur dans l&apos;intensité de la
              nuit.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
