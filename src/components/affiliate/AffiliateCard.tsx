import { ExternalLink, Star, Shield, Zap } from "lucide-react";

interface AffiliateCardProps {
  name: string;
  description: string;
  rating: number;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  logoText: string;
  logoColor: string;
}

export default function AffiliateCard({
  name,
  description,
  rating,
  highlights,
  ctaText,
  ctaHref,
  badge,
  logoText,
  logoColor,
}: AffiliateCardProps) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
      {badge && (
        <div className="absolute -top-3 left-6">
          <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Logo placeholder */}
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: logoColor }}
        >
          {logoText}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200 fill-gray-200"}`}
            />
          ))}
          <span className="text-sm font-semibold text-gray-700 ml-1">{rating}/5</span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <Zap className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="flex items-center justify-center gap-2 w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-xl transition-colors"
      >
        {ctaText}
        <ExternalLink className="w-4 h-4" />
      </a>

      <p className="text-center text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" />
        Affiliatelänk – vi kan få provision
      </p>
    </div>
  );
}
