/**
 * VETTED FEDERAL BENEFIT FACTS
 * ----------------------------
 * This is the single source of truth for any specific federal benefit/legal
 * figure surfaced to users (e.g. by the AI advisor in src/app/api/chat/route.ts).
 *
 * RULES FOR EDITING THIS FILE:
 *  - Every numeric figure MUST have an authoritative source (DOL, IRS, USDA,
 *    SSA, BLS, or an official program page) with a URL and the date verified.
 *  - NEVER invent, estimate, or "round to a nice number" a benefit figure.
 *  - If a figure cannot be verified against an authoritative source, leave it
 *    out rather than guessing.
 *  - These are FEDERAL baselines. State programs vary widely — always tell the
 *    user to confirm with their state agency / the official program.
 *
 * Last full review: 2026-05-25
 */

export interface BenefitFact {
  /** Stable key for lookups. */
  id: string;
  /** Human-readable label. */
  label: string;
  /** The vetted fact, stated plainly. */
  fact: string;
  /** Authoritative source URL. */
  source: string;
  /** Issuing authority. */
  authority: string;
  /** Date this figure was verified against the source (ISO). */
  verified: string;
}

export const BENEFIT_FACTS: BenefitFact[] = [
  {
    id: "warn-act",
    label: "WARN Act (mass layoff notice)",
    fact:
      "The federal WARN Act requires employers with 100 or more employees to give at least 60 calendar days' advance written notice before a plant closing or a mass layoff. A covered mass layoff means at least 50 employees lose their jobs at a single site during a 30-day period (and they make up at least 33% of the workforce at that site; the 33% rule does not apply once 500+ workers are affected). Many states have their own stricter 'mini-WARN' laws.",
    authority: "U.S. Department of Labor (DOL)",
    source: "https://www.dol.gov/general/topic/termination/plantclosings",
    verified: "2026-05-25",
  },
  {
    id: "cobra-duration",
    label: "COBRA health-coverage continuation",
    fact:
      "COBRA lets you keep your employer group health plan after job loss, usually for up to 18 months when the qualifying event is job loss or reduced hours. Certain events can extend coverage to 29 months (disability) or 36 months. You generally pay the full premium plus up to a 2% administrative fee. COBRA generally applies to private employers with 20 or more employees.",
    authority: "U.S. Department of Labor (EBSA) / IRS",
    source:
      "https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/cobra-continuation-health-coverage-workers",
    verified: "2026-05-25",
  },
  {
    id: "unemployment-weeks",
    label: "Unemployment insurance (UI) duration",
    fact:
      "Regular state unemployment compensation provides up to 26 weeks of benefits in most states, but this varies a lot: a minority of states provide fewer weeks (as low as 12) and at least one provides more (up to 30). The weekly benefit amount and exact number of weeks are set by your state — there is no single national number. Always check your state UI agency.",
    authority: "Center on Budget and Policy Priorities (citing state UI programs) / U.S. DOL ETA",
    source: "https://www.cbpp.org/research/economy/how-many-weeks-of-unemployment-compensation-are-available",
    verified: "2026-05-25",
  },
  {
    id: "snap-eligibility",
    label: "SNAP gross-income eligibility",
    fact:
      "For most households, SNAP (food stamps) gross monthly income must be at or below 130% of the federal poverty level for the household size. Net income, asset, and work-requirement rules also apply, and households with an elderly or disabled member follow special rules. Eligibility and benefit amounts are determined by your state SNAP agency.",
    authority: "USDA Food and Nutrition Service (FNS)",
    source: "https://www.fns.usda.gov/snap/recipient/eligibility",
    verified: "2026-05-25",
  },
  {
    id: "snap-max-allotment",
    label: "SNAP maximum monthly benefit (FY2026)",
    fact:
      "For federal fiscal year 2026 (Oct 1, 2025 – Sep 30, 2026), in the 48 contiguous states and DC, the SNAP maximum monthly allotment is about $298 for a 1-person household and about $994 for a 4-person household; amounts are higher in Alaska, Hawaii, and the territories. Most households receive less than the maximum because benefits are reduced by ~30% of net income. Confirm current figures on the USDA FNS COLA page.",
    authority: "USDA Food and Nutrition Service (FNS)",
    source: "https://www.fns.usda.gov/snap/allotment/cola/fy26",
    verified: "2026-05-25",
  },
  {
    id: "wioa",
    label: "WIOA workforce training",
    fact:
      "The Workforce Innovation and Opportunity Act (WIOA) funds job training, career counseling, and reemployment services through local American Job Centers. It does not pay a fixed cash benefit — services and any training stipends/vouchers vary by state and local workforce board. Find services via CareerOneStop / your local American Job Center.",
    authority: "U.S. Department of Labor (DOL) Employment and Training Administration",
    source: "https://www.dol.gov/agencies/eta/wioa",
    verified: "2026-05-25",
  },
];

/** Lookup helper. */
export function getBenefitFact(id: string): BenefitFact | undefined {
  return BENEFIT_FACTS.find((f) => f.id === id);
}

/**
 * Renders the vetted facts as a plain-text block suitable for grounding an
 * LLM system prompt. Each fact carries its authority so the model can attribute
 * and so it does not improvise figures.
 */
export function benefitFactsForPrompt(): string {
  return BENEFIT_FACTS.map(
    (f) =>
      `- ${f.label}: ${f.fact} [Source: ${f.authority}, ${f.source}, verified ${f.verified}]`
  ).join("\n");
}
