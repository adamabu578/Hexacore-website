import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DigitalBankingHero } from "@/components/digital-banking/digital-banking-hero"
import { DigitalBankingNeeds } from "@/components/digital-banking/digital-banking-needs"
import { DigitalTransformationSection } from "@/components/digital-banking/digital-transformation-section"
import { DigitalEngagementFeatures } from "@/components/digital-banking/digital-engagement-features"
import { DigitalBankingRealResults } from "@/components/digital-banking/digital-banking-real-results"
import { DigitalBankingIndustryRecognition } from "@/components/digital-banking/digital-banking-industry-recognition"
import { DigitalBankingLatestNews } from "@/components/digital-banking/digital-banking-latest-news"
import { DigitalBankingFaq } from "@/components/digital-banking/digital-banking-faq"
import { DigitalBankingFutureOfBankingCta } from "@/components/digital-banking/digital-banking-future-of-banking-cta"

export default function DigitalBankingPage() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Digital Banking", href: "/digital-banking" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <DigitalBankingHero />
        <DigitalBankingNeeds />
        <DigitalTransformationSection />
        <DigitalEngagementFeatures />
        <DigitalBankingRealResults />
        <DigitalBankingIndustryRecognition />
        <DigitalBankingLatestNews />
        <DigitalBankingFaq />
        <DigitalBankingFutureOfBankingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
