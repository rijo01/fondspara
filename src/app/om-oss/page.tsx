import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Fondspara.se – Oberoende fondinformation",
  description: "Vi är en oberoende informationstjänst om fondsparande. Läs om hur vi jobbar, vår editorial policy och hur vi finansierar sajten.",
};

export default function OmOssPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-brand-600">Hem</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Om oss</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Om Fondspara.se
      </h1>

      <div className="prose max-w-none">
        <h2>Vad är Fondspara.se?</h2>
        <p>
          Fondspara.se är en oberoende informations- och jämförelsetjänst för svenska fondsparare.
          Vi skriver guider, jämförelser och analyser som hjälper dig fatta välgrundade beslut om ditt sparande.
        </p>

        <h2>Hur finansierar ni sajten?</h2>
        <p>
          Vi finansierar sajten delvis via affiliatepartnskap med fondplattformar som Avanza och Nordnet.
          Det innebär att vi kan erhålla en provision om du öppnar konto via våra länkar – utan extra kostnad
          för dig.
        </p>
        <p>
          Vi märker tydligt alla affiliatelänkar med "Affiliatelänk – vi kan få provision". Vår redaktionella
          bedömning påverkas inte av dessa samarbeten – vi rekommenderar alltid det vi bedömer som bäst
          för läsarna, oavsett provision.
        </p>

        <h2>Editorial policy</h2>
        <p>
          Allt innehåll på Fondspara.se granskas löpande och uppdateras när förutsättningarna ändras.
          Vi strävar efter att:
        </p>
        <ul>
          <li>Presentera fakta korrekt och med rätt källhänvisning</li>
          <li>Uppdatera avgifter, räntor och villkor regelbundet</li>
          <li>Aldrig rekommendera produkter vi inte anser vara lämpliga</li>
          <li>Tydligt skilja på faktainformation och redaktionella åsikter</li>
        </ul>

        <h2>Riskvarning</h2>
        <p>
          Historisk avkastning är ingen garanti för framtida avkastning. Fonder kan sjunka i värde och
          du kan förlora hela det investerade kapitalet. Innehållet på Fondspara.se utgör inte finansiell
          rådgivning. Rådfråga en auktoriserad rådgivare om du är osäker.
        </p>

        <h2>Kontakt</h2>
        <p>
          Har du frågor, hittat ett fel eller vill samarbeta? Kontakta oss på{" "}
          <a href="mailto:info@fondspara.se">info@fondspara.se</a>.
        </p>
      </div>
    </div>
  );
}
