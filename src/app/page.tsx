"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
import SocialProof from "@/components/SocialProof";
import Menu from "@/components/Menu";
import History from "@/components/History";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Delivery />
        <SocialProof />
        <Menu />
        <History />
        <Gallery />
        <Reviews />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
