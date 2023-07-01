"use client";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import Fights from "./Fights";
import Countdown from "./Countdown";
import RingReady from "./RingReady";
import GeneralInformation from "./GeneralInformation";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Fights />
        <RingReady />
        <GeneralInformation />
      </main>
      <Footer />
    </>
  );
}
