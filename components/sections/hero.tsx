import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="min-h-screen bg-black px-6 pt-24 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center justify-center">
        <div className="text-center">
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
      </div>
    </section>
  );
}