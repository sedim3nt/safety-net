"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AdvisorChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Chat failed");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      let assistantContent = "";
      setMessages([...newMessages, { role: "assistant", content: "" }]);

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantContent,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Try again — the fight doesn't stop for a glitch." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-[#5DA3D9] transition-all hover:scale-105"
        aria-label="Talk to the Advisor"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        )}
        {!open && "Talk to the Advisor"}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] bg-[#0F1923] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#1A2B3C] border-b border-white/10 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3182BD] flex items-center justify-center text-sm">
              ✊
            </div>
            <div>
              <div className="text-sm font-[family-name:var(--font-syne)] font-bold text-[#F5F0EB]">
                Safety Net Advisor
              </div>
              <div className="text-xs text-[#F5F0EB]/50">
                Civic action guidance for displaced workers
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-8 space-y-3">
                <div className="text-3xl">✊</div>
                <p className="text-sm text-[#F5F0EB]/70">
                  I&apos;m your civic action advisor. I know unemployment benefits, worker rights, co-op law, union organizing, and every policy lever available to fight back against displacement.
                </p>
                <p className="text-xs text-[#F5F0EB]/40">
                  Ask me anything. Every answer comes with something you can do today.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {[
                    "I just got laid off",
                    "How do I start a co-op?",
                    "What are my union rights?",
                    "Help me negotiate severance",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInput(q);
                        setTimeout(() => {
                          const form = document.getElementById("advisor-form") as HTMLFormElement;
                          form?.requestSubmit();
                        }, 50);
                      }}
                      className="text-xs bg-[#1A2B3C] border border-white/10 text-[#F5F0EB]/70 px-3 py-1.5 rounded-full hover:border-[#3182BD]/50 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#3182BD] text-[#0F1923]"
                      : "bg-[#1A2B3C] text-[#F5F0EB]/90 border border-white/5"
                  }`}
                >
                  {msg.content || (
                    <span className="flex items-center gap-1 text-[#F5F0EB]/40">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>●</span>
                      <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>●</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            id="advisor-form"
            onSubmit={sendMessage}
            className="border-t border-white/10 p-3 flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your rights, benefits, next steps..."
              disabled={loading}
              className="flex-1 bg-[#1A2B3C] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#F5F0EB] placeholder:text-[#F5F0EB]/30 focus:border-[#3182BD] outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-[#3182BD] text-[#0F1923] rounded-lg px-3 py-2 hover:bg-[#5DA3D9] transition-colors disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
