"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";

const LETTER_TYPES = [
  { value: "stipend", label: "AI Transition Stipend" },
  { value: "care_value", label: "Care Economy Credits" },
  { value: "cooperative", label: "Cooperative Ownership" },
  { value: "guild", label: "Transition Guild Support" },
  { value: "agent_ownership", label: "AI Agent Ownership Rights" },
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export function LetterComposer() {
  const [jobTitle, setJobTitle] = useState("");
  const [state, setState] = useState("");
  const [situation, setSituation] = useState("");
  const [letterType, setLetterType] = useState("");
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canGenerate = jobTitle && state && situation && letterType && !loading;

  async function generateLetter() {
    setLoading(true);
    setError("");
    setLetter("");

    try {
      const res = await fetch("/api/compose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          situation: `${jobTitle} — ${situation}`,
          state,
          letter_type: letterType,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate letter");

      const data = await res.json();
      setLetter(data.letter);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const gmailUrl = letter
    ? `https://mail.google.com/mail/?view=cm&su=${encodeURIComponent(
        `Regarding ${LETTER_TYPES.find((t) => t.value === letterType)?.label || "AI Policy"}`
      )}&body=${encodeURIComponent(letter)}`
    : "";

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Tell us your situation and we&apos;ll compose a personalized advocacy letter with real policy language and specific legislative references.
      </p>

      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Your job title (e.g., Technical Writer, Paralegal)"
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
      />

      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#3182BD] outline-none"
      >
        <option value="">Select your state...</option>
        {US_STATES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <textarea
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        placeholder="Briefly describe your situation (e.g., 'My department is being restructured, 3 of 5 positions eliminated')"
        rows={3}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none resize-none"
      />

      <select
        value={letterType}
        onChange={(e) => setLetterType(e.target.value)}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#3182BD] outline-none"
      >
        <option value="">Letter type...</option>
        {LETTER_TYPES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>

      <button
        onClick={generateLetter}
        disabled={!canGenerate}
        className="w-full bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-3 rounded-md hover:bg-[#5DA3D9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Composing your letter...
          </span>
        ) : (
          "✊ Generate My Letter"
        )}
      </button>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      {letter && (
        <div className="space-y-3">
          <textarea
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            rows={16}
            className="w-full bg-[#0F1923] border border-white/10 rounded-md p-4 text-sm text-[#F5F0EB]/80 focus:border-[#3182BD] outline-none resize-y"
          />
          <div className="flex flex-wrap gap-2">
            <CopyButton text={letter} />
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
            >
              ✉️ Open in Gmail
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
