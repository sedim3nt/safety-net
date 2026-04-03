import type { ReactNode } from "react";

const accentColors: Record<string, string> = {
  orange: "#FF6B35",
  blue: "#2D9CDB",
  green: "#27AE60",
};

export function TierSection({
  id,
  tier,
  title,
  description,
  accent = "orange",
  children,
}: {
  id: string;
  tier: string;
  title: string;
  description: string;
  accent?: "orange" | "blue" | "green";
  children: ReactNode;
}) {
  const color = accentColors[accent];

  return (
    <section id={id} className="tier-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div
            className="w-16 h-1 rounded-full mb-4"
            style={{ backgroundColor: color }}
          />
          <div
            className="text-xs font-[family-name:var(--font-syne)] font-bold uppercase tracking-widest mb-2"
            style={{ color }}
          >
            {tier}
          </div>
          <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl font-extrabold text-[#F5F0EB] mb-3">
            {title}
          </h2>
          <p className="text-[#F5F0EB]/60 max-w-2xl text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}
