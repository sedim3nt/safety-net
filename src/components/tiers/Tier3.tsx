"use client";

import { useState } from "react";
import { ActionCard } from "../ActionCard";
import { KanbanColumn } from "../KanbanColumn";
import { CopyButton } from "../CopyButton";

const CITY_COUNCIL_LETTER = `Dear [Council Member Name],

I am writing to request that our city invest in public AI infrastructure — AI systems owned by and accountable to the public, not private corporations.

As AI becomes essential infrastructure (like electricity and internet), access cannot be determined solely by ability to pay. I urge you to:

1. Establish a Municipal AI Office to evaluate and deploy AI tools for public benefit
2. Fund AI access programs at public libraries and community centers
3. Create a Public AI Fund through a small surcharge on commercial AI deployments in our city
4. Mandate that any AI system used in city governance be transparent, auditable, and bias-tested

Cities that act now will lead the AI transition. Cities that don't will be left behind.

I look forward to your response.

Sincerely,
[Your Name]
[Your Address]`;

const CARE_CREDITS_LETTER = `Dear [Legislator Name],

I am writing to urge you to support legislation recognizing care work — childcare, eldercare, disability support, community health — as economically productive labor deserving of formal credits and compensation.

As AI automates transactional work, care work becomes even more valuable. Yet it remains largely invisible in our economic system. I'm asking you to:

1. Create Care Credits that count toward Social Security and retirement benefits
2. Establish a Care Worker Minimum Wage tied to the regional median income
3. Fund a Care Economy Training Program for displaced workers transitioning into care roles
4. Include care work metrics in GDP and economic reporting

Care is the economy AI can't replace. Let's value it accordingly.

Sincerely,
[Your Name]`;

const LIBRARY_BOARD_EMAIL = `Subject: Proposal for AI Access Pilot Program at Our Public Library

Dear Library Board Members,

I'm writing to propose that our library system establish an AI Access Pilot Program — providing free, guided access to AI tools for community members who might otherwise be left behind in the AI transition.

The program would include:

1. Dedicated AI Access Stations with current AI tools (ChatGPT, Claude, Gemini, etc.)
2. Weekly AI Literacy Workshops led by trained librarians
3. One-on-One AI Coaching Sessions for job seekers and small business owners
4. A curated AI Resource Collection (books, guides, online courses)
5. Community AI Hours where residents can explore AI tools with staff support

Libraries have always been the great equalizer for information access. AI is the next frontier.

I'd be happy to help develop this proposal further or volunteer for the pilot program.

Sincerely,
[Your Name]`;

const LIBRARY_TOOLKIT = [
  "Assess current library technology infrastructure and bandwidth",
  "Survey community members about AI knowledge and interest levels",
  "Identify 3-5 free AI tools suitable for public access (ChatGPT, Claude, Gemini)",
  "Develop an AI Acceptable Use Policy for library patrons",
  "Train 2-3 librarians as AI Access Specialists",
  "Create beginner-friendly AI guides in multiple languages",
  "Set up 2-4 dedicated AI access workstations",
  "Schedule weekly AI literacy drop-in sessions",
  "Partner with local workforce development agencies",
  "Create feedback mechanism to iterate on the program",
  "Document outcomes for grant applications and expansion",
  "Share your toolkit with other library systems",
];

const FREE_AI_TOOLS = [
  { name: "ChatGPT", desc: "General-purpose AI assistant", url: "https://chat.openai.com", category: "Assistant" },
  { name: "Claude", desc: "AI assistant for analysis and writing", url: "https://claude.ai", category: "Assistant" },
  { name: "Google Gemini", desc: "Google's AI with search integration", url: "https://gemini.google.com", category: "Assistant" },
  { name: "Microsoft Copilot", desc: "AI with web access, free tier", url: "https://copilot.microsoft.com", category: "Assistant" },
  { name: "Perplexity AI", desc: "AI-powered research and search", url: "https://perplexity.ai", category: "Research" },
  { name: "Hugging Face", desc: "Open-source AI models and tools", url: "https://huggingface.co", category: "Developer" },
  { name: "Google Colab", desc: "Free cloud notebooks for AI/ML", url: "https://colab.research.google.com", category: "Developer" },
  { name: "Ollama", desc: "Run AI models locally, completely free", url: "https://ollama.ai", category: "Local AI" },
  { name: "Jan.ai", desc: "Open-source local AI desktop app", url: "https://jan.ai", category: "Local AI" },
  { name: "LM Studio", desc: "Run local LLMs with a simple UI", url: "https://lmstudio.ai", category: "Local AI" },
  { name: "Canva AI", desc: "AI design tools, generous free tier", url: "https://canva.com", category: "Creative" },
  { name: "Gamma", desc: "AI presentation and document creator", url: "https://gamma.app", category: "Creative" },
  { name: "Notion AI", desc: "AI writing in your workspace", url: "https://notion.so", category: "Productivity" },
  { name: "Replit AI", desc: "AI coding assistant, free tier", url: "https://replit.com", category: "Developer" },
  { name: "Poe", desc: "Access multiple AI models for free", url: "https://poe.com", category: "Multi-model" },
];

