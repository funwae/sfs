import Image from "next/image";

const tools = [
  {
    name: "Lua Node Editor",
    tagline: "Visual scripting for deep control.",
    image: "/lua-node-editor.png",
  },
  {
    name: "sanCore",
    tagline: "Modular foundations for modern games.",
    image: "/sancore-logo.png",
  },
  {
    name: "Experimental Tools",
    tagline: "Prototyping the next wave of tech.",
    image: "/node-graph.png",
  },
];

export default function ToolsStrip() {
  return (
    <section
      id="tools"
      className="section-fade border-b border-white/5 bg-forge-space/80"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
              Tools for Developers
            </h2>
            <p className="mt-2 max-w-xl text-sm text-forge-steel text-balance">
              We build the infrastructure behind the games — from node-based
              logic editors to reusable engine components.
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.26em] text-forge-steel">
            Built in San Francisco
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-black/40 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-forge-ember/80 hover:shadow-forge-glow"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-black/70">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
                <h3 className="text-sm font-semibold">{tool.name}</h3>
              </div>
              <p className="text-xs text-forge-steel">{tool.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

