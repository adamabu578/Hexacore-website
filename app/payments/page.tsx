import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { PaymentsHero } from "@/components/payments/payments-hero"
import { PaymentsSeamlessSection } from "@/components/payments/payments-seamless-section"
import { PaymentsGrowthFeatures } from "@/components/payments/payments-growth-features"
import { PaymentsPerformanceSection } from "@/components/payments/payments-performance-section"
import { PaymentsRealResults } from "@/components/payments/payments-real-results"
import { PaymentsIndustryRecognition } from "@/components/payments/payments-industry-recognition"
import { PaymentsLatestNews } from "@/components/payments/payments-latest-news"
import FooterCta from "@/components/footer-cta"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <PaymentsHero />
        <PaymentsSeamlessSection />
        <PaymentsGrowthFeatures />
        <PaymentsPerformanceSection />
        <PaymentsRealResults />
        <PaymentsIndustryRecognition />
        <PaymentsLatestNews />
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
