export default function CTAFooter() {
  return (
    <section
      id="contact"
      className="section-fade bg-[radial-gradient(circle_at_top,_rgba(225,6,0,0.35),_transparent_55%),_#050506]"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="overflow-hidden rounded-3xl border border-forge-ember/60 bg-black/85 p-8 shadow-forge-glow md:p-10">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Let&apos;s build something unforgettable.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-forge-steel">
                Exploring a game prototype, looking for a publishing partner, or
                need help with tooling? SanForge is open to collaborations,
                work-for-hire, and technical partnerships.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                <a
                  href="mailto:info@sanforgestudio.com?subject=Publishing%20or%20partnership%20inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-forge-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-forge-glow transition-all duration-300 hover:bg-forge-crimson hover:scale-105 focus-visible:focus-ring"
                  aria-label="Contact SanForge Studio about publishing or partnerships"
                >
                  Publishing &amp; Partnerships
                </a>
                <a
                  href="mailto:info@sanforgestudio.com?subject=Tools%20and%20technical%20collaboration"
                  className="inline-flex items-center justify-center rounded-full border border-forge-red/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-forge-ice transition-all duration-300 hover:border-forge-ember hover:text-forge-ember hover:scale-105 focus-visible:focus-ring"
                  aria-label="Contact SanForge Studio about tools and technical collaboration"
                >
                  Tools &amp; Tech Collaboration
                </a>
              </div>

              <p className="text-xs text-forge-steel">
                Prefer async? Send a short description of your project, budget
                range, and timeline. The team will follow up with questions and
                next steps.
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-xs text-forge-steel">
                <a
                  href="https://discord.gg/sanforge"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-forge-ember transition-colors"
                  aria-label="Join SanForge Studio Discord server"
                >
                  Discord Server ↗
                </a>
                <a
                  href="https://store.steampowered.com/publisher/sanforgestudio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-forge-ember transition-colors"
                  aria-label="View SanForge Studio on Steam"
                >
                  Steam Publisher Page ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
