# Sajmiii Portfolio

Osobní portfolio Šimona Račka — Next.js 15, React 19, TypeScript, Tailwind CSS.

## Lokální spuštění

```bash
npm install
cp .env.example .env.local
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Nasazení na Vercel

### 1) GitHub
1. Vytvoř repo na GitHubu
2. Pushni tento projekt na `main`

```bash
git add .
git commit -m "Initial portfolio ready for Vercel"
git branch -M main
git remote add origin https://github.com/TVE-UZIVATELSKE-JMENO/REPO.git
git push -u origin main
```

### 2) Vercel projekt
1. Jdi na [vercel.com/new](https://vercel.com/new)
2. Importuj GitHub repo
3. Framework: **Next.js** (detekuje se samo)
4. Do **Environment Variables** přidej:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://sajmiii.cz` |

5. Deploy

Po deployi dostaneš URL typu `https://projekt.vercel.app`.

### 3) Vlastní doména (např. sajmiii.cz)

1. Vercel → Project → **Settings → Domains**
2. Přidej `sajmiii.cz` a `www.sajmiii.cz`
3. U registrátora domény nastav DNS podle Vercelu:

**Apex doména (`sajmiii.cz`):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**WWW (`www.sajmiii.cz`):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

4. Počkej na propagaci DNS (minuty až hodiny)
5. Vercel vystaví HTTPS automaticky
6. Projekt má redirect `www` → apex (bez www)

Pokud máš jinou doménu, změň hodnotu `NEXT_PUBLIC_SITE_URL` a DNS stejně podle Vercel Domains.

## Důležité soubory

- `src/data/site.ts` — texty, kontakt, projekty
- `src/lib/site-url.ts` — kanonická URL
- `.env.example` — proměnné prostředí
- `vercel.json` — region Frankfurt (`fra1`)

## Checklist před ostrým spuštěním

- [ ] Upravit e-mail, telefon a sociální sítě v `src/data/site.ts`
- [ ] Nastavit `NEXT_PUBLIC_SITE_URL` ve Vercelu
- [ ] Připojit doménu a ověřit HTTPS
- [ ] Doplnit vlastní fotku / OG vizuál
- [ ] (Volitelně) napojit kontaktní formulář na e-mail provider
