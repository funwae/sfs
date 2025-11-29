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
            <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              A Studio of Engineers and Storytellers
            </h2>
            <p className="text-sm text-forge-steel text-balance">
              SanForge Studio sits at the intersection of game design and
              tooling. We prototype fast, ship thoughtfully, and never stop
              tuning the player feel.
            </p>
            <p className="text-sm text-forge-steel">
              From low-poly space escapades to deep editor tooling, we treat
              every project as an opportunity to build better workflows for
              ourselves and other developers.
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
                alt="SanForge Studio Logo"
                fill
                className="rounded-full bg-black/80 p-5 shadow-forge-glow"
              />
            </div>
            <p className="max-w-xs text-center text-xs text-forge-steel">
              We&apos;re based in the Bay Area and collaborate with teams and
              publishers worldwide. If you&apos;re looking for a partner that
              loves both the feel of a jump arc and the architecture behind it,
              we should talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

