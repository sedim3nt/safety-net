"use client";

import { useState, useEffect } from "react";

const steps = [
  "Find 5+ people in your displacement wave",
  "Choose a meeting cadence (weekly, biweekly, monthly)",
  "Pool initial resources for shared tools and space",
  "Define shared goals and success metrics",
  "Create a shared skills inventory",
  "Identify collective opportunities",
  "Establish decision-making process (consensus, vote, etc.)",
  "Register as cooperative",
];

const STORAGE_KEY = "safety-net-guild-checklist";

export function GuildChecklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved) && saved.length === steps.length) {
        setChecked(saved);
      }
    } catch { /* ok */ }
  }, []);

  const toggle = (idx: number) => {
    const next = [...checked];
    next[idx] = !next[idx];
    setChecked(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch { /* ok */ }
  };

  const done = checked.filter(Boolean).length;

  return (
    <div className="space-y-3">
      <p className="text-sm text-[#F5F0EB]/70">
        Starting a transition guild takes 8 steps. Track your progress here — it saves automatically.
      </p>

      <div className="text-xs text-[#F5F0EB]/50 font-[family-name:var(--font-syne)] font-bold">
        {done}/{steps.length} complete
      </div>

      <div className="space-y-2">
        {steps.map((step, i) => (
          <label
            key={i}
            className="flex items-start gap-3 cursor-pointer bg-[#0F1923] border border-white/5 rounded-md px-3 py-2 hover:border-white/10 transition-colors"
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-1 accent-[#27AE60]"
            />
            <span className={`text-sm ${checked[i] ? "text-[#27AE60] line-through" : "text-[#F5F0EB]/80"}`}>
              {i + 1}. {step}
            </span>
          </label>
        ))}
      </div>

      {done === steps.length && (
        <div className="text-center py-2 text-[#27AE60] font-[family-name:var(--font-syne)] font-bold">
          🎉 Your guild is ready to launch!
        </div>
      )}

      <a
        href="https://www.usworker.coop/resources/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm text-[#2D9CDB] hover:underline"
      >
        → Cooperative registration resources
      </a>
    </div>
  );
}
