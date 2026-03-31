import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Speed to Lead & AI Consulting Winnipeg | Your Lead Nest",
    template: "%s | Your Lead Nest",
  },
  description:
    "Winnipeg businesses: stop losing leads to slow response. Your Lead Nest automates speed to lead and delivers hands-on AI consulting. Book a call today.",
  keywords: [
    "speed to lead Winnipeg",
    "missed call text back Winnipeg",
    "AI consulting Winnipeg",
    "lead response automation Winnipeg",
    "missed call recovery Winnipeg",
    "AI transformation small business",
    "business automation Winnipeg",
    "AI training Winnipeg",
  ],
  metadataBase: new URL("https://yourleadnest.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://yourleadnest.com",
    siteName: "Your Lead Nest",
    title: "Your Lead Nest — Lead Recovery & AI Consulting for Winnipeg",
    description:
      "Stop losing leads and start working smarter. Instant lead recovery and AI team transformation for Winnipeg businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Lead Nest — Lead Recovery & AI Consulting for Winnipeg Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Lead Nest — Lead Recovery & AI Consulting for Winnipeg",
    description:
      "Stop losing leads and start working smarter. For Winnipeg small businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourleadnest.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Your Lead Nest",
    description:
      "Speed to lead automation and AI consulting for Winnipeg businesses. Missed call text back and automated lead response starting at $497/month.",
    url: "https://yourleadnest.com",
    areaServed: {
      "@type": "City",
      name: "Winnipeg",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Manitoba",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      addressCountry: "CA",
    },
    priceRange: "$$",
    serviceType: [
      "Lead Response Automation",
      "Missed Call Recovery",
      "AI Consulting",
      "AI Team Training",
    ],
    knowsAbout: [
      "speed to lead",
      "missed call text back",
      "AI consulting",
      "lead automation",
      "business automation",
    ],
  };

  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
