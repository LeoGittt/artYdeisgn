import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductLines from "@/components/product-lines";
import Orders from "@/components/orders";
import ContactSection from "@/components/contact-section";
import Gallery from "@/components/gallery";
import AboutUs from "@/components/about-us";

import CatalogDownload from "@/components/catalog-download";
import DesignProcess from "@/components/design-process";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige relative">
      <Navbar />
      <Hero />
      <ProductLines />
      <Gallery />
      <DesignProcess />
      <CatalogDownload />
      <Orders />
      <ContactSection />
      <AboutUs />
    </main>
  );
}
