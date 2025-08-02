import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { RetailBusinessHero } from "@/components/retail-business/retail-business-hero"
import { DriveGrowthSection } from "@/components/retail-business/drive-growth-section"
import { HassleFreeExperienceTabs } from "@/components/retail-business/hassle-free-experience-tabs"
import { EndToEndSolutions } from "@/components/retail-business/end-to-end-solutions"
import { RetailBusinessRealResults } from "@/components/retail-business/retail-business-real-results"
import { RetailBusinessIndustryRecognition } from "@/components/retail-business/retail-business-industry-recognition"
import { RetailBusinessLatestNews } from "@/components/retail-business/retail-business-latest-news"
import { FutureOfBankingCta } from "@/components/innovation/future-of-banking-cta"

export default function RetailBusinessBankingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <RetailBusinessHero />
        <DriveGrowthSection />
        <HassleFreeExperienceTabs />
        <EndToEndSolutions />
        <RetailBusinessRealResults />
        <RetailBusinessIndustryRecognition />
        <RetailBusinessLatestNews />
        <FutureOfBankingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
