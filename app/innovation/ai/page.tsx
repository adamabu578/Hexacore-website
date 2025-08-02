import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiHero } from "@/components/ai/ai-hero"
import { EmpoweringBanksSection } from "@/components/ai/empowering-banks-section"
import { AiMeasurableSuccess } from "@/components/ai/ai-measurable-success"
import { ModernBankingSmarterSystems } from "@/components/ai/modern-banking-smarter-systems"
import { NewsSection } from "@/components/news-section" // Changed from CoreBankingNews
import FooterCta from "@/components/footer-cta"

export default function AiPage() {
  const breadcrumbItems = [
    { label: "Innovation", href: "/innovation" },
    { label: "AI", href: "/innovation/ai" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <AiHero />
        <EmpoweringBanksSection />
        <AiMeasurableSuccess />
        <ModernBankingSmarterSystems />
        <NewsSection /> {/* Using the generic NewsSection */}
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
