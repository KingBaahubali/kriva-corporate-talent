import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { KrivaLogo } from "@/components/ui/KrivaLogo";

export const metadata: Metadata = {
  title: "Style Guide | Kriva Tech Design System",
  description: "Kriva Tech brand system — colors, typography, components, and motion.",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  return (
    <div
      style={{
        backgroundColor: "var(--canvas)",
        minHeight: "100vh",
        fontFamily: "var(--font-body)",
        color: "var(--ink)",
      }}
    >
      {/* -------- TOP BAR -------- */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "var(--surface-raised)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--divider)",
          padding: "0.875rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <KrivaLogo height={32} />
          <div
            style={{
              width: "1px",
              height: "24px",
              backgroundColor: "var(--divider-strong)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink-muted)",
            }}
          >
            Design System v1.0
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span className="tag tag-accent">Phase 1 Gate</span>
          <ThemeToggle />
        </div>
      </div>

      {/* -------- CONTENT -------- */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 2rem 8rem" }}>

        {/* HEADER */}
        <header style={{ marginBottom: "5rem" }}>
          <span className="eyebrow" style={{ marginBottom: "1rem" }}>Kriva Tech — Brand Identity</span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--ink)",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Design{" "}
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              System
            </span>
          </h1>
          <p style={{ color: "var(--ink-muted)", maxWidth: "55ch", lineHeight: 1.7, fontSize: "1.0625rem" }}>
            Full brand token reference for krivatech.com. Indigo + cyan palette, extracted directly from the official Kriva Tech logo. Toggle the theme to verify both modes.
          </p>
        </header>

        {/* ============================================================ */}
        {/* 01 — LOGO */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="01" title="Logo" />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {/* Full logo on surface */}
            <div
              className="surface"
              style={{ padding: "2.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <KrivaLogo height={48} />
            </div>

            {/* Dark swatch — always dark */}
            <div
              style={{
                padding: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#07071A",
                border: "1px solid rgba(0,212,245,0.1)",
                borderRadius: "var(--radius)",
              }}
            >
              <KrivaLogo height={48} />
            </div>

            {/* Light swatch — always light */}
            <div
              style={{
                padding: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFFFFF",
                border: "1px solid rgba(45,45,212,0.1)",
                borderRadius: "var(--radius)",
              }}
            >
              <KrivaLogo height={48} />
            </div>

            {/* Mark only */}
            <div
              className="surface"
              style={{ padding: "2.5rem", display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <KrivaLogo variant="mark-only" height={56} />
              <KrivaLogo variant="mark-only" height={40} />
              <KrivaLogo variant="mark-only" height={28} />
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 02 — COLORS */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="02" title="Colors" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Primary palette */}
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>Brand Palette</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1px", border: "1px solid var(--divider)", borderRadius: "var(--radius)", overflow: "hidden" }}>
                {[
                  { label: "Brand (Indigo)", var: "--brand", hex: "#2D2DD4 / #5B5BF5" },
                  { label: "Brand Dark",    var: "--brand-dark", hex: "#2020A8 / #4040E0" },
                  { label: "Brand Light",   var: "--brand-light", hex: "#4F4FE8 / #7B7BFF" },
                  { label: "Accent (Cyan)", var: "--accent", hex: "#00C8E8 / #00D4F5" },
                  { label: "Accent Bright", var: "--accent-bright", hex: "#00E5FF / #00F0FF" },
                ].map((c) => (
                  <div
                    key={c.var}
                    style={{
                      padding: "1.25rem",
                      backgroundColor: `var(${c.var})`,
                      minHeight: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "rgba(255,255,255,0.7)", display: "block" }}>{c.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "rgba(255,255,255,0.45)", marginTop: "0.25rem" }}>{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Surfaces + Text */}
            <div>
              <p className="label" style={{ marginBottom: "1rem" }}>Surfaces & Text (theme-adaptive)</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Canvas",        token: "--canvas",        note: "Page background" },
                  { label: "Canvas Subtle", token: "--canvas-subtle",  note: "Alt background" },
                  { label: "Surface",       token: "--surface",        note: "Cards, panels" },
                  { label: "Surface Raised",token: "--surface-raised", note: "Nav, modals" },
                  { label: "Ink",           token: "--ink",            note: "Primary text" },
                  { label: "Ink Secondary", token: "--ink-secondary",  note: "Strong secondary" },
                  { label: "Ink Muted",     token: "--ink-muted",      note: "Captions, meta" },
                ].map((c) => (
                  <div
                    key={c.token}
                    style={{
                      backgroundColor: `var(${c.token})`,
                      border: "1px solid var(--divider)",
                      borderRadius: "var(--radius)",
                      padding: "1rem",
                      minHeight: "80px",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-muted)", display: "block" }}>{c.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)", opacity: 0.7, marginTop: "0.5rem", display: "block" }}>{c.note}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)", opacity: 0.5, display: "block", marginTop: "0.25rem" }}>{c.token}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrast note */}
            <div style={{ padding: "1rem 1.5rem", backgroundColor: "var(--accent-muted)", border: "1px solid rgba(0,212,245,0.2)", borderRadius: "var(--radius)", display: "flex", gap: "1rem" }}>
              <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", flexShrink: 0 }}>WCAG</span>
              <p style={{ color: "var(--ink-secondary)", fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "none" }}>
                <strong style={{ color: "var(--ink)" }}>Dark mode:</strong> --accent (#00D4F5) on --canvas (#07071A) = ~9.8:1 — passes AAA. --ink (#EDF0FF) on --canvas = ~14:1.
                {" "}<strong style={{ color: "var(--ink)" }}>Light mode:</strong> --brand (#2D2DD4) on white = 7.2:1 — passes AAA. Accent (#00C8E8) on white = 2.5:1 — decorative use only (never body text).
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 03 — TYPOGRAPHY */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="03" title="Typography" />

          {/* Rajdhani */}
          <div style={{ marginBottom: "3.5rem" }}>
            <MonoLabel>Rajdhani — Display / Headlines (matches logo)</MonoLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1.5rem" }}>
              {[
                { size: "4.5rem", weight: 700, label: "Display 2XL", text: "Precision at Scale." },
                { size: "3.75rem", weight: 700, label: "Display XL",  text: "Built for AI." },
                { size: "3rem",   weight: 700, label: "Display LG",   text: "Data. Systems. Results." },
                { size: "2.25rem",weight: 600, label: "Display MD",   text: "Your search ends here." },
                { size: "1.75rem",weight: 600, label: "Display SM",   text: "Five divisions. One company." },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "baseline", gap: "2rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-muted)", width: "90px", flexShrink: 0 }}>
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: item.size,
                      fontWeight: item.weight,
                      color: "var(--ink)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient headline demo */}
          <div className="surface" style={{ padding: "2rem", marginBottom: "3.5rem" }}>
            <MonoLabel>Gradient headline (hero usage)</MonoLabel>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "3rem",
                marginTop: "1rem",
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
              }}
            >
              Egocentric Video & Robotics Training Data
            </h2>
          </div>

          {/* Inter */}
          <div style={{ marginBottom: "3.5rem" }}>
            <MonoLabel>Inter Variable — Body / UI</MonoLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", display: "block", marginBottom: "0.5rem" }}>400 — Body regular</span>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "1.0625rem", color: "var(--ink)", lineHeight: 1.75, maxWidth: "65ch" }}>
                  Save up to 60% on your cloud spend — in a 2-minute audit. We analyze your current infrastructure, find waste, and hand you a specific reduction plan. No vendor lock-in required to get started.
                </p>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", display: "block", marginBottom: "0.5rem" }}>500 — Body medium (emphasis)</span>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "1rem", color: "var(--ink)", lineHeight: 1.75 }}>
                  US-registered LLC, operating across Hyderabad and Dallas/Houston.
                </p>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", display: "block", marginBottom: "0.5rem" }}>0.875rem — Caption / Metadata</span>
                <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>
                  Published July 5, 2026 · 4 min read · AI & Automation
                </p>
              </div>
            </div>
          </div>

          {/* IBM Plex Mono */}
          <div>
            <MonoLabel>IBM Plex Mono — Labels / Tags / Eyebrows / Specs</MonoLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", display: "block", marginBottom: "0.75rem" }}>Section eyebrow</span>
                <span className="eyebrow">01 / Data Collection</span>
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)", display: "block", marginBottom: "0.75rem" }}>Trust bar (ledger style)</span>
                <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                  {[
                    { label: "Entity",    value: "US LLC" },
                    { label: "HQ",        value: "Hyderabad + Dallas" },
                    { label: "Team",      value: "50+ People" },
                    { label: "Datasets",  value: "1M+ Hours" },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="label" style={{ display: "block", marginBottom: "0.25rem" }}>{item.label}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.125rem", color: "var(--ink)", display: "block" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span className="tag">All Industries</span>
                <span className="tag tag-brand">Custom Orders</span>
                <span className="tag tag-accent">Live</span>
                <span className="tag tag-accent">New</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 04 — BUTTONS */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="04" title="Buttons" />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <MonoLabel>Primary actions</MonoLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem", alignItems: "center" }}>
                <button className="btn btn-gradient btn-lg">Request a Sample →</button>
                <button className="btn btn-primary btn-lg">Book an Audit</button>
                <button className="btn btn-accent">See How</button>
                <button className="btn btn-primary">Contact Us</button>
                <button className="btn btn-primary btn-sm">Learn More</button>
              </div>
            </div>

            <div>
              <MonoLabel>Secondary & ghost</MonoLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem", alignItems: "center" }}>
                <button className="btn btn-outline btn-lg">View Case Studies</button>
                <button className="btn btn-outline">All Services</button>
                <button className="btn btn-ghost">Read the Docs</button>
                <button className="btn btn-ghost btn-sm">View All →</button>
              </div>
            </div>

            <div style={{ padding: "1rem 1.5rem", backgroundColor: "var(--accent-muted)", border: "1px solid rgba(0,212,245,0.15)", borderRadius: "var(--radius)" }}>
              <p style={{ color: "var(--ink-secondary)", fontSize: "0.875rem" }}>
                Tab through buttons to verify <strong style={{ color: "var(--ink)" }}>brand-colored focus ring</strong>. All buttons use 6px border-radius, consistent with the token system.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 05 — SURFACES & CARDS */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="05" title="Surfaces & Cards" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {/* Base surface */}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Surface</span>
              <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Base card. Used for service tiles, form fields, info panels.</p>
            </div>

            {/* Surface raised */}
            <div className="surface-raised" style={{ padding: "1.5rem" }}>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Surface Raised</span>
              <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Elevated. Nav bar, modals, dropdown menus.</p>
            </div>

            {/* Accent top border */}
            <div className="surface-accent" style={{ padding: "1.5rem" }}>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Surface Accent</span>
              <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Highlighted feature card. Cyan top border.</p>
            </div>

            {/* Hover glow card */}
            <div className="card-glow" style={{ padding: "1.5rem" }}>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Card Glow</span>
              <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Hover me — border turns cyan, shadow glows. Used for division tiles.</p>
            </div>

            {/* Glass */}
            <div className="surface-glass" style={{ padding: "1.5rem" }}>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Glass</span>
              <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Glassmorphism. Nav bar on scroll, announcement banners.</p>
            </div>

            {/* Brand gradient card */}
            <div
              style={{
                padding: "1.5rem",
                background: "var(--gradient-brand)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-brand)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.7)",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Gradient CTA Card
              </span>
              <p style={{ color: "#fff", fontSize: "0.9375rem", maxWidth: "none" }}>Hero-level call-to-action panels.</p>
            </div>
          </div>

          {/* Dividers */}
          <div style={{ marginTop: "2.5rem" }}>
            <MonoLabel>Dividers</MonoLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1rem" }}>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "0.75rem" }}>Standard</span>
                <hr className="divider" />
              </div>
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "0.75rem" }}>Accent line (section heading decoration)</span>
                <div className="accent-line" style={{ width: "80px" }} />
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 06 — BRAND SIGNATURE ELEMENTS */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="06" title="Brand Signature Elements" />
          <p style={{ color: "var(--ink-muted)", marginBottom: "2rem", fontSize: "0.9375rem" }}>
            Drawn from the peacock logo — the pixel grid and cyan glow are recurring motifs throughout the site.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {/* Pixel grid */}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>Pixel grid (logo motif)</MonoLabel>
              <div style={{ marginTop: "1rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div className="pixel-grid">
                  <span/><span/><span/><span/><span/><span/>
                </div>
                <div className="pixel-grid" style={{ gap: "4px" }}>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} style={{ width: "8px", height: "8px" }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Status dot */}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>Status dot (live/active)</MonoLabel>
              <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                <div className="status-dot" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)" }}>System Online</span>
              </div>
            </div>

            {/* Gradient text */}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>Gradient text</MonoLabel>
              <p
                style={{
                  marginTop: "1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Kriva Tech
              </p>
            </div>

            {/* Glow pulse */}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>Glow pulse (accent)</MonoLabel>
              <div
                style={{
                  marginTop: "1rem",
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius)",
                  background: "var(--accent-muted)",
                  border: "1px solid rgba(0,212,245,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              >
                <div className="pixel-grid" style={{ transform: "scale(0.8)" }}>
                  <span/><span/><span/><span/><span/><span/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 07 — MOTION */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="07" title="Motion" />
          <p style={{ color: "var(--ink-muted)", marginBottom: "2rem", fontSize: "0.9375rem" }}>
            Purposeful animation only. Scroll reveals, hover micro-interactions, theme transitions. All respect{" "}
            <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.875em", color: "var(--accent)", background: "var(--surface)", padding: "0.1em 0.4em", borderRadius: "var(--radius-sm)", border: "1px solid var(--divider)" }}>
              prefers-reduced-motion
            </code>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>fade-up (section entry)</MonoLabel>
              <div style={{ marginTop: "1rem", animation: "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}>
                <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Sections appear as you scroll into view.</p>
              </div>
            </div>
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>slide-in-right</MonoLabel>
              <div style={{ marginTop: "1rem", animation: "slide-in-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards" }}>
                <p style={{ color: "var(--ink)", fontSize: "0.9375rem", maxWidth: "none" }}>Side panels and drawers.</p>
              </div>
            </div>
            <div className="surface" style={{ padding: "1.5rem" }}>
              <MonoLabel>card-glow hover</MonoLabel>
              <div className="card-glow" style={{ padding: "1rem", marginTop: "1rem" }}>
                <p style={{ color: "var(--ink)", fontSize: "0.875rem", maxWidth: "none" }}>Hover this card →</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" style={{ marginBottom: "5rem" }} />

        {/* ============================================================ */}
        {/* 08 — PROSE */}
        {/* ============================================================ */}
        <section style={{ marginBottom: "5rem" }}>
          <SectionHeader number="08" title="Prose (MDX Rendering)" />
          <div className="prose" style={{ marginTop: "1.5rem" }}>
            <h2>How a data order gets fulfilled</h2>
            <p>
              You specify the scenario — egocentric kitchen prep, warehouse pick-and-place, outdoor delivery — and the resolution, frame rate, and rig type. We handle the rest.
            </p>
            <h3>Collection</h3>
            <p>
              Our field teams operate across India, the US, and on demand in 40+ other countries. Every collector signs a data rights agreement. <strong>Chain of custody is documented at every step.</strong>
            </p>
            <ul>
              <li>GoPro-class chest and head rigs</li>
              <li>Custom multi-camera array rigs for stereo/depth</li>
              <li>Controlled indoor studios and real-world outdoor environments</li>
            </ul>
            <blockquote>
              &ldquo;We&rsquo;ve worked with five data vendors. Kriva is the only one that delivered the first batch on time.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: "1px solid var(--divider)", paddingTop: "2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <KrivaLogo height={28} />
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <span className="tag">Phase 1 Complete</span>
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---- Internal helpers ---- */

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6875rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--accent)",
        }}
      >
        {number}
      </span>
      <div style={{ width: "1px", height: "16px", backgroundColor: "var(--divider-strong)" }} />
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--ink)",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.6875rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--ink-muted)",
        display: "block",
      }}
    >
      {children}
    </span>
  );
}
