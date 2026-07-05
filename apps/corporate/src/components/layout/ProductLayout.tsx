import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export interface ProductData {
  eyebrow: string;
  name: string;
  tagline: string;
  overview: string;
  targetAudience: string;
  capabilities: string[];
  proof?: { metric: string; label: string }[];
  primaryCta: { label: string; href: string; external?: boolean };
}

export function ProductLayout({ data }: { data: ProductData }) {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            paddingBlock: "6rem 5rem",
            backgroundColor: "var(--canvas)",
            borderBottom: "1px solid var(--divider)",
          }}
        >
          {/* Background blob */}
          <div
            className="hero-blob"
            style={{
              width: "600px", height: "600px", background: "var(--accent)", opacity: 0.05, top: "-20%", right: "-5%", position: "absolute",
            }}
          />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--ink-muted)" }}>
              <a href="/" style={{ color: "var(--ink-muted)", textDecoration: "none" }}>Kriva Tech</a>
              <span>/</span>
              <span style={{ color: "var(--ink-muted)" }}>Products</span>
              <span>/</span>
              <span style={{ color: "var(--accent)" }}>{data.name}</span>
            </div>

            <div style={{ maxWidth: "800px" }}>
              <span className="eyebrow anim-stagger-1" style={{ marginBottom: "1.25rem" }}>{data.eyebrow}</span>
              <h1
                className="anim-stagger-2"
                style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4rem)",
                  lineHeight: 1.06, letterSpacing: "-0.015em", color: "var(--ink)", marginBottom: "1.5rem",
                }}
              >
                {data.tagline}
              </h1>
              <p
                className="anim-stagger-3"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", color: "var(--ink)", fontWeight: 500, lineHeight: 1.6, maxWidth: "680px", marginBottom: "1rem" }}
              >
                {data.overview}
              </p>
              <p
                className="anim-stagger-3"
                style={{ fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "680px", marginBottom: "2.5rem" }}
              >
                <strong>Who it's for:</strong> {data.targetAudience}
              </p>
              <div className="anim-stagger-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a 
                  href={data.primaryCta.href} 
                  target={data.primaryCta.external ? "_blank" : undefined}
                  rel={data.primaryCta.external ? "noopener noreferrer" : undefined}
                  className="btn btn-primary btn-lg" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {data.primaryCta.label}
                  {data.primaryCta.external && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  )}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES & PROOF ── */}
        <section className="section-py" style={{ backgroundColor: "var(--canvas-subtle)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }}>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {/* Capabilities */}
                <div>
                  <span className="eyebrow" style={{ marginBottom: "1.5rem" }}>Capabilities</span>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {data.capabilities.map((cap, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", backgroundColor: "var(--canvas)", padding: "1.5rem", borderRadius: "var(--radius)", border: "1px solid var(--divider)" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "2px", flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink)", lineHeight: 1.6 }}>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof / Metrics */}
                {data.proof && data.proof.length > 0 && (
                  <div>
                    <span className="eyebrow" style={{ marginBottom: "1.5rem" }}>Proof</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                      {data.proof.map((p, i) => (
                        <div key={i} style={{ padding: "2rem", backgroundColor: "var(--canvas)", borderRadius: "var(--radius)", border: "1px solid var(--divider)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "3rem", color: "var(--accent)", lineHeight: 1 }}>{p.metric}</span>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-secondary)" }}>{p.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--divider)", paddingBlock: "5rem", textAlign: "center" }}
        >
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--ink)", marginBottom: "2rem" }}>
              Ready to get started?
            </h2>
            <a 
              href={data.primaryCta.href} 
              target={data.primaryCta.external ? "_blank" : undefined}
              rel={data.primaryCta.external ? "noopener noreferrer" : undefined}
              className="btn btn-primary"
            >
              {data.primaryCta.label}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
