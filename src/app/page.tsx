import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Features />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
