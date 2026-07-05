export function TrustBar() {
  const items = [
    { label: "Delivery Team", value: "50+ Specialists"  },
    { label: "Divisions",     value: "5 Dedicated Units" },
    { label: "Reach",         value: "Global Operations" },
    { label: "Standard",      value: "Quality in Quantity" },
  ];

  return (
    <section
      aria-label="Company trust signals"
      style={{
        borderTop: "1px solid var(--divider)",
        borderBottom: "1px solid var(--divider)",
        backgroundColor: "var(--canvas)",
        paddingBlock: "2.5rem",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "stretch", flexWrap: "wrap", rowGap: "1.5rem" }}>
          {items.map((item, i) => (
            <div
              key={item.label}
              style={{
                flex: "1 1 0",
                minWidth: "160px",
                paddingLeft: i === 0 ? "0" : "3rem",
                borderLeft: i === 0 ? "none" : "1px solid var(--divider)",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", display: "block", marginBottom: "0.5rem" }}>
                {item.label}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 500, color: "var(--ink)", display: "block", letterSpacing: "0.01em" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
