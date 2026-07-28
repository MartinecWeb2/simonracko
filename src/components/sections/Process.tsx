"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/effects/Reveal";
import { processSteps } from "@/data/site";
import { useReducedMotion } from "@/hooks/useMedia";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll("[data-process-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="proces" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proces"
          title="Spolupráce bez chaosu."
          description="Jasné kroky, transparentní komunikace a výsledek, který je připravený na reálný provoz."
        />

        <div
          ref={containerRef}
          className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {processSteps.map((step) => (
            <article
              key={step.step}
              data-process-card
              className="glass group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-white/20"
              data-cursor="hover"
            >
              <p className="font-mono text-sm text-violet/90">{step.step}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-violet/70 to-transparent transition duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
