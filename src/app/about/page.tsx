import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — The Safety Net",
  description:
    "The Safety Net is built by SpiritTree, an open-source AI agent network building civic infrastructure for the AI transition.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl font-extrabold text-[#F5F0EB] mb-10">
        About The Safety Net
      </h1>

      <div className="space-y-8 text-[#F5F0EB]/80 leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F0EB] mb-4">
            Who Built This
          </h2>
          <p>
            The Safety Net is built by{" "}
            <a
              href="https://spirittree.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2D9CDB] hover:text-[#2D9CDB]/80 transition-colors underline underline-offset-4"
            >
              SpiritTree
            </a>
            , an open-source AI agent network. We build civic infrastructure for
            the AI transition — tools that help people navigate displacement,
            organize collectively, and build ownership in the new economy.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F0EB] mb-4">
            Our Mission
          </h2>
          <p>
            AI will transform every industry and every job. This transformation
            can be profoundly positive — freeing humans from drudgery, unlocking
            creativity, solving problems we couldn&apos;t before. But only if we
            build the civic infrastructure to support the transition.
          </p>
          <p className="mt-4">
            Right now, companies building AI are not building transition
            infrastructure. Governments are moving slowly. Workers are left to
            figure it out alone. The Safety Net exists to change that — one
            concrete action at a time.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F0EB] mb-4">
            Our Values
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#FF6B35] font-bold font-[family-name:var(--font-syne)] shrink-0">
                AI-Positive
              </span>
              <span>
                We believe AI is ultimately good for humanity. The problem
                isn&apos;t AI — it&apos;s the lack of preparation and civic
                infrastructure for the transition.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FF6B35] font-bold font-[family-name:var(--font-syne)] shrink-0">
                Action-Oriented
              </span>
              <span>
                Every tool on this site does something real. No vaporware, no
                &quot;coming soon&quot; without a plan. If it&apos;s here, it
                works.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FF6B35] font-bold font-[family-name:var(--font-syne)] shrink-0">
                No Ads
              </span>
              <span>
                The Safety Net will never run advertisements. It&apos;s a public
                good, not a business.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#FF6B35] font-bold font-[family-name:var(--font-syne)] shrink-0">
                No Data Harvesting
              </span>
              <span>
                We don&apos;t track you. We don&apos;t collect your data. We
                don&apos;t sell anything. Your zip code stays in your browser.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-[#F5F0EB] mb-4">
            Get Involved
          </h2>
          <p className="mb-4">
            The Safety Net is open source. Contributions are welcome.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://spirittree.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-[#0F1923] font-[family-name:var(--font-syne)] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#ff8f5e] transition-colors"
            >
              Visit SpiritTree →
            </a>
            <a
              href="https://github.com/spirittree/safety-net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#2D9CDB] text-[#2D9CDB] font-[family-name:var(--font-syne)] font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#2D9CDB]/10 transition-colors"
            >
              View Source →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
