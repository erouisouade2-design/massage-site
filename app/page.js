import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MassageTypes from "@/components/MassageTypes";
import HomeHotel from "@/components/HomeHotel";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <MassageTypes />
      <HomeHotel />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}