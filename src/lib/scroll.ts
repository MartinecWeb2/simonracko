export function getSectionId(target: string): string {
  return target.startsWith("#") ? target.slice(1) : target;
}

/** Smooth-scroll to a section without adding #hash to the URL. */
export function scrollToSection(target: string) {
  if (typeof document === "undefined") return;

  const id = getSectionId(target);
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}
