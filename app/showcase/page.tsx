"use client";

import { useEffect } from "react";
import CryptoCampaign from "@/components/ShowCaseCard";
import LiveProject from "@/components/LiveProject";
import StorySection from "@/components/StorySection";

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
      <CryptoCampaign/>
      <StorySection/>
    </div>
  );
}
