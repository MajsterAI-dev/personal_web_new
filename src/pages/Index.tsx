import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChallengesSolutions from "@/components/ChallengesSolutions";
import CTASection from "@/components/CTASection";
import WhatYouGet from "@/components/WhatYouGet";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import ContactSection from "@/components/ContactSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ChallengesSolutions />
        <CTASection />
        <WhatYouGet />
        <CaseStudyPreview />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
