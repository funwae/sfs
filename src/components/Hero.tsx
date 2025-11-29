import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/5"
    >
      {/* Background: game screenshot + aurora */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero_game_screenshot.png"
          alt="Astronaut facing a colossal space worm above a forested planet."
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-aurora-radial mix-blend-screen opacity-60" />
      </div>

      {/* Logo watermark */}
      <div className="pointer-events-none absolute -right-16 -top-16 hidden h-56 w-56 opacity-[0.06] md:block">
        <Image
          src="/logo-sanforge.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="section-fade relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center md:flex-row md:items-center md:gap-10 md:px-4 md:py-0 md:text-left">
        <div className="flex-1 space-y-6 max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.38em] text-forge-ember">
            We Built Entertainment
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            We forge{" "}
            <span className="text-forge-ember">worlds players remember</span>{" "}
            and the tools that power them.
          </h1>
          <p className="text-sm text-forge-steel md:text-base">
            SanForge Studio crafts games that are easy to jump into and hard to
            walk away from — and builds development tools like the{" "}
            <span className="text-forge-ice">Lua Node Editor</span> that give
            other teams the same superpowers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-forge-red px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-forge-glow transition-all duration-300 hover:bg-forge-crimson hover:scale-105 focus-visible:focus-ring"
              aria-label="Scroll to projects section"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-forge-red/70 px-6 py-2 text-sm font-semibold tracking-wide text-forge-ice transition-all duration-300 hover:border-forge-ember hover:text-forge-ember hover:scale-105 focus-visible:focus-ring"
              aria-label="Scroll to contact section"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-1 justify-center md:mt-0">
          <div className="relative h-56 w-56 md:h-64 md:w-64">
            <Image
              src="/world-eater-cover.png"
              alt="World Eater key art."
              fill
              className="rounded-3xl border border-white/10 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
              loading="eager"
            />
            <div className="absolute -bottom-4 left-4 rounded-full bg-black/80 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-forge-ember">
              Featured · World Eater
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.25em] text-forge-ember md:flex">
        <span className="mb-2 animate-bounce">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-forge-ember via-forge-ember/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
