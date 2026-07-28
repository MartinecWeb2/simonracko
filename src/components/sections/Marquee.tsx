"use client";

const items = [
  "Next.js",
  "UI/UX",
  "SEO",
  "Performance",
  "AI Solutions",
  "Brand Webs",
  "Web Apps",
  "Automation",
  "Design Systems",
  "Conversion",
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-8" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
      <div className="marquee-track gap-10">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-2xl font-semibold tracking-tight text-white/25 md:text-4xl"
          >
            {item}
            <span className="mx-10 text-yellow/50">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
