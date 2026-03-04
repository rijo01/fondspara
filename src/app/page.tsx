import Link from "next/link";
import type { Metadata } from "next";
import { TrendingUp, BookOpen, BarChart2, Shield, ArrowRight, CheckCircle } from "lucide-react";
import AffiliateCard from "@/components/affiliate/AffiliateCard";
import { getTopBrokers } from "@/lib/brokers";

export const metadata: Metadata = {
  title: "Fondspara.se – Jämför fonder och spara smartare 2025",
  description:
    "Jämför bästa fonder, hitta rätt ISK och lär dig fondspara smart. Oberoende guider och jämförelser för svenska fondsparare 2025.",
};

const categories = [
  {
    icon: TrendingUp,
    title: "Fonder",
    description: "Jämför indexfonder, globalfonder, räntefonder och mer",
    href: "/fonder",
    color: "bg-brand-50 text-brand-700",
  },
  {
    icon: Shield,
    title: "ISK & Konton",
    description: "Välj rätt fondkonto – ISK eller kapitalförsäkring",
    href: "/isk",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: BarChart2,
    title: "Jämförelser",
    description: "Avanza vs Nordnet och andra viktiga jämförelser",
    href: "/jamforelser",
    color: "bg-purple-50 text-purple-700",
  },
  {
    icon: BookOpen,
    title: "Guider",
    description: "Steg-för-steg för nybörjare och erfarna sparare",
    href: "/guider",
    color: "bg-orange-50 text-orange-700",
  },
];

const popularGuides = [
  { title: "Hur börjar man fondspara?", href: "/guider/borja-fondspara", time: "8 min" },
  { title: "Bästa indexfonder 2025", href: "/fonder/basta-indexfonder", time: "6 min" },
  { title: "Avanza vs Nordnet – vilket är bäst?", href: "/jamforelser/avanza-vs-nordnet", time: "10 min" },
  { title: "ISK eller kapitalförsäkring?", href: "/isk/isk-vs-kapitalforsakring", time: "7 min" },
  { title: "Månadsspara i fonder – så gör du", href: "/guider/manadsspara-fonder", time: "5 min" },
  { title: "Fondspara till barn", href: "/guider/fondspara-barn", time: "6 min" },
];

export default function HomePage() {
  const brokers = getTopBrokers();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            Uppdaterat för 2025
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Spara smartare i fonder
          </h1>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Oberoende guider och jämförelser som hjälper dig hitta rätt fonder, bästa ISK och
            sparstrategin som passar dig.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/guider/borja-fondspara"
              className="px-8 py-4 bg-white text-brand-800 font-bold rounded-xl hover:bg-brand-50 transition-colors"
            >
              Börja fondspara
            </Link>
            <Link
              href="/jamforelser/avanza-vs-nordnet"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              Jämför fondkonton
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm text-brand-200">
            {["Oberoende & opartisk", "Uppdaterad info 2025", "Inga dolda avgifter"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-300" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold text-center text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Vad vill du lära dig?
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Välj ett område så guidar vi dig steg för steg
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{cat.description}</p>
              <div className="mt-3 flex items-center gap-1 text-brand-600 text-sm font-medium">
                Utforska
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular guides */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Populära guider
            </h2>
            <Link href="/guider" className="text-brand-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
              Alla guider <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white p-5 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-brand-700 transition-colors">
                    {guide.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-gray-400 mt-2">{guide.time} läsning</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Broker comparison */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Bästa fondkontona 2025
          </h2>
          <p className="text-gray-500">Jämför landets bästa ställen att fondspara</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brokers.map((broker) => (
            <AffiliateCard key={broker.id} {...broker} />
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Redaktionellt oberoende. Vi kan erhålla provision via affiliatelänkar utan extra kostnad för dig.{" "}
          <Link href="/om-oss" className="underline">Läs mer</Link>
        </p>
      </section>

      {/* Why trust us */}
      <section className="bg-brand-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Därför litar tusentals sparare på oss
          </h2>
          <p className="text-brand-200 mb-10">Vi är inte bankens säljare. Vi är din oberoende guide.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "100% oberoende",
                desc: "Vi är inte ägda av banker eller fondbolag. Vår redaktion är fri att rekommendera det som faktiskt är bäst för dig.",
              },
              {
                title: "Uppdaterad info",
                desc: "Vi uppdaterar kontinuerligt all information om avgifter, avkastning och villkor så att du alltid har rätt underlag.",
              },
              {
                title: "Transparent om provisioner",
                desc: "Vi märker tydligt alla affiliatelänkar. Din trust är viktigare än vår provision.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 text-left">
                <h3 className="font-bold mb-2 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="text-brand-200 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
