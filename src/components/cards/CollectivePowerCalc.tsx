"use client";

import { useState } from "react";

export function CollectivePowerCalc() {
  const [members, setMembers] = useState("");
  const [savings, setSavings] = useState("");
  const [result, setResult] = useState<{ total: string; example: string; runway: string } | null>(null);

  const calculate = () => {
    const m = parseInt(members);
    const s = parseFloat(savings.replace(/[^0-9.]/g, ""));
    if (isNaN(m) || isNaN(s) || m <= 0 || s <= 0) return;

    const total = m * s;
    const monthlyPool = total * 0.1;
    const runway = monthlyPool > 0 ? Math.floor(total / monthlyPool) : 0;

    let example: string;
    if (total >= 200000) {
      example = `With $${(total / 1000).toFixed(0)}K, ${m} displaced professionals could launch a full-service AI consulting practice with dedicated office space and marketing.`;
    } else if (total >= 100000) {
      example = `With $${(total / 1000).toFixed(0)}K, ${m} displaced workers could seed a specialized AI audit consultancy or cooperative service firm.`;
    } else if (total >= 50000) {
      example = `With $${(total / 1000).toFixed(0)}K, ${m} displaced professionals could seed an AI-complementary consultancy — like an AI legal audit practice or content quality collective.`;
    } else if (total >= 20000) {
      example = `With $${(total / 1000).toFixed(0)}K, ${m} members could fund shared tools, a coworking space, and initial marketing for a cooperative venture.`;
    } else {
      example = `With $${total.toLocaleString()}, ${m} members could fund shared subscriptions, training materials, and regular meetup costs to build collective capacity.`;
    }

    setResult({
      total: `$${total.toLocaleString()}`,
      example,
      runway: `If pooling 10% monthly ($${monthlyPool.toLocaleString()}/mo), your collective has ${runway} months of runway.`,
    });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        See what your guild could do with pooled resources.
      </p>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">Members</label>
          <input
            type="number"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
            placeholder="10"
            min="1"
            className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
          />
        </div>
        <div>
          <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">Avg. Savings ($)</label>
          <input
            type="text"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            placeholder="5000"
            className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
      >
        Calculate Collective Power
      </button>

      {result && (
        <div className="bg-[#0F1923] border border-[#27AE60]/20 rounded-md p-4 space-y-2">
          <div className="text-2xl font-bold text-[#27AE60] font-[family-name:var(--font-syne)]">
            {result.total}
          </div>
          <p className="text-sm text-[#F5F0EB]/80">{result.example}</p>
          <p className="text-xs text-[#F5F0EB]/50">{result.runway}</p>
        </div>
      )}
    </div>
  );
}
