"use client";

import { useState } from "react";

export function StipendMath() {
  const [revenue, setRevenue] = useState("");
  const [gainPercent, setGainPercent] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const rev = parseFloat(revenue.replace(/[^0-9.]/g, ""));
    const gain = parseFloat(gainPercent);
    if (isNaN(rev) || isNaN(gain) || rev <= 0 || gain <= 0) return;

    const productivityGain = rev * (gain / 100);
    const taxRevenue = productivityGain * 0.02;
    const avgSalary = 55000;
    const stipendPerWorker = avgSalary * 0.8 * 0.5; // 80% for 6 months
    const workers = Math.floor(taxRevenue / stipendPerWorker);

    const fmt = (n: number) =>
      n >= 1e9
        ? `$${(n / 1e9).toFixed(1)}B`
        : n >= 1e6
          ? `$${(n / 1e6).toFixed(1)}M`
          : n >= 1e3
            ? `$${(n / 1e3).toFixed(0)}K`
            : `$${n.toFixed(0)}`;

    setResult(
      `A 2% tax on ${fmt(productivityGain)} in AI-driven productivity gains = ${fmt(taxRevenue)} available for transition stipends. That's ${workers.toLocaleString()} workers receiving 80% income replacement for 6 months.`
    );
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        See how a modest productivity-gain assessment could fund real transition stipends.
      </p>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">
          Company Annual Revenue ($)
        </label>
        <input
          type="text"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          placeholder="e.g. 500000000"
          className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
        />
      </div>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">
          AI Productivity Gain (%)
        </label>
        <input
          type="number"
          value={gainPercent}
          onChange={(e) => setGainPercent(e.target.value)}
          placeholder="e.g. 15"
          min="1"
          max="100"
          className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
        />
      </div>

      <button
        onClick={calculate}
        className="bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
      >
        Calculate
      </button>

      {result && (
        <div className="bg-[#0F1923] border border-[#27AE60]/30 rounded-md p-4 text-sm text-[#F5F0EB]/90 font-bold">
          {result}
        </div>
      )}
    </div>
  );
}
