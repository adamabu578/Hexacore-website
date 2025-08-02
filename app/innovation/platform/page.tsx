import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PlatformHero } from "@/components/platform/platform-hero"
import { EvolvingPlatformSection } from "@/components/platform/evolving-platform-section"
import { MeasurableSuccessSection } from "@/components/platform/measurable-success-section"
import { EvolvingTechnologySection } from "@/components/platform/evolving-technology-section"
import { RealResultsSection } from "@/components/core-banking/real-results-section"
import { LatestResourcesSection } from "@/components/platform/latest-resources-section"
import { NewsSection } from "@/components/news-section" // Changed from CoreBankingNews
import FooterCta from "@/components/footer-cta"

export default function PlatformPage() {
  const breadcrumbItems = [
    { label: "Innovation", href: "/innovation" },
    { label: "Platform", href: "/innovation/platform" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <PlatformHero />
        <EvolvingPlatformSection />
        <MeasurableSuccessSection />
        <EvolvingTechnologySection />
        <RealResultsSection />
        <LatestResourcesSection />
        <NewsSection /> {/* Using the generic NewsSection */}
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
