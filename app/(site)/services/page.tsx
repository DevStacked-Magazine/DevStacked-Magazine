"use client";

import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServiceListSection from "@/components/services/ServiceListSection";
import PricingSection from "@/components/services/PricingSection";
import CtaSection from "@/components/CtaSection";

export default function ServicesPage() {
  return (
    <div className="relative">
      <div aria-hidden className="ambient-canvas" />
      <ServicesHeroSection />
      <ServiceListSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
