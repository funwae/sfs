import Image from "next/image";

const projects = [
  {
    name: "World Eater",
    blurb: "Planet-scale physics meets absurd comedy.",
    image: "/world-eater-cover.png",
    status: "Playable prototype",
  },
  {
    name: "Astro Felix",
    blurb: "Skate, jump, and claw your way through endless chaos!",
    image: "/hero_game_screenshot.png",
    status: "In development",
  },
  {
    name: "The Cursed Gate",
    blurb: "Explore a psychological horror game set in Japan.",
    image: "/hero_game_screenshot.png",
    status: "In development",
  },
  {
    name: "Colorable",
    blurb: "Work in progress — coming soon.",
    image: "/hero_game_screenshot.png",
    status: "WIP",
  },
];

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="section-fade border-b border-white/5 bg-black/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
            Worlds from the Forge
          </h2>
          <p className="max-w-2xl text-sm text-forge-steel text-balance">
            From jam-born experiments to polished experiences, each project is a
            playground for new technology and storytelling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group overflow-hidden rounded-3xl border border-white/5 bg-forge-space/80 shadow-[0_20px_45px_rgba(0,0,0,0.9)] transition hover:-translate-y-1.5 hover:border-forge-ember/90 hover:shadow-forge-glow"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-forge-ember">
                  {project.status}
                </div>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-forge-steel">{project.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

