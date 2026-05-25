"use client";

import { useState } from "react";

// Hourly market rates sourced from the U.S. Bureau of Labor Statistics (BLS)
// Occupational Employment and Wage Statistics (OEWS), May 2024 release.
// Figures are national median wages for the closest matching occupation.
//   - Childcare: Childcare Workers (SOC 39-9011), median $15.41/hr.
//     https://www.bls.gov/ooh/personal-care-and-service/childcare-workers.htm (accessed 2026-05-25)
//   - Elder care: Home Health & Personal Care Aides (SOC 31-1120), median
//     $34,900/yr ≈ $16.78/hr.
//     https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm (accessed 2026-05-25)
//   - Volunteering: Independent Sector "Value of Volunteer Time," $34.79/hr
//     (2024 data, released Apr 2025; based on BLS average private-sector earnings).
//     https://independentsector.org/resource/value-of-volunteer-time/ (accessed 2026-05-25)
//   - Mentoring: Tutors (SOC 25-3041), median $40,090/yr ≈ $19.28/hr.
//     https://www.bls.gov/ooh/education-training-and-library/tutors.htm (accessed 2026-05-25)
//   - Community organizing: Community & Social Service Occupations group,
//     median $57,530/yr ≈ $27.66/hr.
//     https://www.bls.gov/ooh/community-and-social-service/ (accessed 2026-05-25)
const careTypes = [
  { label: "Childcare", rate: 15, emoji: "👶" },
  { label: "Elder care", rate: 17, emoji: "🧓" },
  { label: "Volunteering", rate: 35, emoji: "🤝" },
  { label: "Mentoring", rate: 19, emoji: "🎓" },
  { label: "Community organizing", rate: 28, emoji: "📢" },
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
            className="w-full accent-[#3182BD]"
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
