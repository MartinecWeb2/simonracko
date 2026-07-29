"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { aboutHighlights, focusPoints } from "@/data/site";
import { useReducedMotion } from "@/hooks/useMedia";

export function About() {
  const reduced = useReducedMotion();

  return (
    <section id="o-mne" className="section-pad relative">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface-elevated p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.22),transparent_45%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(245,200,76,0.1),transparent_40%)]" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.24em] text-violet/90">
                  Jak pracuji
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                  Míň šumu. Víc výsledku.
                </h3>

                <div className="mt-8 space-y-4">
                  {aboutHighlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="glass rounded-2xl p-4 md:p-5"
                      initial={reduced ? false : { opacity: 0, x: -12 }}
                      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * index, duration: 0.45 }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 font-mono text-xs text-yellow">
                          0{index + 1}
                        </span>
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 text-xs text-muted-dark">
                  <span className="h-px flex-1 bg-white/10" />
                  Olomouc · remote friendly
                  <span className="h-px flex-1 bg-white/10" />
                </div>
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
                  <span className="glass inline-flex items-center rounded-full px-4 py-2 text-sm text-white/85 transition duration-300 hover:border-violet/30 hover:text-white">
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
