/**
 * @kriva/ui — Content Type Interfaces
 *
 * These interfaces define the shape of ALL content in the Kriva site.
 * Data sources (MDX at launch, Sanity later) must satisfy these contracts.
 * Changing data source = change the fetcher function only, never the components.
 */

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

// ---------------------------------------------------------------------------
// Divisions & Services
// ---------------------------------------------------------------------------

export type DivisionSlug = "data" | "ai" | "software" | "operations" | "staffing";

export interface Division {
  slug: DivisionSlug;
  name: string;
  tagline: string;
  description: string;
  eyebrow: string; // IBM Plex Mono label, e.g. "01 / Data"
  services: ServiceSummary[];
  cta: CTA;
  seo: SEOMeta;
}

export interface ServiceSummary {
  slug: string;
  name: string;
  tagline: string;
}

export interface Service {
  slug: string;
  divisionSlug: DivisionSlug;
  name: string;
  tagline: string;
  description: string;
  body: string; // MDX content string
  features?: string[]; // bulleted feature list
  cta: CTA;
  seo: SEOMeta;
}

// ---------------------------------------------------------------------------
// Portfolio / Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  client: string;
  headline: string;
  description: string;
  body: string; // MDX content string
  tags: string[];
  division: DivisionSlug;
  seo: SEOMeta;
}

// ---------------------------------------------------------------------------
// Insights / Blog
// ---------------------------------------------------------------------------

export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO 8601 date string
  updatedAt?: string;
  author?: string;
  tags?: string[];
  body: string; // MDX content string
  seo: SEOMeta;
}

export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
}

// ---------------------------------------------------------------------------
// Shared
// ---------------------------------------------------------------------------

export interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface SEOMeta {
  title: string; // Full page title (≤60 chars)
  description: string; // Meta description (≤160 chars)
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

// ---------------------------------------------------------------------------
// Trust Bar / Homepage
// ---------------------------------------------------------------------------

export interface TrustSignal {
  label: string; // IBM Plex Mono label
  value: string; // The hard number or fact
}

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export interface Industry {
  name: string;
  description: string;
  slug: string;
}
