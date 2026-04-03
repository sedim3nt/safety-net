"use client";

import { useState } from "react";

export function EmailSignup({ storageKey, label = "Sign Up" }: { storageKey: string; label?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    try {
      const list = JSON.parse(localStorage.getItem(storageKey) || "[]");
      list.push({ email, date: new Date().toISOString() });
      localStorage.setItem(storageKey, JSON.stringify(list));
    } catch { /* ok */ }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-[#27AE60] text-sm font-[family-name:var(--font-syne)] font-bold">
        ✓ You&apos;re on the list! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <div className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors shrink-0"
      >
        {label}
      </button>
    </div>
  );
}
