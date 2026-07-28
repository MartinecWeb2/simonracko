"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { technologies } from "@/data/site";
import { useReducedMotion } from "@/hooks/useMedia";

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
  reduced,
}: {
  items: readonly { name: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
  reduced: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={reduced ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((tech, index) => {
        const angle = (360 / items.length) * index;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);

        return (
          <div
            key={tech.name}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Counter-rotate so labels stay upright while the ring spins */}
            <motion.div
              animate={reduced ? undefined : { rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="glass whitespace-nowrap rounded-full px-3.5 py-2 text-xs text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:border-violet/40 hover:bg-violet/10 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] md:px-4 md:text-sm"
                whileHover={reduced ? undefined : { scale: 1.08 }}
                data-cursor="hover"
              >
                {tech.name}
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Technologies() {
  const reduced = useReducedMotion();
  const outer = technologies.slice(0, 8);
  const inner = technologies.slice(8);

  return (
    <section id="technologie" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[58%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.16),transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[58%] top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,200,76,0.12),transparent_70%)] blur-2xl"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Technologie"
          title="Nástroje, se kterými stavím."
          description="Moderní webový stack + AI workflow. Nejde o seznam log, ale o rychlé dodání a čistý výsledek."
          align="center"
        />

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-14 hidden aspect-square w-full max-w-[34rem] md:block">
            {/* Decorative rings */}
            <div className="absolute inset-[4%] rounded-full border border-white/[0.06]" />
            <div className="absolute inset-[18%] rounded-full border border-white/10" />
            <div className="absolute inset-[34%] rounded-full border border-violet/20" />
            <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,transparent_55%,rgba(139,92,246,0.04)_100%)]" />

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
              <div className="glass-strong flex h-full w-full items-center justify-center rounded-full shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <div className="text-center">
                  <p className="font-display text-sm font-semibold text-white">
                    Stack
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-yellow/80">
                    AI + Web
                  </p>
                </div>
              </div>
            </div>

            <OrbitRing
              items={outer}
              radius={46}
              duration={80}
              reduced={reduced}
            />
            <OrbitRing
              items={inner}
              radius={30}
              duration={55}
              reverse
              reduced={reduced}
            />
          </div>
        </Reveal>

        {/* Mobile fallback */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 md:hidden">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="glass rounded-full px-3.5 py-2 text-xs text-white/85"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
