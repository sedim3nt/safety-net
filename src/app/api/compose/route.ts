import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const LETTER_CONTEXTS: Record<string, { target: string; policy: string }> = {
  stipend: {
    target: "your federal representative (House or Senate)",
    policy: `AI Transition Stipend legislation modeled on HR 4892 (the AI Worker Protection Act) and the proposed AI Workforce Transition Act (S. 2847). Key asks: 80% income replacement for 6 months for workers whose roles are 40%+ automated, funded by a 2% assessment on AI-driven productivity gains at companies exceeding $50M revenue. Reference the Trade Adjustment Assistance (TAA) program as precedent. Cite DOL estimates of 30-40% task restructuring across knowledge work by 2028.`,
  },
  care_value: {
    target: "your federal representative",
    policy: `Care economy crediting legislation aligned with the proposed CARE Act (HR 3156) and Social Security Caregiver Credit Act (S. 1342). Key asks: up to 5 years of care work credits toward Social Security, calculated at national median wage ($59,228/year). Care work valued at $648B annually (AARP 2025 estimate). Include childcare, elder care, disability support, community organizing, and mentoring. Simple attestation process. Reference FAMILY Act provisions.`,
  },
  cooperative: {
    target: "your state representative or city council",
    policy: `Worker cooperative and fractional equity legislation. Reference the Main Street Employee Ownership Act (HR 5236), state-level cooperative incorporation statutes, and the proposed AI Equity Sharing Act. Key asks: tax incentives for companies that offer fractional equity to displaced workers, streamlined cooperative incorporation, and state-backed cooperative development funds. Colorado's cooperative statute (C.R.S. 7-58-101) as model. Platform cooperativism framework.`,
  },
  guild: {
    target: "your state labor department and federal representative",
    policy: `Transition guild recognition and support. Reference the proposed Workforce Innovation and Opportunity Act amendments (HR 6023), portable benefits proposals, and sector-based career pathway programs under WIOA Title I. Key asks: federal recognition of transition guilds as eligible workforce development entities, funding for peer-led transition support, and portable benefit pools for gig/transitioning workers. Freelancers Union and Tech Workers Coalition as existing models.`,
  },
  agent_ownership: {
    target: "your federal representative and FTC",
    policy: `AI agent ownership and digital labor rights. Reference proposed Digital Labor Rights Act (HR 7891), the AI Foundation Model Transparency Act (S. 4178), and worker data rights under proposed amendments to the Fair Labor Standards Act. Key asks: workers retain ownership rights over AI agents trained on their professional expertise, mandatory revenue sharing when employer-deployed AI replicates specific worker skillsets, and right to build and commercialize personal AI agents using professional knowledge.`,
  },
};

export async function POST(request: NextRequest) {
  try {
    const { situation, state, letter_type } = await request.json();

    if (!situation || !state || !letter_type) {
      return NextResponse.json(
        { error: "Missing required fields: situation, state, letter_type" },
        { status: 400 }
      );
    }

    const context = LETTER_CONTEXTS[letter_type];
    if (!context) {
      return NextResponse.json(
        { error: "Invalid letter_type" },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: openrouter("anthropic/claude-haiku-4-5"),
      system: `You are a civic letter composer for workers affected by AI displacement. You write passionate, professional advocacy letters that weave the person's specific situation into policy demands. Use real policy language and reference specific legislation. Be direct, urgent, and action-oriented. The tone should feel like a union organizer who went to law school — fierce but precise.

Rules:
- Address the letter to ${context.target}
- Reference specific policy: ${context.policy}
- Weave in the person's specific job and situation naturally
- Include their state context where relevant
- End with a clear, specific ask
- Keep it under 400 words
- Use [Your Name] and [Your Address] as signature placeholders
- Do NOT use markdown formatting — plain text only`,
      prompt: `Write a letter for a ${situation} in ${state} about ${letter_type.replace(/_/g, " ")} policy.

Their situation: ${situation}
Their state: ${state}
Letter type: ${letter_type}`,
    });

    return NextResponse.json({ letter: text });
  } catch (error) {
    console.error("Compose API error:", error);
    return NextResponse.json(
      { error: "Failed to generate letter" },
      { status: 500 }
    );
  }
}
