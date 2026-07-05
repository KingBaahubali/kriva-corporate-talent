/**
 * ClientLogos — "Trusted by" strip.
 * Shows portfolio clients as text wordmarks (no actual logo files needed).
 * Replace with real SVG logos once available.
 */

const CLIENTS = [
  { name: "Handi Hub",   initial: "HH" },
  { name: "OstoBelt",    initial: "OB" },
  { name: "PlayUneek",   initial: "PU" },
  { name: "Nukkad Box",  initial: "NB" },
  { name: "opod",        initial: "op" },
];

export function ClientLogos() {
  return (
    <section
      aria-label="Clients we have worked with"
      style={{
        borderTop: "1px solid var(--divider)",
        borderBottom: "1px solid var(--divider)",
        backgroundColor: "var(--canvas)",
        paddingBlock: "3rem",
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--ink-muted)",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Work delivered for
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                opacity: 0.55,
                transition: "opacity 200ms ease",
              }}
              className="client-logo-item"
            >
              {/* Monogram mark — replace with <img> once real logos are supplied */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid var(--divider-strong)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  color: "var(--ink-secondary)",
                  flexShrink: 0,
                }}
              >
                {c.initial}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--ink-secondary)",
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `.client-logo-item:hover { opacity: 0.9 !important; }` }} />
    </section>
  );
}
