"use client";

import {
  AppWindow,
  Building2,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { services } from "@/data/site";

const icons = {
  Globe,
  Building2,
  AppWindow,
  LayoutDashboard,
  Search,
  Workflow,
  Sparkles,
  MessageCircle,
} as const;

export function Services() {
  return (
    <section id="sluzby" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Služby"
          title="Od nápadu po web, který dává smysl."
          description="Pomůžu vám s moderní prezentací online — srozumitelně, rychle a bez zbytečné složitosti."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <Reveal key={service.id} delay={0.04 * index}>
                <article
                  className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]"
                  data-cursor="hover"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet transition duration-500 group-hover:scale-110 group-hover:border-violet/30 group-hover:bg-violet/10">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet/0 blur-2xl transition duration-500 group-hover:bg-violet/20" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
