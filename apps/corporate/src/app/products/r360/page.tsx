import type { Metadata } from "next";
import { ProductLayout, type ProductData } from "@/components/layout/ProductLayout";

export const metadata: Metadata = {
  title: "R360 — Kriva Tech",
  description: "End-to-end AI-powered recruiting and staffing platform built by Kriva.",
};

const data: ProductData = {
  eyebrow: "R360 Platform",
  name: "R360",
  tagline: "The end-to-end, AI-run recruiting and staffing platform.",
  overview:
    "R360 is a dedicated Applicant Tracking System (ATS) and staffing ecosystem built by Kriva. It's available as a white-label solution to empower other staffing firms with next-generation automation.",
  targetAudience: "Recruiting agencies, high-volume staffing firms, and internal talent acquisition teams.",
  capabilities: [
    "AI-driven resume tailoring and intelligent candidate matching.",
    "Automated omni-channel outreach and pipeline management.",
    "Compliance-safe bench-pay tracking and payroll integration.",
    "Customizable white-label deployment for established staffing brands."
  ],
  proof: [],
  primaryCta: {
    label: "Launch R360",
    href: "https://r360.krivatech.com", // Placeholder
    external: true,
  }
};

export default function Page() {
  return <ProductLayout data={data} />;
}
