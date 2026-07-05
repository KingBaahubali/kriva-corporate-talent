import type { Metadata } from "next";
import { ProductLayout, type ProductData } from "@/components/layout/ProductLayout";

export const metadata: Metadata = {
  title: "Physical AI Data — Kriva Tech",
  description: "Custom egocentric video and robotics training datasets, collected worldwide.",
};

const data: ProductData = {
  eyebrow: "Physical AI Data",
  name: "Physical AI Data",
  tagline: "High-fidelity training data for Embodied AI and World Models.",
  overview:
    "We collect, teleoperate, annotate, and validate the complex physical-world data that autonomous systems need. Custom egocentric video and robotics training datasets, any country, almost any industry.",
  targetAudience: "Robotics companies, foundation-model labs, physical-AI startups needing training data at scale.",
  capabilities: [
    "Egocentric & multi-sensor raw data collection (RGB-D, LiDAR, IR, Stereo).",
    "On-site and remote hardware teleoperation for high-fidelity imitation learning.",
    "Dense 3D cuboids, point cloud segmentation, and semantic annotation.",
    "Delivery natively in RLDS, HDF5, MCAP, and Zarr formats."
  ],
  proof: [
    { metric: "100k+", label: "Capture hours capacity" },
    { metric: "< 10ms", label: "Acceptable sync variance" }
  ],
  primaryCta: {
    label: "Request a Sample",
    href: "/contact?subject=Data+Sample",
    external: false,
  }
};

export default function Page() {
  return <ProductLayout data={data} />;
}
