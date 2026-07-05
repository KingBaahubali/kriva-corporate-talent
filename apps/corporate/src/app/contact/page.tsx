import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Kriva Tech — Book a Call or Send an Enquiry",
  description:
    "Get in touch with Kriva Tech — book a discovery call or send us details about your project. We respond within one business day.",
  alternates: { canonical: "https://krivatech.com/contact" },
};

/* ── Contact info items — ONLY page where locations appear ── */
const CONTACT_DETAILS = [
  {
    label: "Email",
    value: "hello@krivatech.com",
    href: "mailto:hello@krivatech.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "India Office",
    value: "Hyderabad, Telangana",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" stroke="var(--accent)" strokeWidth="1.5"/>
        <circle cx="10" cy="8" r="2" stroke="var(--accent)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "US Office",
    value: "Dallas, Texas",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2a6 6 0 016 6c0 4.5-6 10-6 10S4 12.5 4 8a6 6 0 016-6z" stroke="var(--brand)" strokeWidth="1.5"/>
        <circle cx="10" cy="8" r="2" stroke="var(--brand)" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "var(--canvas)",
            paddingBlock: "5rem 4rem",
            borderBottom: "1px solid var(--divider)",
          }}
        >
          <div className="hero-blob" style={{ width: "500px", height: "500px", background: "var(--brand)", opacity: 0.05, top: "-20%", right: "-5%", position: "absolute" }} />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "640px" }}>
              <span className="eyebrow anim-stagger-1" style={{ marginBottom: "1.25rem" }}>Contact Us</span>
              <h1
                className="anim-stagger-2"
                style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.06,
                  letterSpacing: "-0.015em", color: "var(--ink)", marginBottom: "1.25rem",
                }}
              >
                Let&rsquo;s talk.
              </h1>
              <p
                className="anim-stagger-3"
                style={{ fontSize: "1.125rem", color: "var(--ink-muted)", lineHeight: 1.75, maxWidth: "500px" }}
              >
                Tell us about your project, your requirements, or your timeline.
                One conversation is all it takes to find out if we&rsquo;re the right fit.
              </p>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="section-py" style={{ backgroundColor: "var(--canvas-subtle)" }}>
          <div className="container">
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}
              className="contact-grid"
            >
              {/* Left — contact details + calendar */}
              <div>
                {/* Contact details */}
                <div style={{ marginBottom: "3rem" }}>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1.5rem" }}>
                    Contact details
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {CONTACT_DETAILS.map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius)", backgroundColor: "var(--canvas)", border: "1px solid var(--divider)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          {item.icon}
                        </div>
                        <div>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", margin: "0 0 0.25rem" }}>
                            {item.label}
                          </p>
                          {item.href ? (
                            <a href={item.href} style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--brand)", textDecoration: "none" }}>
                              {item.value}
                            </a>
                          ) : (
                            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-secondary)", margin: 0 }}>
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Calendar booking */}
                <div
                  style={{
                    backgroundColor: "var(--canvas)",
                    border: "1px solid var(--divider)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1rem" }}>
                    Prefer to book directly?
                  </p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.125rem", color: "var(--ink)", marginBottom: "0.75rem" }}>
                    Book a 30-min call
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Pick a slot that works and we&rsquo;ll be there — no back-and-forth.
                  </p>
                  <a
                    id="calendar-booking-btn"
                    href={process.env["NEXT_PUBLIC_CALENDAR_URL"] ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontFamily: "var(--font-display)", width: "100%", textAlign: "center", display: "block" }}
                  >
                    Open Calendar →
                  </a>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)", textAlign: "center", marginTop: "0.875rem" }}>
                    Calendar link will be activated soon
                  </p>
                </div>
              </div>

              {/* Right — form */}
              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1.5rem" }}>
                  Send us a message
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}} />
    </>
  );
}
