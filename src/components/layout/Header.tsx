"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const navItems = [
  {
    label: "Fonder",
    href: "/fonder",
    children: [
      { label: "Bästa indexfonder", href: "/fonder/basta-indexfonder" },
      { label: "Bästa globalfonder", href: "/fonder/basta-globalfonder" },
      { label: "Sverigefonder", href: "/fonder/sverigefonder" },
      { label: "Räntefonder", href: "/fonder/rantefonder" },
    ],
  },
  {
    label: "Fondkonton",
    href: "/isk",
    children: [
      { label: "Bästa ISK", href: "/isk/basta-isk" },
      { label: "ISK vs KF", href: "/isk/isk-vs-kapitalforsakring" },
      { label: "Avanza vs Nordnet", href: "/jamforelser/avanza-vs-nordnet" },
    ],
  },
  { label: "Guider", href: "/guider" },
  { label: "Jämförelser", href: "/jamforelser" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-800">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
            fondspara<span className="text-brand-600">.se</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                {item.label}
              </Link>
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-brand-700 hover:bg-brand-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/jamforelser/avanza-vs-nordnet"
            className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-lg hover:bg-brand-700 transition-colors"
          >
            Öppna fondkonto
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Öppna meny"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-3 py-2 text-sm font-semibold text-gray-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-6 py-1.5 text-sm text-gray-600"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/jamforelser/avanza-vs-nordnet"
              className="block text-center px-4 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-lg"
              onClick={() => setOpen(false)}
            >
              Öppna fondkonto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
