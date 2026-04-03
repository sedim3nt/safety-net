"use client";

import { useState } from "react";
import { CopyButton } from "../CopyButton";

const letters: Record<string, string> = {
  employed: `Dear [Representative],

I am writing as a currently employed professional who sees the coming wave of AI-driven workplace restructuring with growing concern. In my field, AI tools are already automating tasks that constituted 30-40% of entry-level positions just two years ago.

I am not writing to oppose technological progress. I am writing because progress without transition infrastructure is not progress — it is abandonment. The productivity gains from AI adoption are projected to add trillions to GDP over the next decade, yet there is no federal mechanism to ensure displaced workers can bridge the gap between their current roles and the new economy.

I urge you to support legislation establishing AI Transition Stipends — funded by a modest assessment on AI-driven productivity gains — that would provide 80% income replacement for up to six months for workers whose positions are substantially restructured due to AI adoption. This is not a handout; it is an investment in the workforce that built the data these systems were trained on.

The window for proactive policy is narrowing. Every month of delay means more families falling through gaps that didn't need to exist.

Respectfully,
[Your Name]`,

  displaced: `Dear [Representative],

I am one of the millions of Americans whose job has already been restructured due to AI adoption. I am not a statistic — I am a [your profession] with [X] years of experience who was told my role was being "optimized" with no transition support, no retraining stipend, and no acknowledgment that my years of work product helped train the very systems that replaced me.

The unemployment system was not designed for AI displacement. Traditional job search advice doesn't apply when entire categories of work are being automated simultaneously. I don't need to "learn to code" — I need time and resources to identify where my existing expertise creates value in a restructured economy.

I urge you to champion AI Transition Stipends that provide 80% income replacement for six months, funded by assessments on companies whose AI-driven productivity gains exceed certain thresholds. The companies profiting from this transition have a responsibility to fund it.

Every week without action, more workers like me fall through cracks that policy could close.

Respectfully,
[Your Name]`,

  "at-risk": `Dear [Representative],

I am writing as a worker who can see the wave coming. My role in [field] involves tasks that AI systems can increasingly perform — not perfectly, but well enough that my employer is exploring automation. I have perhaps 12-18 months before significant restructuring hits my team.

I am trying to prepare, but individual preparation isn't enough when the scale of displacement is systemic. I need policy infrastructure: transition stipends that give me breathing room to reskill, portable benefits that don't vanish when my position does, and retraining programs aligned with actual emerging roles — not yesterday's job categories.

Please support legislation for AI Transition Stipends funded by productivity-gain assessments on AI adoption. A 2% assessment on AI-driven productivity gains at companies exceeding $50M revenue could fund meaningful stipends for millions of transitioning workers.

Act now, while we can still get ahead of this.

Respectfully,
[Your Name]`,

  "concerned citizen": `Dear [Representative],

I am writing as a citizen who believes in both technological progress and the social contract. The rapid deployment of AI systems across every sector of our economy represents an unprecedented productivity revolution — and an unprecedented risk of mass displacement without adequate transition infrastructure.

We have historical precedent for what happens when major economic transitions occur without policy support: devastated communities, lost decades of human potential, and political instability. We also have precedent for what works — the GI Bill, Trade Adjustment Assistance, and other programs that invested in people during transitions.

AI Transition Stipends, funded by modest assessments on AI-driven productivity gains, would provide a bridge for displaced workers while the new economy takes shape. This is not anti-technology — it is pro-human. The companies building AI have a responsibility to help build the transition, and policy should ensure they do.

I urge you to lead on this issue before the displacement wave peaks.

Respectfully,
[Your Name]`,
};

export function StipendLetterComposer() {
  const [role, setRole] = useState("");

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Select your situation to generate a customized letter about AI transition stipends.
      </p>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#FF6B35] outline-none"
      >
        <option value="">Choose your role...</option>
        <option value="employed">Currently Employed</option>
        <option value="displaced">Already Displaced</option>
        <option value="at-risk">At Risk</option>
        <option value="concerned citizen">Concerned Citizen</option>
      </select>

      {role && letters[role] && (
        <div className="space-y-3">
          <div className="bg-[#0F1923] border border-white/10 rounded-md p-4 text-sm text-[#F5F0EB]/80 whitespace-pre-line max-h-64 overflow-y-auto">
            {letters[role]}
          </div>
          <CopyButton text={letters[role]} />
        </div>
      )}
    </div>
  );
}
