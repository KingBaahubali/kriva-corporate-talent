import Image from "next/image";

interface KrivaLogoProps {
  variant?: "full" | "mark-only";
  height?: number;
  className?: string;
}

export function KrivaLogo({ variant = "full", height = 40, className = "" }: KrivaLogoProps) {
  // Using the actual logo.png image
  // The original image is 1024x576 (16:9 aspect ratio)
  // We'll scale the width automatically based on the height
  const width = Math.round(height * (1024 / 576));

  return (
    <div 
      className={`relative flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm ${className}`}
      style={{ height: height + 4, width: width + 8 }}
    >
      <div className="relative flex items-center justify-center" style={{ height, width }}>
        <Image
          src="/logo.png"
          alt="Kriva Tech Logo"
          fill
          className="object-contain scale-[1.7]"
          priority
        />
      </div>
    </div>
  );
}
