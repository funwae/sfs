import Head from "next/head";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>SanForge Studio — Where Games and Technology Collide</title>
        <meta
          name="description"
          content="SanForge Studio builds immersive worlds for players and powerful tools for developers. From original titles like World Eater to the Lua Node Editor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-sanforge.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sanforgestudio.com/" />
        <meta property="og:title" content="SanForge Studio — Where Games and Technology Collide" />
        <meta
          property="og:description"
          content="We build immersive worlds for players and powerful tools for developers."
        />
        <meta property="og:image" content="/hero_game_screenshot.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sanforgestudio.com/" />
        <meta property="twitter:title" content="SanForge Studio" />
        <meta
          property="twitter:description"
          content="Where games and technology collide."
        />
        <meta property="twitter:image" content="/hero_game_screenshot.png" />
      </Head>
      <div className="min-h-screen bg-forge-night text-forge-ice">
        <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur">
          <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-sanforge.png"
                alt="SanForge Studio"
                width={40}
                height={40}
                priority
              />
              <span className="text-lg font-semibold tracking-wide text-forge-ice">
                SanForge Studio
              </span>
            </div>
            <nav className="hidden gap-8 text-sm text-forge-steel md:flex">
              <a
                href="#projects"
                className="transition hover:text-forge-ice hover:text-forge-ember"
              >
                Projects
              </a>
              <a
                href="#tools"
                className="transition hover:text-forge-ice hover:text-forge-ember"
              >
                Tools
              </a>
              <a
                href="#studio"
                className="transition hover:text-forge-ice hover:text-forge-ember"
              >
                Studio
              </a>
              <a
                href="#contact"
                className="transition hover:text-forge-ice hover:text-forge-ember"
              >
                Contact
              </a>
            </nav>
            <MobileMenu />
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/5 bg-black/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-forge-steel md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} SanForge Studio.</span>
            <span>Forged in the Bay Area.</span>
          </div>
        </footer>
      </div>
    </>
  );
}

