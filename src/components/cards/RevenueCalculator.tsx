"use client";

import { useState } from "react";

const agentTypes: Record<string, { perTask: [number, number]; subscription: [number, number]; infraCost: number }> = {
  "Customer Service": { perTask: [0.50, 2], subscription: [100, 300], infraCost: 50 },
  "Research": { perTask: [1, 3], subscription: [150, 400], infraCost: 60 },
  "Writing": { perTask: [0.75, 2.50], subscription: [100, 350], infraCost: 45 },
  "Data Analysis": { perTask: [1.50, 5], subscription: [200, 500], infraCost: 80 },
  "Legal": { perTask: [2, 5], subscription: [250, 500], infraCost: 100 },
  "Administrative": { perTask: [0.50, 1.50], subscription: [50, 200], infraCost: 30 },
};

export function RevenueCalculator() {
  const [type, setType] = useState("");
  const [tasks, setTasks] = useState(10);
  const [pricing, setPricing] = useState("per-task");

  const agent = type ? agentTypes[type] : null;

  let monthly = 0;
  let cost = 0;
  if (agent) {
    cost = agent.infraCost;
    if (pricing === "per-task") {
      const avg = (agent.perTask[0] + agent.perTask[1]) / 2;
      monthly = avg * tasks * 30;
    } else {
      const avg = (agent.subscription[0] + agent.subscription[1]) / 2;
      const clients = Math.max(1, Math.floor(tasks / 5));
      monthly = avg * clients;
    }
  }

  const profit = monthly - cost;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Project how much revenue an AI agent built on your expertise could generate.
      </p>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">Agent Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#3182BD] outline-none">
          <option value="">Select type...</option>
          {Object.keys(agentTypes).map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">Daily Tasks: {tasks}</label>
        <input type="range" min="1" max="50" value={tasks} onChange={(e) => setTasks(Number(e.target.value))} className="w-full accent-[#3182BD]" />
      </div>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">Pricing Model</label>
        <div className="flex gap-3">
          <button onClick={() => setPricing("per-task")} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${pricing === "per-task" ? "bg-[#2D9CDB]/20 border-[#2D9CDB] text-[#2D9CDB]" : "border-white/10 text-[#F5F0EB]/60"}`}>
            Per Task
          </button>
          <button onClick={() => setPricing("subscription")} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${pricing === "subscription" ? "bg-[#2D9CDB]/20 border-[#2D9CDB] text-[#2D9CDB]" : "border-white/10 text-[#F5F0EB]/60"}`}>
            Subscription
          </button>
        </div>
      </div>

      {agent && (
        <div className="bg-[#0F1923] border border-[#27AE60]/20 rounded-md p-4 space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-[#F5F0EB]/60">Monthly Revenue</span>
            <span className="text-[#F5F0EB] font-bold">${monthly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#F5F0EB]/60">Infrastructure Cost</span>
            <span className="text-[#F5F0EB]/60">-${cost}</span>
          </div>
          <div className="border-t border-white/5 pt-1 flex justify-between text-sm">
            <span className="text-[#F5F0EB]/60">Net Monthly</span>
            <span className={`font-bold ${profit > 0 ? "text-[#27AE60]" : "text-[#E74C3C]"}`}>
              ${profit.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
