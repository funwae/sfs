import Image from "next/image";

export default function StudioIdentity() {
  return (
    <section
      id="studio"
      className="section-fade border-b border-white/5 bg-gradient-to-b from-black/90 to-forge-space"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-forge-ember">
              We Built Entertainment!
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              A Studio of Engineers and Storytellers
            </h2>
            <p className="text-sm text-forge-steel">
              SanForge Studio blends game design and tooling. The team focuses
              on experiences that feel great moment to moment, and on building
              the editor extensions and pipelines that make those experiences
              repeatable.
            </p>
            <p className="text-sm text-forge-steel">
              The result: memorable games that players of all ages can pick up
              quickly, plus open and proprietary tools that give other
              developers more control over their work.
            </p>
            <dl className="mt-4 grid gap-4 text-sm text-forge-ice md:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-forge-steel">
                  Projects shipped
                </dt>
                <dd className="text-lg font-semibold">5+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-forge-steel">
                  Proprietary tools
                </dt>
                <dd className="text-lg font-semibold">3</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-forge-steel">
                  Focus
                </dt>
                <dd className="text-lg font-semibold">Gameplay · Tools</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto flex max-w-sm flex-col items-center gap-4">
            <div className="relative h-40 w-40">
              <Image
                src="/logo-sanforge.png"
                alt="SanForge Studio logo."
                fill
                className="rounded-full bg-black/90 p-5 shadow-forge-glow"
                loading="lazy"
              />
            </div>
            <p className="max-w-xs text-center text-xs text-forge-steel">
              Based in the Bay Area, SanForge collaborates with publishers,
              studios, and teams around the world. If you care as much about
              the feel of a jump arc as you do about the architecture behind it,
              you&apos;re in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
