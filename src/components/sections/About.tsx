"use client";

import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { focusPoints } from "@/data/site";

export function About() {
  return (
    <section id="o-mne" className="section-pad relative">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-elevated">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.22),transparent_50%)]" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-violet-500/10" />
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="glass w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                    Portrait
                  </div>
                  <div>
                    <p className="font-display text-4xl font-semibold text-white">
                      ŠR
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Placeholder fotografie — nahraďte vlastní portrétem.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-6 top-1/3 h-24 w-24 rounded-full bg-yellow/20 blur-3xl" />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="O mně"
              title="Stavím weby, které jsou přehledné, rychlé a připravené vydělávat."
              description="Jsem Šimon Račko. Tvořím moderní webové stránky s důrazem na design, srozumitelnost a výsledek pro klienta. Pracuji s AI-assisted workflow — díky tomu dodávám rychleji, ale vždy s pečlivou kontrolou detailů."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {focusPoints.map((point, index) => (
                <Reveal key={point} delay={0.06 * index}>
                  <span className="glass inline-flex items-center rounded-full px-4 py-2 text-sm text-white/85 transition duration-300 hover:border-violet-400/30 hover:text-white">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-yellow" />
                    {point}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
