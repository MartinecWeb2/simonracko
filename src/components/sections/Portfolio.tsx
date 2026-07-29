"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { TiltCard } from "@/components/effects/MagneticButton";
import { projects } from "@/data/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          title="Vybraná práce."
          description="Projekt, na kterém záleželo na přehlednosti, mobilním UX a jasné cestě ke kontaktu."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-1 md:max-w-2xl">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={0.05 * (index % 4)}>
              <TiltCard className="group h-full">
                <Link
                  href={`/projekty/${project.slug}`}
                  className="glass gradient-border relative flex h-full flex-col overflow-hidden rounded-[1.75rem] transition duration-500 hover:border-violet-400/25 hover:shadow-[0_0_28px_rgba(139,92,246,0.18)]"
                  data-cursor="hover"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
                    {"image" in project && project.image ? (
                      <Image
                        src={project.image}
                        alt={`Náhled webu ${project.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 672px"
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        priority={index === 0}
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(145deg, ${project.color}40, #0a0a0a 55%, #111 100%)`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/85 backdrop-blur">
                        {project.year}
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-4 text-sm">
                      <span className="text-white/90">Detail projektu</span>
                      <span className="inline-flex items-center gap-1 text-muted">
                        <ExternalLink size={14} />
                        Live web
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
