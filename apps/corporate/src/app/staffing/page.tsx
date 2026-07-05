import type { Metadata } from "next";
import { DivisionLayout, type DivisionData } from "@/components/layout/DivisionLayout";

export const metadata: Metadata = {
  title: "Tech Staffing — Kriva Tech",
  description:
    "Elite tech recruiting, B2B lead generation, and C2C automation for scaling engineering teams and GCCs.",
  alternates: { canonical: "https://krivatech.com/staffing" },
};

const data: DivisionData = {
  slug: "staffing",
  eyebrow: "Tech Staffing",
  name: "Tech Staffing",
  tagline: "The talent your technical roadmap demands.",
  overview:
    "We place senior engineers and technical leaders, build B2B sales pipelines for tech companies, and automate contractor placement flows. Whether you're scaling a product team, sourcing GCC seed talent, or growing your outbound pipeline — Kriva runs the operation.",
  services: [
    {
      name: "Tech Recruiting",
      description:
        "Senior-first recruiting for engineering and technical leadership roles. We source, screen, and present qualified candidates — not resume dumps. Every submission comes with a written technical assessment and salary benchmark. We fill roles that have been open for months, in weeks.",
      included: [
        "Role scoping and job description optimisation",
        "Active and passive candidate sourcing",
        "Technical screening and skills assessment",
        "Written candidate summary per submission",
        "Salary benchmarking and offer advisory",
        "90-day placement guarantee",
      ],
      metric: { value: "< 3wk", label: "Average time to hire" },
    },
    {
      name: "B2B Lead Generation",
      description:
        "Outbound pipeline built and run on your behalf — ICP definition, prospect list building, sequenced outreach, and qualified meeting delivery. We don't measure success in emails sent; we measure it in conversations that matter.",
      included: [
        "Ideal Customer Profile (ICP) definition",
        "Prospect list building and enrichment",
        "Multi-channel outreach (email, LinkedIn, phone)",
        "Personalised sequence copywriting",
        "Reply handling and initial qualification",
        "CRM integration and pipeline reporting",
      ],
      metric: { value: "3–8%", label: "Reply rate (vs 1% industry avg)" },
    },
    {
      name: "C2C Automation",
      description:
        "Contractor-to-contractor placement at speed and scale. We identify open C2C requirements, match them to your bench, and run the submission and follow-up process — so your recruiters spend time closing, not searching.",
      included: [
        "Requirement aggregation from job boards and vendors",
        "Automated matching against your consultant bench",
        "Submission drafting and formatting",
        "Follow-up sequencing and status tracking",
        "Rate negotiation support",
        "Placement reporting and pipeline analytics",
      ],
    },
  ],
  process: [
    {
      num: "01",
      title: "Brief & ICP",
      body: "We align on exactly who you need — role, seniority, tech stack, culture, and timeline. For lead gen, we define your Ideal Customer Profile precisely.",
    },
    {
      num: "02",
      title: "Source & qualify",
      body: "Sourcing begins within 24 hours. Every candidate or prospect is qualified before we put them in front of you.",
    },
    {
      num: "03",
      title: "Present & close",
      body: "You receive qualified submissions with all context included. We stay in the loop through offer or meeting — not just delivery.",
    },
    {
      num: "04",
      title: "Track & improve",
      body: "Weekly pipeline reports. We track what's working and adjust targeting, messaging, or sourcing channels based on real data.",
    },
  ],
  faqs: [
    {
      q: "Do you work on contingency or retained basis?",
      a: "Both. Contingency for standard recruiting engagements; retained for executive or high-urgency roles where you need a dedicated search.",
    },
    {
      q: "What types of roles do you fill?",
      a: "Primarily engineering: frontend, backend, full-stack, DevOps, ML/AI, data engineering, and technical leadership (EM, VP Eng, CTO). We also place product managers and technical programme managers.",
    },
    {
      q: "How quickly can B2B lead gen produce results?",
      a: "Outreach typically starts within 5–7 business days of onboarding. First qualified replies usually appear in weeks 2–3. Pipeline volume builds from month 2 onward.",
    },
    {
      q: "Can you help us build an in-house recruiting function?",
      a: "Yes — we can run the function externally while training and transitioning it to your internal team, including hiring your first in-house recruiter.",
    },
  ],
};

export default function StaffingPage() {
  return <DivisionLayout data={data} />;
}
