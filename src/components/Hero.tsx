import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-white/5"
      id="top"
    >
      {/* Background: screenshot + aurora */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero_game_screenshot.png"
          alt="SanForge game scene"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-aurora-radial mix-blend-screen opacity-60" />
      </div>
      <div className="section-fade relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center md:flex-row md:items-center md:text-left">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-forge-ember">
            Game Studio · Tools Lab
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            Where <span className="text-forge-ember">Games</span> and{" "}
            <span className="text-forge-ember">Technology</span> Collide
          </h1>
          <p className="max-w-xl text-sm text-forge-steel text-balance md:text-base">
            SanForge Studio builds immersive worlds for players and powerful
            tools for developers — from original titles like{" "}
            <span className="text-forge-ice">World Eater</span> to the{" "}
            <span className="text-forge-ice">Lua Node Editor</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-forge-red px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-forge-glow transition hover:bg-forge-crimson"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-forge-red/70 px-6 py-2 text-sm font-semibold tracking-wide text-forge-ice transition hover:border-forge-ember hover:text-forge-ember"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-1 justify-center md:mt-0">
          <div className="relative h-64 w-64">
            <Image
              src="/world-eater-cover.png"
              alt="World Eater cover art"
              fill
              className="rounded-3xl border border-white/10 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            />
            <div className="absolute -bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-forge-ember">
              Featured: World Eater
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

