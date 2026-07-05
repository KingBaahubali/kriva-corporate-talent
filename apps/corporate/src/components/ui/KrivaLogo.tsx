interface KrivaLogoProps {
  variant?: "full" | "mark-only";
  height?: number;
  className?: string;
}

/**
 * KrivaLogo — faithfully recreated from the official brand mark.
 * Peacock silhouette (indigo body, cyan crest + pixel dots) + "KrivaTech" wordmark.
 */
export function KrivaLogo({ variant = "full", height = 40, className = "" }: KrivaLogoProps) {
  const aspectRatio = variant === "full" ? 4.2 : 1.0;
  const width = height * aspectRatio;

  if (variant === "mark-only") {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kriva Tech logo mark"
        className={className}
      >
        {/* Peacock body — indigo */}
        <path
          d="M50 88 C30 88 22 72 22 58 C22 40 34 28 42 22 C46 20 48 18 50 15 C52 18 54 20 58 22 C66 28 78 40 78 58 C78 72 70 88 50 88Z"
          fill="#2D2DD4"
          opacity="0.9"
        />
        {/* Peacock S-curve neck */}
        <path
          d="M50 15 C50 10 46 6 44 3 C48 2 52 2 56 3 C54 6 50 10 50 15Z"
          fill="#2D2DD4"
        />
        {/* Crest feathers — cyan */}
        <path d="M44 3 C41 -2 36 -1 38 4" stroke="#00D4F5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M47 2 C45 -3 40 -3 42 3" stroke="#00D4F5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M50 1 C50 -4 46 -5 48 2" stroke="#00D4F5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M53 2 C55 -3 60 -3 58 3" stroke="#00D4F5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M56 3 C59 -2 64 -1 62 4" stroke="#00D4F5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Pixel grid base — cyan, brand signature */}
        <rect x="34" y="82" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.9" />
        <rect x="43" y="82" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.5" />
        <rect x="34" y="91" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.5" />
        <rect x="43" y="91" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.3" />
        <rect x="52" y="82" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.3" />
        <rect x="52" y="91" width="7" height="7" rx="1" fill="#00D4F5" opacity="0.15" />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 420 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kriva Tech"
      className={className}
    >
      {/* ---- PEACOCK MARK ---- */}
      {/* Body — indigo */}
      <path
        d="M50 88 C30 88 22 72 22 58 C22 40 34 28 42 22 C46 20 48 18 50 15 C52 18 54 20 58 22 C66 28 78 40 78 58 C78 72 70 88 50 88Z"
        fill="currentColor"
        style={{ color: "var(--brand, #2D2DD4)" }}
        opacity="0.95"
      />
      <path
        d="M50 15 C50 10 46 6 44 3 C48 2 52 2 56 3 C54 6 50 10 50 15Z"
        fill="currentColor"
        style={{ color: "var(--brand, #2D2DD4)" }}
      />
      {/* Crest — cyan */}
      <path d="M44 4 C41 -1 36 0 38 5" stroke="var(--accent, #00D4F5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M47 3 C45 -2 40 -2 42 4" stroke="var(--accent, #00D4F5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 2 C50 -3 46 -4 48 3" stroke="var(--accent, #00D4F5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M53 3 C55 -2 60 -2 58 4" stroke="var(--accent, #00D4F5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M56 4 C59 -1 64 0 62 5" stroke="var(--accent, #00D4F5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Pixel grid base — cyan */}
      <rect x="34" y="82" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.9" />
      <rect x="43" y="82" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.55" />
      <rect x="34" y="91" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.55" />
      <rect x="43" y="91" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.3" />
      <rect x="52" y="82" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.3" />
      <rect x="52" y="91" width="7" height="7" rx="1" fill="var(--accent, #00D4F5)" opacity="0.15" />

      {/* ---- WORDMARK ---- */}
      {/* "Kriva" — geometric, indigo */}
      <text
        x="102"
        y="72"
        fontFamily="Rajdhani, 'Segoe UI', sans-serif"
        fontSize="64"
        fontWeight="700"
        fill="currentColor"
        style={{ color: "var(--brand, #2D2DD4)", fill: "var(--brand, #2D2DD4)" }}
        letterSpacing="-1"
      >
        Kriva
      </text>
      {/* "TECH" — condensed, cyan */}
      <text
        x="108"
        y="96"
        fontFamily="Rajdhani, 'Segoe UI', sans-serif"
        fontSize="22"
        fontWeight="600"
        fill="var(--accent, #00D4F5)"
        letterSpacing="6"
      >
        TECH
      </text>
    </svg>
  );
}
