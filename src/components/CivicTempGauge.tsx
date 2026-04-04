"use client";

import { useState } from "react";

export function CivicTempGauge({
  percent,
  label,
  category,
}: {
  percent: number;
  label?: string;
  category?: string;
}) {
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopover, setShowPopover] = useState(false);

  const getColor = (p: number) => {
    if (p < 30) return "#3182BD";
    if (p < 60) return "#F2C94C";
    return "#27AE60";
  };

  const color = getColor(percent);
  const fillHeight = 80 * (percent / 100);

  async function handleClick() {
    if (!category) return;

    if (showPopover && analysis) {
      setShowPopover(false);
      return;
    }

    setShowPopover(true);

    if (analysis) return; // already fetched

    setLoading(true);
    try {
      const res = await fetch("/api/civic-temp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, percent }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setAnalysis(data.analysis);
    } catch {
      setAnalysis("Unable to load analysis. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mb-4">
      <button
        onClick={handleClick}
        className="flex items-center gap-3 group cursor-pointer text-left"
        title={category ? "Click for AI analysis" : undefined}
      >
        <svg
          width="28"
          height="100"
          viewBox="0 0 28 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gauge-pulse group-hover:scale-110 transition-transform"
        >
          <circle cx="14" cy="88" r="10" fill={color} opacity="0.3" />
          <circle cx="14" cy="88" r="7" fill={color} />
          <rect x="9" y="4" width="10" height="80" rx="5" fill="#1A2B3C" stroke="#F5F0EB" strokeWidth="0.5" strokeOpacity="0.2" />
          <rect x="10" y={84 - fillHeight} width="8" height={fillHeight} rx="4" fill={color} opacity="0.9" />
          <circle cx="14" cy="4" r="3" fill="#1A2B3C" stroke="#F5F0EB" strokeWidth="0.5" strokeOpacity="0.2" />
        </svg>

        <div>
          <div className="text-xs text-[#F5F0EB]/50 font-[family-name:var(--font-syne)] font-bold uppercase tracking-wider flex items-center gap-1">
            Civic Temp
            {category && (
              <span className="text-[#3182BD] opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">
                ● click for AI analysis
              </span>
            )}
          </div>
          <div className="text-lg font-bold" style={{ color }}>
            {percent}%
          </div>
          {label && <div className="text-xs text-[#F5F0EB]/40">{label}</div>}
        </div>
      </button>

      {/* AI Analysis Popover */}
      {showPopover && (
        <div className="absolute left-0 top-full mt-2 z-40 w-72 bg-[#1A2B3C] border border-white/10 rounded-lg p-4 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-[family-name:var(--font-syne)] font-bold text-[#3182BD] uppercase tracking-wider">
              AI Analysis
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setShowPopover(false); }}
              className="text-[#F5F0EB]/40 hover:text-[#F5F0EB] text-xs"
            >
              ✕
            </button>
          </div>
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-[#F5F0EB]/50">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing...
            </div>
          ) : (
            <div className="text-xs text-[#F5F0EB]/80 whitespace-pre-wrap leading-relaxed">
              {analysis}
            </div>
          )}
          {/* Arrow */}
          <div className="absolute -top-1.5 left-6 w-3 h-3 bg-[#1A2B3C] border-l border-t border-white/10 rotate-45" />
        </div>
      )}
    </div>
  );
}
