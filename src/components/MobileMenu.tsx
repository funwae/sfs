import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-forge-ice transition-all ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-forge-ice transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-forge-ice transition-all ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      {isOpen && (
        <nav className="absolute left-0 top-full w-full border-b border-white/5 bg-black/95 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-forge-steel transition hover:bg-white/5 hover:text-forge-ember"
            >
              Projects
            </a>
            <a
              href="#tools"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-forge-steel transition hover:bg-white/5 hover:text-forge-ember"
            >
              Tools
            </a>
            <a
              href="#studio"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-forge-steel transition hover:bg-white/5 hover:text-forge-ember"
            >
              Studio
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-2 text-sm text-forge-steel transition hover:bg-white/5 hover:text-forge-ember"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </>
  );
}

