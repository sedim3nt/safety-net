"use client";

import { useState } from "react";

export function ShareStory() {
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!story.trim()) return;
    try {
      const stories = JSON.parse(localStorage.getItem("safety-net-stories") || "[]");
      stories.push({ text: story, date: new Date().toISOString() });
      localStorage.setItem("safety-net-stories", JSON.stringify(stories));
    } catch { /* ok */ }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-[#27AE60] font-[family-name:var(--font-syne)] font-bold text-lg mb-2">
          Thank you for sharing. 💚
        </p>
        <p className="text-sm text-[#F5F0EB]/60">
          Your story helps build the case for stronger transition infrastructure.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-[#F5F0EB]/70">
        Has AI already affected your work? Sharing your experience helps us build better tools and stronger policy arguments.
      </p>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Tell us what happened..."
        rows={4}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none resize-none"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
      >
        Share Your Story
      </button>
    </div>
  );
}
