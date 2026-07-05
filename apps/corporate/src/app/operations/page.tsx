import type { Metadata } from "next";
import { DivisionLayout, type DivisionData } from "@/components/layout/DivisionLayout";

export const metadata: Metadata = {
  title: "IT & Operations — Kriva Tech",
  description: "Cloud cost optimisation up to 60%, GCC setup, cybersecurity, managed IT, and payroll operations.",
  alternates: { canonical: "https://krivatech.com/operations" },
};

const data: DivisionData = {
  slug: "operations",
  eyebrow: "IT & Operations",
  name: "IT & Operations",
  tagline: "Infrastructure that runs. Costs that don't spiral.",
  overview:
    "From cloud cost audits that deliver immediate savings to full GCC setup, cybersecurity hardening, and managed IT — Kriva's Operations division keeps your infrastructure running and your spend in check.",
  services: [
    {
      name: "Cloud Cost Optimisation",
      description:
        "Most organisations overpay for cloud by 30–60% — not because the pricing is unfair, but because architecture decisions made during scale-up are never revisited. We audit your AWS, GCP, or Azure environment, identify every dollar of waste, and hand you a prioritised reduction plan you can implement immediately.",
      included: [
        "Full AWS / GCP / Azure spend audit",
        "Reserved instance and savings plan analysis",
        "Idle and oversized resource identification",
        "Storage tier and data transfer optimisation",
        "Architecture redesign recommendations",
        "Step-by-step implementation plan with owner assignments",
      ],
      metric: { value: "60%", label: "Average savings delivered" },
    },
    {
      name: "GCC Setup & Management",
      description:
        "Global Capability Centre setup in India — legal entity, office infrastructure, HR policies, payroll setup, and the operational framework to run an effective offshore delivery team. We've done this before and we'll handle the complexity so you don't have to.",
      included: [
        "Legal entity and compliance setup",
        "Office space sourcing and fit-out coordination",
        "HR policy and employment framework design",
        "Payroll and statutory compliance setup",
        "Talent acquisition for seed team",
        "Operational runbook and governance framework",
      ],
    },
    {
      name: "Cybersecurity",
      description:
        "Security posture assessment, threat detection, and compliance frameworks for organisations that handle sensitive data or operate in regulated industries. We run the audit, identify gaps, and implement the fixes.",
      included: [
        "Security posture and vulnerability assessment",
        "Penetration testing (infrastructure and application)",
        "SIEM setup and threat monitoring",
        "Compliance framework implementation (ISO 27001, SOC 2, GDPR)",
        "Incident response planning",
        "Security awareness training",
      ],
    },
    {
      name: "Managed IT",
      description:
        "Day-to-day IT infrastructure management — endpoint management, network administration, SaaS application management, and helpdesk support. Handled by our team so yours doesn't have to context-switch.",
      included: [
        "Endpoint management (Windows, macOS, Linux)",
        "Network and firewall administration",
        "SaaS application management and SSO setup",
        "Backup and disaster recovery",
        "IT helpdesk and support",
        "Asset lifecycle management",
      ],
    },
    {
      name: "Payroll & Finance Operations",
      description:
        "Payroll processing, statutory compliance, and financial operations support for India-based teams. We handle the complexity of Indian employment law, PF, ESI, TDS, and multi-state payroll so your finance team doesn't need to.",
      included: [
        "Monthly payroll processing",
        "PF, ESI, and TDS compliance and filing",
        "Full and final settlement processing",
        "Expense management and reimbursement",
        "Payslip generation and distribution",
        "Annual return filing and Form 16 issuance",
      ],
    },
  ],
  process: [
    { num: "01", title: "Audit & baseline", body: "We assess your current infrastructure, spend, and security posture. Every engagement starts with an honest picture of where things stand." },
    { num: "02", title: "Plan", body: "A prioritised action plan with specific changes, estimated savings or risk reduction, and implementation timeline." },
    { num: "03", title: "Implement", body: "We execute the changes — or work alongside your team. Nothing goes live without your sign-off." },
    { num: "04", title: "Operate & report", body: "Ongoing managed operation with regular reporting on spend, performance, and security posture." },
  ],
  faqs: [
    {
      q: "How quickly can you deliver the cloud cost audit?",
      a: "A full audit typically takes 3–5 business days. We need read-only access to your cloud billing and infrastructure dashboards to begin.",
    },
    {
      q: "Do you guarantee the savings figure?",
      a: "We won't promise a specific number until we've seen your environment. Most clients see 30–60% reduction. We'll give you a realistic estimate after the initial review.",
    },
    {
      q: "Can you set up a GCC if we're a foreign company?",
      a: "Yes — this is a common engagement. We handle Indian entity setup, compliance, office, and initial hiring for companies incorporating their India operations.",
    },
    {
      q: "What industries do you support for cybersecurity compliance?",
      a: "We've worked with fintech, healthtech, SaaS, and enterprise clients across ISO 27001, SOC 2, GDPR, and RBI/SEBI compliance frameworks.",
    },
  ],
};

export default function OperationsPage() {
  return <DivisionLayout data={data} />;
}
