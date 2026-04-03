export function CivicTempGauge({ percent, label }: { percent: number; label?: string }) {
  // Color gradient based on percent
  const getColor = (p: number) => {
    if (p < 30) return "#FF6B35";
    if (p < 60) return "#F2C94C";
    return "#27AE60";
  };

  const color = getColor(percent);
  const fillHeight = 80 * (percent / 100);

  return (
    <div className="flex items-center gap-3 mb-4">
      <svg
        width="28"
        height="100"
        viewBox="0 0 28 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gauge-pulse"
      >
        {/* Bulb */}
        <circle cx="14" cy="88" r="10" fill={color} opacity="0.3" />
        <circle cx="14" cy="88" r="7" fill={color} />

        {/* Tube outline */}
        <rect x="9" y="4" width="10" height="80" rx="5" fill="#1A2B3C" stroke="#F5F0EB" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Fill */}
        <rect
          x="10"
          y={84 - fillHeight}
          width="8"
          height={fillHeight}
          rx="4"
          fill={color}
          opacity="0.9"
        />

        {/* Top cap */}
        <circle cx="14" cy="4" r="3" fill="#1A2B3C" stroke="#F5F0EB" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>

      <div>
        <div className="text-xs text-[#F5F0EB]/50 font-[family-name:var(--font-syne)] font-bold uppercase tracking-wider">
          Civic Temp
        </div>
        <div className="text-lg font-bold" style={{ color }}>
          {percent}%
        </div>
        {label && (
          <div className="text-xs text-[#F5F0EB]/40">{label}</div>
        )}
      </div>
    </div>
  );
}
