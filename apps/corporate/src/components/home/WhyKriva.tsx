/**
 * WhyKriva — 4 concrete differentiators.
 * Answers: "Why Kriva over anyone else?"
 */

const REASONS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "End-to-end ownership",
    body: "We don't hand off to subcontractors. From first brief to final delivery, the same team owns the outcome — no quality dilution, no accountability gaps.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Speed without shortcuts",
    body: "\"Quality in Quantity, Delivered\" is not marketing copy — it's an operating constraint. We move fast and hold the standard. Not one or the other.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="var(--accent)" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="var(--accent)" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="var(--accent)" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="var(--accent)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Five divisions, one relationship",
    body: "Data collection, AI, software, operations, staffing — all under one roof. Clients who start with one division expand into others without onboarding a new vendor.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="var(--accent)" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="3" stroke="var(--accent)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Global execution, enterprise discipline",
    body: "Senior specialists across time zones, operating with chain-of-custody data handling, structured delivery cadences, and communication that doesn't need chasing.",
  },
];

export function WhyKriva() {
  return (
    <section
      aria-label="Why choose Kriva"
      className="section-py"
      style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--divider)" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "560px", marginBottom: "4rem" }}>
          <span className="eyebrow" style={{ marginBottom: "1rem" }}>Why Kriva</span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3vw + 0.5rem, 2.75rem)",
            fontWeight: 700, lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.01em",
          }}>
            What makes us different.
          </h2>
        </div>

        {/* 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {REASONS.map((r) => (
            <div
              key={r.title}
              style={{
                backgroundColor: "var(--canvas)",
                border: "1px solid var(--divider)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                transition: "border-color var(--duration-base) ease, box-shadow var(--duration-base) ease",
              }}
              className="why-card"
            >
              <div style={{ marginBottom: "1.25rem" }}>{r.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.875rem", letterSpacing: "-0.005em" }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.7, margin: 0 }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .why-card:hover {
          border-color: var(--divider-strong) !important;
          box-shadow: var(--shadow-md) !important;
        }
      `}} />
    </section>
  );
}
