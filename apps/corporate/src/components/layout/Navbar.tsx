"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { KrivaLogo } from "@/components/ui/KrivaLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const divisions = [
  { name: "Data Collection", href: "/data" },
  { name: "AI & Automation", href: "/ai" },
  { name: "Software Eng.", href: "/software" },
  { name: "IT & Operations", href: "/operations" },
  { name: "Tech Staffing", href: "/staffing" },
];

const products = [
  {
    name: "Physical AI Data",
    tag: "Egocentric video & robotics training data, collected worldwide.",
    href: "/products/physical-ai-data",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
    ),
  },
  {
    name: "Cloud Cost Cut",
    tag: "Cut your cloud bill by up to 60% — in a 2-minute audit.",
    href: "/products/cloud-cost-cut",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
    ),
  },
  {
    name: "SpinGPU",
    tag: "On-demand GPU rental and AI compute infrastructure.",
    href: "/products/spingpu",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    ),
  },
  {
    name: "R360",
    tag: "End-to-end AI-powered recruiting and staffing platform.",
    href: "/products/r360",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard accessibility for mega-menu (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside mega-menu to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    if (productsOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [productsOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "0",
        backgroundColor: scrolled || mobileMenuOpen ? "color-mix(in srgb, var(--canvas) 70%, transparent)" : "transparent",
        backdropFilter: scrolled || mobileMenuOpen ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled || mobileMenuOpen ? "blur(24px)" : "none",
        borderBottom: scrolled || mobileMenuOpen ? "1px solid var(--divider)" : "1px solid transparent",
        transition: "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "88px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Kriva Talent — Home"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <KrivaLogo height={64} />
        </Link>

        {/* Division nav — desktop */}
        <nav
          aria-label="Primary navigation"
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="nav-desktop"
        >
          {divisions.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  fontWeight: active ? 500 : 400,
                  color: active ? "var(--brand)" : "var(--ink-secondary)",
                  padding: "0.5rem 0.875rem",
                  borderRadius: "var(--radius)",
                  transition: "color var(--duration-fast) ease, background-color var(--duration-fast) ease",
                  position: "relative",
                }}
                className="nav-link"
              >
                {link.name}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "0.875rem",
                      right: "0.875rem",
                      height: "2px",
                      background: "var(--gradient-brand)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* Our Products Dropdown trigger */}
          <div
            ref={megaMenuRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              onFocus={() => setProductsOpen(true)}
              aria-expanded={productsOpen}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: pathname.startsWith("/products") ? 500 : 400,
                color: pathname.startsWith("/products") ? "var(--brand)" : "var(--ink-secondary)",
                padding: "0.5rem 0.875rem",
                borderRadius: "var(--radius)",
                transition: "color var(--duration-fast) ease, background-color var(--duration-fast) ease",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                cursor: "pointer",
                background: "transparent",
                border: "none",
              }}
              className="nav-link"
            >
              Our Products
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}>
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {/* Mega Menu Dropdown */}
            {productsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "700px",
                  paddingTop: "1rem",
                }}
              >
                <div
                  className="surface"
                  style={{
                    padding: "1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    boxShadow: "var(--shadow-lg)",
                  }}
                  // Manage focus blur
                  onBlur={(e) => {
                    // if focus leaves the entire mega menu, close it
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setProductsOpen(false);
                    }
                  }}
                >
                  {products.map((prod) => (
                    <Link
                      key={prod.href}
                      href={prod.href}
                      className="product-card"
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        padding: "1rem",
                        borderRadius: "var(--radius)",
                        transition: "background-color 150ms ease",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "var(--radius)",
                          backgroundColor: "var(--canvas-subtle)",
                          border: "1px solid var(--divider)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--brand)",
                          flexShrink: 0,
                        }}
                      >
                        {prod.icon}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--ink)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          {prod.name}
                        </h4>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.5, margin: 0 }}>
                          {prod.tag}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right side — Desktop CTA & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <Link
            href="/contact"
            className="btn btn-primary btn-sm nav-cta"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
          >
            Book a Call
          </Link>
          <ThemeToggle />
          
          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent", border: "1px solid var(--divider)", borderRadius: "var(--radius-sm)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink)", cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "absolute", top: "88px", left: 0, width: "100%", height: "calc(100dvh - 88px)", backgroundColor: "var(--canvas)", overflowY: "auto", borderTop: "1px solid var(--divider)",
          }}
        >
          <div className="container" style={{ paddingBlock: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {divisions.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--ink)", textDecoration: "none", paddingBlock: "0.5rem" }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Accordion for Products */}
            <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--divider)" }}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--ink)", background: "transparent", border: "none", padding: "0.5rem 0", cursor: "pointer" }}
              >
                Our Products
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              {productsOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem", paddingLeft: "1rem", borderLeft: "2px solid var(--divider)" }}>
                  {products.map((prod) => (
                    <Link
                      key={prod.href}
                      href={prod.href}
                      style={{ textDecoration: "none" }}
                    >
                      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", color: "var(--ink)", marginBottom: "0.25rem" }}>
                        {prod.name}
                      </h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--ink-muted)", lineHeight: 1.5, margin: 0 }}>
                        {prod.tag}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ marginTop: "2rem", justifyContent: "center" }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .product-card:hover {
          background-color: var(--hover-overlay) !important;
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
          .mobile-drawer { display: none !important; }
        }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
        }
      `}} />
    </header>
  );
}
