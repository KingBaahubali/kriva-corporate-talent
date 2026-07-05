import type { Metadata } from "next";
import { DivisionLayout, type DivisionData } from "@/components/layout/DivisionLayout";

export const metadata: Metadata = {
  title: "AI & Automation — Kriva Tech",
  description: "End-to-end AI implementation: audits, custom model training, RAG systems, agent automation, and sovereign GPU compute.",
  alternates: { canonical: "https://krivatech.com/ai" },
};

const data: DivisionData = {
  slug: "ai",
  eyebrow: "AI & Automation",
  name: "AI & Automation",
  tagline: "From strategy to production AI — without the guesswork.",
  overview:
    "We design, build, and deploy AI systems that actually run in production. From a clear-eyed audit of your current state to custom model training, retrieval-augmented systems, and autonomous agent pipelines — Kriva handles the full stack.",
  services: [
    {
      name: "End-to-End AI Audits",
      description:
        "Before building anything, you need to know where AI will and won't move the needle in your business. Our audit process assesses your data readiness, identifies the highest-ROI AI opportunities, and delivers a prioritised implementation roadmap with honest effort estimates.",
      included: [
        "Current-state data and infrastructure assessment",
        "AI opportunity mapping across business functions",
        "Build vs. buy vs. fine-tune recommendation per use case",
        "Risk and compliance review",
        "Prioritised implementation roadmap with cost estimates",
        "Executive summary and technical specification",
      ],
      metric: { value: "2–5", label: "Day turnaround" },
    },
    {
      name: "Custom Foundational Models",
      description:
        "When off-the-shelf models don't fit your domain, we build or fine-tune foundational models on your proprietary data. Whether that's a domain-specific LLM, a vision model for your industrial pipeline, or a specialised classifier — we own the full training and evaluation lifecycle.",
      included: [
        "Pre-training and fine-tuning on proprietary datasets",
        "Domain adaptation and instruction tuning",
        "Evaluation framework design and benchmark testing",
        "Model compression and quantisation for deployment",
        "Model card and documentation",
        "Hosted or self-hosted deployment",
      ],
    },
    {
      name: "RAG Systems",
      description:
        "Retrieval-Augmented Generation grounds your AI in your actual knowledge — internal documents, product data, historical records — without hallucination. We design and deploy RAG pipelines that are fast, accurate, and production-hardened.",
      included: [
        "Document ingestion and chunking strategy",
        "Vector database setup (Pinecone, Weaviate, pgvector)",
        "Embedding model selection and fine-tuning",
        "Retrieval quality evaluation and tuning",
        "LLM integration and prompt engineering",
        "API and UI deployment",
      ],
    },
    {
      name: "Agents & Automation",
      description:
        "Autonomous multi-step AI systems that take action — web research, data extraction, document processing, CRM updates, approval workflows. We design agent architectures that are reliable enough to trust with real operational tasks.",
      included: [
        "Agent architecture design and tool selection",
        "Multi-agent orchestration (LangGraph, CrewAI, custom)",
        "Tool integration (APIs, databases, browsers, files)",
        "Memory and state management",
        "Human-in-the-loop control points",
        "Monitoring, logging, and failure recovery",
      ],
    },
    {
      name: "SpinGPU Sovereign Compute",
      description:
        "GPU compute where your data never leaves your control. SpinGPU is Kriva's sovereign compute platform for organisations that require air-gapped or on-premises AI workloads — training, inference, and fine-tuning without data leaving your environment.",
      included: [
        "On-premises or private cloud GPU cluster deployment",
        "Model serving infrastructure (vLLM, Triton, TGI)",
        "Air-gapped fine-tuning pipelines",
        "Performance monitoring and auto-scaling",
        "Security hardening and audit logging",
        "Managed maintenance and updates",
      ],
      metric: { value: "100%", label: "Data sovereignty" },
    },
  ],
  process: [
    { num: "01", title: "Discovery & audit", body: "We assess your current AI maturity, data assets, and business priorities. This alone is valuable — most clients learn something new about their own stack." },
    { num: "02", title: "Architecture design", body: "We propose a specific technical architecture with model choices, infrastructure requirements, and delivery milestones. No ambiguity before a line of code is written." },
    { num: "03", title: "Build & iterate", body: "Development runs in sprints with regular demo checkpoints. You review working systems, not slide decks." },
    { num: "04", title: "Deploy & monitor", body: "Production deployment with monitoring, alerting, and a defined handoff or ongoing managed service agreement." },
  ],
  faqs: [
    {
      q: "Do you work with non-technical clients?",
      a: "Yes. We translate between business objectives and technical execution. If you know what outcome you need but not how to get there, that's exactly where we start.",
    },
    {
      q: "What LLMs do you work with?",
      a: "We're model-agnostic — GPT-4o, Claude, Gemini, Llama, Mistral, and custom fine-tunes. We recommend based on your performance, cost, and data-sovereignty requirements.",
    },
    {
      q: "Can you take over a project another team started?",
      a: "Yes. We'll audit what exists, identify what's worth keeping, and take it forward from there. We won't charge you to rebuild what's already solid.",
    },
    {
      q: "How do you handle data privacy for AI training?",
      a: "All training data stays under NDA. For sensitive workloads, our SpinGPU sovereign compute option means data never leaves your environment at all.",
    },
  ],
};

export default function AIPage() {
  return <DivisionLayout data={data} />;
}
