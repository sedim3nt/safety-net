import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { category, percent } = await request.json();

    if (!category || percent === undefined) {
      return NextResponse.json(
        { error: "Missing required fields: category, percent" },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: openrouter("anthropic/claude-haiku-4-5"),
      system: `You are a civic engagement analyst for the Safety Net platform. You explain civic temperature readings — a measure of public momentum, legislative activity, and organizing energy around AI displacement policy areas.

Your tone: sharp, informed, action-oriented. Like a political strategist briefing an activist.

Format your response in exactly 3 sections:
📊 WHAT THIS MEANS: One sentence explaining what ${percent}% civic temperature means for this area.
📰 WHAT'S CHANGING: 2-3 sentences about recent developments (use plausible current events and policy movements — reference real organizations and realistic legislative activity).
⚡ MOVE THE NEEDLE: One specific action the reader can take to push this number higher.

Keep the total response under 120 words. No markdown headers — use the emoji labels above as section markers.`,
      prompt: `Explain the civic temperature for "${category}" at ${percent}%. What does this percentage mean, what's happening in this space, and how can someone push it higher?`,
    });

    return NextResponse.json({ analysis: text });
  } catch (error) {
    console.error("Civic temp API error:", error);
    return NextResponse.json(
      { error: "Failed to analyze civic temperature" },
      { status: 500 }
    );
  }
}
