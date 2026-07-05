import type { Metadata } from "next";
import { DivisionLayout, type DivisionData } from "@/components/layout/DivisionLayout";

export const metadata: Metadata = {
  title: "Data Collection & Annotation — Kriva Tech",
  description:
    "Production-grade physical AI data collection, teleoperation, and multimodal annotation for robotics, embodied AI, and world models.",
  alternates: { canonical: "https://krivatech.com/data" },
};

const data: DivisionData = {
  slug: "data",
  eyebrow: "Data Collection & Annotation",
  name: "Data Collection & Annotation",
  tagline: "High-fidelity, multimodal physical data for Embodied AI and World Models.",
  overview:
    "We collect, teleoperate, annotate, and validate the complex physical-world data that autonomous systems need. From synchronized multi-sensor egocentric capture to dense 3D semantic annotation, our in-house operators deliver training data that bridges the sim-to-real gap. Strict QA, no crowdsourcing, and delivery in native formats like RLDS, HDF5, and MCAP.",
  services: [
    {
      name: "Egocentric & Multi-Sensor Capture",
      description:
        "First-person and synchronized multi-view capture across household, commercial, and industrial environments. We handle hardware calibration, scenario execution, and strict protocol adherence for high-diversity model pretraining.",
      included: [
        "Synchronized RGB, RGB-D, and Stereo capture",
        "LiDAR, IR, and Thermal data collection",
        "Wearable rigs and head-mounted telemetry",
        "Environment diversity: Retail, warehouse, agriculture, outdoor",
        "Action telemetry, IMU tracking, and contact point logging",
        "Delivery in RLDS, HDF5, MCAP, or Zarr",
      ],
      metric: { value: "100k+", label: "Capture hours capacity" },
    },
    {
      name: "Teleoperation & Robot Demonstration",
      description:
        "Specialized operators generating high-fidelity human demonstrations for imitation learning. Our operators train directly on client-specific hardware and control interfaces to ensure kinesthetic accuracy and optimal policy generation.",
      included: [
        "On-site and remote hardware teleoperation",
        "Bimanual manipulation and dexterity tasks",
        "Task-space and joint-space trajectory recording",
        "Failure case recovery demonstrations",
        "Sim-to-real protocol execution",
        "Real-time synchronization checks and QA",
      ],
      metric: { value: "< 10ms", label: "Acceptable sync variance" },
    },
    {
      name: "Multimodal & 3D Annotation",
      description:
        "Dense labeling for complex spatial and temporal datasets. Our in-house teams annotate highly ambiguous edge cases with pixel-perfect accuracy, ensuring your downstream models receive clean, ground-truth labels.",
      included: [
        "3D Cuboids, Point Cloud Segmentation (LiDAR)",
        "Hand keypoints, gaze tracking, and pose estimation",
        "Polygon semantic and instance segmentation",
        "Temporal action localization and labelling",
        "Sensor fusion annotation (Camera + LiDAR + Radar)",
        "Custom metadata schemas and ontology mapping",
      ],
    },
    {
      name: "Human-in-the-Loop Validation (RLHF)",
      description:
        "Subject matter expert review and model evaluation loops. We grade outputs, rank trajectories, and correct edge-case model failures to continuously refine policy performance in production environments.",
      included: [
        "Trajectory ranking and preference modeling",
        "Safety and constraint violation flagging",
        "Model hallucination and failure mode analysis",
        "Domain-expert data verification",
        "Continuous feedback loop integration",
      ],
    },
  ],
  process: [
    {
      num: "01",
      title: "Protocol & Calibration",
      body: "We align on hardware requirements, sensor synchronization, data formats (e.g., ROS bags, MCAP), and diversity quotas (demographic, environmental, lighting).",
    },
    {
      num: "02",
      title: "Capture & Teleoperation",
      body: "Our in-house field operators and teleoperators execute collection scenarios. Real-time edge validation ensures frame synchronization and prevents dropped packets.",
    },
    {
      num: "03",
      title: "Annotation & Labeling",
      body: "Raw data flows to our specialized annotation teams. We apply dense 2D/3D labels, keypoints, and temporal markers using your proprietary tools or our secure infrastructure.",
    },
    {
      num: "04",
      title: "Rigorous QA & Delivery",
      body: "Multi-stage QA processes verify label accuracy against ontology guidelines. Data is packaged and delivered directly to your pipelines in native formats (HDF5, LeRobot, RLDS).",
    },
  ],
  faqs: [
    {
      q: "Do you crowdsource your annotators or data collectors?",
      a: "No. Every operator, annotator, and QA reviewer is a full-time employee operating within our secure facilities or managed field deployments. This ensures absolute consistency and confidentiality.",
    },
    {
      q: "What data formats can you deliver?",
      a: "We natively support the robotics and AI ecosystem. We deliver in formats including RLDS, HDF5, MCAP, Zarr, LeRobot V2, ROS/ROS2 bags, and custom JSON/XML schemas matched directly to your simulation stack.",
    },
    {
      q: "Can you operate client-specific or proprietary hardware?",
      a: "Yes. Our teleoperators and field teams regularly train on proprietary client rigs, robotic arms, and head-mounted capture devices before commencing production episodes.",
    },
    {
      q: "How do you handle sensor synchronization and calibration issues?",
      a: "We implement strict daily calibration routines (intrinsic/extrinsic) and real-time edge-validation scripts during capture to immediately flag frame drops or sync variances between RGB, Depth, and IMU streams.",
    },
  ],
};

export default function DataPage() {
  return <DivisionLayout data={data} />;
}
