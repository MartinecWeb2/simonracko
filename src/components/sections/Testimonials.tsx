"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section id="reference" className="section-pad relative overflow-hidden">
      <div className="container-page">
        <SectionHeading
          eyebrow="Reference"
          title="Slova klienta."
          description="Jedna reálná reference — a přesně tak chci spolupracovat i dál."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                className="glass-strong relative overflow-hidden rounded-[2rem] p-8 md:p-12"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow text-yellow"
                    />
                  ))}
                </div>
                <p className="font-display text-2xl leading-snug text-white md:text-3xl">
                  „{active.quote}“
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 font-display text-sm text-white">
                    {active.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-white">{active.name}</p>
                    <p className="text-sm text-muted">{active.role}</p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ukázat referenci ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
