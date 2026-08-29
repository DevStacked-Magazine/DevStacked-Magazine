import type { Metadata, Viewport } from "next";
import { Momo_Trust_Display, Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { cn } from "@/lib/utils";

const momoTrustDisplay = Momo_Trust_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-momo-trust-display",
  display: "swap",
});

const outfit = Outfit({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "devstackedmagazine | Tech Content & Web Services",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "tech content",
    "web services",
    "website development",
    "web design",
    "tech articles",
    "web development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/logos/favicon.png",
    shortcut: "/logos/favicon.png",
    apple: "/logos/favicon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "devstackedmagazine | Tech Content & Web Services",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "devstackedmagazine preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "devstackedmagazine | Tech Content & Web Services",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f1f1e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        "antialiased",
        momoTrustDisplay.variable,
        outfit.variable,
      )}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans selection:bg-red-active/40 selection:text-white">
        <main className="relative w-full max-w-[100vw] overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
