/**
 * Hero — Kriva brand intro. Tagline: "Quality in Quantity, Delivered."
 * No location mentions.
 */
export function Hero() {
  return (
    <section
      aria-label="Kriva Tech introduction"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        paddingBlock: "7rem 6rem",
      }}
    >
      {/* Ambient brand blobs */}
      <div
        className="hero-blob"
        style={{ width: "700px", height: "700px", background: "var(--brand)", opacity: 0.06, top: "-15%", right: "-8%" }}
      />
      <div
        className="hero-blob"
        style={{ width: "450px", height: "450px", background: "var(--accent)", opacity: 0.04, bottom: "0%", left: "-6%", animationDelay: "-6s" }}
      />

      {/* Peacock pixel motif */}
      <div style={{ position: "absolute", top: "12%", right: "5%", opacity: 0.22, zIndex: 0 }} aria-hidden="true">
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
          {[0.9, 0.5, 0.7, 0.3, 0.6, 0.4, 0.8].map((op, col) =>
            [0.8, 0.4, 0.65, 0.3, 0.55].map((ro, row) => (
              <rect key={`${row}-${col}`} x={col * 26} y={row * 26} width="12" height="12" rx="2.5"
                fill={row === 0 ? "var(--accent)" : "var(--brand)"} opacity={op * ro} />
            ))
          )}
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "820px" }}>
          {/* Eyebrow */}
          <div className="anim-stagger-1" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.25rem" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "var(--accent)", boxShadow: "0 0 8px var(--accent)",
              flexShrink: 0, animation: "glow-pulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)" }}>
              Kriva Tech
            </span>
          </div>

          {/* Tagline */}
          <h1
            className="anim-stagger-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(3rem, 6.5vw + 0.5rem, 5.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "1.5rem",
            }}
          >
            Quality in Quantity,{" "}
            <span style={{
              display: "inline-block",
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Delivered.
            </span>
          </h1>

          {/* Sub */}
          <p
            className="anim-stagger-3"
            style={{
              fontSize: "clamp(1.0625rem, 1.5vw + 0.4rem, 1.3125rem)",
              color: "var(--ink-muted)",
              lineHeight: 1.75,
              maxWidth: "600px",
              marginBottom: "3rem",
            }}
          >
            A multi-division technology and operations company — AI data collection,
            cloud infrastructure, software engineering, and elite tech talent.
          </p>

          {/* CTAs */}
          <div className="anim-stagger-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#data" className="btn btn-gradient btn-lg" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
              See What We Do
            </a>
            <a href="/contact" className="btn btn-ghost btn-lg" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}>
              Book a Call →
            </a>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100px", background: "linear-gradient(to bottom, transparent, var(--canvas))", pointerEvents: "none" }} />
    </section>
  );
}
