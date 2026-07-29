/**
 * Canonical site URL for SEO, sitemap and Open Graph.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://simonracko.cz).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    return `https://${production.replace(/\/$/, "")}`;
  }

  const preview = process.env.VERCEL_URL?.trim();
  if (preview) {
    return `https://${preview.replace(/\/$/, "")}`;
  }

  return "https://simonracko.cz";
}
