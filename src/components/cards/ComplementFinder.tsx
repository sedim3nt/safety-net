"use client";

import { useState } from "react";

const complements: Record<string, { role: string; desc: string; salary: string }[]> = {
  "Paralegal": [
    { role: "AI Legal Auditor", desc: "Review AI-generated legal documents for accuracy and compliance", salary: "$75K-$110K" },
    { role: "Legal Tech Consultant", desc: "Help law firms integrate AI tools while maintaining quality", salary: "$90K-$140K" },
    { role: "Compliance Automation Specialist", desc: "Design and oversee automated compliance workflows", salary: "$85K-$125K" },
  ],
  "Copywriter": [
    { role: "AI Content Strategist", desc: "Direct AI content generation and maintain brand voice", salary: "$80K-$120K" },
    { role: "Prompt Engineer", desc: "Craft precise prompts for consistent, high-quality output", salary: "$90K-$150K" },
    { role: "Editorial Quality Lead", desc: "Ensure AI-generated content meets human standards", salary: "$75K-$110K" },
  ],
  "Accountant": [
    { role: "AI Financial Auditor", desc: "Verify AI-processed financial data and catch edge cases", salary: "$85K-$130K" },
    { role: "Automation Implementation Lead", desc: "Design and deploy AI accounting workflows", salary: "$95K-$145K" },
    { role: "Financial AI Trainer", desc: "Train and fine-tune financial AI models with domain expertise", salary: "$100K-$160K" },
  ],
  "Customer Service Rep": [
    { role: "AI Escalation Specialist", desc: "Handle complex cases AI cannot resolve, improve AI responses", salary: "$55K-$80K" },
    { role: "CX Automation Designer", desc: "Design chatbot flows and customer journey automation", salary: "$70K-$100K" },
    { role: "Voice of Customer Analyst", desc: "Analyze AI interaction data to improve service quality", salary: "$65K-$95K" },
  ],
  "Graphic Designer": [
    { role: "AI Art Director", desc: "Guide AI image generation to match brand and creative vision", salary: "$85K-$130K" },
    { role: "Design Systems Architect", desc: "Build design systems that integrate AI generation tools", salary: "$90K-$140K" },
    { role: "Visual QA Specialist", desc: "Ensure AI-generated visuals meet brand and quality standards", salary: "$65K-$95K" },
  ],
  "Administrative Assistant": [
    { role: "AI Workflow Coordinator", desc: "Design and manage AI-powered office automation", salary: "$55K-$80K" },
    { role: "Executive AI Partner", desc: "Leverage AI tools to provide strategic executive support", salary: "$65K-$95K" },
    { role: "Operations Automation Specialist", desc: "Implement and optimize AI in daily business operations", salary: "$70K-$100K" },
  ],
  "Data Entry Specialist": [
    { role: "Data Quality Manager", desc: "Oversee AI data processing and ensure accuracy", salary: "$60K-$85K" },
    { role: "Automation QA Analyst", desc: "Test and validate automated data pipelines", salary: "$65K-$95K" },
    { role: "AI Training Data Curator", desc: "Prepare and label data to train AI models", salary: "$55K-$80K" },
  ],
  "Marketing Analyst": [
    { role: "AI Marketing Strategist", desc: "Leverage AI insights for campaign optimization", salary: "$80K-$120K" },
    { role: "Predictive Analytics Lead", desc: "Build and interpret AI-driven marketing models", salary: "$90K-$140K" },
    { role: "MarTech Integration Specialist", desc: "Connect AI tools across the marketing stack", salary: "$85K-$125K" },
  ],
  "Teacher": [
    { role: "Learning Experience Designer", desc: "Create AI-enhanced personalized learning paths", salary: "$65K-$95K" },
    { role: "EdTech Implementation Coach", desc: "Train educators and students on AI learning tools", salary: "$60K-$90K" },
    { role: "AI Curriculum Developer", desc: "Design curriculum that integrates AI literacy", salary: "$70K-$100K" },
  ],
  "Journalist": [
    { role: "AI Fact-Checker", desc: "Verify AI-generated content and combat misinformation", salary: "$60K-$90K" },
    { role: "Investigative Data Journalist", desc: "Use AI tools for deep investigative research", salary: "$70K-$110K" },
    { role: "News Automation Editor", desc: "Oversee AI news generation and maintain editorial standards", salary: "$75K-$115K" },
  ],
  "HR Manager": [
    { role: "AI Workforce Transition Lead", desc: "Manage organizational AI adoption and workforce planning", salary: "$95K-$145K" },
    { role: "People Analytics Director", desc: "Use AI for workforce insights and strategic planning", salary: "$100K-$150K" },
    { role: "AI Ethics & Policy Officer", desc: "Ensure ethical AI use in hiring and management", salary: "$90K-$140K" },
  ],
  "Software Developer": [
    { role: "AI Integration Architect", desc: "Design systems that combine human and AI capabilities", salary: "$120K-$180K" },
    { role: "AI Quality Engineer", desc: "Test and validate AI-generated code and systems", salary: "$110K-$160K" },
    { role: "Human-AI Systems Designer", desc: "Build interfaces between AI capabilities and human needs", salary: "$115K-$175K" },
  ],
};

export function ComplementFinder() {
  const [role, setRole] = useState("");

  const matches = role ? complements[role] : null;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[#F5F0EB]/70">
        Find roles that complement your expertise in an AI-augmented workplace.
      </p>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full bg-[#0F1923] border border-white/10 rounded-md px-3 py-2 text-sm text-[#F5F0EB] focus:border-[#3182BD] outline-none"
      >
        <option value="">Select your current role...</option>
        {Object.keys(complements).map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      {matches && (
        <div className="space-y-3">
          {matches.map((m) => (
            <div
              key={m.role}
              className="bg-[#0F1923] border border-white/5 rounded-md p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-[#2D9CDB]">{m.role}</span>
                <span className="text-xs text-[#27AE60]">{m.salary}</span>
              </div>
              <p className="text-xs text-[#F5F0EB]/60">{m.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
