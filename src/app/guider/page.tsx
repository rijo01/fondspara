import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Guider om fondspara – Nybörjare till avancerat",
  description: "Steg-för-steg guider om fondspara. Lär dig allt från hur du börjar till avancerade sparstrategier.",
};

const guides = [
  { title: "Hur börjar man fondspara?", href: "/guider/borja-fondspara", time: "8 min", level: "Nybörjare", desc: "Komplett guide för dig som aldrig sparat i fonder. Steg för steg från noll till igång." },
  { title: "Månadsspara i fonder", href: "/guider/manadsspara-fonder", time: "5 min", level: "Nybörjare", desc: "Automatisera ditt sparande och dra nytta av ränta på ränta. Så sätter du upp månadssparande." },
  { title: "Fondspara till barn", href: "/guider/fondspara-barn", time: "6 min", level: "Nybörjare", desc: "Guide till att spara i fonder för barn. ISK, barnfonder och bästa strategi för långsiktigt barnspara." },
  { title: "Indexfond vs aktivt förvaltad fond", href: "/guider/indexfond-vs-aktiv-fond", time: "7 min", level: "Medel", desc: "Lönar sig aktiv förvaltning? Vi går igenom forskning och siffror." },
];

const levelColor: Record<string, string> = {
  "Nybörjare": "bg-green-100 text-green-700",
  "Medel": "bg-yellow-100 text-yellow-700",
  "Avancerat": "bg-red-100 text-red-700",
};

export default function GuiderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Guider</span>
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-orange-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
          Guider om fondspara
        </h1>
      </div>
      <p className="text-lg text-gray-600 mb-10">
        Från nybörjare till erfaren sparare – vi har guider för alla nivåer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelColor[guide.level]}`}>
                {guide.level}
              </span>
              <span className="text-xs text-gray-400">{guide.time} läsning</span>
            </div>
            <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-700 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              {guide.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">{guide.desc}</p>
            <div className="flex items-center gap-1 text-brand-600 text-sm font-medium">
              Läs guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
