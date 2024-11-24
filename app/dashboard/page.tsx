"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function DashboardPage() {
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
    <div className="flex">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}
