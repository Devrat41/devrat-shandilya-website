import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
          {siteConfig.subtitle}
        </p>

        <h1 className="text-4xl font-bold tracking-wide md:text-6xl">
          {siteConfig.name}
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          {siteConfig.intro}
        </p>
      </div>
    </section>
  );
}