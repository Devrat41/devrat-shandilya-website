import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold tracking-wide">{siteConfig.name}</h1>
    </main>
  );
}