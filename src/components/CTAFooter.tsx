export default function CTAFooter() {
  return (
    <section
      id="contact"
      className="section-fade bg-[radial-gradient(circle_at_top,_rgba(225,6,0,0.35),_transparent_55%),_#050506]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="overflow-hidden rounded-3xl border border-forge-ember/60 bg-black/80 p-8 shadow-forge-glow md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Let&apos;s build something unforgettable.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-forge-steel text-balance">
                Whether you&apos;re exploring a game prototype, looking for
                tooling collaborators, or want a studio that understands both
                sides of the equation, SanForge Studio is ready.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@sanforgestudio.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-forge-red px-6 py-3 text-sm font-semibold text-white shadow-forge-glow transition hover:bg-forge-crimson"
              >
                info@sanforgestudio.com
              </a>
              <p className="text-xs text-forge-steel">
                Prefer async? Send us a short brief and we&apos;ll follow up
                with questions, timelines, and next steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

