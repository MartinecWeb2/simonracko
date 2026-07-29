import { getSiteUrl } from "@/lib/site-url";

export const siteConfig = {
  name: "Šimon Račko",
  alias: "Šimon",
  title: "Šimon Račko – Tvorba moderních webů",
  description:
    "Tvořím rychlé a moderní webové stránky s důrazem na design, přehlednost a reálný výsledek pro klienta. Stavím s podporou AI workflow.",
  url: getSiteUrl(),
  email: "kontakt@simonracko.cz",
  phone: "+420 601 357 845",
  location: "Olomouc",
  ogImage: "/og.png",
  social: {
    instagram: "https://www.instagram.com/sajmiii._/",
  },
} as const;

export const navLinks = [
  { href: "#o-mne", label: "O mně" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Proces" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const focusPoints = [
  "Přehledný design",
  "Rychlé weby",
  "Mobil first",
  "AI workflow",
  "Osobní přístup",
  "Jasná komunikace",
] as const;

export const aboutHighlights = [
  {
    title: "Nejdřív smysl",
    text: "Než začnu skládat vizuál, vyjasníme, co má web reálně udělat.",
  },
  {
    title: "Čistý výsledek",
    text: "Žádný chaos. Přehledná struktura, silný první dojem a srozumitelná cesta ke kontaktu.",
  },
  {
    title: "Rychlé iterace",
    text: "Pracuji s AI-assisted workflow — rychleji dodávám, ale každý detail kontroluji.",
  },
] as const;

export const services = [
  {
    id: "web",
    title: "Webové stránky",
    description:
      "Moderní prezentace firem a služeb — přehledné, rychlé a připravené na mobil.",
    icon: "Globe",
  },
  {
    id: "corporate",
    title: "Firemní weby",
    description:
      "Digitální vizitka, která buduje důvěru a jasně vede návštěvníka ke kontaktu.",
    icon: "Building2",
  },
  {
    id: "landing",
    title: "Landing pages",
    description:
      "Jednoúčelové stránky kolem konkrétní nabídky — srozumitelné CTA a čistý design.",
    icon: "AppWindow",
  },
  {
    id: "redesign",
    title: "Redesign",
    description:
      "Nový vzhled a struktura stávajícího webu, aby působil současně a lépe konvertoval.",
    icon: "LayoutDashboard",
  },
  {
    id: "seo",
    title: "SEO základy",
    description:
      "Technické základy, rychlost a srozumitelná struktura, aby vás lidé snáz našli.",
    icon: "Search",
  },
  {
    id: "ai",
    title: "AI-assisted vývoj",
    description:
      "Pracuji s moderním AI workflow — rychlejší dodání bez kompromisů na čistotě a detailu.",
    icon: "Sparkles",
  },
  {
    id: "content",
    title: "Struktura obsahu",
    description:
      "Pomůžu poskládat texty a sekce tak, aby web dával smysl i bez marketingového týmu.",
    icon: "Workflow",
  },
  {
    id: "support",
    title: "Úpravy a podpora",
    description:
      "Po spuštění web doladíme, aktualizujeme a rozvíjíme podle potřeby.",
    icon: "MessageCircle",
  },
] as const;

export const technologies = [
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Figma", category: "design" },
  { name: "Vercel", category: "infra" },
  { name: "Cloudflare", category: "infra" },
  { name: "Git", category: "devops" },
  { name: "Cursor", category: "ai" },
  { name: "ChatGPT", category: "ai" },
  { name: "OpenAI API", category: "ai" },
  { name: "SEO", category: "growth" },
  { name: "Responsive", category: "frontend" },
  { name: "UI/UX", category: "design" },
] as const;

export const timeline = [
  {
    year: "2025",
    title: "Vstup do webové tvorby",
    description:
      "Začal jsem stavět weby moderním způsobem — s důrazem na design, přehlednost a AI-assisted workflow.",
  },
  {
    year: "2025",
    title: "Autoškola Martinec",
    description:
      "Web s výběrem pobočky, přehlednou nabídkou a jednoduchou cestou ke kontaktu — připravený pro mobil i běžný provoz.",
  },
  {
    year: "2026",
    title: "Vlastní portfolio",
    description:
      "Ladím prezentaci, workflow i detaily. Stejný princip: čistý výsledek, rychlá komunikace a žádné přehánění.",
  },
  {
    year: "Dnes",
    title: "Otevřený novým spolupracím",
    description:
      "Hledám klienty, kteří chtějí moderní web bez zbytečné složitosti — od nápadu po spuštění.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Konzultace",
    description: "Probereme, co potřebujete, koho oslovujete a jak má web pomáhat byznysu.",
  },
  {
    step: "02",
    title: "Návrh",
    description: "Domluvíme strukturu, vizuální směr a obsah — ať je od začátku jasné, kam směřujeme.",
  },
  {
    step: "03",
    title: "Vývoj",
    description:
      "Stavím web s AI-assisted workflow: rychlejší iterace, pečlivé detaily a moderní stack.",
  },
  {
    step: "04",
    title: "Kontrola",
    description: "Projdeme mobil, texty, rychlost a společně doladíme detaily před spuštěním.",
  },
  {
    step: "05",
    title: "Spuštění",
    description: "Web nasadíme online, zkontrolujeme základní SEO a připravíme vás na provoz.",
  },
  {
    step: "06",
    title: "Podpora",
    description: "Po spuštění můžu pomoct s úpravami, novými sekcemi nebo drobným rozvojem.",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Jiří Martinec",
    role: "Autoškola Martinec",
    quote:
      "Potřebovali jsme web, kde si člověk hned vybere pobočku a snadno nás kontaktuje. Šimon to dal dohromady přehledně a bez zbytečných komplikací.",
  },
] as const;

export const faqs = [
  {
    question: "Jak dlouho trvá vytvoření webu?",
    answer:
      "Jednodušší firemní web obvykle zvládneme v řádu dnů až pár týdnů — podle rozsahu obsahu a toho, jak rychle doladíme detaily.",
  },
  {
    question: "Pracujete s AI?",
    answer:
      "Ano. AI používám jako součást workflow — na návrh, kód i iterace. Výsledek vždy kontroluji, upravuji a přizpůsobuji konkrétnímu projektu. Klient dostane hotový web, ne experiment.",
  },
  {
    question: "Jak probíhá spolupráce?",
    answer:
      "Nejdřív si krátce řekneme, co od webu potřebujete. Pak sestavíme strukturu a postupně vám ukazuju průběžné verze ke komentářům. Úpravy řešíme hned, bez zbytečných koleček a formalit.",
  },
  {
    question: "Co potřebuji připravit před startem?",
    answer:
      "Ideálně základní info o firmě, kontakty, fotky a texty. Pokud obsah nemáte hotový, pomohu ho poskládat do srozumitelné struktury.",
  },
  {
    question: "Umíte i úpravy po spuštění?",
    answer:
      "Ano. Po launchi můžeme doladit texty, přidat sekce nebo upravit detaily podle toho, jak web používáte.",
  },
  {
    question: "Jaká je cena?",
    answer:
      "Záleží na rozsahu. Po krátkém popisu projektu dostanete jasnou nabídku — bez skrytých položek a bez nadsazených slibů.",
  },
] as const;

export const projects = [
  {
    slug: "autoskola-martinec",
    title: "Autoškola Martinec",
    subtitle: "Moderní web pro autoškolu s výběrem pobočky",
    description:
      "Přehledný web pro Autoškolu Martinec — výběr pobočky, jasná prezentace služeb a jednoduchá cesta ke kontaktu.",
    longDescription:
      "Pro Autoškolu Martinec jsem připravil web, který hned na úvod směřuje zájemce k výběru pobočky (Bystřice pod Hostýnem a Přerov). Cílem bylo jednoduché mobilní UX, srozumitelná prezentace nabídky pro skupinu B a rychlá cesta k telefonnímu kontaktu. Web je živý v produkci a slouží jako hlavní digitální vstupní bod autoškoly.",
    tags: ["Firemní web", "Autoškola", "UX"],
    technologies: ["Moderní web", "Responsive design", "UI/UX", "SEO základy"],
    year: "2025",
    client: "Jiří Martinec",
    liveUrl: "https://autoskola-martinec.cz/pobocky",
    githubUrl: "",
    color: "#8b5cf6",
    results: [
      "Live v produkci",
      "2 pobočky na webu",
      "Jasná cesta ke kontaktu",
    ],
  },
] as const;

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
