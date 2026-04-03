"use client";

import { useState } from "react";

const skills = [
  "Written Communication",
  "Data Analysis",
  "Project Management",
  "Customer Relations",
  "Legal Research",
  "Financial Modeling",
  "Creative Design",
  "Technical Writing",
  "Team Leadership",
  "Negotiation",
  "Research",
  "Teaching",
  "Sales",
  "Problem Solving",
  "Public Speaking",
];

const ratings: Record<string, { status: string; emoji: string; explanation: string }> = {
  "Written Communication": { status: "Stable", emoji: "🟡", explanation: "AI drafts faster, but voice, nuance, and audience sensitivity still require humans" },
  "Data Analysis": { status: "Shrinking", emoji: "🔴", explanation: "AI handles pattern recognition and visualization faster; shift toward interpretation" },
  "Project Management": { status: "Growing Premium", emoji: "🟢", explanation: "Coordinating humans + AI systems is a new, high-value skill" },
  "Customer Relations": { status: "Growing Premium", emoji: "🟢", explanation: "Empathy, trust, and complex problem resolution remain deeply human" },
  "Legal Research": { status: "Shrinking", emoji: "🔴", explanation: "AI case law analysis is already faster; pivot to strategy and argumentation" },
  "Financial Modeling": { status: "Shrinking", emoji: "🔴", explanation: "AI builds models faster; value shifts to assumption-setting and judgment calls" },
  "Creative Design": { status: "Stable", emoji: "🟡", explanation: "AI generates assets, but brand strategy and human aesthetics retain premium" },
  "Technical Writing": { status: "Shrinking", emoji: "🔴", explanation: "Documentation generation is heavily automated; specialize in complex systems" },
  "Team Leadership": { status: "Growing Premium", emoji: "🟢", explanation: "Leading hybrid human+AI teams is the new management frontier" },
  "Negotiation": { status: "Growing Premium", emoji: "🟢", explanation: "Interpersonal dynamics and high-stakes deal-making resist automation" },
  "Research": { status: "Stable", emoji: "🟡", explanation: "AI accelerates search but novel hypothesis generation still needs human insight" },
  "Teaching": { status: "Growing Premium", emoji: "🟢", explanation: "Personalized learning facilitation and mentorship are increasingly valued" },
  "Sales": { status: "Stable", emoji: "🟡", explanation: "Relationship-driven sales stable; transactional sales increasingly automated" },
  "Problem Solving": { status: "Growing Premium", emoji: "🟢", explanation: "Complex, ambiguous, multi-stakeholder problems need human judgment" },
  "Public Speaking": { status: "Growing Premium", emoji: "🟢", explanation: "Presence, persuasion, and audience connection are deeply human skills" },
};

export function SkillMapper() {
  const [title, setTitle] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [mapped, setMapped] = useState(false);

  const toggle = (skill: string) => {
    setSelected((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
    setMapped(false);
  };

  const greenSkills = selected.filter(
    (s) => ratings[s]?.status === "Growing Premium"
  );

  const repositioningDirections = greenSkills.length > 0
    ? [
        `Leverage your ${greenSkills[0]} skills in AI-augmented roles — companies are actively hiring for human oversight positions.`,
        greenSkills.length > 1
          ? `Combine ${greenSkills[0]} and ${greenSkills[1]} to position as a hybrid specialist who bridges technical and interpersonal gaps.`
          : `Deepen your ${greenSkills[0]} expertise with AI tool fluency to command premium rates.`,
        `Consider consulting or freelance work where your premium skills serve multiple organizations navigating AI transitions.`,
      ]
    : [];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-1 font-[family-name:var(--font-syne)] font-bold">
          Current Job Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Senior Paralegal"
          className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none"
        />
      </div>

      <div>
        <label className="block text-xs text-[#F5F0EB]/50 mb-2 font-[family-name:var(--font-syne)] font-bold">
          Select Your Top Skills
        </label>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <button
              key={s}
              onClick={() => toggle(s)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                selected.includes(s)
                  ? "bg-[#2D9CDB]/20 border-[#2D9CDB] text-[#2D9CDB]"
                  : "bg-transparent border-white/10 text-[#F5F0EB]/60 hover:border-white/30"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {selected.length > 0 && (
        <button
          onClick={() => setMapped(true)}
          className="bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#ff8f5e] transition-colors"
        >
          Map My Skills
        </button>
      )}

      {mapped && (
        <div className="space-y-2">
          {selected.map((s) => {
            const r = ratings[s];
            return (
              <div
                key={s}
                className="flex items-start gap-2 bg-[#0F1923] border border-white/5 rounded-md px-3 py-2"
              >
                <span className="shrink-0">{r.emoji}</span>
                <div>
                  <span className="text-sm font-bold text-[#F5F0EB]">{s}</span>
                  <span className="text-xs text-[#F5F0EB]/50 ml-2">{r.status}</span>
                  <p className="text-xs text-[#F5F0EB]/60 mt-0.5">{r.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Expose mapped data for RepositioningPlan */}
      {mapped && (
        <div id="skill-map-data" data-green={JSON.stringify(greenSkills)} data-directions={JSON.stringify(repositioningDirections)} className="hidden" />
      )}
    </div>
  );
}

export function RepositioningPlan() {
  const [directions, setDirections] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const check = () => {
    setChecked(true);
    try {
      const el = document.getElementById("skill-map-data");
      if (el) {
        const dirs = JSON.parse(el.dataset.directions || "[]");
        setDirections(dirs);
      }
    } catch { /* ok */ }
  };

  if (!checked) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-[#F5F0EB]/70">
          Based on your skill map above, we&apos;ll generate repositioning directions.
        </p>
        <button
          onClick={check}
          className="bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#ff8f5e] transition-colors"
        >
          Generate Plan
        </button>
      </div>
    );
  }

  if (directions.length === 0) {
    return (
      <p className="text-sm text-[#F2C94C]">
        Map your skills first ↑ — expand &quot;Map Your Skills&quot; above and complete the assessment.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-[#F5F0EB]/70 font-bold">
        Your top repositioning directions:
      </p>
      <ul className="space-y-2">
        {directions.map((d, i) => (
          <li
            key={i}
            className="flex items-start gap-2 bg-[#0F1923] border border-[#27AE60]/20 rounded-md px-3 py-2 text-sm text-[#F5F0EB]/80"
          >
            <span className="text-[#27AE60] shrink-0">→</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
