"use client";

import { useEffect } from "react";
import CryptoCampaign from "@/components/ShowCaseCard";
import StorySection from "@/components/StorySection";

export default function Showcase() {
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
