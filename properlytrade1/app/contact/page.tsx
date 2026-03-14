import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata = {
  title: "Contact Us - ProperlyTrade | Demo by MattyJacks.com",
  description:
    "Demo site by MattyJacks.com. Contact form for ProperlyTrade demo. Not a real service.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
