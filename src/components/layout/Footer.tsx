"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { Reveal } from "@/components/effects/Reveal";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
      <div className="container-page">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                {siteConfig.name}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Moderní weby s důrazem na design, přehlednost a výsledek —
                stavěné s AI-assisted workflow.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted-dark">
                Navigace
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition hover:text-white"
                      data-cursor="hover"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.24em] text-muted-dark">
                Kontakt
              </p>
              <ul className="space-y-3 text-sm text-muted">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition hover:text-white"
                    data-cursor="hover"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="transition hover:text-white"
                    data-cursor="hover"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>{siteConfig.location}</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <motion.a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-cursor="hover"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition hover:border-white/25 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  <FaInstagram size={16} />
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-dark md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Všechna práva
            vyhrazena.
          </p>
          <Link href="/" className="transition hover:text-white" data-cursor="hover">
            Navrženo a vyvinuto s důrazem na detail.
          </Link>
        </div>
      </div>
    </footer>
  );
}
