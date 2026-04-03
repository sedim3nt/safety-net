"use client";

import { useState } from "react";
import { ActionCard } from "../ActionCard";
import { KanbanColumn } from "../KanbanColumn";
import { CopyButton } from "../CopyButton";
import { ShareButtons } from "../ShareButtons";

const LETTER_TEMPLATE = `Dear [Representative Name],

I am writing as your constituent to urge you to support legislation establishing AI Transition Stipends for workers displaced by artificial intelligence automation.

As AI rapidly transforms our economy, millions of workers face displacement without adequate support systems. I'm asking you to champion legislation that would:

1. Create a funded stipend program for workers whose jobs are automated by AI systems
2. Establish an AI Productivity Tax on companies that replace human labor with AI, directing revenue toward transition support
3. Mandate 6-month minimum transition periods before AI-driven layoffs take effect
4. Fund retraining programs specifically designed for AI-complementary skills

This isn't anti-technology — it's pro-worker. The AI transition can benefit everyone, but only if we build the civic infrastructure to support it.

I look forward to your response and your leadership on this critical issue.

Sincerely,
[Your Name]
[Your Address]`;

const MODEL_POLICY = `MODEL POLICY: Worker Cooperative Conversion Upon AI Displacement

Section 1 — Purpose
When an employer automates roles using AI systems, affected workers shall have the right to form a worker cooperative to continue providing services, with preferential contracting from the original employer.

Section 2 — Trigger
This policy activates when 10% or more of a department's roles are displaced by AI within a 12-month period.

Section 3 — Cooperative Formation
(a) Displaced workers may elect to form a cooperative within 90 days of notice.
(b) The employer shall provide transition support equal to 3 months of aggregate displaced wages.
(c) The cooperative shall have right of first refusal for any outsourced work previously performed by displaced workers.

Section 4 — AI Tool Access
The cooperative shall receive licensed access to the same AI tools deployed by the employer, at cost, for a minimum of 24 months.

Section 5 — Revenue Sharing
When AI systems trained on displaced workers' institutional knowledge generate revenue, 5% of attributable revenue shall be directed to the cooperative for 36 months.`;

const HR_EMAIL_TEMPLATE = `Subject: Proposal for Worker Cooperative Conversion Policy

Dear [HR Director / Chief People Officer],

I'm writing to propose that [Company Name] adopt a Worker Cooperative Conversion Policy — a forward-thinking framework that protects both the company and its workers as AI transforms our operations.

The policy would give workers displaced by AI automation the option to form a cooperative that continues providing services to the company. This approach:

• Preserves institutional knowledge within your vendor network
• Reduces severance and unemployment insurance costs
• Demonstrates genuine corporate responsibility during AI adoption
• Maintains goodwill and morale among remaining employees

I've attached a model policy framework for your review. Several forward-thinking companies are already exploring similar approaches.

I'd welcome the opportunity to discuss this further.

Best regards,
[Your Name]
[Your Department]`;

function TransitionCalculator() {
  const [revenue, setRevenue] = useState("");
  const [aiGain, setAiGain] = useState("");

  const revenueNum = parseFloat(revenue) || 0;
  const gainNum = parseFloat(aiGain) || 0;
  const productivity = revenueNum * (gainNum / 100);
  const taxRevenue = productivity * 0.05;
  const workersSupported = Math.floor(taxRevenue / 35000);

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        See how a small AI productivity tax could fund transition stipends.
      </p>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">Company Annual Revenue ($)</label>
        <input
          type="number"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          placeholder="e.g. 10000000"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-xs text-bone/50">AI Productivity Gain (%)</label>
        <input
          type="number"
          value={aiGain}
          onChange={(e) => setAiGain(e.target.value)}
          placeholder="e.g. 30"
          className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
        />
      </div>
      {revenueNum > 0 && gainNum > 0 && (
        <div className="bg-midnight/50 rounded-md p-3 space-y-1 border border-bone/10">
          <p className="text-xs text-bone/50">AI-generated productivity</p>
          <p className="font-display font-bold text-clear-blue">
            ${productivity.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-bone/50">5% transition tax revenue</p>
          <p className="font-display font-bold text-action-green">
            ${taxRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-xs text-bone/50">Workers supported at $35K stipend</p>
          <p className="font-display font-bold text-signal-blue">
            {workersSupported.toLocaleString()} workers
          </p>
        </div>
      )}
    </div>
  );
}

function ZipCodeLookup() {
  const [zip, setZip] = useState("");

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        Enter your zip code to find your federal and state representatives.
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          placeholder="Enter zip code"
          maxLength={5}
          className="flex-1 bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none"
        />
        <a
          href={zip.length === 5 ? `https://www.commoncause.org/find-your-representative/addr/?address=${zip}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors ${
            zip.length === 5
              ? "bg-signal-blue text-midnight hover:bg-signal-blue/90"
              : "bg-bone/10 text-bone/30 cursor-not-allowed"
          }`}
          onClick={(e) => { if (zip.length !== 5) e.preventDefault(); }}
        >
          Find Reps
        </a>
      </div>
      {zip.length === 5 && (
        <p className="text-xs text-bone/50">
          Opens Common Cause representative lookup for zip code {zip}.
        </p>
      )}
    </div>
  );
}

