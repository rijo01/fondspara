import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "ISK & Fondkonton – Bästa investeringssparkontot 2025",
  description: "Jämför bästa ISK och kapitalförsäkringar. Hitta rätt fondkonto för ditt sparande med låg skatt och inga krångliga deklarationer.",
};

const iskPages = [
  {
    title: "Bästa ISK 2025",
    description: "Vi jämför alla ISK-konton och rankar bästa alternativen baserat på avgifter och fondutbud.",
    href: "/isk/basta-isk",
    tag: "Populär",
  },
  {
    title: "ISK vs Kapitalförsäkring",
    description: "Vilket konto passar dig? Vi förklarar skillnaderna och hjälper dig välja rätt.",
    href: "/isk/isk-vs-kapitalforsakring",
    tag: null,
  },
  {
    title: "Fondspara barn – barnets ISK",
    description: "Hur sparar du i fonder till ditt barn? Guide till barnets ISK och vilka fonder som passar.",
    href: "/guider/fondspara-barn",
    tag: null,
  },
];

export default function IskPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">ISK & Konton</span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-blue-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          ISK & Fondkonton
        </h1>
      </div>
      <p className="text-lg text-gray-600 mb-10">
        Hitta rätt konto för ditt fondsparande. Vi förklarar ISK, kapitalförsäkring och hur du väljer bäst.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {iskPages.map((item) => (
          <Link key={item.href} href={item.href} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all">
            {item.tag && (
              <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{item.tag}</span>
            )}
            <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-700 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.description}</p>
            <div className="flex items-center gap-1 text-brand-600 text-sm font-medium">
              Läs mer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
