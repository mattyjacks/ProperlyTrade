import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/sections/pricing-hero";
import { PricingCards } from "@/components/sections/pricing-cards";
import { AiCreditsPricing } from "@/components/sections/ai-credits-pricing";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";

export const metadata = {
  title: "Pricing - ProperlyTrade | Demo by MattyJacks.com",
  description:
    "Demo site by MattyJacks.com. Transparent pricing with no revenue share. Platform plans and AI trading credits.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <PricingHero />
        <PricingCards />
        <AiCreditsPricing />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
