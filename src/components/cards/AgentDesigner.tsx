"use client";

import { useState } from "react";

const keywords: Record<string, { tasks: string; audience: string; value: string }> = {
  customer: { tasks: "handle customer inquiries, resolve complaints, manage feedback loops", audience: "small businesses and startups without dedicated support teams", value: "$500-2,000" },
  write: { tasks: "draft content, edit copy, maintain brand voice consistency", audience: "marketing teams and solopreneurs", value: "$300-1,500" },
  research: { tasks: "gather data, synthesize reports, monitor industry trends", audience: "consultants, analysts, and decision-makers", value: "$400-1,800" },
  legal: { tasks: "review contracts, flag compliance issues, draft standard documents", audience: "small law firms and in-house legal teams", value: "$800-3,000" },
  teach: { tasks: "create learning materials, assess understanding, provide personalized guidance", audience: "educational institutions and corporate training departments", value: "$300-1,200" },
  manage: { tasks: "coordinate schedules, track projects, generate status reports", audience: "growing teams and busy executives", value: "$400-1,500" },
  design: { tasks: "generate design variations, maintain brand consistency, create templates", audience: "creative agencies and marketing departments", value: "$500-2,000" },
  data: { tasks: "process data, generate visualizations, identify patterns and anomalies", audience: "businesses making data-driven decisions", value: "$600-2,500" },
  financ: { tasks: "process transactions, generate reports, flag anomalies", audience: "small businesses and accounting firms", value: "$700-2,500" },
  admin: { tasks: "manage schedules, process emails, organize documents", audience: "busy professionals and small teams", value: "$300-1,000" },
};

export function AgentDesigner() {
  const [job, setJob] = useState("");
  const [problems, setProblems] = useState("");
  const [questions, setQuestions] = useState("");
  const [spec, setSpec] = useState<{ expertise: string; tasks: string; audience: string; value: string } | null>(null);

  const generate = () => {
    if (!job && !problems && !questions) return;
    const combined = `${job} ${problems} ${questions}`.toLowerCase();

    let match = { tasks: "automate repetitive tasks, provide expert guidance, and generate deliverables", audience: "teams and individuals in your field", value: "$400-1,500" };
    for (const [key, val] of Object.entries(keywords)) {
      if (combined.includes(key)) {
        match = val;
        break;
      }
    }

    const expertise = job || "professional";
    setSpec({ expertise, ...match });
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Answer three questions to generate a spec for an AI agent built on your expertise.
      </p>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">What was your job?</label>
        <input type="text" value={job} onChange={(e) => setJob(e.target.value)} placeholder="e.g. Senior Paralegal" className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none" />
      </div>
      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">What problems did you solve?</label>
        <input type="text" value={problems} onChange={(e) => setProblems(e.target.value)} placeholder="e.g. contract review, compliance checks" className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none" />
      </div>
      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">What do colleagues always ask you about?</label>
        <input type="text" value={questions} onChange={(e) => setQuestions(e.target.value)} placeholder="e.g. how to format filings, deadline tracking" className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none" />
      </div>

      <button onClick={generate} className="bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#ff8f5e] transition-colors">
        Generate Agent Spec
      </button>

      {spec && (
        <div className="bg-[#0F1923] border border-[#2D9CDB]/30 rounded-md p-4 space-y-2">
          <div className="font-[family-name:var(--font-syne)] font-bold text-[#2D9CDB]">
            Your {spec.expertise} Agent
          </div>
          <p className="text-sm text-[#F5F0EB]/80">
            Could handle: <span className="text-[#F5F0EB]">{spec.tasks}</span>
          </p>
          <p className="text-sm text-[#F5F0EB]/80">
            For: <span className="text-[#F5F0EB]">{spec.audience}</span>
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="text-xs text-[#F5F0EB]/50">Est. build time: 2–4 weeks</span>
            <span className="text-sm font-bold text-[#27AE60]">{spec.value}/mo</span>
          </div>
        </div>
      )}
    </div>
  );
}
