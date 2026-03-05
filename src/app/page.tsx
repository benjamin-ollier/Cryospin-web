import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import ProductDetail from "@/components/ProductDetail";
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
        <ProductDetail />
        <Features />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
