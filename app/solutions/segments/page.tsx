import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { InnovationHero } from "@/components/innovation/innovation-hero"
import { RapidModernizationSection } from "@/components/innovation/rapid-modernization-section"
import { BankingSolutionsSegments } from "@/components/innovation/banking-solutions-segments"
import { InnovationRealResults } from "@/components/innovation/innovation-real-results"
import { FutureOfBankingCta } from "@/components/innovation/future-of-banking-cta"
import { TopBanner } from "@/components/top-banner" // Import the new TopBanner

export default function SegmentsPage() {
  const breadcrumbItems = [{ label: "Segments", href: "/solutions/segments" }]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopBanner /> {/* Add the TopBanner here */}
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <InnovationHero /> {/* This component already matches the hero section content */}
        <RapidModernizationSection />
        <BankingSolutionsSegments />
        <InnovationRealResults />
        <FutureOfBankingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
