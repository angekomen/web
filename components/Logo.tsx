type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  invert?: boolean;
};

export function Logo({ variant = "full", className, invert = false }: LogoProps) {
  const textColor = invert ? "#ffffff" : "#0a0e1f";
  const subColor = invert ? "#ff7a7a" : "#c0282b";

  return (
    <div className={className} aria-label="Aangekomen Desarrolladora">
      <div className="flex items-center gap-3">
        <svg
          width="46"
          height="42"
          viewBox="0 0 92 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {/* "M" mark: two slanted hexagons that overlap in the middle */}
          {/* Left hexagon — lavender / soft purple */}
          <path
            d="M22 4 L44 16 L44 56 L22 76 L4 64 L4 22 Z"
            fill="#a584c7"
          />
          {/* Right hexagon — navy blue */}
          <path
            d="M68 4 L88 22 L88 64 L68 76 L46 56 L46 16 Z"
            fill="#243278"
          />
          {/* Overlap accent — subtle darker band where they intersect */}
          <path
            d="M44 16 L46 16 L46 56 L44 56 Z"
            fill="#1d1a4a"
            opacity="0.6"
          />
        </svg>
        {variant === "full" && (
          <div className="leading-none">
            <div
              className="font-bold tracking-tight text-[1.05rem]"
              style={{ color: textColor }}
            >
              AANGEKOMEN
            </div>
            <div
              className="text-[0.58rem] tracking-[0.28em] mt-1 font-medium"
              style={{ color: subColor }}
            >
              DESARROLLADORA
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
