/**
 * HomeSections — Five full-width homepage sections, one per division.
 * Each section is a distinct marketing module, not a card.
 * Alternating layout: odd = text left / visual right, even = visual left / text right.
 * No location mentions.
 */

/* ── Section data ─────────────────────────────────────────── */

const SECTIONS = [
  {
    id: "01",
    anchor: "data",
    eyebrow: "Data Collection & Annotation",
    headline: "Your AI's hunger for data, satisfied at scale.",
    body: "Egocentric video, robotics training data, environment captures — sourced, labeled, cleaned, and delivered. Whether you need off-the-shelf datasets or a fully custom collection pipeline, we run it end-to-end with a strict chain of custody.",
    cta: { label: "Explore Data Services", href: "/data" },
    stats: [
      { value: "4", label: "Collection formats" },
      { value: "100%", label: "Chain of custody" },
      { value: "Custom", label: "Scale & geography" },
    ],
    services: ["Egocentric Video Datasets", "Raw Field Collection", "Labeling & Annotation", "Data Cleaning Pipelines"],
    visual: "data",
    flip: false,
    bg: "var(--canvas)",
  },
  {
    id: "02",
    anchor: "cloud",
    eyebrow: "IT & Operations",
    headline: "Stop losing money to cloud waste.",
    body: "Our Cloud Cost Optimization practice audits your AWS, GCP, or Azure infrastructure and returns a step-by-step reduction plan — no vendor lock-in, no downtime. Clients routinely cut spend by up to 60%. Beyond cloud, we run GCC setup, cybersecurity, managed IT, and payroll operations.",
    cta: { label: "Explore IT & Operations", href: "/operations" },
    stats: [
      { value: "60%", label: "Average cloud savings" },
      { value: "0", label: "Vendor lock-in" },
      { value: "5", label: "Operations services" },
    ],
    services: ["Cloud Cost Optimization", "GCC Setup & Management", "Cybersecurity", "Managed IT", "Payroll & Finance Ops"],
    visual: "cloud",
    flip: true,
    bg: "var(--canvas-subtle)",
  },
  {
    id: "03",
    anchor: "ai",
    eyebrow: "AI & Automation",
    headline: "From raw models to autonomous systems.",
    body: "We design and deploy AI solutions that run in production — end-to-end audits, custom foundational model training, retrieval-augmented generation, and fully agentic automation pipelines. For compute-intensive workloads, our SpinGPU sovereign compute platform keeps your data in your control.",
    cta: { label: "Explore AI Services", href: "/ai" },
    stats: [
      { value: "E2E", label: "AI implementation" },
      { value: "RAG", label: "Knowledge systems" },
      { value: "GPU", label: "Sovereign compute" },
    ],
    services: ["End-to-End AI Audits", "Custom Foundational Models", "RAG Systems", "Agents & Automation", "SpinGPU Sovereign Compute"],
    visual: "ai",
    flip: false,
    bg: "var(--canvas)",
  },
  {
    id: "04",
    anchor: "software",
    eyebrow: "Software Engineering",
    headline: "Products that ship. Systems that last.",
    body: "From UI/UX design to full-stack web and mobile applications to complex enterprise platforms — we build software that solves real operational problems and holds up under pressure. No outsourced execution, no junior-heavy delivery.",
    cta: { label: "Explore Software Services", href: "/software" },
    stats: [
      { value: "UI→", label: "Design to deployment" },
      { value: "Web", label: "& Mobile apps" },
      { value: "API", label: "& Integrations" },
    ],
    services: ["UI/UX & Product Design", "Web & Mobile Apps", "Enterprise Systems", "API & Integrations"],
    visual: "software",
    flip: true,
    bg: "var(--canvas-subtle)",
  },
  {
    id: "05",
    anchor: "staffing",
    eyebrow: "Tech Staffing",
    headline: "The talent your technical roadmap demands.",
    body: "We place elite engineers and technical leaders — and we go further than sourcing. Our B2B lead generation and C2C automation systems build the pipeline that keeps your business moving. Whether scaling a team or launching a GCC, we find, qualify, and deliver.",
    cta: { label: "Explore Staffing Services", href: "/staffing" },
    stats: [
      { value: "B2B", label: "Lead generation" },
      { value: "C2C", label: "Automation" },
      { value: "GCC", label: "Talent placement" },
    ],
    services: ["Tech Recruiting", "B2B Lead Generation", "C2C Automation", "GCC Talent"],
    visual: "staffing",
    flip: false,
    bg: "var(--canvas)",
  },
];

/* ── Visual accent SVGs per division ─────────────────────── */

