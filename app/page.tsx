import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchGroups from "@/components/ResearchGroups";
import Achievements from "@/components/Achievements";
import Events from "@/components/Events";
import News from "@/components/News";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ResearchGroups />
      <Achievements />
      <Events />
      <News />
      <Partners />
    </div>
  );
}

