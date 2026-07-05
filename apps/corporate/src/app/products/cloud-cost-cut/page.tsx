import type { Metadata } from "next";
import { ProductLayout, type ProductData } from "@/components/layout/ProductLayout";

export const metadata: Metadata = {
  title: "Cloud Cost Cut — Kriva Tech",
  description: "Save up to 60% on your cloud spend in a 2-minute audit.",
};

const data: ProductData = {
  eyebrow: "Cloud Cost Cut",
  name: "Cloud Cost Optimization",
  tagline: "Don't leave money on the table — save up to 60% on your cloud spend in a 2-minute audit.",
  overview:
    "Most organizations overpay for cloud by 30–60% because architecture decisions made during scale-up are never revisited. We audit your AWS, GCP, or Azure environment, identify every dollar of waste, and hand you a prioritized reduction plan.",
  targetAudience: "Any company running meaningful AWS, GCP, or Azure spend looking to extend runway or improve unit economics.",
  capabilities: [
    "Comprehensive cloud spend audit across compute, storage, and networking.",
    "Reserved instance and savings plan gap analysis.",
    "Idle and oversized resource identification and rightsizing.",
    "Architecture redesign recommendations for immediate ROI."
  ],
  proof: [
    { metric: "60%", label: "Average savings delivered" },
    { metric: "48h", label: "Average audit turnaround" }
  ],
  primaryCta: {
    label: "Book Your Free Audit",
    href: "/contact?subject=Cloud+Cost+Audit",
    external: false,
  }
};

export default function Page() {
  return <ProductLayout data={data} />;
}
