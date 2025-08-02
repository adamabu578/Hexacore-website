import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { WealthManagementHero } from "@/components/wealth-management/wealth-management-hero"
import { WealthManagementSolutions } from "@/components/wealth-management/wealth-management-solutions"
import { WealthIndustrySolution } from "@/components/wealth-management/wealth-industry-solution"
import { RealResultsSection } from "@/components/core-banking/real-results-section"
import { IndustryRecognition } from "@/components/core-banking/industry-recognition"
import { NewsSection } from "@/components/news-section" // Changed from CoreBankingNews
import { WealthManagementFaq } from "@/components/wealth-management/wealth-management-faq"
import FooterCta from "@/components/footer-cta"

export default function WealthManagementPage() {
  const breadcrumbItems = [
    { label: "Solutions", href: "/solutions" },
    { label: "Wealth Management", href: "/wealth-management" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <WealthManagementHero />
        <WealthManagementSolutions />
        <WealthIndustrySolution />
        <RealResultsSection />
        <IndustryRecognition />
        <NewsSection /> {/* Using the generic NewsSection */}
        <WealthManagementFaq />
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
