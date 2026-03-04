import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AffiliateCard from "@/components/affiliate/AffiliateCard";
import { brokers } from "@/lib/brokers";

export const metadata: Metadata = {
  title: "Hur börjar man fondspara? Komplett guide för nybörjare 2025",
  description:
    "Steg-för-steg guide: Hur börjar man fondspara? Vi förklarar ISK, vilka fonder du ska välja och hur du sätter upp automatiskt sparande.",
};

const steps = [
  {
    step: 1,
    title: "Välj ett fondkonto (ISK)",
    desc: "Öppna ett investeringssparkonto (ISK) hos Avanza eller Nordnet. Det tar 5 minuter och är gratis. ISK är det skattemässigt bästa kontot för de flesta.",
  },
  {
    step: 2,
    title: "Sätt in pengar",
    desc: "Börja med valfritt belopp – inga minimibelopp krävs. Sätt in det du känner dig bekväm med. Spara aldrig pengar du kan behöva inom 5 år.",
  },
  {
    step: 3,
    title: "Välj en bred globalfond",
    desc: "Köp Avanza Global (om du är hos Avanza) eller Nordnet Indexfond Global (om du är hos Nordnet). 0,05% avgift och exponering mot hela världen.",
  },
  {
    step: 4,
    title: "Sätt upp månadssparande",
    desc: "Aktivera automatiskt månadssparande. Välj ett belopp du klarar varje månad och glöm sedan av det. Ränta på ränta gör resten.",
  },
  {
    step: 5,
    title: "Låt det växa",
    desc: "Det svåraste i fondspara är att inte göra något. Undvik att sälja vid börsfall. Historiskt stiger börsen på lång sikt – håll fast vid din plan.",
  },
];

export default function BorjaFondsparaPage() {
  const avanza = brokers.find((b) => b.id === "avanza")!;
  const nordnet = brokers.find((b) => b.id === "nordnet")!;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <Link href="/guider" className="hover:text-brand-600">Guider</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Börja fondspara</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
        Hur börjar man fondspara? Komplett nybörjarguide 2025
      </h1>
      <p className="text-lg text-gray-600 mb-3 leading-relaxed">
        Du behöver inte vara ekonom för att spara i fonder. Den enklaste strategin – en bred globalfond med låg avgift
        och automatiskt månadssparande – slår de flesta proffsförvaltare på sikt.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-10">
        <span>Uppdaterad: mars 2025</span>
        <span>·</span>
        <span>8 min läsning</span>
        <span>·</span>
        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Nybörjare</span>
      </div>

      {/* Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
          Kom igång på 5 steg
        </h2>
        <div className="space-y-5">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key takeaways */}
      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-brand-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Det viktigaste att komma ihåg
        </h2>
        <ul className="space-y-2">
          {[
            "Börja tidigt – tid i marknaden slår alltid tajming av marknaden",
            "Håll avgifterna låga – välj indexfonder under 0,5% i avgift",
            "Spara regelbundet – automatisk månadsinsättning tar bort frestelsen att avvakta",
            "Sälj inte vid kraschar – börsen har alltid återhämtat sig historiskt",
            "ISK är rätt konto för de flesta – enkel schablonbeskattning, inga krångliga deklarationer",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-brand-800">
              <CheckCircle className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Brokers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Öppna ISK-konto idag
        </h2>
        <p className="text-gray-600 mb-6">
          Välj Avanza eller Nordnet – båda är gratis, trygga och har bredast fondutbud i Sverige.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AffiliateCard {...avanza} />
          <AffiliateCard {...nordnet} />
        </div>
      </div>

      {/* Article content */}
      <div className="prose max-w-none mb-12">
        <h2>Vad är en fond?</h2>
        <p>
          En fond är en samling värdepapper – aktier, obligationer eller en mix – som ägs gemensamt av
          många sparare. När du köper ett fondandelar äger du en liten del av alla värdepapper i fonden.
        </p>
        <p>
          Det gör det möjligt att med lite pengar äga andelar i hundratals eller tusentals företag
          runt om i världen, vilket sprider risken enormt jämfört med att köpa enskilda aktier.
        </p>

        <h2>ISK – varför är det det bästa kontot?</h2>
        <p>
          Investeringssparkonto (ISK) är idag det skattemässigt förmånligaste kontot för de flesta fondsparare.
          Istället för att betala 30% kapitalvinstskatt när du säljer med vinst betalar du en låg schablonkatt
          baserat på kontots värde – oavsett om det gått upp eller ner.
        </p>
        <p>
          Schablonskatten 2025 är 0,888% per år på kontots genomsnittliga värde. Jämfört med 30%
          kapitalvinstskatt är det ofta mycket fördelaktigare, speciellt om du tänker spara länge.
        </p>

        <h2>Hur mycket ska jag spara varje månad?</h2>
        <p>
          Spara så mycket du klarar utan att det påverkar din vardagsekonomi. Tumregeln är att inte spara
          pengar du kan behöva inom 5 år – börsen kan sjunka kraftigt på kort sikt.
        </p>
        <p>
          Börja med 500–1 000 kr/månad om du är nybörjare. Det kan låta lite, men med ränta på ränta
          växer 1 000 kr/månad till över 1,2 miljoner kronor på 30 år (förutsatt 8% årsavkastning).
        </p>
      </div>

      {/* Related */}
      <div className="border-t border-gray-100 pt-8">
        <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>Nästa steg</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Bästa indexfonder 2025", href: "/fonder/basta-indexfonder" },
            { title: "Avanza vs Nordnet", href: "/jamforelser/avanza-vs-nordnet" },
            { title: "Månadsspara i fonder", href: "/guider/manadsspara-fonder" },
            { title: "Fondspara till barn", href: "/guider/fondspara-barn" },
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
