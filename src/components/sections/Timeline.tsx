"use client";

import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { timeline } from "@/data/site";

export function Timeline() {
  return (
    <section id="cesta" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Timeline"
          title="Moje cesta."
          description="Krátká, ale konkrétní. Jeden live projekt, jasný směr a prostor pro další spolupráce."
        />

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-violet/50 via-white/15 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const left = index % 2 === 0;
              return (
                <Reveal key={item.year} delay={0.05 * index}>
                  <div
                    className={`relative grid gap-6 md:grid-cols-2 ${
                      left ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`pl-12 md:pl-0 ${
                        left ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-violet/90">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border border-violet/60 bg-[#050505] shadow-[0_0_20px_rgba(167,139,250,0.6)] md:left-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
