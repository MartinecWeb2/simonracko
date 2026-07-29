"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

interface SectionLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

export function SectionLink({
  href,
  children,
  className,
  onClick,
  ...props
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onClick?.(event);
    scrollToSection(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  );
}
