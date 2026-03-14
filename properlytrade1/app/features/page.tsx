import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturesHero } from "@/components/sections/features-hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { IntegrationsSection } from "@/components/sections/integrations";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";

export const metadata = {
  title: "Features & Technology - ProperlyTrade | Demo by MattyJacks.com",
  description:
    "Demo site by MattyJacks.com. Advanced technology solutions for trading firms. Prop CRM, Broker CRM, Trading APIs, and Risk Guard.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <FeaturesHero />
        <SolutionsGrid />
        <IntegrationsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
