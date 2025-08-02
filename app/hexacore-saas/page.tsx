import  SiteHeader  from "@/components/site-header"
import  SiteFooter  from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { SaasHero } from "@/components/saas/saas-hero"
import { EnterpriseServiceSection } from "@/components/saas/enterprise-service-section"
import { SingleSaasNeedsSection } from "@/components/saas/single-saas-needs-section"
import { SaasMeasurableSuccess } from "@/components/saas/saas-measurable-success"
import { SaasModernBanking } from "@/components/saas/saas-modern-banking"
import { HighestStandardsSection } from "@/components/saas/highest-standards-section"
import { SaasBenefitsTabs } from "@/components/saas/saas-benefits-tabs"
import { SaasRealResults } from "@/components/saas/saas-real-results"
import { SaasLatestNews } from "@/components/saas/saas-latest-news"
import { FutureOfBankingCta } from "@/components/innovation/future-of-banking-cta" // Reusing from innovation

export default function TemenosSaasPage() {
  const breadcrumbItems = [
    { label: "Innovation", href: "/innovation" },
    { label: "SaaS", href: "/temenos-saas" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <SaasHero />
        <EnterpriseServiceSection />
        <SingleSaasNeedsSection />
        <SaasMeasurableSuccess />
        <SaasModernBanking />
        <HighestStandardsSection />
        <SaasBenefitsTabs />
        <SaasRealResults />
        <SaasLatestNews />
        <FutureOfBankingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
