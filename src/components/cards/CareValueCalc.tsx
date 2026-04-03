"use client";

import { useState } from "react";

const careTypes = [
  { label: "Childcare", rate: 25, emoji: "👶" },
  { label: "Elder care", rate: 22, emoji: "🧓" },
  { label: "Volunteering", rate: 15, emoji: "🤝" },
  { label: "Mentoring", rate: 50, emoji: "🎓" },
  { label: "Community organizing", rate: 30, emoji: "📢" },
];

export function CareValueCalc() {
  const [hours, setHours] = useState<number[]>(new Array(careTypes.length).fill(0));

  const weeklyValue = careTypes.reduce((sum, type, i) => sum + hours[i] * type.rate, 0);
  const annualValue = weeklyValue * 52;
  const totalHours = hours.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Care work has market value. See what yours is worth.
      </p>

      {careTypes.map((type, i) => (
        <div key={type.label}>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs text-[#F5F0EB]/60">
              {type.emoji} {type.label} <span className="text-[#F5F0EB]/30">(${type.rate}/hr market rate)</span>
            </label>
            <span className="text-xs text-[#F5F0EB]/50">{hours[i]} hrs/week</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            value={hours[i]}
            onChange={(e) => {
              const next = [...hours];
              next[i] = Number(e.target.value);
              setHours(next);
            }}
            className="w-full accent-[#FF6B35]"
          />
        </div>
      ))}

      {totalHours > 0 && (
        <div className="bg-[#0F1923] border border-[#27AE60]/20 rounded-md p-4 text-center space-y-2">
          <div className="text-3xl font-bold text-[#27AE60] font-[family-name:var(--font-syne)]">
            ${annualValue.toLocaleString()}
          </div>
          <p className="text-sm text-[#F5F0EB]/70">
            Your care work is worth <strong className="text-[#F5F0EB]">${annualValue.toLocaleString()}</strong> per year at market rates.
          </p>
          <p className="text-xs text-[#F5F0EB]/40">
            That&apos;s {totalHours} hours/week — ${weeklyValue.toLocaleString()}/week — of uncompensated labor.
          </p>
        </div>
      )}
    </div>
  );
}
