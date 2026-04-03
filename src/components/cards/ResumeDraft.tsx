"use client";

import { useState } from "react";
import { CopyButton } from "../CopyButton";

const actionVerbs = ["Orchestrated", "Spearheaded", "Architected", "Streamlined", "Pioneered"];
const aiFraming = [
  "leveraging AI-augmented workflows to",
  "integrating human expertise with automated systems to",
  "applying hybrid human-AI methodologies to",
  "combining domain knowledge with emerging AI tools to",
  "utilizing AI-enhanced processes alongside deep expertise to",
];
const outcomes = [
  "drive measurable outcomes across cross-functional teams",
  "optimize complex decision-making in high-stakes environments",
  "deliver stakeholder value through systematic innovation",
  "ensure quality and compliance in rapidly evolving technical landscapes",
  "bridge the gap between traditional best practices and AI-driven transformation",
];

export function ResumeDraft() {
  const [description, setDescription] = useState("");
  const [bullets, setBullets] = useState<string[]>([]);

  const generate = () => {
    if (!description.trim()) return;
    const words = description.toLowerCase().split(/\s+/);
    const newBullets = [];
    for (let i = 0; i < 5; i++) {
      const verb = actionVerbs[i];
      const framing = aiFraming[i];
      const outcome = outcomes[i];
      // Pick a keyword from description
      const keywords = words.filter((w) => w.length > 5);
      const keyword = keywords[i % Math.max(keywords.length, 1)] || "operations";
      newBullets.push(
        `${verb} ${keyword}-focused initiatives, ${framing} ${outcome}.`
      );
    }
    setBullets(newBullets);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Paste your current job description and we&apos;ll reframe it for AI-complementary positioning.
      </p>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Paste your current job description here..."
        rows={4}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none resize-none"
      />
      <button
        onClick={generate}
        className="bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#ff8f5e] transition-colors"
      >
        Reframe for AI Economy
      </button>

      {bullets.length > 0 && (
        <div className="space-y-3">
          <div className="space-y-2">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="bg-[#0F1923] border border-white/5 rounded-md px-3 py-2 text-sm text-[#F5F0EB]/80"
              >
                • {b}
              </div>
            ))}
          </div>
          <CopyButton text={bullets.map((b) => `• ${b}`).join("\n")} />
        </div>
      )}
    </div>
  );
}