function StoryForm() {
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p className="text-action-green font-display font-semibold">Thank you for sharing.</p>
        <p className="text-xs text-bone/50 mt-1">Your story helps build the case for better policy.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-bone/60 text-xs">
        Has AI affected your job or livelihood? Your story matters.
      </p>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Tell us what happened..."
        rows={4}
        className="w-full bg-midnight border border-bone/20 rounded-md px-3 py-2 text-sm text-bone placeholder:text-bone/30 focus:border-signal-blue focus:outline-none resize-none"
      />
      <button
        onClick={() => { if (story.trim()) setSubmitted(true); }}
        className={`px-4 py-2 rounded-md text-sm font-display font-semibold transition-colors ${
          story.trim()
            ? "bg-signal-blue text-midnight hover:bg-signal-blue/90"
            : "bg-bone/10 text-bone/30 cursor-not-allowed"
        }`}
      >
        Submit Story
      </button>
    </div>
  );
}

export default function Tier1() {
  return (
    <section id="tier-1" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-signal-blue font-display text-sm font-bold uppercase tracking-widest">
            Tier 1
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-bone mt-2">
            Income Bridging
          </h2>
          <p className="text-bone/60 mt-2 max-w-2xl">
            Immediate actions to protect your income during the AI transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: AI Displacement Insurance */}
          <KanbanColumn title="AI Displacement Insurance" civicTemp={42}>
            <ActionCard icon="📧" title="Email Your State Insurance Commissioner">
              <p className="mb-3">
                Demand your state create an AI displacement insurance program — similar to
                unemployment insurance but specifically triggered by AI automation.
              </p>
              <a
                href="mailto:?subject=Request%20for%20AI%20Displacement%20Insurance%20Program&body=Dear%20Commissioner%2C%0A%0AI%20am%20writing%20to%20request%20that%20our%20state%20establish%20an%20AI%20Displacement%20Insurance%20program.%20As%20artificial%20intelligence%20automates%20an%20increasing%20number%20of%20jobs%2C%20workers%20need%20a%20dedicated%20insurance%20mechanism%20that%20provides%20income%20support%20during%20the%20transition.%0A%0AThis%20program%20should%3A%0A-%20Provide%206-12%20months%20of%20income%20replacement%20for%20AI-displaced%20workers%0A-%20Be%20funded%20by%20employer%20contributions%20proportional%20to%20AI%20automation%20levels%0A-%20Include%20mandatory%20retraining%20vouchers%0A%0AThank%20you%20for%20your%20attention%20to%20this%20critical%20issue.%0A%0ASincerely%2C%0A%5BYour%20Name%5D"
                className="inline-flex items-center gap-2 bg-signal-blue text-midnight px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-signal-blue/90 transition-colors"
              >
                Open Email Template →
              </a>
            </ActionCard>

            <ActionCard icon="📋" title="Sign the Petition">
              <p className="mb-3">
                Join thousands calling for federal AI displacement protections.
                The petition calls for a national AI Displacement Insurance Act.
              </p>
              <a
                href="https://safetynet.spirittree.dev/petition"
                className="inline-flex items-center gap-2 bg-signal-blue text-midnight px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-signal-blue/90 transition-colors"
              >
                Sign the Petition →
              </a>
            </ActionCard>

            <ActionCard icon="🧮" title="Calculate Your Risk Window">
              <p className="mb-3">
                How soon could AI impact your specific role? Our displacement index
                analyzes your job title, industry, and region against current AI capabilities.
              </p>
              <a
                href="https://displacement.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
              >
                Check Your Risk →
              </a>
            </ActionCard>

            <ActionCard icon="📤" title="Share Your Story">
              <StoryForm />
            </ActionCard>
          </KanbanColumn>

          {/* Column 2: Transition Stipends */}
          <KanbanColumn title="Transition Stipends" civicTemp={67}>
            <ActionCard icon="🏛️" title="Find Your Representatives">
              <ZipCodeLookup />
            </ActionCard>

            <ActionCard icon="✉️" title="Compose a Letter">
              <p className="mb-3 text-bone/60 text-xs">
                A ready-to-send letter template for your representatives. Customize and send.
              </p>
              <div className="bg-midnight/50 rounded-md p-3 mb-3 text-xs text-bone/60 whitespace-pre-line max-h-40 overflow-y-auto border border-bone/10">
                {LETTER_TEMPLATE}
              </div>
              <CopyButton text={LETTER_TEMPLATE} label="Copy Letter" />
            </ActionCard>

            <ActionCard icon="📊" title="See the Math">
              <TransitionCalculator />
            </ActionCard>

            <ActionCard icon="👥" title="Share With 5 Friends">
              <p className="mb-3">
                The Safety Net only works if people know about it. Share with 5
                friends who might be affected by AI displacement.
              </p>
              <ShareButtons text="AI displacement is coming for all of us. Here are 36 concrete things you can do about it right now. The Safety Net →" />
            </ActionCard>
          </KanbanColumn>

          {/* Column 3: Cooperative Ownership */}
          <KanbanColumn title="Cooperative Ownership" civicTemp={28}>
            <ActionCard icon="📖" title="Read the Model Policy">
              <div className="bg-midnight/50 rounded-md p-3 text-xs text-bone/60 whitespace-pre-line max-h-60 overflow-y-auto border border-bone/10">
                {MODEL_POLICY}
              </div>
              <div className="mt-3">
                <CopyButton text={MODEL_POLICY} label="Copy Policy" />
              </div>
            </ActionCard>

            <ActionCard icon="🏢" title="Send to Your HR Department">
              <p className="mb-3">
                Your company should have an AI displacement policy. Send this template
                to your HR department to start the conversation.
              </p>
              <a
                href={`mailto:?subject=${encodeURIComponent("Proposal for Worker Cooperative Conversion Policy")}&body=${encodeURIComponent(HR_EMAIL_TEMPLATE)}`}
                className="inline-flex items-center gap-2 bg-signal-blue text-midnight px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-signal-blue/90 transition-colors"
              >
                Open Email Template →
              </a>
            </ActionCard>

            <ActionCard icon="⚖️" title="Know Your Rights">
              <div className="space-y-3">
                <p>
                  Workers have emerging rights around AI displacement. Here&apos;s what to know:
                </p>
                <ul className="space-y-2 text-xs text-bone/60">
                  <li className="flex gap-2">
                    <span className="text-warm-yellow">•</span>
                    <span><strong className="text-bone/80">WARN Act:</strong> Employers with 100+ workers must give 60 days notice before mass layoffs — including AI-driven ones.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-warm-yellow">•</span>
                    <span><strong className="text-bone/80">NLRA Rights:</strong> You have the right to organize and collectively bargain over AI adoption decisions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-warm-yellow">•</span>
                    <span><strong className="text-bone/80">State Laws:</strong> Several states are introducing AI transparency and displacement protection laws. Check your state legislature.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-warm-yellow">•</span>
                    <span><strong className="text-bone/80">EU AI Act:</strong> If your company operates in Europe, additional protections may apply.</span>
                  </li>
                </ul>
              </div>
            </ActionCard>

            <ActionCard icon="🤝" title="Find a Co-op Near You">
              <p className="mb-3">
                Worker cooperatives give you ownership of your labor. The US Federation
                of Worker Cooperatives maintains a directory of co-ops across the country.
              </p>
              <a
                href="https://www.usworker.coop/directory/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-clear-blue/10 text-clear-blue border border-clear-blue/30 px-4 py-2 rounded-md text-sm font-display font-semibold hover:bg-clear-blue/20 transition-colors"
              >
                Browse Directory →
              </a>
            </ActionCard>
          </KanbanColumn>
        </div>
      </div>
    </section>
  );
}
