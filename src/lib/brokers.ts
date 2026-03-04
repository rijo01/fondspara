export interface Broker {
  id: string;
  name: string;
  description: string;
  rating: number;
  highlights: string[];
  ctaText: string;
  ctaHref: string; // Replace with actual affiliate links from Adtraction/Awin
  badge?: string;
  logoText: string;
  logoColor: string;
  fondUtbud: number; // approx number of funds
  minInsattning: number;
  isk: boolean;
  kf: boolean;
}

export const brokers: Broker[] = [
  {
    id: "avanza",
    name: "Avanza",
    description:
      "Sveriges populäraste nätmäklare med marknadens bredaste fondutbud och låga avgifter. Perfekt för långsiktigt fondsparande.",
    rating: 5,
    highlights: [
      "Över 3 000 fonder att välja mellan",
      "Courtagefritt fondsparande",
      "Marknadens lägsta avgifter på egna fonder",
      "Gratis ISK och kapitalförsäkring",
    ],
    ctaText: "Öppna konto hos Avanza",
    ctaHref: "https://www.avanza.se", // REPLACE WITH AFFILIATE LINK
    badge: "Bäst i test",
    logoText: "AVA",
    logoColor: "#e8532b",
    fondUtbud: 3000,
    minInsattning: 0,
    isk: true,
    kf: true,
  },
  {
    id: "nordnet",
    name: "Nordnet",
    description:
      "Nordisk nätmäklare med starkt erbjudande för fondsparare. Erbjuder månadssparande med automatiska köp varje måndag.",
    rating: 4,
    highlights: [
      "Automatiskt månadssparande (Autogiro)",
      "Bred nordisk fondmarknad",
      "Gratis ISK och kapitalförsäkring",
      "Bra app och analysverktyg",
    ],
    ctaText: "Öppna konto hos Nordnet",
    ctaHref: "https://www.nordnet.se", // REPLACE WITH AFFILIATE LINK
    logoText: "NOR",
    logoColor: "#00b4d8",
    fondUtbud: 2500,
    minInsattning: 0,
    isk: true,
    kf: true,
  },
  {
    id: "swedbank-robur",
    name: "Swedbank/Robur",
    description:
      "Bra för dig som redan är Swedbankskund. Enkelt att komma igång med Roburs breda fondutbud direkt i mobilbanken.",
    rating: 3,
    highlights: [
      "Enkelt via Swedbanks app",
      "Roburs välkända fonder",
      "Lämplig för nybörjare",
      "ISK tillgängligt",
    ],
    ctaText: "Till Swedbank Robur",
    ctaHref: "https://www.robur.se", // REPLACE WITH AFFILIATE LINK
    logoText: "SWE",
    logoColor: "#002060",
    fondUtbud: 300,
    minInsattning: 0,
    isk: true,
    kf: false,
  },
];

export const getTopBrokers = () => brokers.sort((a, b) => b.rating - a.rating);
