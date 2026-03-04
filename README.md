# fondspara.se

Oberoende fondjämförelse- och guidesite för svenska sparare. SEO-driven affiliate-site med MaxiAI-automatisering.

## Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS
- gray-matter (MDX content)
- Lucide React (ikoner)
- Vercel (deployment)

## Komma igång

```bash
npm install
npm run dev
```

## Deployment

1. Pusha till GitHub: `git push origin main`
2. Vercel auto-deployar vid push
3. DNS: A-record `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`

## Affiliate-setup

Redigera `src/lib/brokers.ts` och byt ut `ctaHref` mot riktiga affiliate-URLs från:
- **Adtraction**: Avanza (SE), Nordnet (SE)
- **Awin**: Alternativa partners

## MaxiAI-automation

Se `MAXIAI_PROMPT.md` för fullständig systemprompt.

Cron-inställning i Open Claw: `0 8 * * 1-5` (vardagar 08:00)

Innehållsfiler placeras i `src/content/{kategori}/{slug}.mdx`

## Silo-arkitektur

```
fondspara.se/
├── /fonder              ← Pillar: Alla fondtyper
│   ├── /basta-indexfonder
│   ├── /basta-globalfonder
│   ├── /sverigefonder
│   └── /rantefonder
├── /isk                 ← Pillar: Fondkonton
│   ├── /basta-isk
│   └── /isk-vs-kapitalforsakring
├── /jamforelser         ← Pillar: Jämförelser
│   └── /avanza-vs-nordnet
└── /guider              ← Pillar: Utbildning
    ├── /borja-fondspara
    ├── /manadsspara-fonder
    └── /fondspara-barn
```

## Prioriterade sidor (SEO-värde)

| Sida | Sökvolym (est.) | Konvertering |
|------|----------------|--------------|
| bästa indexfonder | 2400/mån | Hög |
| avanza vs nordnet | 1900/mån | Mycket hög |
| börja fondspara | 1600/mån | Medel |
| bästa globalfonder | 1300/mån | Hög |
| bästa ISK | 1100/mån | Hög |

## Google Search Console

Lägg till via `https://search.google.com/search-console`
Verifiera domän via DNS TXT-record i Loopia.
