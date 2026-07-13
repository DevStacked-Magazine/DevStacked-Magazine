import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import HeroSection from "@/components/home/HeroSection";
import ServicesBento from "@/components/home/ServicesBento";
import TrustedMarquee from "@/components/home/TrustedMarquee";
import PinnedJourney from "@/components/home/PinnedJourney";
import ShowcaseHorizontal from "@/components/home/ShowcaseHorizontal";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Web Design, Development, and Tech Content",
  description:
    "Explore DevStacked Magazine for modern website design, development support, landing page work, and practical tech content shaped by real projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevStacked Magazine | Web Design, Development, and Tech Content",
    description:
      "Modern websites, product-facing experiences, and practical tech content from a team focused on speed, clarity, and usability.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "DevStacked Magazine website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevStacked Magazine | Web Design, Development, and Tech Content",
    description:
      "Modern websites, product-facing experiences, and practical tech content from a team focused on speed, clarity, and usability.",
    images: [siteConfig.ogImage],
  },
};

const homePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.ogImage),
  email: siteConfig.email,
  description:
    "Design and development studio creating fast websites, landing pages, and digital experiences for brands, founders, and product teams.",
};

export default function Home() {
  return (
    <div className="relative">
      <div aria-hidden className="ambient-canvas" />

      <HeroSection />
      <TrustedMarquee />
      <ServicesBento />
      <ShowcaseHorizontal />
      <StatsSection />
      <PinnedJourney />
      <TestimonialCarousel />
      <CtaSection />
      <FaqSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd),
        }}
      />
    </div>
  );
}
