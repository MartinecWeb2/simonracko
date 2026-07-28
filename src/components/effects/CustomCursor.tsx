"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsDesktop, useReducedMotion } from "@/hooks/useMedia";

export function CustomCursor() {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.3 });

  useEffect(() => {
    if (!isDesktop || reduced) return;

    document.documentElement.classList.add("cursor-none-desktop");

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, [data-cursor='hover']"
      );
      setHovering(Boolean(interactive));
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseleave", leave);
    };
  }, [isDesktop, reduced, x, y]);

  if (!isDesktop || reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full border border-white bg-white"
        animate={{
          width: hovering ? 48 : 12,
          height: hovering ? 48 : 12,
          backgroundColor: hovering ? "rgba(255,255,255,0.15)" : "#fff",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  );
}
