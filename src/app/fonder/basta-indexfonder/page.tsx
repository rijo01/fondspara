import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import AffiliateCard from "@/components/affiliate/AffiliateCard";
import { brokers } from "@/lib/brokers";

export const metadata: Metadata = {
  title: "Bästa indexfonder 2025 – Jämförelse & Guide",
  description:
    "Vi jämför bästa indexfonderna 2025. Se vilka indexfonder som har lägst avgift, bäst avkastning och passar ditt sparande bäst.",
};

const topFunds = [
  {
    rank: 1,
    name: "Avanza Global",
    isin: "SE0006259631",
    avgift: "0,05%",
    typ: "Globalfond",
    avkastning5ar: "+97%",
    forvaltare: "Avanza",
    betyg: 5,
    pros: ["Lägst avgift på marknaden", "Bred global exponering", "Populärast i Sverige"],
    cons: ["Endast tillgänglig hos Avanza"],
  },
  {
    rank: 2,
    name: "Nordnet Indexfond Global",
    isin: "SE0009993829",
    avgift: "0,05%",
    typ: "Globalfond",
    avkastning5ar: "+96%",
    forvaltare: "Nordnet",
    betyg: 5,
    pros: ["Extremt låg avgift", "Bred MSCI World-exponering", "Gratis hos Nordnet"],
    cons: ["Endast tillgänglig hos Nordnet"],
  },
  {
    rank: 3,
    name: "SPP Aktiefond Global",
    isin: "SE0000434637",
    avgift: "0,20%",
    typ: "Globalfond",
    avkastning5ar: "+89%",
    forvaltare: "SPP",
    betyg: 4,
    pros: ["Tillgänglig hos alla mäklare", "Lång historik", "Bra hållbarhetsprofil"],
    cons: ["Högre avgift än husejare", "Inte lika bred som MSCI All Country"],
  },
  {
    rank: 4,
    name: "Länsförsäkringar Global Indexnära",
    isin: "SE0000549392",
    avgift: "0,22%",
    typ: "Globalfond",
    avkastning5ar: "+88%",
    forvaltare: "Länsförsäkringar",
    betyg: 4,
    pros: ["Bred tillgång via de flesta banker", "Lång track record", "Väldiversifierad"],
    cons: ["Lite högre avgift", "Manuell köporder"],
  },
];

const faqs = [
  {
    q: "Vad är en indexfond?",
    a: "En indexfond är en fond som följer ett aktieindex, till exempel MSCI World eller OMXS30, istället för att ha en aktiv förvaltare som väljer aktier. Det gör att avgifterna kan hållas extremt låga – ofta under 0,1% per år.",
  },
  {
    q: "Varför är indexfonder bättre än aktivt förvaltade fonder?",
    a: "Forskning visar att de flesta aktivt förvaltade fonder underpresterar sitt jämförelseindex över tid, framför allt på grund av avgifter. En indexfond med 0,05% avgift behöver bara följa index – en aktiv fond med 1,5% avgift måste slå index med 1,45% varje år bara för att matcha.",
  },
  {
    q: "Hur börjar jag spara i indexfonder?",
    a: "Öppna ett ISK-konto (investeringssparkonto) hos Avanza eller Nordnet, sätt in pengar och köp din valda indexfond. Hela processen tar 10–15 minuter.",
  },
  {
    q: "Vilken indexfond ska jag välja?",
    a: "För de flesta är en bred globalfond med låg avgift, som Avanza Global eller Nordnet Indexfond Global, det bästa valet. Den ger exponering mot tusentals bolag i hela världen till minimala kostnader.",
  },
];

