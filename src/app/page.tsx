import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { NextStage } from "@/components/home/NextStage";
import { Sponsors } from "@/components/home/Sponsors";
import { News } from "@/components/home/News";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <NextStage />
      <Sponsors />
      <News />
      <CTA />
    </>
  );
}
