/**
 * ServicesSection — All 5 divisions on the homepage with CTAs.
 * Sits right after the Hero. One solid brief per division, click goes to full page.
 */

const SERVICES = [
  {
    id: "01",
    name: "Data Collection & Annotation",
    slug: "/data",
    color: "var(--accent)",
    brief:
      "Egocentric video, robotics training data, environment captures, labeling, and cleaning pipelines — at any scale, any country.",
    highlights: [
      "Egocentric video datasets",
      "Raw field collection",
      "Labeling & annotation",
      "Data cleaning pipelines",
    ],
  },
  {
    id: "02",
    name: "AI & Automation",
    slug: "/ai",
    color: "var(--brand)",
    brief:
      "End-to-end AI audits, custom foundational models, RAG systems, agentic automation, and sovereign GPU compute.",
    highlights: [
      "AI readiness audits",
      "Custom model training",
      "RAG & knowledge systems",
      "Agent automation",
    ],
  },
  {
    id: "03",
    name: "Software Engineering",
    slug: "/software",
    color: "var(--brand-light)",
    brief:
      "Design, build, and ship — UI/UX design, web & mobile applications, and enterprise-grade internal systems.",
    highlights: [
      "UI/UX & product design",
      "Web & mobile apps",
      "Enterprise systems",
      "API & integrations",
    ],
  },
  {
    id: "04",
    name: "IT & Operations",
    slug: "/operations",
    color: "var(--accent)",
    brief:
      "Cloud cost cuts up to 60%, GCC setup, cybersecurity, managed IT support, and payroll & finance ops.",
    highlights: [
      "Cloud cost optimization",
      "GCC setup & management",
      "Cybersecurity",
      "Managed IT & payroll",
    ],
  },
  {
    id: "05",
    name: "Tech Staffing",
    slug: "/staffing",
    color: "var(--brand)",
    brief:
      "Elite technology recruiting, B2B lead generation, and C2C automation for scaling engineering teams.",
    highlights: [
      "Tech recruiting",
      "B2B lead generation",
      "C2C automation",
      "GCC talent",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our divisions and services"
      className="section-py"
      style={{ backgroundColor: "var(--canvas-subtle)", borderTop: "1px solid var(--divider)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <span className="eyebrow" style={{ marginBottom: "1rem" }}>
              What We Do
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3vw + 0.5rem, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                maxWidth: "500px",
              }}
            >
              Five divisions.
              <br />
              One unified standard.
            </h2>
          </div>
          <a
            href="/contact"
            className="btn btn-outline"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em", flexShrink: 0 }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {SERVICES.map((svc) => (
            <a
              key={svc.id}
              href={svc.slug}
              className="card-glow"
              aria-label={`${svc.name} — learn more`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                textDecoration: "none",
                color: "inherit",
                gap: "0",
              }}
            >
              {/* Top row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: svc.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {svc.id}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  style={{ opacity: 0.4, transition: "opacity 200ms ease, transform 200ms ease" }}
                >
                  <path
                    d="M3 9h12M11 5l4 4-4 4"
                    stroke="var(--brand)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {svc.name}
              </h3>

              {/* Brief */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                  flexGrow: 1,
                }}
              >
                {svc.brief}
              </p>

              {/* Tag pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {svc.highlights.map((tag) => (
                  <span key={tag} className="tag" style={{ fontSize: "0.75rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
