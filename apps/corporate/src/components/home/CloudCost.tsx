/**
 * CloudCostHook — Second hook section.
 * Spec: "Save up to 60% on cloud spend — 2-minute audit." CTA: "See How"
 */
export function CloudCostHook() {
  return (
    <section
      id="cloud-cost"
      aria-label="Cloud cost optimization"
      className="section-py"
      style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--divider)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="cloud-grid"
        >
          {/* Left — copy */}
          <div>
            <span
              className="eyebrow anim-stagger-1"
              style={{ marginBottom: "1.5rem" }}
            >
              02 / IT & Operations
            </span>

            <h2
              className="anim-stagger-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3vw + 0.5rem, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--ink)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Don&rsquo;t leave money on the table.
            </h2>

            <p
              className="anim-stagger-3"
              style={{
                fontSize: "1.0625rem",
                color: "var(--ink-muted)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              Save up to <strong style={{ color: "var(--ink)", fontWeight: 600 }}>60% on your cloud spend</strong> — in
              a 2-minute audit. We analyse your AWS, GCP, or Azure
              infrastructure, identify every dollar of architectural waste, and
              hand you a step-by-step reduction plan. No vendor lock-in required.
            </p>

            <div
              className="anim-stagger-4"
              style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}
            >
              <a
                href="/operations/cloud-cost-optimization"
                className="btn btn-primary btn-lg"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
              >
                See How →
              </a>
              <a
                href="/contact"
                className="btn btn-ghost"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Free Audit
              </a>
            </div>
          </div>

          {/* Right — stat panel */}
          <div>
            <div
              style={{
                backgroundColor: "var(--canvas)",
                border: "1px solid var(--divider)",
                borderRadius: "var(--radius-lg)",
                padding: "2.5rem",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Big number */}
              <div style={{ marginBottom: "2.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "5rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    background: "var(--gradient-brand)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "block",
                  }}
                >
                  60%
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--ink-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Average cloud spend reduction
                </span>
              </div>

              {/* Feature list */}
              {[
                "No vendor lock-in",
                "Zero downtime during audit",
                "Immediate ROI realisation",
                "AWS · GCP · Azure covered",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    paddingBlock: "0.875rem",
                    borderTop: "1px solid var(--divider)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="8" cy="8" r="7" stroke="var(--accent)" strokeWidth="1.5" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--ink-secondary)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style dangerouslySetInnerHTML={{
        __html: `@media (max-width: 900px) { .cloud-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`
      }} />
    </section>
  );
}
