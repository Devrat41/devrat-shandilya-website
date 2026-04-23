import { Navbar } from "@/components/layout/navbar";
import { AboutPreview } from "@/components/sections/about-preview";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
    </>
  );
}