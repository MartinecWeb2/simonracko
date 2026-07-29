"use client";

import { CustomCursor } from "@/components/effects/CustomCursor";
import { CleanHashOnLoad } from "@/components/effects/CleanHashOnLoad";
import { PageLoader } from "@/components/effects/PageLoader";
import { RegisterSW } from "@/components/effects/RegisterSW";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SmoothScroll } from "@/components/effects/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <RegisterSW />
      <CleanHashOnLoad />
      <div className="noise-overlay" aria-hidden />
      {children}
    </SmoothScroll>
  );
}
