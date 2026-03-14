import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { StatsSection } from "@/components/sections/stats";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <HowItWorks />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
