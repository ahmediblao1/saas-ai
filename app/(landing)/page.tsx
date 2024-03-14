import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNav } from "@/components/landing-nav";
import { NavbarDemo } from "@/components/landing_navbar";


const LandingPage = () => {
  return (
    <div className="h-full">
      <NavbarDemo />
      <LandingNav />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;