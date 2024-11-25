"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import LiveProject from "@/components/LiveProject";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  });
  return (
    <div>
      <HeroSection/>
      <LiveProject/>
      <Testimonials/>
      <ContactUs/>
      <Tokenomics />
    </div>
  );
}
