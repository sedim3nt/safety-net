import { Hero } from "@/components/Hero";
import { TierSection } from "@/components/TierSection";
import { KanbanColumn } from "@/components/KanbanColumn";
import { ActionCard } from "@/components/ActionCard";
import { CopyButton } from "@/components/CopyButton";
import { ShareButtons } from "@/components/ShareButtons";
import { RiskCalculator } from "@/components/cards/RiskCalculator";
import { ShareStory } from "@/components/cards/ShareStory";
import { StipendLetterComposer } from "@/components/cards/StipendLetterComposer";
import { StipendMath } from "@/components/cards/StipendMath";
import { SkillMapper, RepositioningPlan } from "@/components/cards/SkillMapper";
import { ComplementFinder } from "@/components/cards/ComplementFinder";
import { ResumeDraft } from "@/components/cards/ResumeDraft";
import { GuildChecklist } from "@/components/cards/GuildChecklist";
import { CollectivePowerCalc } from "@/components/cards/CollectivePowerCalc";
import { GuildPost } from "@/components/cards/GuildPost";
import { AgentDesigner } from "@/components/cards/AgentDesigner";
import { RevenueCalculator } from "@/components/cards/RevenueCalculator";
import { CareValueCalc } from "@/components/cards/CareValueCalc";
import { EmailSignup } from "@/components/cards/EmailSignup";

const insuranceCommissionerLetter = `Dear Commissioner,

I am writing to urge your office to explore the creation of AI Displacement Insurance pilot programs within our state. As artificial intelligence rapidly transforms the workplace, millions of workers face the prospect of significant role restructuring or elimination — yet no insurance product exists to help them bridge the financial gap during transition.

Traditional unemployment insurance was designed for cyclical layoffs and individual terminations, not for the systematic restructuring of entire job categories. The workers most affected by AI displacement are often mid-career professionals with mortgages, families, and specialized skills that may take months to reposition for a restructured economy.

An AI Displacement Insurance product — potentially offered through existing carriers with state backing — could provide income continuation, retraining stipends, and career transition support for workers whose roles are substantially changed by AI adoption. Several models are feasible: employer-mandated coverage (similar to workers' compensation), voluntary supplemental policies, or state-administered funds supported by assessments on AI-driven productivity gains.

I ask that your office convene a working group to study the feasibility of such programs and issue recommendations within 180 days. The window for proactive policy is narrow — the displacement wave is already underway.

Respectfully,
[Your Name]
[Your Address]`;

const hrEmail = `Subject: Proposal for AI Displacement Equity Review

Dear [HR Director/Head of People],

As our organization increasingly integrates AI tools into our workflows, I believe we have both an opportunity and a responsibility to address the impact on employees whose roles may be substantially restructured.

I am writing to propose an AI Displacement Equity Review — a formal assessment of how our AI adoption strategy affects existing employees, with particular attention to:

1. **Transition Support**: Identifying roles likely to be restructured within the next 12-24 months and providing affected employees with advance notice, retraining resources, and transition stipends.

2. **Fractional Equity Consideration**: Many of our current employees have spent years generating the data, processes, and institutional knowledge that AI systems are now being trained on. A fractional equity or profit-sharing model would acknowledge that their work product directly contributed to the productivity gains AI delivers.

3. **Internal Mobility**: Establishing priority placement programs for displaced employees, including new AI-complementary roles created by our adoption strategy.

4. **Transparent Communication**: Publishing an internal AI Impact Assessment annually so employees can plan their careers with full information.

Companies that lead on workforce transition will attract better talent and avoid the reputational costs that come from being seen as indifferent to employee welfare during a historic economic shift.

I would welcome the opportunity to discuss this further.

Best regards,
[Your Name]`;

