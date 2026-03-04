import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Fonder – Jämför och hitta bästa fonden",
  description:
    "Jämför indexfonder, globalfonder, sverigefonder och räntefonder. Hitta rätt fond för ditt sparande med vår oberoende guide.",
};

const fondCategories = [
  {
    title: "Bästa indexfonder 2025",
    description: "Breda indexfonder med låg avgift är grunden i långsiktigt sparande. Vi reder ut vilka som är bäst.",
    href: "/fonder/basta-indexfonder",
    tag: "Populär",
  },
  {
    title: "Bästa globalfonder 2025",
    description: "Globalfonder ger dig exponering mot hela världsmarknaden. Perfekt som kärninnehav.",
    href: "/fonder/basta-globalfonder",
    tag: "Rekommenderas",
  },
  {
    title: "Sverigefonder",
    description: "Investera i svenska börsbolag. Vi jämför bästa sverigefonderna med lägst avgift.",
    href: "/fonder/sverigefonder",
    tag: null,
  },
  {
    title: "Räntefonder",
    description: "Lägre risk än aktiefonder. Bra för dig som sparar på kort sikt eller vill diversifiera.",
    href: "/fonder/rantefonder",
    tag: null,
  },
  {
    title: "Tillväxtmarknadsfonder",
    description: "Exponering mot Kina, Indien och andra snabbväxande ekonomier.",
    href: "/fonder/tillvaxtmarknadsfonder",
    tag: null,
  },
  {
    title: "Hållbarhetsfonder",
    description: "Fonder med ESG-fokus och hållbarhetskriterier. Vi jämför de mest hållbara alternativen.",
    href: "/fonder/hallbarhetsfonder",
    tag: null,
  },
];

export default function FonderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Fonder</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-brand-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          Fonder
        </h1>
      </div>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
        Jämför och hitta rätt fond för ditt sparande. Vi granskar avgifter, historisk avkastning och risk
        för alla stora fondkategorier.
      </p>

      {/* Fund categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fondCategories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all"
          >
            {cat.tag && (
              <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                {cat.tag}
              </span>
            )}
            <h2
              className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-700 transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {cat.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{cat.description}</p>
            <div className="flex items-center gap-1 text-brand-600 text-sm font-medium">
              Läs mer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Internal link box */}
      <div className="mt-12 bg-brand-50 rounded-2xl p-6 border border-brand-100">
        <h2 className="font-bold text-brand-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Nytt på fondspara?
        </h2>
        <p className="text-sm text-brand-700 mb-4">
          Börja med vår nybörjarguide – vi förklarar allt från vad en fond är till hur du väljer rätt konto.
        </p>
        <Link
          href="/guider/borja-fondspara"
          className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors"
        >
          Börja fondspara <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
