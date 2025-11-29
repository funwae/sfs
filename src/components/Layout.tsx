import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>SanForge Studio · We Built Entertainment</title>
        <meta
          name="description"
          content="SanForge Studio is a Bay Area game studio and tools lab — forging unforgettable worlds and the technology behind them."
        />
        <meta property="og:title" content="SanForge Studio" />
        <meta
          property="og:description"
          content="We build games that are simple to pick up, hard to put down — and tools that empower other developers."
        />
        <meta property="og:image" content="/world-eater-cover.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-forge-night text-forge-ice">
        <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image
                  src="/logo-sanforge.png"
                  alt="SanForge Studio"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-wide text-forge-ice">
                  SanForge Studio
                </span>
                <span className="text-[10px] uppercase tracking-[0.26em] text-forge-steel">
                  We Built Entertainment
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 text-xs text-forge-steel md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="tracking-[0.24em] uppercase hover:text-forge-ice"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xs text-forge-ice md:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <span
                className={`block h-[2px] w-4 bg-forge-ice transition ${
                  navOpen ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`block h-[2px] w-4 bg-forge-ice transition ${
                  navOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-4 bg-forge-ice transition ${
                  navOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>

          {/* Mobile nav panel */}
          {navOpen && (
            <nav className="border-t border-white/5 bg-black/95 md:hidden">
              <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-xs text-forge-steel">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="border-b border-white/5 py-2 uppercase tracking-[0.24em] last:border-b-0 hover:text-forge-ember"
                    onClick={() => setNavOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/5 bg-black/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-forge-steel md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} SanForge Studio. All rights reserved.
            </span>
            <span>Forged in the Bay Area.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
