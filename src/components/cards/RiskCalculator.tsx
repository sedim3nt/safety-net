"use client";

import { useState } from "react";

const categories: Record<string, number> = {
  Administrative: 3,
  Creative: 5,
  Technical: 6,
  Legal: 4,
  Financial: 4,
  Healthcare: 8,
  Education: 6,
  "Customer Service": 2,
  Management: 5,
  Marketing: 3,
};

export function RiskCalculator() {
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState(5);
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!category) return;
    const base = categories[category];
    const modifier = Math.min(experience * 0.15, 2);
    const years = Math.max(1, base + modifier).toFixed(1);
    setResult(
      `Based on current AI adoption trends, your ${category.toLowerCase()} role may see significant restructuring in approximately ${years} years. With ${experience} years of experience, your institutional knowledge provides some buffer — but now is the time to diversify.`
    );
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Estimate when AI automation may significantly restructure your role.
        This isn&apos;t a prediction — it&apos;s a planning tool.
      </p>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">
          Job Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#3182BD] outline-none"
        >
          <option value="">Select your field...</option>
          {Object.keys(categories).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">
          Years of Experience: {experience}
        </label>
        <input
          type="range"
          min="0"
          max="30"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          className="w-full accent-[#3182BD]"
        />
        <div className="flex justify-between text-xs text-[#F5F0EB]/30">
          <span>0</span>
          <span>15</span>
          <span>30</span>
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
      >
        Calculate Risk Window
      </button>

      {result && (
        <div className="bg-[#0F1923] border border-[#F2C94C]/30 rounded-md p-4 text-sm text-[#F5F0EB]/80">
          {result}
        </div>
      )}
    </div>
  );
}