const modelPolicy = `MODEL CORPORATE POLICY: AI Displacement Equity Framework

Section 1: Preamble
This organization recognizes that the deployment of artificial intelligence systems in our operations has been made possible, in substantial part, by the accumulated work product, institutional knowledge, and professional expertise of our workforce. The data that trains our AI systems, the processes that AI automates, and the quality standards that AI replicates were created by human employees over years and decades of dedicated work.

Section 2: Fractional Equity for Displaced Workers
Any employee whose role is substantially restructured (defined as 40% or more of core duties being automated or eliminated) due to AI adoption shall be eligible for a Fractional Equity Grant equivalent to 0.5% of the estimated annual productivity gain attributable to the AI system that displaced their role, vested over 24 months. This acknowledges that the employee's historical work product directly contributed to the AI system's capability.

Section 3: Transition Period
Displaced employees shall receive a minimum 6-month transition period with full benefits, during which they may pursue internal redeployment, retraining (company-funded up to $15,000), or external career transition support. Severance shall be calculated at 1.5x the standard rate for AI-displaced positions.

Section 4: Ongoing Obligations
For 36 months following displacement, the organization shall provide: career counseling services, professional network access, and first-priority consideration for new roles created by AI adoption. The organization shall publish an annual AI Impact Report documenting positions displaced, equity grants issued, and transition outcomes.`;

const careCreditsLetter = `Dear [Legislator],

I am writing to advocate for legislation that would allow care work — childcare, elder care, community volunteering, mentoring, and organizing — to count toward Social Security credits.

Currently, Americans who step away from paid employment to provide essential care work receive zero Social Security credit for that labor, despite performing work valued at over $600 billion annually in the United States. This policy effectively punishes the people who hold our communities together.

As AI displaces millions of knowledge workers over the coming decade, many will transition into care economy roles — the deeply human work that AI cannot replicate. If we fail to value this work in our social safety net, we create a perverse incentive: penalizing people for doing the most essential work in society.

I urge you to support legislation that would:
1. Allow up to 5 years of care work credits toward Social Security qualification
2. Calculate care work credits at the national median wage equivalent
3. Include childcare, elder care, disability support, community volunteering, and mentoring as qualifying activities
4. Create a simple attestation process for documenting care work hours

This is not a new expense — it is a recognition of value that already exists. The care economy is the foundation every other economy rests on.

Respectfully,
[Your Name]`;

const publicAiLetter = `Dear City Council Members,

I am writing to advocate for public AI access at our city's libraries and community centers. As artificial intelligence becomes essential infrastructure for education, job searching, small business operations, and civic participation, access to AI tools is rapidly becoming as important as access to the internet itself.

Currently, the most capable AI tools require paid subscriptions ranging from $20-200 per month — creating a growing digital divide between those who can afford AI assistance and those who cannot. Our public libraries bridged the digital divide for internet access; they must do the same for AI.

I propose a Public AI Access Pilot Program that would:
1. Provide free access to AI tools (writing assistance, research, job search, coding) at library terminals
2. Offer weekly AI literacy workshops for community members
3. Train library staff as AI navigators who can help patrons use these tools effectively
4. Establish usage guidelines that protect patron privacy and prevent misuse

The estimated cost for a 6-month pilot at 3 library locations is $15,000-25,000 — less than what many cities spend on a single community event. The return on investment in workforce development, educational outcomes, and civic participation would be substantial.

Our community cannot afford an AI access gap. Please act now.

Respectfully,
[Your Name]`;

const libraryBoardEmail = `Subject: Proposal for AI Access Pilot Program at Our Library

Dear Library Board Members,

I am writing to propose that our library system launch a pilot program providing public access to AI tools — a natural extension of our mission to provide equitable access to information and technology.

As AI tools become essential for job searching, education, small business operations, and daily life, our library has an opportunity to lead in ensuring no community member is left behind. A 6-month pilot could include AI-enabled research stations, weekly literacy workshops, and trained AI Navigator staff.

The investment is modest relative to impact: approximately $5,000-8,000 per branch for software access, training, and promotional materials. Several library systems — including San Francisco Public Library and Brooklyn Public Library — have already launched similar programs with strong community response.

I would welcome the opportunity to discuss this at an upcoming board meeting.

Best regards,
[Your Name]`;

