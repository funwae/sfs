import Image from "next/image";

const tools = [
  {
    name: "Lua Node Editor",
    tagline:
      "An open source Lua visual scripting IDE that brings node-based workflows to engines, mods, and tools.",
    image: "/lua-node-editor.png",
    href: "https://www.sanforgestudio.com/project/lua-node-editor",
  },
  {
    name: "sanCore OS",
    tagline:
      "A command-driven environment for experimenting with autonomous, text-based control systems.",
    image: "/sancore-logo.png",
    href: "https://www.sanforgestudio.com/project/sancore-os",
  },
  {
    name: "Internal Prototypes",
    tagline:
      "Experimental tooling we use in-house — the next wave of editor extensions and utilities.",
    image: "/node-graph.png",
    href: "#contact",
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
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Tools for Developers
            </h2>
            <p className="mt-2 max-w-xl text-sm text-forge-steel">
              Beyond games, SanForge builds editor tooling and engine
              extensions—so other teams can ship faster and experiment more
              boldly.
            </p>
          </div>
          <span className="text-xs uppercase tracking-[0.26em] text-forge-steel">
            Built in San Francisco
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="group rounded-2xl border border-white/5 border-t-forge-ember/70 bg-gradient-to-b from-white/5 to-black/40 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-forge-ember/90 hover:shadow-forge-glow"
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
                <h3 className="text-sm font-semibold">
                  <a
                    href={tool.href}
                    target={tool.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      tool.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    className="hover:text-forge-ember"
                  >
                    {tool.name}
                  </a>
                </h3>
              </div>
              <p className="text-xs text-forge-steel">{tool.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
