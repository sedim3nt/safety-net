"use client";

import { useState } from "react";
import { ActionCard } from "../ActionCard";
import { KanbanColumn } from "../KanbanColumn";
import { CopyButton } from "../CopyButton";

const COURSES = [
  { name: "Google IT Support Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-it-support", tag: "Tech Foundations" },
  { name: "Google Data Analytics Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-data-analytics", tag: "Data" },
  { name: "CS50: Introduction to Computer Science", platform: "edX / Harvard", url: "https://cs50.harvard.edu/x/", tag: "Programming" },
  { name: "Google UX Design Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-ux-design", tag: "Design" },
  { name: "AI for Everyone", platform: "Coursera / DeepLearning.AI", url: "https://www.coursera.org/learn/ai-for-everyone", tag: "AI Literacy" },
  { name: "Introduction to AI", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/modules/get-started-ai-fundamentals/", tag: "AI Foundations" },
  { name: "AWS Cloud Practitioner Essentials", platform: "AWS", url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/", tag: "Cloud" },
  { name: "Google Project Management Certificate", platform: "Coursera", url: "https://www.coursera.org/professional-certificates/google-project-management", tag: "Management" },
  { name: "Introduction to Programming with Python", platform: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/", tag: "Programming" },
  { name: "Prompt Engineering for ChatGPT", platform: "Coursera / Vanderbilt", url: "https://www.coursera.org/learn/prompt-engineering", tag: "AI Skills" },
];

const MANAGER_EMAIL = `Subject: Discussing AI's Impact on Our Team

Dear [Manager Name],

I'd like to schedule a conversation about how AI will affect our team's work and what we can do to prepare proactively.

Specifically, I'd like to discuss:

1. Which of our team's tasks are most likely to be augmented or automated by AI in the next 12-24 months
2. What upskilling or reskilling opportunities the company can support
3. Whether we can pilot AI tools that complement rather than replace our expertise
4. How we can position our team as AI-enhanced rather than AI-replaced

I believe proactive planning benefits both the team and the company. I'd love to collaborate on a transition strategy that preserves our institutional knowledge while embracing new capabilities.

Would you have 30 minutes this week to discuss?

Best,
[Your Name]`;

const GUILD_CHECKLIST = [
  "Identify 5-10 workers in similar displacement risk categories",
  "Hold an initial meeting to discuss shared concerns and goals",
  "Choose a guild structure: informal network, formal cooperative, or non-profit",
  "Set up a shared communication channel (Signal group, Discord, etc.)",
  "Pool knowledge: create a shared doc of skills, contacts, and resources",
  "Establish a mutual aid fund (even $20/month per member adds up)",
  "Assign roles: organizer, treasurer, outreach, skills inventory",
  "Create a 90-day action plan with concrete milestones",
  "Connect with local labor organizations and worker centers",
  "Register your guild in the national directory (coming soon)",
  "Plan your first collective project or training",
  "Recruit the next 5 members",
];

function CollectivePowerCalculator() {
  const [members, setMembers] = useState("");
  const [savings, setSavings] = useState("");

  const membersNum = parseInt(members) || 0;
  const savingsNum = parseFloat(savings) || 0;
  const totalMonthly = membersNum * savingsNum;
  const totalAnnual = totalMonthly * 12;

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        See what your guild could accomplish together.
      </p>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Number of Guild Members</label>
        <input
          type="number"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          placeholder="e.g. 25"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Average Monthly Contribution ($)</label>
        <input
          type="number"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          placeholder="e.g. 50"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
        />
      </div>
      {membersNum > 0 && savingsNum > 0 && (
        <div className="bg-midnight/50 rounded-md p-3 space-y-2 border border-bone/10">
          <div>
            <p className="text-xs text-bone/50">Monthly collective fund</p>
            <p className="font-display font-bold text-clear-blue">
              ${totalMonthly.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-bone/50">Annual collective fund</p>
            <p className="font-display font-bold text-action-green">
              ${totalAnnual.toLocaleString()}
            </p>
          </div>
          <div className="pt-2 border-t border-bone/10 space-y-1">
            <p className="text-xs text-bone/50">With that, your guild could:</p>
            {totalAnnual >= 5000 && (
              <p className="text-xs text-warm-yellow">✓ Fund emergency grants for displaced members</p>
            )}
            {totalAnnual >= 15000 && (
              <p className="text-xs text-warm-yellow">✓ Sponsor group training and certifications</p>
            )}
            {totalAnnual >= 30000 && (
              <p className="text-xs text-warm-yellow">✓ Hire a shared career transition coach</p>
            )}
            {totalAnnual >= 50000 && (
              <p className="text-xs text-warm-yellow">✓ Seed a worker-owned cooperative</p>
            )}
            {totalAnnual >= 100000 && (
              <p className="text-xs text-signal-blue font-semibold">✓ Launch a full cooperative business</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function GuildListingForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [focus, setFocus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-action-green font-display font-semibold">Guild listing submitted!</p>
        <p className="text-xs text-bone/50 mt-1">We&apos;ll review and add it to the directory.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">List your guild so others can find you.</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Guild name"
        className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="City, State"
        className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
      />
      <input
        type="text"
        value={focus}
        onChange={(e) => setFocus(e.target.value)}
        placeholder="Industry focus (e.g. Creative, Finance, Healthcare)"
        className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
      />
      <button
        onClick={() => { if (name.trim() && location.trim()) setSubmitted(true); }}
        className={`px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors ${
          name.trim() && location.trim()
            ? "bg-signal-blue text-midnight hover:bg-signal-blue/90"
            : "bg-bone/10 text-bone/30 cursor-not-allowed"
        }`}
      >
        Submit Listing
      </button>
    </div>
  );
}

export default function Tier2() {
  return (
    <section id="tier-2" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-clear-blue font-display text-sm font-bold uppercase tracking-widest">
            Tier 2
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone mt-2">
            Skill Repositioning
          </h2>
          <p className="text-bone/60 mt-2 max-w-2xl">
            3-6 month actions to reposition your skills for the AI economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 4: Honest Capability Mapping */}
          <KanbanColumn title="Honest Capability Mapping" civicTemp={55}>
            <ActionCard icon="🗺️" title="Map Your Skills">
              <p className="mb-3">
                An honest, AI-aware skills assessment that tells you what&apos;s durable,
                what&apos;s at risk, and what to double down on. Coming in Phase 2.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — Wizard Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="📈" title="Skill Heat Map">
              <p className="mb-3">
                See which skills are heating up (growing demand) and which are cooling
                down (being automated) across industries and regions.
              </p>
              <a
                href="https://displacementindex.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
              >
                View Heat Map →
              </a>
            </ActionCard>

            <ActionCard icon="🎯" title="Get a Repositioning Plan">
              <p className="mb-3">
                A personalized plan that maps your current skills to emerging roles
                where humans and AI work together. Coming in Phase 2.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — AI Advisor Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="💬" title="Talk to an AI Career Advisor">
              <p className="mb-3">
                An AI-powered career advisor trained on displacement data, labor
                market trends, and retraining pathways. Coming in Phase 2.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — Launching Soon
              </span>
            </ActionCard>
          </KanbanColumn>

          {/* Column 5: Complementarity Matching */}
          <KanbanColumn title="Complementarity Matching" civicTemp={38}>
            <ActionCard icon="🔄" title="Find Your Complement">
              <p className="mb-3">
                AI is great at pattern matching and data processing. Humans excel at
                judgment, empathy, creativity, and physical dexterity. Find the sweet
                spot where your skills complement AI.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — Matching Wizard Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="📝" title="Draft Your New Resume">
              <p className="mb-3">
                Reframe your experience for the AI economy. Emphasize judgment,
                leadership, creativity, and the human skills AI can&apos;t replicate.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Phase 2 — Resume Builder Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="🎓" title="Courses That Actually Matter">
              <p className="mb-3 text-bone/60 text-xs">
                10 genuinely free courses that teach AI-complementary skills — not just &quot;learn to code&quot; platitudes.
              </p>
              <div className="space-y-2">
                {COURSES.map((course) => (
                  <a
                    key={course.name}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 p-2 rounded-md bg-midnight/50 border border-bone/10 hover:border-clear-blue/30 transition-colors group"
                  >
                    <span className="text-[10px] font-display font-bold text-clear-blue bg-clear-blue/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                      {course.tag}
                    </span>
                    <div>
                      <p className="text-xs text-bone/80 group-hover:text-clear-blue transition-colors leading-snug">
                        {course.name}
                      </p>
                      <p className="text-[10px] text-bone/40">{course.platform}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ActionCard>

            <ActionCard icon="📧" title="Email Your Manager">
              <p className="mb-3">
                Start the conversation about AI&apos;s impact on your team. This
                template is professional, constructive, and positions you as proactive.
              </p>
              <div className="bg-midnight/50 rounded-md p-3 mb-3 text-xs text-bone/60 whitespace-pre-line max-h-40 overflow-y-auto border border-bone/10">
                {MANAGER_EMAIL}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={MANAGER_EMAIL} label="Copy Email" />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Discussing AI's Impact on Our Team")}&body=${encodeURIComponent(MANAGER_EMAIL)}`}
                  className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
                >
                  Open in Email →
                </a>
              </div>
            </ActionCard>
          </KanbanColumn>

          {/* Column 6: Transition Guilds */}
          <KanbanColumn title="Transition Guilds" civicTemp={71}>
            <ActionCard icon="🔍" title="Find a Guild Near You">
              <p className="mb-3">
                Transition guilds are groups of workers who band together to navigate
                AI displacement collectively. Directory coming soon.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-display font-semibold bg-warm-yellow/10 text-warm-yellow border border-warm-yellow/20">
                Directory Coming Soon
              </span>
            </ActionCard>

            <ActionCard icon="🏗️" title="Start a Guild">
              <p className="mb-3 text-bone/60 text-xs">
                Everything you need to start a transition guild in your community.
              </p>
              <div className="space-y-2 mb-3">
                {GUILD_CHECKLIST.map((item, i) => (
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
                text={GUILD_CHECKLIST.map((item, i) => `${i + 1}. ${item}`).join("\n")}
                label="Copy Checklist"
              />
            </ActionCard>

            <ActionCard icon="💰" title="Calculate Collective Power">
              <CollectivePowerCalculator />
            </ActionCard>

            <ActionCard icon="📢" title="Post a Guild Listing">
              <GuildListingForm />
            </ActionCard>
          </KanbanColumn>
        </div>
      </div>
    </section>
  );
}