const managerEmail = `Subject: Proposal: 30-Day Human+AI Pilot Program

Dear [Manager],

I'd like to propose a structured 30-day pilot to explore how AI tools could augment our team's work — not replace it, but enhance what we do best.

The concept is simple: for 30 days, I would integrate AI tools into my existing workflow and document the results — what works, what doesn't, where human judgment remains essential, and where AI genuinely accelerates output.

Specifically, I propose:
- **Week 1-2**: Identify 3-5 repetitive tasks suitable for AI assistance; begin using AI tools alongside current workflow
- **Week 3-4**: Measure productivity changes, quality outcomes, and time savings
- **End of Month**: Deliver a written report with recommendations for team-wide adoption

This costs nothing beyond my existing time allocation — I would use free-tier AI tools. The value is data: instead of guessing where AI helps our team, we'd have concrete evidence from someone who understands our work deeply.

Companies that run these pilots now will have a 12-18 month head start on workforce AI integration. I'd rather we lead this conversation than react to it.

Happy to discuss further.

Best,
[Your Name]`;

export default function Home() {
  return (
    <>
      <Hero />

      {/* ===== TIER 1: Income Bridging ===== */}
      <TierSection
        id="tier-1"
        tier="Tier 1"
        title="Income Bridging"
        description="Immediate actions to protect your income and push for systemic change. These tools work today."
        accent="blue"
      >
        {/* Column 1: AI Displacement Insurance */}
        <KanbanColumn title="AI Displacement Insurance" civicTemp={45}>
          <ActionCard icon="📧" title="Email Your Insurance Commissioner">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                No insurance product exists for AI displacement. Your state insurance commissioner can change that. Send this letter to start the conversation.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {insuranceCommissionerLetter}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={insuranceCommissionerLetter} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("AI Displacement Insurance Pilot Programs")}&body=${encodeURIComponent(insuranceCommissionerLetter)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="📋" title="Sign the Petition">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Join thousands calling for AI displacement insurance to be made available as a standard insurance product.
              </p>
              <a
                href="https://www.change.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                Sign on Change.org →
              </a>
            </div>
          </ActionCard>

          <ActionCard icon="🧮" title="Calculate Your Risk Window">
            <RiskCalculator />
          </ActionCard>

          <ActionCard icon="📤" title="Share Your Story">
            <ShareStory />
          </ActionCard>
        </KanbanColumn>

        {/* Column 2: Transition Stipends */}
        <KanbanColumn title="Transition Stipends" civicTemp={62}>
          <ActionCard icon="🏛️" title="Find Your Representatives">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Your federal representatives need to hear from you about AI transition policy. Find them here.
              </p>
              <p className="text-xs text-[#F2C94C]">
                Representative lookup by zip code coming soon. In the meantime:
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2D9CDB] hover:underline">
                  → Find your House Representative
                </a>
                <a href="https://www.senate.gov/senators/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2D9CDB] hover:underline">
                  → Find your Senators
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="✉️" title="Compose a Letter">
            <StipendLetterComposer />
          </ActionCard>

          <ActionCard icon="📊" title="See the Math">
            <StipendMath />
          </ActionCard>

          <ActionCard icon="👥" title="Share With 5 Friends">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Policy change requires critical mass. Share this with 5 people who need to see it.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/60">
                AI is about to restructure 30-40% of knowledge work tasks. There&apos;s no insurance for it, no transition stipend, no plan. The Safety Net built 36 free tools to fight back. Check it out:
              </div>
              <ShareButtons
                text="AI is about to restructure 30-40% of knowledge work tasks. The Safety Net built 36 free tools to fight back."
                subject="This matters — The Safety Net"
              />
            </div>
          </ActionCard>
        </KanbanColumn>

        {/* Column 3: Cooperative Ownership */}
        <KanbanColumn title="Cooperative Ownership" civicTemp={28}>
          <ActionCard icon="📖" title="Read the Model Policy">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                This model corporate policy establishes fractional equity for workers whose work product trained AI systems. Adapt it for your organization.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-64 overflow-y-auto whitespace-pre-line">
                {modelPolicy}
              </div>
              <CopyButton text={modelPolicy} label="Copy Policy" />
            </div>
          </ActionCard>

          <ActionCard icon="🏢" title="Send to HR">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Propose an AI Displacement Equity Review at your organization. This email template gives HR a clear, professional starting point.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {hrEmail}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={hrEmail} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Proposal for AI Displacement Equity Review")}&body=${encodeURIComponent(hrEmail)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="⚖️" title="Know Your Rights">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Worker protections vary by state. Key federal protections:
              </p>
              <ul className="space-y-2 text-sm text-[#F5F0EB]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9CDB] shrink-0">•</span>
                  <span><strong>WARN Act</strong> — Employers with 100+ workers must give 60-day notice before mass layoffs affecting 50+ employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9CDB] shrink-0">•</span>
                  <span><strong>NLRA Rights</strong> — You have the right to organize, discuss working conditions with coworkers, and engage in collective action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9CDB] shrink-0">•</span>
                  <span><strong>COBRA</strong> — Continued health insurance coverage for 18-36 months after job loss (you pay the full premium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9CDB] shrink-0">•</span>
                  <span><strong>State Laws</strong> — Many states have additional protections. Check your state labor department website.</span>
                </li>
              </ul>
              <div className="flex flex-col gap-1">
                <a href="https://www.dol.gov/agencies/eta/layoffs" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2D9CDB] hover:underline">
                  → DOL Layoff Resources
                </a>
                <a href="https://www.nlrb.gov/about-nlrb/rights-we-protect/your-rights" target="_blank" rel="noopener noreferrer" className="text-xs text-[#2D9CDB] hover:underline">
                  → NLRB: Know Your Rights
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="🤝" title="Find a Co-op">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Worker cooperatives are democratically owned by their members. When your job is displaced, building or joining a co-op means you own the means of production — including any AI tools you deploy.
              </p>
              <a
                href="https://www.usworker.coop/directory/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                Browse Co-op Directory →
              </a>
            </div>
          </ActionCard>
        </KanbanColumn>
      </TierSection>

      {/* ===== TIER 2: Skill Repositioning ===== */}
      <TierSection
        id="tier-2"
        tier="Tier 2"
        title="Skill Repositioning"
        description="3-6 month actions to map your skills, find complementary roles, and build collective capacity. Knowledge is leverage."
        accent="blue"
      >
        {/* Column 4: Honest Capability Mapping */}
        <KanbanColumn title="Honest Capability Mapping" civicTemp={71}>
          <ActionCard icon="🗺️" title="Map Your Skills">
            <SkillMapper />
          </ActionCard>

          <ActionCard icon="📈" title="Skill Heat Map">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                The Displacement Index tracks which skills are gaining and losing market premium in real time, based on job posting data, automation research, and salary trends.
              </p>
              <a
                href="https://displacementindex.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                View Displacement Index →
              </a>
            </div>
          </ActionCard>

          <ActionCard icon="🎯" title="Repositioning Plan">
            <RepositioningPlan />
          </ActionCard>

          <ActionCard icon="💬" title="AI Career Advisor">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Coming soon — an AI advisor trained on displacement data to give you personalized career guidance based on your skills, location, and industry trends.
              </p>
              <p className="text-xs text-[#F5F0EB]/40 mb-2">Sign up for launch notification:</p>
              <EmailSignup storageKey="safety-net-career-advisor" label="Notify Me" />
            </div>
          </ActionCard>
        </KanbanColumn>

        {/* Column 5: Complementarity Matching */}
        <KanbanColumn title="Complementarity Matching" civicTemp={38}>
          <ActionCard icon="🔄" title="Find Your Complement">
            <ComplementFinder />
          </ActionCard>

          <ActionCard icon="📝" title="New Resume Draft">
            <ResumeDraft />
          </ActionCard>

          <ActionCard icon="🎓" title="Courses That Matter">
            <div className="space-y-2">
              <p className="text-sm text-[#F5F0EB]/70 mb-3">
                Skip the noise. These 10 courses build real, AI-complementary skills — and they&apos;re all free or affordable.
              </p>
              {[
                { name: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", desc: "Learn data cleaning, analysis, and visualization" },
                { name: "IBM AI Engineering", url: "https://www.coursera.org/professional-certificates/ai-engineer", desc: "Build and deploy AI models with hands-on projects" },
                { name: "CS50: AI with Python (Harvard)", url: "https://cs50.harvard.edu/ai/", desc: "Algorithms behind AI — search, optimization, machine learning" },
                { name: "Prompt Engineering (DeepLearning.AI)", url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/", desc: "Master the skill of directing AI effectively" },
                { name: "UX Design (Google)", url: "https://www.coursera.org/professional-certificates/google-ux-design", desc: "Design human-centered experiences for AI-powered products" },
                { name: "Digital Marketing (Google)", url: "https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce", desc: "AI-augmented marketing and analytics" },
                { name: "Project Management (Google)", url: "https://www.coursera.org/professional-certificates/google-project-management", desc: "Manage hybrid human+AI teams and workflows" },
                { name: "Cybersecurity (Google)", url: "https://www.coursera.org/professional-certificates/google-cybersecurity", desc: "AI security is a growing, high-demand field" },
                { name: "AI for Everyone (Andrew Ng)", url: "https://www.coursera.org/learn/ai-for-everyone", desc: "Non-technical AI literacy for any professional" },
                { name: "MIT Intro to CS (OpenCourseWare)", url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/", desc: "Free, rigorous CS foundations from MIT" },
              ].map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#0F1923] border border-white/5 rounded-md px-3 py-2 hover:border-[#2D9CDB]/50 transition-colors"
                >
                  <span className="text-sm text-[#2D9CDB] font-bold">{c.name}</span>
                  <p className="text-xs text-[#F5F0EB]/50 mt-0.5">{c.desc}</p>
                </a>
              ))}
            </div>
          </ActionCard>

          <ActionCard icon="📧" title="Email Your Manager">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Propose a 30-day human+AI pilot at your company. Be the person who leads the conversation instead of reacting to it.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {managerEmail}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={managerEmail} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Proposal: 30-Day Human+AI Pilot Program")}&body=${encodeURIComponent(managerEmail)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>
        </KanbanColumn>

        {/* Column 6: Transition Guilds */}
        <KanbanColumn title="Transition Guilds" civicTemp={19}>
          <ActionCard icon="🔍" title="Find a Guild">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Transition guilds are new — most don&apos;t exist yet. That&apos;s why we need <strong className="text-[#F5F0EB]">YOU</strong> to start one. In the meantime, connect with existing worker organizations:
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://ndlon.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2D9CDB] hover:underline">
                  → National Day Laborer Organizing Network
                </a>
                <a href="https://www.freelancersunion.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2D9CDB] hover:underline">
                  → Freelancers Union
                </a>
                <a href="https://techworkerscoalition.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-[#2D9CDB] hover:underline">
                  → Tech Workers Coalition
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="🏗️" title="Start a Guild">
            <GuildChecklist />
          </ActionCard>

          <ActionCard icon="💰" title="Collective Power Calculator">
            <CollectivePowerCalc />
          </ActionCard>

          <ActionCard icon="📢" title="Post a Guild">
            <GuildPost />
          </ActionCard>
        </KanbanColumn>
      </TierSection>

      {/* ===== TIER 3: New Economy ===== */}
      <TierSection
        id="tier-3"
        tier="Tier 3"
        title="New Economy"
        description="6-18 month horizon. Build ownership in the AI economy. Create agents, value care work, demand public access."
        accent="green"
      >
        {/* Column 7: Agent Ownership */}
        <KanbanColumn title="Agent Ownership" civicTemp={55}>
          <ActionCard icon="🤖" title="Design Your Agent">
            <AgentDesigner />
          </ActionCard>

          <ActionCard icon="💻" title="Deploy for Free">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                <strong className="text-[#F5F0EB]">Spore</strong> is our open source agent library. 190 files, 13 agents, 15 skills. MIT licensed. You own everything you build with it.
              </p>
              <a
                href="https://github.com/sedim3nt/spore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-6 py-3 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                View Spore on GitHub →
              </a>
            </div>
          </ActionCard>

          <ActionCard icon="💵" title="Revenue Calculator">
            <RevenueCalculator />
          </ActionCard>

          <ActionCard icon="🎓" title="Bootcamp Signup">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                <strong className="text-[#F5F0EB]">Free 5-day email course:</strong> Build and deploy your first AI agent. No coding experience required. We&apos;ll walk you through designing, building, and monetizing an agent based on your professional expertise.
              </p>
              <ul className="text-xs text-[#F5F0EB]/50 space-y-1">
                <li>Day 1: What is an AI agent? (and why you should own one)</li>
                <li>Day 2: Designing your agent&apos;s capabilities</li>
                <li>Day 3: Building with Spore — hands-on tutorial</li>
                <li>Day 4: Deployment and testing</li>
                <li>Day 5: Monetization strategies</li>
              </ul>
              <EmailSignup storageKey="safety-net-bootcamp" label="Subscribe" />
            </div>
          </ActionCard>
        </KanbanColumn>

        {/* Column 8: Care Economy */}
        <KanbanColumn title="Care Economy" civicTemp={82}>
          <ActionCard icon="❤️" title="Attest Care Work">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                <strong className="text-[#F5F0EB]">Proof of Care</strong> is an attestation protocol that creates verifiable records of care work — childcare, elder care, mentoring, volunteering, community organizing. Your care work deserves recognition.
              </p>
              <a
                href="https://proofofcare.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                Attest on Proof of Care →
              </a>
            </div>
          </ActionCard>

          <ActionCard icon="📊" title="Value Your Care">
            <CareValueCalc />
          </ActionCard>

          <ActionCard icon="🏛️" title="Care Credits Letter">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Advocate for care work to count toward Social Security credits. This letter makes the case.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {careCreditsLetter}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={careCreditsLetter} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Care Work Should Count Toward Social Security Credits")}&body=${encodeURIComponent(careCreditsLetter)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="🌐" title="Join Care Network">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                The Proof of Care Network connects caregivers, volunteers, and community organizers. Build your care resume. Get recognized. Find support.
              </p>
              <a
                href="https://proofofcare.spirittree.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-4 py-2 rounded-md hover:bg-[#5DA3D9] transition-colors"
              >
                Join the Network →
              </a>
            </div>
          </ActionCard>
        </KanbanColumn>

        {/* Column 9: Public AI Access */}
        <KanbanColumn title="Public AI Access" civicTemp={33}>
          <ActionCard icon="🏛️" title="Demand Public AI">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                AI access is becoming as essential as internet access. Your city council needs to hear it. Send this letter.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {publicAiLetter}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={publicAiLetter} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Proposal: Public AI Access at City Libraries")}&body=${encodeURIComponent(publicAiLetter)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="🆓" title="Free AI Tools">
            <div className="space-y-2">
              <p className="text-sm text-[#F5F0EB]/70 mb-2">
                You don&apos;t need a subscription to start using AI. These tools are genuinely free:
              </p>
              {[
                { name: "ChatGPT Free", url: "https://chat.openai.com", desc: "General-purpose AI assistant from OpenAI" },
                { name: "Claude Free", url: "https://claude.ai", desc: "Thoughtful AI assistant from Anthropic" },
                { name: "Gemini", url: "https://gemini.google.com", desc: "Google's AI with web access and multimodal capabilities" },
                { name: "Perplexity", url: "https://www.perplexity.ai", desc: "AI-powered research with cited sources" },
                { name: "Microsoft Copilot", url: "https://copilot.microsoft.com", desc: "AI assistant with image generation included" },
                { name: "Hugging Face", url: "https://huggingface.co", desc: "Open source AI models and demos — thousands free" },
                { name: "Ollama", url: "https://ollama.ai", desc: "Run AI models locally on your own computer" },
                { name: "Stable Diffusion", url: "https://stability.ai", desc: "Open source AI image generation" },
                { name: "GIMP + AI plugins", url: "https://www.gimp.org", desc: "Free Photoshop alternative with AI enhancement plugins" },
                { name: "LibreOffice", url: "https://www.libreoffice.org", desc: "Free office suite — increasingly AI-enhanced" },
                { name: "Google NotebookLM", url: "https://notebooklm.google.com", desc: "AI research assistant that works with your documents" },
                { name: "Canva Free", url: "https://www.canva.com", desc: "Design tool with AI features on the free tier" },
                { name: "Remove.bg", url: "https://www.remove.bg", desc: "AI background removal — free for basic use" },
                { name: "DeepL", url: "https://www.deepl.com", desc: "Best free AI translation — better than Google Translate" },
                { name: "Grammarly Free", url: "https://www.grammarly.com", desc: "AI writing assistant with generous free tier" },
              ].map((t) => (
                <a
                  key={t.name}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#0F1923] border border-white/5 rounded-md px-3 py-1.5 hover:border-[#2D9CDB]/50 transition-colors"
                >
                  <span className="text-xs text-[#2D9CDB] font-bold">{t.name}</span>
                  <span className="text-xs text-[#F5F0EB]/40 ml-2">{t.desc}</span>
                </a>
              ))}
            </div>
          </ActionCard>

          <ActionCard icon="📚" title="Library Pilot Toolkit">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                A step-by-step guide for librarians to set up public AI access. Share this with your local library.
              </p>
              <div className="space-y-2">
                {[
                  "Assess community needs — survey patrons about AI awareness and interest",
                  "Select AI tools — choose free-tier tools appropriate for public terminals (ChatGPT, Claude, Perplexity)",
                  "Configure privacy — set up ephemeral sessions, clear browsing data between users, post privacy guidelines",
                  "Train staff — run 2-3 internal workshops so librarians can guide patrons effectively",
                  "Launch workshops — start with weekly 'AI for Beginners' sessions to build community interest",
                  "Measure and iterate — track usage, collect feedback, expand successful programs",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#0F1923] border border-white/5 rounded-md px-3 py-2">
                    <span className="text-[#27AE60] font-bold shrink-0 text-sm">{i + 1}.</span>
                    <span className="text-xs text-[#F5F0EB]/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </ActionCard>

          <ActionCard icon="📧" title="Email Library Board">
            <div className="space-y-3">
              <p className="text-sm text-[#F5F0EB]/70">
                Propose an AI access pilot to your local library board.
              </p>
              <div className="bg-[#0F1923] border border-white/10 rounded-md p-3 text-xs text-[#F5F0EB]/70 max-h-48 overflow-y-auto whitespace-pre-line">
                {libraryBoardEmail}
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyButton text={libraryBoardEmail} />
                <a
                  href={`mailto:?subject=${encodeURIComponent("Proposal for AI Access Pilot Program at Our Library")}&body=${encodeURIComponent(libraryBoardEmail)}`}
                  className="inline-flex items-center gap-2 bg-[#1A2B3C] border border-white/10 text-[#F5F0EB] text-sm px-4 py-2 rounded-md hover:border-[#2D9CDB] transition-colors"
                >
                  ✉️ Open in Email
                </a>
              </div>
            </div>
          </ActionCard>
        </KanbanColumn>
      </TierSection>
    </>
  );
}
