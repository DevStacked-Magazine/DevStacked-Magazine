"use client";

import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServiceListSection from "@/components/services/ServiceListSection";
import ServicesBento from "@/components/home/ServicesBento";
import PricingSection from "@/components/services/PricingSection";
import CtaSection from "@/components/CtaSection";

export default function ServicesPage() {
  return (
    <div className="relative isolate pb-20">
      <ServicesHeroSection />
      <ServiceListSection />
      <ServicesBento />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
