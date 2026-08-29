import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import HeroSection from "@/components/home/HeroSection";
import ServicesBento from "@/components/home/ServicesBento";
import TrustedMarquee from "@/components/home/TrustedMarquee";
import PinnedJourney from "@/components/home/PinnedJourney";
import ShowcaseHorizontal from "@/components/home/ShowcaseHorizontal";
import WorkingNotes from "@/components/home/WorkingNotes";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Web Design, Development, and Tech Content",
  description:
    "Websites, landing pages, and tech content from a two-person studio. Fast builds, honest timelines, and code you own.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevStacked Magazine | Web Design, Development, and Tech Content",
    description:
      "Websites and practical tech content from a two-person studio. Fast builds, honest timelines, and code you own.",
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
      "Websites and practical tech content from a two-person studio. Fast builds, honest timelines, and code you own.",
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
    "A two-person design and development studio building fast websites and landing pages for founders and small teams.",
};

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <TrustedMarquee />
      <ServicesBento />
      <ShowcaseHorizontal />
      <StatsSection />
      <PinnedJourney />
      <WorkingNotes />
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
