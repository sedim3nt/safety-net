"use client";

import { useState } from "react";

export function GuildPost() {
  const [form, setForm] = useState({ name: "", city: "", industry: "", email: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.city || !form.email) return;
    try {
      const guilds = JSON.parse(localStorage.getItem("safety-net-guilds") || "[]");
      guilds.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("safety-net-guilds", JSON.stringify(guilds));
    } catch { /* ok */ }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-[#27AE60] font-[family-name:var(--font-syne)] font-bold text-lg mb-2">Guild Posted! 🎉</p>
        <p className="text-sm text-[#F5F0EB]/60">Your guild listing has been saved. Directory matching coming soon.</p>
      </div>
    );
  }

  const inputCls = "w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#FF6B35] outline-none";

  return (
    <div className="space-y-3">
      <p className="text-sm text-[#F5F0EB]/70">List your guild so others in your area and industry can find you.</p>
      <input type="text" placeholder="Guild Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputCls} />
        <input type="text" placeholder="Industry" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputCls} />
      </div>
      <input type="email" placeholder="Contact Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} />
      <button onClick={handleSubmit} className="bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#ff8f5e] transition-colors">
        Post Guild Listing
      </button>
    </div>
  );
}
