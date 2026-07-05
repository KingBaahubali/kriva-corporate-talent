/**
 * HomeCTA — Final full-width CTA band.
 * Two paths: Book a Call / See Our Work.
 */
export function HomeCTA() {
  return (
    <section
      aria-label="Get started with Kriva"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "var(--brand)",
        paddingBlock: "6rem",
        textAlign: "center",
      }}
    >
      {/* Subtle brand gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 50%, rgba(0,212,245,0.15) 100%)",
        zIndex: 0,
      }} />

      {/* Pixel motif */}
      <div style={{ position: "absolute", top: "10%", right: "5%", opacity: 0.12, zIndex: 0 }} aria-hidden="true">
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
          {[0,1,2,3,4].map(r => [0,1,2,3,4].map(c => (
            <rect key={`${r}-${c}`} x={c*24} y={r*18} width="10" height="10" rx="2" fill="white" opacity={(r+c)%3===0?0.8:0.3}/>
          )))}
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem" }}>
          Ready to start?
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 4vw + 0.5rem, 3.25rem)",
          lineHeight: 1.1,
          color: "#ffffff",
          letterSpacing: "-0.015em",
          marginBottom: "1.5rem",
          maxWidth: "640px",
          marginInline: "auto",
        }}>
          Tell us what you need. We'll tell you how we deliver it.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: "480px", marginInline: "auto", marginBottom: "3rem" }}>
          One conversation is all it takes to understand whether Kriva is the right fit for your project.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "#ffffff", color: "var(--brand)",
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1rem", letterSpacing: "0.01em",
              padding: "0.875rem 2rem", borderRadius: "var(--radius)",
              textDecoration: "none",
              transition: "background-color 200ms ease, transform 200ms ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
            className="cta-primary-btn"
          >
            Book a Call
          </a>
          <a
            href="/data"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              backgroundColor: "transparent", color: "#ffffff",
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: "1rem", letterSpacing: "0.01em",
              padding: "0.875rem 2rem", borderRadius: "var(--radius)",
              border: "1.5px solid rgba(255,255,255,0.4)",
              textDecoration: "none",
              transition: "border-color 200ms ease, background-color 200ms ease",
            }}
            className="cta-ghost-btn"
          >
            Explore Our Services →
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cta-primary-btn:hover { background-color: #f0f0f0 !important; transform: translateY(-2px); }
        .cta-ghost-btn:hover { border-color: rgba(255,255,255,0.8) !important; background-color: rgba(255,255,255,0.08) !important; }
      `}} />
    </section>
  );
}
