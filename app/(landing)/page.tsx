import { SVGMaskEffectDemo } from "@/components/SVGMaskEffect";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNav } from "@/components/landing-nav";
import { NavbarDemo } from "@/components/landing_navbar";
// import { TabsDemo } from "@/components/sticky-scroll";


const LandingPage = () => {
  return (
    <div className="h-full">
      {/* <NavbarDemo /> */}
      <LandingNav />
      <LandingHero />
      <LandingContent />
      <SVGMaskEffectDemo />
    </div>
  );
};

export default LandingPage;