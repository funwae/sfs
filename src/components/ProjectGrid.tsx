import Image from "next/image";

const projects = [
  {
    name: "The Cursed Gate",
    blurb:
      "Psychological horror set in Japan — escape twisted nightmares and find your way back to reality.",
    image: "/world-eater-cover.png", // swap to correct art if you have it
    status: "Horror · In development",
    href: "https://www.sanforgestudio.com/project/the-cursed-gate",
  },
  {
    name: "Colorable",
    blurb:
      "A paint-driven puzzle prototype centered on color, flow, and playful experimentation.",
    image: "/hero_game_screenshot.png", // placeholder until you have dedicated art
    status: "Prototype · Work in progress",
    href: "https://www.sanforgestudio.com/project/colorable",
  },
  {
    name: "Astro Felix",
    blurb:
      "Platformer starring a space cat on skating wheels — grind, jump, and claw through escalating chaos.",
    image: "/hero_game_screenshot.png",
    status: "Platformer · In development",
    href: "https://www.sanforgestudio.com/project/astro-felix",
  },
  {
    name: "World Eater",
    blurb:
      "A bossfight game about an overworked astronaut taking on a world-devouring space worm.",
    image: "/world-eater-cover.png",
    status: "Action · Released",
    href: "https://sanforgestudio.com/project/world-eater",
  },
];

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="section-fade border-b border-white/5 bg-black/85"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Worlds from the Forge
          </h2>
          <p className="max-w-2xl text-sm text-forge-steel">
            Self-made titles and collaborations, from student projects grown
            into full games to experimental concepts still in the workshop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-white/5 bg-forge-space/80 shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition hover:-translate-y-1.5 hover:border-forge-ember/90 hover:shadow-forge-glow"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index % 2 === 0 ? "h-64 md:h-72" : "h-56 md:h-64"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-black/75 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-forge-ember">
                  {project.status}
                </div>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-forge-steel">{project.blurb}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-forge-ember hover:underline"
                >
                  Read more ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="https://www.sanforgestudio.com/projects"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[10px] font-semibold uppercase tracking-[0.26em] text-forge-steel hover:text-forge-ember"
          >
            See full project catalog ↗
          </a>
        </div>
      </div>
    </section>
  );
}
