import Link from "next/link";
import { TrendingUp } from "lucide-react";

const footerLinks = {
  Fonder: [
    { label: "Bästa indexfonder", href: "/fonder/basta-indexfonder" },
    { label: "Bästa globalfonder", href: "/fonder/basta-globalfonder" },
    { label: "Sverigefonder", href: "/fonder/sverigefonder" },
    { label: "Räntefonder", href: "/fonder/rantefonder" },
    { label: "Alla fonder", href: "/fonder" },
  ],
  Konton: [
    { label: "Bästa ISK", href: "/isk/basta-isk" },
    { label: "ISK vs KF", href: "/isk/isk-vs-kapitalforsakring" },
    { label: "Avanza vs Nordnet", href: "/jamforelser/avanza-vs-nordnet" },
  ],
  Guider: [
    { label: "Börja fondspara", href: "/guider/borja-fondspara" },
    { label: "Månadsspara fonder", href: "/guider/manadsspara-fonder" },
    { label: "Fondspara barn", href: "/guider/fondspara-barn" },
    { label: "Alla guider", href: "/guider" },
  ],
  "Om oss": [
    { label: "Om Fondspara.se", href: "/om-oss" },
    { label: "Integritetspolicy", href: "/integritetspolicy" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold" style={{ fontFamily: "var(--font-display)" }}>
                fondspara<span className="text-brand-400">.se</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Oberoende guider och jämförelser för dig som vill fondspara smartare.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
            <strong className="text-gray-400">Riskvarning:</strong> Historisk avkastning är ingen garanti för framtida avkastning. Fonder kan sjunka i värde och du kan förlora hela det investerade kapitalet. Fondspara.se är en oberoende informationstjänst och utgör inte finansiell rådgivning. Innehållet på denna sida kan innehålla affiliatelänkar, vilket innebär att vi kan erhålla provision vid köp.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Fondspara.se – Alla rättigheter förbehållna</p>
          <p className="text-xs text-gray-500">Inte finansiell rådgivning. Läs mer i vår <Link href="/integritetspolicy" className="underline hover:text-gray-300">integritetspolicy</Link>.</p>
        </div>
      </div>
    </footer>
  );
}