function RevenueCalculator() {
  const [agentType, setAgentType] = useState("content");
  const [dailyTasks, setDailyTasks] = useState("");

  const rates: Record<string, number> = {
    content: 15,
    research: 25,
    customer_support: 8,
    data_entry: 5,
    code_review: 35,
    translation: 12,
  };

  const labels: Record<string, string> = {
    content: "Content Creation",
    research: "Research & Analysis",
    customer_support: "Customer Support",
    data_entry: "Data Entry & Processing",
    code_review: "Code Review & QA",
    translation: "Translation",
  };

  const tasksNum = parseInt(dailyTasks) || 0;
  const ratePerTask = rates[agentType] || 15;
  const dailyRevenue = tasksNum * ratePerTask;
  const monthlyRevenue = dailyRevenue * 22;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        Estimate what an AI agent could earn working autonomously on your behalf.
      </p>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Agent Type</label>
        <select
          value={agentType}
          onChange={(e) => setAgentType(e.target.value)}
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone focus:border-signal-orange focus:outline-none"
        >
          {Object.entries(labels).map(([value, label]) => (
            <option key={value} value={value}>{label} (${rates[value]}/task)</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Tasks Completed Per Day</label>
        <input
          type="number"
          value={dailyTasks}
          onChange={(e) => setDailyTasks(e.target.value)}
          placeholder="e.g. 20"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-orange focus:outline-none"
        />
      </div>
      {tasksNum > 0 && (
        <div className="bg-midnight/50 rounded-md p-3 space-y-2 border border-bone/10">
          <div>
            <p className="text-xs text-bone/50">Daily revenue</p>
            <p className="font-display font-bold text-bone">
              ${dailyRevenue.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-bone/50">Monthly revenue (22 work days)</p>
            <p className="font-display font-bold text-action-green text-lg">
              ${monthlyRevenue.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-bone/50">Projected annual revenue</p>
            <p className="font-display font-bold text-signal-orange">
              ${yearlyRevenue.toLocaleString()}
            </p>
          </div>
          <p className="text-[10px] text-bone/40 italic pt-1">
            Estimates based on current market rates. Actual revenue varies by demand and quality.
          </p>
        </div>
      )}
    </div>
  );
}

function CareValueCalculator() {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("25");

  const hoursNum = parseFloat(hours) || 0;
  const rateNum = parseFloat(rate) || 25;
  const weeklyValue = hoursNum * rateNum;
  const annualValue = weeklyValue * 52;

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        Calculate the economic value of your unpaid care work.
      </p>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Hours of Care Work Per Week</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="e.g. 30"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-orange focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Market Rate ($/hour)</label>
        <select
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone focus:border-signal-orange focus:outline-none"
        >
          <option value="18">Childcare ($18/hr)</option>
          <option value="25">Home Health Aide ($25/hr)</option>
          <option value="30">Licensed Practical Nurse ($30/hr)</option>
          <option value="35">Therapist / Counselor ($35/hr)</option>
          <option value="22">Eldercare ($22/hr)</option>
        </select>
      </div>
      {hoursNum > 0 && (
        <div className="bg-midnight/50 rounded-md p-3 space-y-2 border border-bone/10">
          <div>
            <p className="text-xs text-bone/50">Weekly value of your care work</p>
            <p className="font-display font-bold text-clear-blue">
              ${weeklyValue.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-bone/50">Annual economic value</p>
            <p className="font-display font-bold text-action-green text-lg">
              ${annualValue.toLocaleString()}
            </p>
          </div>
          <p className="text-[10px] text-bone/40 italic pt-1">
            This is real economic value that goes unrecognized and uncompensated.
          </p>
        </div>
      )}
    </div>
  );
}

function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-action-green font-display font-semibold">You&apos;re on the list!</p>
        <p className="text-xs text-bone/50 mt-1">We&apos;ll notify you when the bootcamp launches.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        A free bootcamp on building, deploying, and monetizing AI agents.
        Sign up to be notified when it launches.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-orange focus:outline-none"
        />
        <button
          onClick={() => { if (email.includes("@")) setSubmitted(true); }}
          className={`px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors ${
            email.includes("@")
              ? "bg-signal-orange text-midnight hover:bg-signal-orange/90"
              : "bg-bone/10 text-bone/30 cursor-not-allowed"
          }`}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
}

export default function Tier3() {
  return (
    <section id="tier-3" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-action-green font-display text-sm font-bold uppercase tracking-widest">
            Tier 3
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone mt-2">
            New Economy
          </h2>
          <p className="text-bone/60 mt-2 max-w-2xl">
            6-18 month actions to build ownership in the AI economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 7: Agent Ownership */}
          <KanbanColumn title="Agent Ownership" civicTemp={23}>
            <ActionCard icon="🤖" title="Design Your Agent">
              <p className="mb-3">
                What if you owned an AI agent that worked for you — earning revenue 24/7?
                The agent design wizard helps you identify what kind of agent matches
                your skills and market demand.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — Design Wizard Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="💻" title="Deploy for Free">
              <p className="mb-3">
                Spore is an open-source framework for deploying AI agents. Free to use,
                no platform lock-in, you own everything.
              </p>
              <a
                href="https://github.com/sedim3nt/spore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-signal-orange text-midnight px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-signal-orange/90 transition-colors"
              >
                View on GitHub →
              </a>
            </ActionCard>

            <ActionCard icon="💵" title="Revenue Calculator">
              <RevenueCalculator />
            </ActionCard>

            <ActionCard icon="🎓" title="Agent Owner Bootcamp">
              <EmailSignupForm />
            </ActionCard>
          </KanbanColumn>

          {/* Column 8: Care Economy */}
          <KanbanColumn title="Care Economy" civicTemp={61}>
            <ActionCard icon="❤️" title="Attest Care Work">
              <p className="mb-3">
                Proof of Care is a system for formally recognizing and attesting to
                care work — making the invisible visible. Log your care hours and
                get verifiable attestations.
              </p>
              <a
                href="https://proofofcare.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-signal-orange text-midnight px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-signal-orange/90 transition-colors"
              >
                Attest Your Care Work →
              </a>
            </ActionCard>

            <ActionCard icon="📊" title="Value Your Care">
              <CareValueCalculator />
            </ActionCard>

            <ActionCard icon="🏛️" title="Advocate for Care Credits">
              <p className="mb-3 text-bone/60 text-xs">
                A letter template urging your legislators to create formal Care Credits.
              </p>
              <div className="bg-midnight/50 rounded-md p-3 mb-3 text-xs text-bone/60 whitespace-pre-line max-h-40 overflow-y-auto border border-bone/10">
                {CARE_CREDITS_LETTER}
              </div>
              <CopyButton text={CARE_CREDITS_LETTER} label="Copy Letter" />
            </ActionCard>

            <ActionCard icon="🌐" title="Join the Care Network">
              <p className="mb-3">
                Connect with other care workers building the care economy. Share
                resources, organize collectively, and advocate together.
              </p>
              <a
                href="https://proofofcare.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
              >
                Join the Network →
              </a>
            </ActionCard>
          </KanbanColumn>

          {/* Column 9: Public AI Access */}
          <KanbanColumn title="Public AI Access" civicTemp={45}>
            <ActionCard icon="🏛️" title="Demand Public AI">
              <p className="mb-3 text-bone/60 text-xs">
                A letter template urging your city council to invest in public AI infrastructure.
              </p>
              <div className="bg-midnight/50 rounded-md p-3 mb-3 text-xs text-bone/60 whitespace-pre-line max-h-40 overflow-y-auto border border-bone/10">
                {CITY_COUNCIL_LETTER}
              </div>
              <CopyButton text={CITY_COUNCIL_LETTER} label="Copy Letter" />
            </ActionCard>

            <ActionCard icon="🆓" title="Free AI Tools Directory">
              <p className="mb-3 text-bone/60 text-xs">
                15 genuinely free AI tools you can use today. No paywalls, no bait-and-switch.
              </p>
              <div className="space-y-2">
                {FREE_AI_TOOLS.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 p-2 rounded-md bg-midnight/50 border border-bone/10 hover:border-action-green/30 transition-colors group"
                  >
                    <span className="text-[10px] font-display font-bold text-action-green bg-action-green/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                      {tool.category}
                    </span>
                    <div>
                      <p className="text-xs text-bone/80 group-hover:text-action-green transition-colors leading-snug">
                        {tool.name}
                      </p>
                      <p className="text-[10px] text-bone/40">{tool.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ActionCard>

            <ActionCard icon="📚" title="Library AI Pilot Toolkit">
              <p className="mb-3 text-bone/60 text-xs">
                A step-by-step checklist for librarians launching an AI access program.
              </p>
              <div className="space-y-2 mb-3">
                {LIBRARY_TOOLKIT.map((item, i) => (
                  <label key={i} className="flex items-start gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="mt-1 accent-action-green flex-shrink-0"
                    />
                    <span className="text-xs text-bone/60 group-hover:text-bone/80 transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
              <CopyButton
                text={LIBRARY_TOOLKIT.map((item, i) => `${i + 1}. ${item}`).join("\n")}
                label="Copy Checklist"
              />
            </ActionCard>

            <ActionCard icon="📧" title="Email Your Library Board">
              <p className="mb-3 text-bone/60 text-xs">
                A ready-to-send email proposing an AI access pilot program at your library.
              </p>
              <div className="bg-midnight/50 rounded-md p-3 mb-3 text-xs text-bone/60 whitespace-pre-line max-h-40 overflow-y-auto border border-bone/10">
                {LIBRARY_BOARD_EMAIL}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={LIBRARY_BOARD_EMAIL} label="Copy Email" />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Proposal for AI Access Pilot Program at Our Public Library")}&body=${encodeURIComponent(LIBRARY_BOARD_EMAIL)}`}
                  className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
                >
                  Open in Email →
                </a>
              </div>
            </ActionCard>
          </KanbanColumn>
        </div>
      </div>
    </section>
  );
}
