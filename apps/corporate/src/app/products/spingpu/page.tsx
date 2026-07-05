import type { Metadata } from "next";
import { ProductLayout, type ProductData } from "@/components/layout/ProductLayout";

export const metadata: Metadata = {
  title: "SpinGPU — Kriva Tech",
  description: "On-demand GPU rental and AI compute infrastructure built by Kriva.",
};

const data: ProductData = {
  eyebrow: "SpinGPU",
  name: "SpinGPU Compute",
  tagline: "On-demand GPU rental and AI compute infrastructure.",
  overview:
    "SpinGPU is an independent compute marketplace built by Kriva, providing instant access to high-performance AI infrastructure without the enterprise lock-in.",
  targetAudience: "AI researchers, independent developers, and startups needing elastic compute power for training and inference.",
  capabilities: [
    "Global GPU marketplace with transparent pay-as-you-go billing.",
    "Instant access to top-tier NVIDIA and AMD accelerators.",
    "Fast deployment of Jupyter notebooks and containerized environments.",
    "No vendor lock-in or massive upfront compute commitments."
  ],
  proof: [],
  primaryCta: {
    label: "Launch SpinGPU",
    href: "https://spingpu.com",
    external: true,
  }
};

export default function Page() {
  return <ProductLayout data={data} />;
}