function Visual({ type }: { type: string }) {
  const base: React.CSSProperties = {
    width: "100%",
    maxWidth: "440px",
    aspectRatio: "4/3",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--divider)",
    background: "var(--surface)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  };

  const visuals: Record<string, React.ReactNode> = {
    data: (
      <div style={base}>
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(6, 1fr)", gap: "6px", padding: "20px" }}>
          {Array.from({ length: 48 }).map((_, i) => {
            const opacity = i % 7 === 0 ? 0.9 : i % 5 === 0 ? 0.6 : i % 3 === 0 ? 0.3 : 0.1;
            const isAccent = i % 11 === 0 || i % 13 === 0;
            return <div key={i} style={{ borderRadius: "3px", background: isAccent ? "var(--accent)" : "var(--brand)", opacity }} />;
          })}
        </div>
        <div style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⬛</div>
          dataset.ready
        </div>
      </div>
    ),
    cloud: (
      <div style={base}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "6rem", lineHeight: 1,
            background: "var(--gradient-brand)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>60%</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--ink-muted)", marginTop: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Average cloud spend reduction
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["AWS", "GCP", "Azure"].map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", opacity: 0.7 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "var(--ink-secondary)" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ai: (
      <div style={base}>
        <div style={{ padding: "2rem", width: "100%" }}>
          {["Ingest data", "Train model", "RAG pipeline", "Deploy agent", "Monitor & improve"].map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: "1rem", paddingBlock: "0.75rem", borderBottom: i < 4 ? "1px solid var(--divider)" : "none" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: i < 3 ? "var(--brand)" : "var(--surface)", border: "1.5px solid var(--brand)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {i < 3 && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: i < 3 ? "var(--ink)" : "var(--ink-muted)" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    software: (
      <div style={base}>
        <div style={{ padding: "1.5rem", width: "100%", fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}>
          <div style={{ background: "var(--canvas)", borderRadius: "var(--radius)", padding: "1rem", marginBottom: "0.75rem", borderLeft: "3px solid var(--accent)" }}>
            <div style={{ color: "var(--ink-muted)" }}>// components/ProductPage.tsx</div>
            <div style={{ color: "var(--brand)", marginTop: "0.5rem" }}>export function <span style={{ color: "var(--accent)" }}>ProductPage</span>() {"{"}</div>
            <div style={{ color: "var(--ink-secondary)", paddingLeft: "1rem" }}>return &lt;Page ship={"{"}<span style={{ color: "var(--accent)" }}>true</span>{"}"} /&gt;</div>
            <div style={{ color: "var(--brand)" }}>{"}"}</div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {["UI/UX", "Web", "Mobile", "API"].map((t) => (
              <span key={t} style={{ background: "var(--accent-muted)", color: "var(--accent)", padding: "0.25rem 0.625rem", borderRadius: "var(--radius-sm)", fontSize: "0.6875rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    staffing: (
      <div style={base}>
        <div style={{ padding: "2rem", width: "100%" }}>
          {[
            { role: "Senior ML Engineer", status: "Placed" },
            { role: "DevOps Lead",         status: "Placed" },
            { role: "Full-Stack Engineer", status: "Active" },
            { role: "Cloud Architect",     status: "Sourcing" },
          ].map((r) => (
            <div key={r.role} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBlock: "0.875rem", borderBottom: "1px solid var(--divider)" }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--ink-secondary)" }}>{r.role}</span>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.6875rem",
                color: r.status === "Placed" ? "var(--success)" : r.status === "Active" ? "var(--accent)" : "var(--ink-muted)",
                background: r.status === "Placed" ? "rgba(34,197,94,0.1)" : r.status === "Active" ? "var(--accent-muted)" : "transparent",
                padding: "0.2rem 0.5rem", borderRadius: "var(--radius-sm)",
              }}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return <>{visuals[type]}</>;
}

/* ── Main export ─────────────────────────────────────────── */

export function HomeDivisionSections() {
  return (
    <>
      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.anchor}
          aria-label={s.eyebrow}
          className="section-py"
          style={{ backgroundColor: s.bg, borderTop: "1px solid var(--divider)" }}
        >
          <div className="container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "center",
                direction: s.flip ? "rtl" : "ltr",
              }}
              className="division-row"
            >
              {/* Text */}
              <div style={{ direction: "ltr" }}>
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {s.id}
                  </span>
                  <span style={{ width: "32px", height: "1px", background: "var(--accent)", opacity: 0.4 }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {s.eyebrow}
                  </span>
                </div>

                {/* Headline */}
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.875rem, 3vw + 0.5rem, 2.75rem)",
                  fontWeight: 700, lineHeight: 1.1, color: "var(--ink)",
                  letterSpacing: "-0.01em", marginBottom: "1.25rem",
                }}>
                  {s.headline}
                </h2>

                {/* Body */}
                <p style={{ fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {s.body}
                </p>

                {/* Services list */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                  {s.services.map((svc) => (
                    <span key={svc} className="tag" style={{ fontSize: "0.8125rem" }}>{svc}</span>
                  ))}
                </div>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                  {s.stats.map((st) => (
                    <div key={st.label}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.75rem", color: "var(--brand)", lineHeight: 1 }}>
                        {st.value}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "0.35rem" }}>
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={s.cta.href}
                  className="btn btn-primary"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                >
                  {s.cta.label} →
                </a>
              </div>

              {/* Visual */}
              <div style={{ direction: "ltr", display: "flex", justifyContent: "center" }}>
                <Visual type={s.visual} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Responsive stack on mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .division-row {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 3rem !important;
          }
        }
      `}} />
    </>
  );
}
