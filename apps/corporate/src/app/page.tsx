import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { HomeDivisionSections } from "@/components/home/HomeDivisionSections";
import { ClientLogos } from "@/components/home/ClientLogos";
import { WhyKriva } from "@/components/home/WhyKriva";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "Kriva Tech — Quality in Quantity, Delivered.",
  description:
    "Kriva Tech is a multi-division technology company — AI data collection, cloud infrastructure, software engineering, IT operations, and tech staffing.",
  alternates: { canonical: "https://krivatech.com" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />            {/* ← moved up, right after hero */}
        <HomeDivisionSections /> {/* 5 full division sections */}
        <ClientLogos />          {/* client portfolio strip */}
        <WhyKriva />             {/* 4 differentiators */}
        <HomeCTA />              {/* final CTA band */}
      </main>
      <Footer />
    </>
  );
}
