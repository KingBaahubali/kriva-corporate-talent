import type { Metadata } from "next";
import { rajdhani, inter, ibmPlexMono } from "./fonts";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://krivatech.com"),
  title: {
    default: "Kriva Tech — Data, AI, Software & Operations",
    template: "%s | Kriva Tech",
  },
  description:
    "Kriva Tech builds and runs the systems that make AI possible — from egocentric video datasets and robotics training data, to cloud cost audits and full-stack software delivery. US-registered, operating across Hyderabad and Dallas/Houston.",
  keywords: [
    "AI training data",
    "egocentric video datasets",
    "robotics data collection",
    "cloud cost optimization",
    "AI consulting",
    "software engineering",
    "GCC setup India",
    "tech staffing",
    "data annotation",
    "Hyderabad",
    "Dallas",
    "Kriva Tech",
  ],
  authors: [{ name: "Kriva Technologies" }],
  creator: "Kriva Technologies",
  publisher: "Kriva Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krivatech.com",
    siteName: "Kriva Tech",
    title: "Kriva Tech — Data, AI, Software & Operations",
    description:
      "Kriva Tech builds and runs the systems that make AI possible — egocentric video datasets, cloud cost audits, and full-stack software delivery.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Kriva Tech — Data, AI, Software & Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriva Tech — Data, AI, Software & Operations",
    description:
      "Kriva Tech builds and runs the systems that make AI possible — egocentric video datasets, cloud cost audits, and full-stack software delivery.",
    images: ["/og-default.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kriva Technologies",
  url: "https://krivatech.com",
  logo: "https://krivatech.com/logo.svg",
  description:
    "Multi-divisional technology and operations company specializing in AI training data, cloud infrastructure, software engineering, IT operations, and tech staffing.",
  address: [
    { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
  ],
  areaServed: "Worldwide",
};

// Inline script to prevent flash of wrong theme — runs before React hydration
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('kriva-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${rajdhani.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Anti-flash theme script — must be inline, synchronous */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Plausible Analytics — cookieless */}
        <script
          defer
          data-domain="krivatech.com"
          src="https://plausible.io/js/script.tagged-events.js"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
