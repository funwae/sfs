import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <section className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src="/logo-sanforge.png"
                alt="SanForge Studio"
                fill
                className="rounded-full opacity-50"
              />
            </div>
          </div>
          <h1 className="mb-4 text-6xl font-bold text-forge-red">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-forge-ice">
            Page Not Found
          </h2>
          <p className="mb-8 text-forge-steel">
            The page you&apos;re looking for has been lost in the forge. It
            might have been moved, deleted, or never existed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-forge-red px-6 py-2 text-sm font-semibold tracking-wide text-white shadow-forge-glow transition hover:bg-forge-crimson"
            >
              Return Home
            </Link>
            <Link
              href="#projects"
              className="rounded-full border border-forge-red/70 px-6 py-2 text-sm font-semibold tracking-wide text-forge-ice transition hover:border-forge-ember hover:text-forge-ember"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

