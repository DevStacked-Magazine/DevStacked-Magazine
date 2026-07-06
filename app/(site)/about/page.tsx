"use client";

import AgencyHeroSection from "@/components/about/AgencyHeroSection";
import DreamToRealitySection from "@/components/about/DreamToRealitySection";
import StatsSection from "@/components/StatsSection";
import PinnedJourney from "@/components/home/PinnedJourney";
import CtaSection from "@/components/CtaSection";

export default function AboutPage() {
  return (
    <div className="relative">
      <div aria-hidden className="ambient-canvas" />
      <AgencyHeroSection />
      <DreamToRealitySection />
      <StatsSection />
      <PinnedJourney />
      <CtaSection />
    </div>
  );
}
