import type { Metadata } from "next";
import { DivisionLayout, type DivisionData } from "@/components/layout/DivisionLayout";

export const metadata: Metadata = {
  title: "Software Engineering — Kriva Tech",
  description: "UI/UX design, web and mobile app development, and enterprise systems engineering delivered to production standard.",
  alternates: { canonical: "https://krivatech.com/software" },
};

const data: DivisionData = {
  slug: "software",
  eyebrow: "Software Engineering",
  name: "Software Engineering",
  tagline: "Products that ship. Systems that scale.",
  overview:
    "From zero-to-one product design to enterprise-grade platform engineering — we build software that solves real operational problems and holds up under pressure. Senior engineers throughout, not junior-heavy teams with a senior face.",
  services: [
    {
      name: "UI/UX & Product Design",
      description:
        "Design that starts with user needs and ends with production-ready components. We run discovery, information architecture, wireframing, and high-fidelity design — and hand off with a design system your engineers can build from directly.",
      included: [
        "User research and journey mapping",
        "Information architecture and wireframes",
        "High-fidelity UI design (Figma)",
        "Interactive prototyping",
        "Design system and component library",
        "Developer handoff with specs and assets",
      ],
    },
    {
      name: "Web & Mobile Applications",
      description:
        "Full-stack web and mobile applications built for performance, scalability, and maintainability. We work across the stack — Next.js, React, Node.js, Python backends — and deliver code that your team can own and extend after we hand off.",
      included: [
        "Next.js, React, Vue web applications",
        "React Native and Flutter mobile apps",
        "REST and GraphQL API design and development",
        "Database design (PostgreSQL, MongoDB, Redis)",
        "Authentication, authorisation, and security",
        "CI/CD pipeline setup and deployment",
      ],
      metric: { value: "100%", label: "Senior-only engineers" },
    },
    {
      name: "Enterprise Systems & Internal Tools",
      description:
        "The systems that run your operations — CRMs, ERPs, dashboards, workflow automation, data pipelines, and internal tooling. We build these to the same standard as client-facing products, because the cost of a broken internal system is just as real.",
      included: [
        "Custom CRM and ERP development",
        "Internal dashboards and reporting tools",
        "Workflow and approval automation",
        "Third-party API integrations",
        "Data pipeline and ETL engineering",
        "Legacy system migration and modernisation",
      ],
    },
  ],
  process: [
    { num: "01", title: "Product discovery", body: "We map your users, their jobs, and the technical landscape before writing a single line. Scope is defined precisely — no scope creep later." },
    { num: "02", title: "Design & architecture", body: "UI/UX design and system architecture run in parallel. You review working prototypes and architecture diagrams before development begins." },
    { num: "03", title: "Sprints & demos", body: "Two-week sprints with demo sessions. You see working software at every checkpoint, not just at the end." },
    { num: "04", title: "Launch & handoff", body: "Production deployment, documentation, testing coverage, and a structured knowledge transfer to your internal team." },
  ],
  faqs: [
    {
      q: "Do you work with our existing tech stack?",
      a: "Yes. We'll audit what you have, recommend changes where warranted, and build within your existing stack where it makes sense. We won't push a rewrite unless it's actually necessary.",
    },
    {
      q: "Can you take over an existing codebase?",
      a: "Yes. We'll spend a few days doing a codebase audit and produce an honest assessment of quality, technical debt, and the fastest path forward.",
    },
    {
      q: "Do you provide ongoing maintenance?",
      a: "Yes — we offer managed maintenance and feature development retainers. Many clients move from a project engagement to a retainer after launch.",
    },
    {
      q: "How do you handle IP and code ownership?",
      a: "All code, designs, and intellectual property belong to you on delivery. Our engagement agreements are explicit on this.",
    },
  ],
};

export default function SoftwarePage() {
  return <DivisionLayout data={data} />;
}
