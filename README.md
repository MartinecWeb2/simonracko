# Portfolio Šimon Račko

Osobní portfolio — Next.js 15, React 19, TypeScript, Tailwind CSS.

## Lokální spuštění

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Nasazení na Vercel

1. Import GitHub repo
2. Environment Variables:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://simonracko.cz` |
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | `kontakt@simonracko.cz` |
| `CONTACT_FROM_EMAIL` | `Portfolio <onboarding@resend.dev>` |

3. Doména ve Vercel → Settings → Domains

## Kontaktní formulář (Resend)

Bez ověřené domény nastav `CONTACT_TO_EMAIL` na e-mail Resend účtu.
Po ověření `simonracko.cz` můžeš posílat z `kontakt@simonracko.cz`.
