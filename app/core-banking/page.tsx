import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { CoreBankingHero } from "@/components/core-banking/core-banking-hero"
import { SegmentExplorer } from "@/components/core-banking/segment-explorer"
import { CustomerExperienceSection } from "@/components/core-banking/customer-experience-section"
import { BeatingHeartSection } from "@/components/core-banking/beating-heart-section"
import { RealResultsSection } from "@/components/core-banking/real-results-section"
import { IndustryRecognition } from "@/components/core-banking/industry-recognition"
import { NewsSection } from "@/components/news-section"
import { FaqSection } from "@/components/core-banking/faq-section"
import FooterCta from "@/components/footer-cta"

export default function CoreBankingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <CoreBankingHero />
        <SegmentExplorer />
        <CustomerExperienceSection />
        <BeatingHeartSection />
        <RealResultsSection />
        <IndustryRecognition />
        <NewsSection />
        <FaqSection />
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
