import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutValues } from "@/components/sections/about-values";
import { AboutTeam } from "@/components/sections/about-team";
import { CtaSection } from "@/components/sections/cta";

export const metadata = {
  title: "About Us - ProperlyTrade | Demo by MattyJacks.com",
  description:
    "Demo site by MattyJacks.com. ProperlyTrade is a fictional fintech company demo showcasing trading infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <AboutHero />
        <AboutValues />
        <AboutTeam />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
