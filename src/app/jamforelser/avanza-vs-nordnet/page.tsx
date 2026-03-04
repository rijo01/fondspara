import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import AffiliateCard from "@/components/affiliate/AffiliateCard";
import { brokers } from "@/lib/brokers";

export const metadata: Metadata = {
  title: "Avanza vs Nordnet 2025 – Vilket är bäst för fondspara?",
  description:
    "Vi jämför Avanza och Nordnet i detalj. Avgifter, fondutbud, app, ISK och mer. Hitta rätt plattform för ditt fondsparande.",
};

const comparison = [
  { category: "Antal fonder", avanza: "3 000+", nordnet: "2 500+", winner: "avanza" },
  { category: "Lägsta fondavgift", avanza: "0,05% (Avanza Global)", nordnet: "0,05% (Nordnet Global)", winner: "tie" },
  { category: "Minsta insättning", avanza: "0 kr", nordnet: "0 kr", winner: "tie" },
  { category: "ISK-avgift", avanza: "0 kr", nordnet: "0 kr", winner: "tie" },
  { category: "Månadssparande", avanza: "Ja (valfri dag)", nordnet: "Ja (måndag autogiro)", winner: "tie" },
  { category: "Mobilapp rating", avanza: "4,7 / 5", nordnet: "4,5 / 5", winner: "avanza" },
  { category: "Aktiehandel courtagefritt", avanza: "Nej (courtagefritt fondkonto)", nordnet: "Nej", winner: "tie" },
  { category: "Bankfunktioner", avanza: "Sparkonto, lön, kort", nordnet: "Sparkonto", winner: "avanza" },
  { category: "Nordiska börser", avanza: "Sverige + några", nordnet: "Sverige, Norge, Danmark, Finland", winner: "nordnet" },
];

export default function AvanzaVsNordnetPage() {
  const avanza = brokers.find((b) => b.id === "avanza")!;
  const nordnet = brokers.find((b) => b.id === "nordnet")!;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <Link href="/jamforelser" className="hover:text-brand-600">Jämförelser</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Avanza vs Nordnet</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
        Avanza vs Nordnet 2025 – Vilken är bäst för fondspara?
      </h1>
      <p className="text-lg text-gray-600 mb-3 leading-relaxed">
        Både Avanza och Nordnet är utmärkta val för fondsparande – men de skiljer sig på viktiga punkter.
        Vi går igenom allt du behöver veta för att välja rätt.
      </p>
      <p className="text-sm text-gray-400 mb-10">Uppdaterad: mars 2025 · 10 min läsning</p>

      {/* Quick verdict */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <div className="text-2xl font-bold text-orange-700 mb-1" style={{ fontFamily: "var(--font-display)" }}>Avanza</div>
          <div className="text-sm font-semibold text-orange-600 mb-3">Bäst för de flesta</div>
          <ul className="space-y-1.5">
            {["Bredaste fondutbud (3 000+)", "Bästa mobilapp", "Komplett bankfunktionalitet", "Störst i Sverige"].map(p => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="text-2xl font-bold text-blue-700 mb-1" style={{ fontFamily: "var(--font-display)" }}>Nordnet</div>
          <div className="text-sm font-semibold text-blue-600 mb-3">Bäst för nordiska marknader</div>
          <ul className="space-y-1.5">
            {["Bäst på nordiska börser", "Stark automatisk sparfunktion", "Bra för aktier i Norge/Danmark", "Populär i hela Norden"].map(p => (
              <li key={p} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Detaljerad jämförelse
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Kategori</th>
                <th className="text-center py-3 px-4 font-bold text-orange-700">Avanza</th>
                <th className="text-center py-3 px-4 font-bold text-blue-700">Nordnet</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.category} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-gray-50/50" : ""}`}>
                  <td className="py-3 px-4 text-gray-700 font-medium">{row.category}</td>
                  <td className={`py-3 px-4 text-center ${row.winner === "avanza" ? "font-bold text-orange-700" : "text-gray-600"}`}>
                    {row.winner === "avanza" && <span className="mr-1">✓</span>}
                    {row.avanza}
                  </td>
                  <td className={`py-3 px-4 text-center ${row.winner === "nordnet" ? "font-bold text-blue-700" : "text-gray-600"}`}>
                    {row.winner === "nordnet" && <span className="mr-1">✓</span>}
                    {row.nordnet}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Affiliate cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Öppna konto idag
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AffiliateCard {...avanza} />
          <AffiliateCard {...nordnet} />
        </div>
      </div>

      {/* Article content */}
      <div className="prose max-w-none mb-12">
        <h2>Vem passar Avanza för?</h2>
        <p>
          Avanza är Sveriges i särklass mest populära nätmäklare med över 2 miljoner kunder. För fondsparare
          är det troligen det bästa alternativet om du vill ha allt på ett ställe: lönekonto, sparkonto,
          fondkonto och aktiehandel. Mobilappen är marknadens bästa och fondutbudet bredast.
        </p>
        <p>
          Avanza Global – husfondens globalfond till 0,05% avgift – är dessutom en av världens billigaste
          globalfonder och en stor anledning till att many väljer Avanza.
        </p>

        <h2>Vem passar Nordnet för?</h2>
        <p>
          Nordnet är ett starkt alternativ, framför allt om du handlar aktier på norska, danska eller finska
          börsen, eller om du vill ha ett smidigt automatiserat månadssparande. Nordnets autogiro-funktion
          gör det enkelt att sätta upp automatiska köp varje måndag.
        </p>

        <h2>Kan man ha konto hos båda?</h2>
        <p>
          Ja, det är fullt möjligt att ha ISK hos båda. Vissa väljer Avanza för sitt fondsparande och
          Nordnet för handel i Norden. Det finns inga nackdelar med att ha konton på båda plattformarna.
        </p>
      </div>

      {/* Related links */}
      <div className="border-t border-gray-100 pt-8">
        <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>Relaterade guider</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Bästa indexfonder 2025", href: "/fonder/basta-indexfonder" },
            { title: "Bästa ISK-kontot", href: "/isk/basta-isk" },
            { title: "Börja fondspara – guide", href: "/guider/borja-fondspara" },
            { title: "ISK eller kapitalförsäkring?", href: "/isk/isk-vs-kapitalforsakring" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-brand-700 hover:text-brand-900 font-medium">
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
