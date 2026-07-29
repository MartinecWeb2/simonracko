"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect } from "react";
import { ParticleField } from "@/components/effects/ParticleField";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { siteConfig } from "@/data/site";
import { scrollToSection } from "@/lib/scroll";
import { useReducedMotion } from "@/hooks/useMedia";

export function Hero() {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const glowX = useTransform(springX, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["30%", "55%"]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, reduced]);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[#050505]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.26) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(245,200,76,0.08),transparent_65%)] blur-3xl animate-pulse-glow"
      />
      <ParticleField />

      <div className="container-page relative z-10 py-16 md:py-24">
        <motion.p
          className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-violet/90"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {siteConfig.name} · Tvorba webů
        </motion.p>

        <motion.h1
          className="max-w-5xl font-display text-[clamp(2.4rem,7vw,5.4rem)] font-semibold leading-[1.05] tracking-tight text-white"
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Tvořím weby, které zaujmou během{" "}
          <span className="gradient-text">první sekundy.</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Stavím rychlé a moderní webové stránky s důrazem na design,
          přehlednost a výsledek pro klienta — s podporou AI workflow.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <MagneticButton as="div" onClick={() => scrollToSection("#portfolio")}>
            <span className="inline-flex h-14 cursor-pointer items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black shadow-[0_0_40px_rgba(255,255,255,0.14)] transition hover:bg-white/90">
              Prohlédnout portfolio
              <ArrowDownRight size={16} />
            </span>
          </MagneticButton>
          <MagneticButton as="div" onClick={() => scrollToSection("#kontakt")}>
            <span className="glass inline-flex h-14 cursor-pointer items-center rounded-full px-8 text-sm font-medium text-white transition hover:bg-white/10">
              Kontakt
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-muted-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span className="h-px w-10 bg-white/20" />
          Scroll
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"
      />
    </section>
  );
}
