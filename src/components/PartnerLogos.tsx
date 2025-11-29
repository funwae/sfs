import Image from "next/image";

const partners = [
  { name: "AWS", logo: "/testimonial-aws.png" },
  { name: "K symbol", logo: "/testimonial-k.png" },
  { name: "Symbol", logo: "/testimonial-symbol.png" },
];

export default function PartnerLogos() {
  return (
    <section className="section-fade border-b border-white/5 bg-forge-space">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-forge-steel">
              Trusted Technology
            </h3>
            <p className="text-sm text-forge-steel">
              Built on infrastructure players and developers already rely on.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {partners.map((p) => (
              <div
                key={p.name}
                className="relative h-10 w-16 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

