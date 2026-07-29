"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

/** If someone opens an old #hash link, scroll there and clean the URL. */
export function CleanHashOnLoad() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const timer = window.setTimeout(() => {
      scrollToSection(hash);
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
