export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 text-center">
      <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] max-w-4xl mb-8 text-[#F5F0EB]">
        AI is inevitable.
        <br />
        <span className="text-[#3182BD]">A painful transition isn&apos;t.</span>
      </h1>

      <p className="max-w-2xl text-lg md:text-xl text-[#F5F0EB]/80 mb-12 leading-relaxed">
        Between now and 2028, 30–40% of knowledge work tasks will be
        automatable. Not 30–40% of jobs — <em>tasks</em>. But when 60% of your
        job is automatable, the restructuring hits fast. The companies building
        AI aren&apos;t building the transition infrastructure.{" "}
        <strong className="text-[#F5F0EB]">So we built it.</strong> 36 tools.
        Zero paywall. Your move.
      </p>

      <a
        href="#tier-1"
        className="inline-flex items-center gap-2 bg-[#3182BD] text-[#0F1923] font-[family-name:var(--font-syne)] font-extrabold text-lg px-8 py-4 rounded-lg hover:bg-[#5DA3D9] transition-colors"
      >
        Start Taking Action ↓
      </a>
    </section>
  );
}
