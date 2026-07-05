import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* ── Types ── */
export interface DivisionService {
  name: string;
  description: string;
  included: string[];
  metric?: { value: string; label: string };
}

export interface DivisionStep {
  num: string;
  title: string;
  body: string;
}

export interface DivisionFAQ {
  q: string;
  a: string;
}

export interface DivisionData {
  slug: string;
  eyebrow: string;
  name: string;
  tagline: string;
  overview: string;
  services: DivisionService[];
  process: DivisionStep[];
  faqs: DivisionFAQ[];
}

/* ── Layout ── */
export function DivisionLayout({ data }: { data: DivisionData }) {
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
          }}
        >
          {/* Background blob */}
          <div
            className="hero-blob"
            style={{ width: "600px", height: "600px", background: "var(--brand)", opacity: 0.06, top: "-20%", right: "-5%", position: "absolute" }}
          />
          {/* Pixel motif */}
          <div style={{ position: "absolute", top: "15%", right: "6%", opacity: 0.18, zIndex: 0 }} aria-hidden="true">
            <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
              {[0,1,2,3,4].map(r => [0,1,2,3,4,5].map(c => (
                <rect key={`${r}-${c}`} x={c*24} y={r*20} width="10" height="10" rx="2"
                  fill={(r+c)%3===0 ? "var(--accent)" : "var(--brand)"}
                  opacity={(r+c)%5===0 ? 0.9 : 0.35}/>
              )))}
            </svg>
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--ink-muted)" }}>
              <a href="/" style={{ color: "var(--ink-muted)", textDecoration: "none" }}>Kriva Tech</a>
              <span>/</span>
              <span style={{ color: "var(--accent)" }}>{data.eyebrow}</span>
            </div>

            <div style={{ maxWidth: "760px" }}>
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
                style={{ fontSize: "clamp(1rem, 1.5vw + 0.3rem, 1.1875rem)", color: "var(--ink-muted)", lineHeight: 1.8, maxWidth: "580px", marginBottom: "2.5rem" }}
              >
                {data.overview}
              </p>
              <div className="anim-stagger-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="/contact" className="btn btn-gradient btn-lg" style={{ fontFamily: "var(--font-display)" }}>
                  Book a Call
                </a>
                <a href="#services" className="btn btn-ghost btn-lg" style={{ fontFamily: "var(--font-display)" }}>
                  See Services ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          aria-label={`${data.name} services`}
          className="section-py"
          style={{ backgroundColor: "var(--canvas-subtle)", borderTop: "1px solid var(--divider)" }}
        >
          <div className="container">
            <div style={{ maxWidth: "560px", marginBottom: "4rem" }}>
              <span className="eyebrow" style={{ marginBottom: "1rem" }}>What We Offer</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                {data.name} services,<br />built to production standard.
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {data.services.map((svc, i) => (
                <div
                  key={svc.name}
                  style={{
                    backgroundColor: "var(--canvas)",
                    border: "1px solid var(--divider)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "3rem",
                    alignItems: "start",
                  }}
                  className="service-card-grid"
                >
                  {/* Left: copy */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        0{i + 1}
                      </span>
                      <div style={{ flex: 1, height: "1px", background: "var(--divider)" }} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, color: "var(--ink)", marginBottom: "1rem", letterSpacing: "-0.005em" }}>
                      {svc.name}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.75 }}>
                      {svc.description}
                    </p>
                    {svc.metric && (
                      <div style={{ marginTop: "1.5rem", display: "inline-flex", alignItems: "baseline", gap: "0.75rem", padding: "0.875rem 1.25rem", background: "var(--canvas-subtle)", borderRadius: "var(--radius)", border: "1px solid var(--divider)" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2rem", color: "var(--brand)", lineHeight: 1 }}>{svc.metric.value}</span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{svc.metric.label}</span>
                      </div>
                    )}
                  </div>

                  {/* Right: included list */}
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1.25rem" }}>
                      What's included
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {svc.included.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginTop: "2px", flexShrink: 0 }}>
                            <circle cx="8" cy="8" r="7" stroke="var(--accent)" strokeWidth="1.5"/>
                            <path d="M5 8l2 2 4-4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-secondary)", lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section
          aria-label="How we work"
          className="section-py"
          style={{ backgroundColor: "var(--canvas)", borderTop: "1px solid var(--divider)" }}
        >
          <div className="container">
            <div style={{ maxWidth: "560px", marginBottom: "4rem" }}>
              <span className="eyebrow" style={{ marginBottom: "1rem" }}>How We Work</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                From first conversation to delivered outcome.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", borderTop: "1px solid var(--divider)", borderLeft: "1px solid var(--divider)" }} className="process-grid">
              {data.process.map((step) => (
                <div
                  key={step.num}
                  style={{ padding: "2rem", borderBottom: "1px solid var(--divider)", borderRight: "1px solid var(--divider)" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.75rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.7, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          aria-label="Frequently asked questions"
          className="section-py"
          style={{ backgroundColor: "var(--canvas-subtle)", borderTop: "1px solid var(--divider)" }}
        >
          <div className="container">
            <div style={{ maxWidth: "720px", marginInline: "auto" }}>
              <span className="eyebrow" style={{ marginBottom: "1rem" }}>FAQ</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.01em", marginBottom: "3rem" }}>
                Questions we get asked.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {data.faqs.map((faq, i) => (
                  <div
                    key={faq.q}
                    style={{
                      borderTop: "1px solid var(--divider)",
                      paddingBlock: "2rem",
                      borderBottom: i === data.faqs.length - 1 ? "1px solid var(--divider)" : "none",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--ink)", marginBottom: "0.875rem" }}>
                      {faq.q}
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.75, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVISION CTA ── */}
        <section
          style={{ backgroundColor: "var(--brand)", paddingBlock: "5rem", textAlign: "center", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 60%, rgba(0,212,245,0.1) 100%)" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.875rem, 3vw + 0.5rem, 2.75rem)", color: "#fff", marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
              Ready to get started with {data.name}?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", maxWidth: "440px", marginInline: "auto", lineHeight: 1.7 }}>
              Tell us your requirements and we'll respond within one business day.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "#fff", color: "var(--brand)",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem",
                padding: "0.9rem 2.25rem", borderRadius: "var(--radius)",
                textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                transition: "transform 200ms ease",
              }}
              className="div-cta-btn"
            >
              Book a Call
            </a>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `.div-cta-btn:hover { transform: translateY(-2px); }` }} />
        </section>
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 800px) {
          .service-card-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}} />
    </>
  );
}
