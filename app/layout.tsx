import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Your Lead Nest — Respond to Every Lead in Under 60 Seconds | Winnipeg",
    template: "%s | Your Lead Nest",
  },
  description:
    "AI-powered lead response automation for Winnipeg small businesses. Automatically follow up with every new inquiry in under 60 seconds via SMS, email, and phone. Built on GoHighLevel.",
  keywords: [
    "speed to lead Winnipeg",
    "lead response automation Winnipeg",
    "follow up leads automatically small business",
    "GoHighLevel Winnipeg",
    "business automation Winnipeg",
    "missed call text back Winnipeg",
    "AI lead nurturing Winnipeg",
    "CRM automation Winnipeg",
  ],
  metadataBase: new URL("https://yourleadnest.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://yourleadnest.com",
    siteName: "Your Lead Nest",
    title: "Your Lead Nest — Respond to Every Lead in Under 60 Seconds",
    description:
      "AI-powered lead response automation for Winnipeg small businesses. Never lose a lead again.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Your Lead Nest — Speed to Lead Automation for Winnipeg Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Lead Nest — Respond to Every Lead in Under 60 Seconds",
    description:
      "AI-powered lead response automation for Winnipeg small businesses.",
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
      "AI-powered lead response automation for Winnipeg small businesses. Respond to every lead in under 60 seconds.",
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
      "AI Lead Follow-Up",
      "GoHighLevel Implementation",
      "Business Automation",
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
