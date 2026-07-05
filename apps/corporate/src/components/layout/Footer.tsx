import Link from "next/link";
import { KrivaLogo } from "@/components/ui/KrivaLogo";

const DIVISIONS = [
  { name: "Data Collection",  href: "/data"       },
  { name: "AI & Automation",  href: "/ai"         },
  { name: "Software Eng.",    href: "/software"   },
  { name: "IT & Operations",  href: "/operations" },
  { name: "Tech Staffing",    href: "/staffing"   },
];

const COMPANY = [
  { name: "Contact Us",   href: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--divider)", backgroundColor: "var(--canvas-subtle)" }}>
      <div className="container" style={{ paddingBlock: "4rem 3rem" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem", marginBottom: "4rem" }}>

          {/* Brand */}
          <div>
            <KrivaLogo height={30} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-muted)", lineHeight: 1.7, marginTop: "1.5rem", maxWidth: "340px" }}>
              Quality in Quantity, Delivered. A multi-division technology and operations company building the systems that make AI possible.
            </p>
          </div>

          {/* Divisions */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1.25rem" }}>
              Divisions
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {DIVISIONS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-secondary)", textDecoration: "none" }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)", marginBottom: "1.25rem" }}>
              Company
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link" style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--ink-secondary)", textDecoration: "none" }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--divider)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
            © {new Date().getFullYear()} Kriva Technologies. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--ink-muted)" }}>
            krivatech.com
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-link:hover { color: var(--brand) !important; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}} />
    </footer>
  );
}