export default function BastaIndexfonderPage() {
  const avanza = brokers.find((b) => b.id === "avanza")!;
  const nordnet = brokers.find((b) => b.id === "nordnet")!;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <Link href="/fonder" className="hover:text-brand-600">Fonder</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Bästa indexfonder</span>
      </nav>

      {/* Article header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
          Bästa indexfonderna 2025 – Vår jämförelse
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Indexfonder med låg avgift är grunden i ett smart långsiktigt sparande. Vi har granskat de bästa
          indexfonderna på den svenska marknaden och sammanställt en ranking baserad på avgift, avkastning och tillgänglighet.
        </p>
        <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
          <span>Uppdaterad: mars 2025</span>
          <span>·</span>
          <span>8 min läsning</span>
        </div>
      </div>

      {/* Quick summary box */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-brand-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Snabbsvar – Bästa indexfonderna
        </h2>
        <ul className="space-y-2">
          {[
            "Avanza Global (0,05%) – bäst för dig med konto hos Avanza",
            "Nordnet Indexfond Global (0,05%) – bäst för dig med konto hos Nordnet",
            "SPP Aktiefond Global (0,20%) – bäst om du vill byta fondbolag fritt",
            "Länsförsäkringar Global Indexnära (0,22%) – bra alternativ via din bank",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-800">
              <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Fund table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Topp 4 indexfonder 2025
        </h2>

        <div className="space-y-5">
          {topFunds.map((fund) => (
            <div key={fund.rank} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {fund.rank}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                      {fund.name}
                    </h3>
                    <p className="text-sm text-gray-500">{fund.forvaltare} · {fund.typ}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-brand-600">{fund.avgift}</div>
                  <div className="text-xs text-gray-400">årsavgift</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-gray-500 text-xs mb-1">5-årsavkastning</div>
                  <div className="font-bold text-green-600 text-lg">{fund.avkastning5ar}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-gray-500 text-xs mb-1">ISIN</div>
                  <div className="font-mono text-xs text-gray-700 mt-1">{fund.isin}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Fördelar</p>
                  <ul className="space-y-1">
                    {fund.pros.map((p) => (
                      <li key={p} className="flex items-start gap-1.5 text-sm text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Nackdelar</p>
                  <ul className="space-y-1">
                    {fund.cons.map((c) => (
                      <li key={c} className="flex items-start gap-1.5 text-sm text-gray-700">
                        <AlertTriangle className="w-3.5 h-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliate section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Var ska du köpa indexfonder?
        </h2>
        <p className="text-gray-600 mb-6">
          De två billigaste globalfonderna (Avanza Global och Nordnet Indexfond Global) är husets egna fonder
          och kan bara köpas hos respektive mäklare. Välj utifrån vilken plattform du föredrar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AffiliateCard {...avanza} />
          <AffiliateCard {...nordnet} />
        </div>
      </div>

      {/* Article content */}
      <div className="prose max-w-none mb-12">
        <h2>Vad är en indexfond?</h2>
        <p>
          En indexfond är en fond som är konstruerad för att följa ett specifikt aktieindex, exempelvis
          MSCI World (världens 1 500 största bolag), S&P 500 (USA:s 500 största) eller OMXS30 (de 30 mest
          omsatta på Stockholmsbörsen).
        </p>
        <p>
          Istället för en aktiv förvaltare som väljer aktier speglar fonden indexets sammansättning mekaniskt.
          Det innebär dramatiskt lägre förvaltningskostnader – medan en aktiv fond tar 1–2% per år i avgift
          kan en indexfond ta 0,05–0,25%.
        </p>

        <h2>Varför spelar avgiften så stor roll?</h2>
        <p>
          100 000 kr investerade under 30 år med 8% genomsnittlig årsavkastning:
        </p>
        <table>
          <thead>
            <tr>
              <th>Fond</th>
              <th>Avgift</th>
              <th>Slutvärde efter 30 år</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avanza Global</td>
              <td>0,05%</td>
              <td className="font-bold text-green-700">995 000 kr</td>
            </tr>
            <tr>
              <td>SPP Global</td>
              <td>0,20%</td>
              <td>930 000 kr</td>
            </tr>
            <tr>
              <td>Aktiv globalfond</td>
              <td>1,50%</td>
              <td className="text-red-600">657 000 kr</td>
            </tr>
          </tbody>
        </table>
        <p>
          Skillnaden på 338 000 kr är enbart avgifternas effekt – ränta på ränta gör att varje tiondels
          procent i avgift spelar stor roll på lång sikt.
        </p>

        <h2>Indexfond eller aktivt förvaltad fond?</h2>
        <p>
          Forskning från S&P SPIVA-rapporten visar konsekvent att 80–95% av aktivt förvaltade fonder
          underpresterar sitt jämförelseindex över en 10-årsperiod efter avgifter. Det finns undantag, men
          att hitta dem i förväg är extremt svårt.
        </p>
        <p>
          För de allra flesta privatpersoner är en bred indexfond med låg avgift den bästa strategin för
          långsiktigt sparande.
        </p>
      </div>

      {/* FAQ with JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Vanliga frågor om indexfonder
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related links */}
      <div className="border-t border-gray-100 pt-8">
        <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Läs mer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Bästa globalfonder 2025", href: "/fonder/basta-globalfonder" },
            { title: "ISK eller kapitalförsäkring?", href: "/isk/isk-vs-kapitalforsakring" },
            { title: "Avanza vs Nordnet – full jämförelse", href: "/jamforelser/avanza-vs-nordnet" },
            { title: "Börja fondspara – nybörjarguide", href: "/guider/borja-fondspara" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 font-medium"
            >
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
