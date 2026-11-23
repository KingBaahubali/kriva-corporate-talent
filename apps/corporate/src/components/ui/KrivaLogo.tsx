
import Image from "next/image";

interface KrivaLogoProps {
  variant?: "full" | "mark-only";
  height?: number;
  className?: string;
}

export function KrivaLogo({ variant = "full", height = 40, className = "" }: KrivaLogoProps) {
  const markOnly = variant === "mark-only";
  const width = markOnly ? height : Math.round(height * (2170 / 725));

  return (
    <Image
      src={markOnly ? "/peacock-icon.png" : "/logo.png"}
      alt={markOnly ? "Kriva Talent peacock" : "Kriva Talent"}
      width={width}
      height={height}
      className={`block object-contain ${className}`}
      priority
      unoptimized
    />
  );
}
