"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "container-page flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6",
          scrolled ? "glass-strong shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : "bg-transparent"
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-white"
          data-cursor="hover"
        >
          {siteConfig.alias}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hlavní navigace">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-white"
              data-cursor="hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton as="a" href="#kontakt">
            <span className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90">
              Domluvit konzultaci
            </span>
          </MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-center gap-6 px-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold text-white"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-12 w-fit items-center rounded-full bg-white px-6 text-sm font-medium text-black"
              >
                Domluvit konzultaci
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
