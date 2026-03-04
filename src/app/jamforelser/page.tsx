import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Jämförelser – Fondkonton och fonder",
  description: "Jämför fondkonton, mäklare och fonder sida vid sida. Hitta det bästa alternativet för ditt sparande.",
};

const comparisons = [
  {
    title: "Avanza vs Nordnet",
    description: "Den stora uppgörelsen – vilken nätmäklare är bäst för fondsparare 2025?",
    href: "/jamforelser/avanza-vs-nordnet",
    tag: "Populär",
  },
  {
    title: "ISK vs Kapitalförsäkring",
    description: "Vilket konto passar dig bäst? Vi jämför skatt, villkor och nackdelar.",
    href: "/isk/isk-vs-kapitalforsakring",
    tag: null,
  },
  {
    title: "Indexfonder vs aktivt förvaltade fonder",
    description: "Lönar sig aktiv förvaltning? Forskning och siffror säger nej – men det finns undantag.",
    href: "/guider/indexfond-vs-aktiv-fond",
    tag: null,
  },
];

export default function JamforelserPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Jämförelser</span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
          <BarChart2 className="w-5 h-5 text-purple-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          Jämförelser
        </h1>
      </div>
      <p className="text-lg text-gray-600 mb-10">
        Oberoende jämförelser av fondkonton, mäklare och fondtyper.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {comparisons.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all"
          >
            {item.tag && (
              <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                {item.tag}
              </span>
            )}
            <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-700 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>
            <div className="flex items-center gap-1 text-brand-600 text-sm font-medium">
              Läs jämförelsen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
