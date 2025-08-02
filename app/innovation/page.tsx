import   SiteHeader  from "@/components/site-header"
import   SiteFooter  from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TechInnovationHero } from "@/components/innovation/tech-innovation-hero"
import { EmpowerDigitalTransformation } from "@/components/innovation/empower-digital-transformation"
import { EvolvingTechSection } from "@/components/innovation/evolving-tech-section"
import { InnovationRealResults } from "@/components/innovation/innovation-real-results"
import { InnovationLatestNews } from "@/components/innovation/innovation-latest-news"
import { FutureOfBankingCta } from "@/components/innovation/future-of-banking-cta"

export default function InnovationPage() {
  const breadcrumbItems = [{ label: "Innovation", href: "/innovation" }]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <TechInnovationHero />
        <EmpowerDigitalTransformation />
        <EvolvingTechSection />
        <InnovationRealResults />
        <InnovationLatestNews />
        <FutureOfBankingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
