/**
 * DivisionMap — Five equal tiles, one plain-English line each, links to real routes.
 * Spec: Five-Division Map — five equal tiles, one plain-English line each, one click to division page.
 * Division names as per architecture: Data, AI & Automation, Software, IT & Operations, Tech Staffing.
 */

const DIVISIONS = [
  {
    id: "01",
    name: "Data Collection",
    slug: "/data",
    tagline: "Egocentric video, robotics training data, and annotation at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="8" height="8" rx="1.5" fill="var(--accent)" opacity="0.9" />
        <rect x="12" y="2" width="8" height="8" rx="1.5" fill="var(--accent)" opacity="0.55" />
        <rect x="2" y="12" width="8" height="8" rx="1.5" fill="var(--accent)" opacity="0.55" />
        <rect x="12" y="12" width="8" height="8" rx="1.5" fill="var(--accent)" opacity="0.3" />
        <rect x="20" y="18" width="6" height="6" rx="1" fill="var(--brand)" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "AI & Automation",
    slug: "/ai",
    tagline: "End-to-end AI audits, RAG systems, agents, and sovereign compute.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="var(--brand)" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="var(--accent)" />
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Software Eng.",
    slug: "/software",
    tagline: "UI/UX design, web & mobile apps, and enterprise systems delivery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="var(--brand)" strokeWidth="1.5" />
        <path d="M8 10l-3 3 3 3M20 10l3 3-3 3M15 9l-2 10" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "IT & Operations",
    slug: "/operations",
    tagline: "Cloud cost cuts, GCC setup, cybersecurity, managed IT, and payroll.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3a4 4 0 014 4v1a4 4 0 01-8 0V7a4 4 0 014-4z" stroke="var(--brand)" strokeWidth="1.5" />
        <path d="M5 25c0-5 4-8 9-8s9 3 9 8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M18.5 20l1 1 2-2" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "05",
    name: "Tech Staffing",
    slug: "/staffing",
    tagline: "B2B lead gen, C2C automation, and elite tech recruiting.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="9" r="4" stroke="var(--brand)" strokeWidth="1.5" />
        <circle cx="20" cy="9" r="3" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M2 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="var(--brand)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 16c2.2 0 6 1.4 6 5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function DivisionMap() {
  return (
    <section
      id="divisions"
      aria-label="Operating divisions"
      className="section-py"
    >
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: "4rem", maxWidth: "560px" }}>
          <span className="eyebrow" style={{ marginBottom: "1rem" }}>
            Operating Divisions
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3vw + 0.5rem, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Five specialized units.
            <br />
            One unified standard.
          </h2>
        </div>

        {/* Five-tile grid */}
        <div className="division-grid">
          {DIVISIONS.map((div) => (
            <a
              key={div.id}
              href={div.slug}
              className="card-glow"
              aria-label={`${div.name} division`}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.75rem",
                textDecoration: "none",
                color: "inherit",
                minHeight: "240px",
              }}
            >
              {/* Icon + number */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "2rem",
                }}
              >
                {div.icon}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6875rem",
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {div.id}
                </span>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.875rem",
                  letterSpacing: "0",
                }}
              >
                {div.name}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.6,
                  flexGrow: 1,
                  margin: 0,
                }}
              >
                {div.tagline}
              </p>

              {/* Explore arrow */}
              <div
                style={{
                  marginTop: "1.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--brand)",
                }}
              >
                Explore
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  style={{ transition: "transform 200ms ease" }}
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
