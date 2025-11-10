import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Partners from "@/components/Partners";
import ResearchGroups from "@/components/ResearchGroups";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto my-8 px-4 mt-16 lg:mt-20">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-16 lg:gap-20">
          <About />
          <ResearchGroups />
          <Achievements />
          <Events />
        </div>
        <div className="col-span-1 flex flex-col gap-16 lg:gap-20">
          <News />
          <Partners />
        </div>
      </div>
    </div>
  );
}
