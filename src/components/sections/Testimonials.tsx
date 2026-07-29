"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const active = testimonials[0];

  return (
    <section id="reference" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Reference"
          title="Jak spolupráce vypadá v praxi."
          description="Přímá komunikace, jasný cíl a web, který dává smysl hned napoprvé."
          align="center"
        />

        <Reveal delay={0.1}>
          <motion.article
            className="glass-strong relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[2rem] p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-xs uppercase tracking-[0.28em] text-yellow/80">
              Autoškola Martinec
            </p>
            <p className="mt-6 font-display text-2xl leading-snug text-white md:text-[2rem]">
              „{active.quote}“
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-sm text-white">
                JM
              </div>
              <div>
                <p className="font-medium text-white">{active.name}</p>
                <p className="text-sm text-muted">{active.role}</p>
              </div>
            </div>
            <a
              href="https://autoskola-martinec.cz/pobocky"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm text-violet transition hover:text-white"
              data-cursor="hover"
            >
              Podívat se na web →
            </a>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
