"use client";

import Flow from "@/components/Home/Flow";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";
import TopDataset from "@/components/Home/TopDataset";
import WhyUs from "@/components/Home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TopDataset />
      <Flow />
      <WhyUs />
    </>
  );
}
