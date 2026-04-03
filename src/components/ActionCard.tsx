"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function ActionCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card-glow bg-[#1A2B3C] border border-white/5 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-xl shrink-0">{icon}</span>
        <span className="font-[family-name:var(--font-syne)] font-bold text-sm text-[#F5F0EB] flex-1">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#F5F0EB]/40 transition-transform duration-300 shrink-0 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div className={`card-expandable ${expanded ? "expanded" : ""}`}>
        <div>
          <div className="px-5 pb-5 pt-1 border-t border-white/5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
