import { Hero } from "@/components/Hero";
import Tier1 from "@/components/tiers/Tier1";
import Tier2 from "@/components/tiers/Tier2";
import Tier3 from "@/components/tiers/Tier3";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="space-y-8">
        <Tier1 />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-bone/10" />
        </div>

        <Tier2 />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <hr className="border-bone/10" />
        </div>

        <Tier3 />
      </div>
    </>
  );
}
