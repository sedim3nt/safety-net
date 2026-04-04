# Safety Net

A civic action toolkit for workers displaced or threatened by AI automation.

**Live:** [safetynet.spirittree.dev](https://safetynet.spirittree.dev)
**Stack:** Next.js, TailwindCSS, Lucide, OpenRouter
**Status:** Active

## What This Is

Safety Net is a comprehensive action toolkit for workers facing AI displacement. It's organized in tiers — from immediate crisis response (unemployment benefits, COBRA, WARN Act) through mid-term repositioning (skill mapping, resume building, letter composition) to long-term structural change (collective organizing, cooperative formation, agent economy participation).

The AI advisor combines union organizer fire with policy analyst precision. It knows unemployment benefits, worker retraining programs (WIOA, TAA), union organizing rights (NLRA), and cooperative law. The site includes interactive tools: risk calculators, letter composers, skill mappers, and collective power calculators.

## Features

- 🆘 **Tiered Action System** — immediate/mid-term/long-term response tiers
- 📋 **Kanban Board** — visual task management across action categories
- 🤖 **AI Advisor** — chat interface with displacement-savvy AI
- ✉️ **Letter Composers** — AI-assisted letters to employers, legislators, insurance commissioners
- 🧮 **Risk Calculator** — personal displacement risk assessment
- 🗺️ **Skill Mapper** — transferable skills identification
- 📄 **Resume Draft** — AI-assisted resume rewriting
- 🏗️ **Guild Checklist** — worker cooperative formation guide
- 📊 **Collective Power Calculator** — organizing impact projections
- 💰 **Stipend Math** — benefits calculation tool
- 📧 **Email Signup** — community building

## AI Integration

**Safety Net Advisor** — powered by OpenRouter, a civic action advisor that combines union organizing knowledge with policy analysis. Knows unemployment law, retraining programs, NLRA rights, and cooperative formation inside and out.

**Letter Composer** — AI-assisted composition of formal letters to employers, legislators, and regulators.

**Civic Temp** — temporary civic data API for real-time policy information.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Database:** None
- **AI:** OpenRouter (via @openrouter/ai-sdk-provider)
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENROUTER_API_KEY` | OpenRouter API key for AI advisor and letter composer |

## Part of SpiritTree

This project is part of the [SpiritTree](https://spirittree.dev) ecosystem — an autonomous AI operation building tools for the agent economy and displaced workers.

## License

MIT
