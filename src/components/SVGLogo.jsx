import React from "react";

export default function SVGLogo({ name, className = "h-12 w-auto" }) {
  // Hash the company name to generate a consistent representation
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash);

  // 6 abstract medical/scientific symbols
  const iconTypes = ["cross", "molecule", "helix", "capsule", "shield", "hexagon"];
  const iconType = iconTypes[index % iconTypes.length];

  // Harmonized palette themes (Primary Blue, Accent Green, Slate, Navy)
  const colorThemes = [
    { primary: "#1BD3E4", secondary: "#10B981", bg: "#ECFEFF" }, // Cyan + Emerald
    { primary: "#0D9488", secondary: "#1BD3E4", bg: "#F0FDF4" }, // Teal + Cyan
    { primary: "#475569", secondary: "#1BD3E4", bg: "#F8FAFC" }, // Slate + Cyan
    { primary: "#6366F1", secondary: "#1BD3E4", bg: "#EEF2FF" }  // Indigo + Cyan
  ];
  const theme = colorThemes[index % colorThemes.length];

  // Abbreviate long names for the logo icon text, or use first letter
  const initials = name
    .split(" ")
    .filter(word => !["Limited", "Corporation", "Laboratories", "Pharmaceutical", "Pharmaceuticals", "Industries", "India", "Co", "MSD", "GSK", "FDC", "RPG", "SMS"].includes(word))
    .map(word => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || name.slice(0, 2).toUpperCase();

  const renderIcon = () => {
    switch (iconType) {
      case "cross":
        return (
          <g>
            <rect x="10" y="18" width="16" height="4" fill={theme.primary} rx="2" />
            <rect x="16" y="12" width="4" height="16" fill={theme.primary} rx="2" />
            <circle cx="18" cy="20" r="1.5" fill="#FFFFFF" />
          </g>
        );
      case "molecule":
        return (
          <g>
            <circle cx="18" cy="14" r="3.5" fill={theme.primary} />
            <circle cx="12" cy="24" r="2.5" fill={theme.secondary} />
            <circle cx="24" cy="24" r="2.5" fill={theme.secondary} />
            <line x1="18" y1="14" x2="12" y2="24" stroke={theme.primary} strokeWidth="1.5" />
            <line x1="18" y1="14" x2="24" y2="24" stroke={theme.primary} strokeWidth="1.5" />
          </g>
        );
      case "helix":
        return (
          <g fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M12 12 C18 16, 18 24, 24 28" stroke={theme.primary} />
            <path d="M24 12 C18 16, 18 24, 12 28" stroke={theme.secondary} />
            <line x1="15" y1="16" x2="21" y2="16" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="18" y1="20" x2="18" y2="20" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="15" y1="24" x2="21" y2="24" stroke="#CBD5E1" strokeWidth="1" />
          </g>
        );
      case "capsule":
        return (
          <g transform="rotate(45 18 20)">
            <rect x="13" y="11" width="10" height="18" fill="none" stroke={theme.primary} strokeWidth="2" rx="5" />
            <path d="M13 20 L23 20" stroke={theme.primary} strokeWidth="2" />
            <path d="M14 12 h8 v8 h-8 z" fill={theme.primary} />
            <circle cx="18" cy="25" r="1.5" fill={theme.secondary} />
          </g>
        );
      case "shield":
        return (
          <g>
            <path d="M11 12 C11 12, 18 10, 18 10 C18 10, 25 12, 25 12 C25 20, 18 28, 18 28 C18 28, 11 20, 11 12 Z" fill="none" stroke={theme.primary} strokeWidth="2" />
            <path d="M14 14.5 C14 14.5, 18 13, 18 13 C18 13, 22 14.5, 22 14.5 C22 19, 18 25, 18 25 C18 25, 14 19, 14 14.5 Z" fill={theme.secondary} />
          </g>
        );
      case "hexagon":
      default:
        return (
          <g>
            <polygon points="18,10 26,14.5 26,24.5 18,29 10,24.5 10,14.5" fill="none" stroke={theme.primary} strokeWidth="2" />
            <polygon points="18,13 23,16 23,22 18,25 13,22 13,16" fill={theme.secondary} />
          </g>
        );
    }
  };

  // Clean company name: remove suffix like "Laboratories", "Limited", "Pharmaceuticals"
  const cleanName = name
    .replace(/( Laboratories| Limited| Pharmaceuticals| Pharmaceutical| Industries| Private| Co)/g, "")
    .trim();

  return (
    <svg
      viewBox="0 0 170 40"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105`}
      aria-label={`${name} Logo`}
    >
      {/* Background shape */}
      <rect x="2" y="2" width="166" height="36" rx="6" fill="#FFFFFF" stroke="#F1F5F9" strokeWidth="1" />
      
      {/* Small Decorative Badge Behind Icon */}
      <rect x="6" y="6" width="28" height="28" rx="5" fill={theme.bg} />

      {/* Dynamic Graphic Icon */}
      {renderIcon()}

      {/* Company Typographic Name */}
      <text
        x="42"
        y="21"
        fontFamily="'Inter', sans-serif"
        fontSize="12.5"
        fontWeight="700"
        fill="#1E293B"
      >
        {cleanName.length > 15 ? cleanName.slice(0, 14) + "..." : cleanName}
      </text>

      {/* Subtitle / Category text based on hash */}
      <text
        x="42"
        y="30"
        fontFamily="'Inter', sans-serif"
        fontSize="7.5"
        fontWeight="500"
        letterSpacing="0.5"
        fill={theme.primary}
      >
        {index % 2 === 0 ? "HEALTHCARE PARTNER" : "QUALITY FORMULATION"}
      </text>
    </svg>
  );
}
