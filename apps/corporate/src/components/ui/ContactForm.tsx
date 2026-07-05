"use client";

import { useActionState, useRef } from "react";
import { submitLead, type LeadFormState } from "@/app/actions/submit-lead";

const DIVISIONS = [
  { value: "data",       label: "Data Collection & Annotation" },
  { value: "ai",         label: "AI & Automation"              },
  { value: "software",   label: "Software Engineering"          },
  { value: "operations", label: "IT & Operations"               },
  { value: "staffing",   label: "Tech Staffing"                 },
  { value: "general",    label: "General Enquiry"               },
];

const INITIAL: LeadFormState = { status: "idle" };

export function ContactForm({ preselect }: { preselect?: string }) {
  const [state, action, pending] = useActionState(submitLead, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  const fieldError = (key: string) =>
    state.status === "error" ? state.fieldErrors?.[key]?.[0] : undefined;

  /* Input style helper */
  const field = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    color: "var(--ink)",
    backgroundColor: "var(--canvas)",
    border: `1.5px solid ${hasError ? "var(--error, #e53e3e)" : "var(--divider)"}`,
    borderRadius: "var(--radius)",
    padding: "0.8125rem 1rem",
    outline: "none",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
  });

  const label: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: "0.6875rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--ink-muted)",
    marginBottom: "0.5rem",
  };

  const errorMsg: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "var(--error, #e53e3e)",
    marginTop: "0.375rem",
  };

  if (state.status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          backgroundColor: "var(--canvas-subtle)",
          border: "1px solid var(--divider)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <div style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: "rgba(0,212,245,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1.5rem",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.5rem", color: "var(--ink)", marginBottom: "0.75rem" }}>
          Message received.
        </h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.7 }}>
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={action} noValidate>
      {/* Honeypot — hidden from users, visible to bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Leave blank</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* General error */}
      {state.status === "error" && !state.fieldErrors && (
        <div style={{ padding: "1rem", backgroundColor: "rgba(229,62,62,0.08)", border: "1px solid rgba(229,62,62,0.3)", borderRadius: "var(--radius)", marginBottom: "1.5rem" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "var(--error, #e53e3e)", margin: 0 }}>{state.message}</p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-grid">

        {/* Name */}
        <div style={{ gridColumn: "1" }}>
          <label htmlFor="cf-name" style={label}>Full name *</label>
          <input
            id="cf-name" name="name" type="text" required autoComplete="name"
            placeholder="Jane Smith"
            style={field(!!fieldError("name"))}
            className="form-input"
          />
          {fieldError("name") && <p style={errorMsg}>{fieldError("name")}</p>}
        </div>

        {/* Email */}
        <div style={{ gridColumn: "2" }}>
          <label htmlFor="cf-email" style={label}>Work email *</label>
          <input
            id="cf-email" name="email" type="email" required autoComplete="email"
            placeholder="jane@company.com"
            style={field(!!fieldError("email"))}
            className="form-input"
          />
          {fieldError("email") && <p style={errorMsg}>{fieldError("email")}</p>}
        </div>

        {/* Company */}
        <div style={{ gridColumn: "1" }}>
          <label htmlFor="cf-company" style={label}>Company</label>
          <input
            id="cf-company" name="company" type="text" autoComplete="organization"
            placeholder="Acme Corp"
            style={field(false)}
            className="form-input"
          />
        </div>

        {/* Phone */}
        <div style={{ gridColumn: "2" }}>
          <label htmlFor="cf-phone" style={label}>Phone (optional)</label>
          <input
            id="cf-phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+1 555 000 0000"
            style={field(false)}
            className="form-input"
          />
        </div>

        {/* Division */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="cf-division" style={label}>I&rsquo;m interested in *</label>
          <select
            id="cf-division" name="division" required
            defaultValue={preselect ?? ""}
            style={{ ...field(!!fieldError("division")), appearance: "none", cursor: "pointer", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%236b72a0' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", paddingRight: "2.5rem" }}
            className="form-input"
          >
            <option value="" disabled>Select a division…</option>
            {DIVISIONS.map((d) => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
          {fieldError("division") && <p style={errorMsg}>{fieldError("division")}</p>}
        </div>

        {/* Message */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="cf-message" style={label}>Message *</label>
          <textarea
            id="cf-message" name="message" required rows={5}
            placeholder="Tell us about your project, requirements, or timeline…"
            style={{ ...field(!!fieldError("message")), resize: "vertical", fontFamily: "var(--font-body)", lineHeight: 1.6 }}
            className="form-input"
          />
          {fieldError("message") && <p style={errorMsg}>{fieldError("message")}</p>}
        </div>
      </div>

      {/* Submit */}
      <div style={{ marginTop: "2rem" }}>
        <button
          type="submit"
          disabled={pending}
          style={{
            width: "100%", padding: "1rem",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.02em",
            backgroundColor: pending ? "var(--brand-light)" : "var(--brand)",
            color: "#fff", border: "none", borderRadius: "var(--radius)",
            cursor: pending ? "wait" : "pointer",
            transition: "background-color 200ms ease, transform 150ms ease",
            boxShadow: "var(--shadow-brand)",
          }}
          className="submit-btn"
        >
          {pending ? "Sending…" : "Send Message"}
        </button>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8125rem", color: "var(--ink-muted)", textAlign: "center", marginTop: "1rem", lineHeight: 1.5 }}>
          We respond within one business day.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .form-input:focus { border-color: var(--brand) !important; box-shadow: 0 0 0 3px var(--focus-ring) !important; }
        .submit-btn:hover:not(:disabled) { background-color: var(--brand-dark) !important; transform: translateY(-1px); }
        @media (max-width: 640px) { .form-grid { grid-template-columns: 1fr !important; } .form-grid > div { grid-column: 1 !important; } }
      `}} />
    </form>
  );
}
