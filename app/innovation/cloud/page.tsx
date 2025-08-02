import   SiteHeader  from "@/components/site-header"
import   SiteFooter  from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CloudHero } from "@/components/cloud/cloud-hero"
import { PioneeringCloudSection } from "@/components/cloud/pioneering-cloud-section"
import { CloudTabsSection } from "@/components/cloud/cloud-tabs-section"
import { CloudRealResults } from "@/components/cloud/cloud-real-results"
import { CloudLatestResources } from "@/components/cloud/cloud-latest-resources"
import { CloudLatestNews } from "@/components/cloud/cloud-latest-news"
import   FooterCta  from "@/components/footer-cta"

export default function CloudPage() {
  const breadcrumbItems = [
    { label: "Innovation", href: "/innovation" },
    { label: "Cloud", href: "/innovation/cloud" },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs items={breadcrumbItems} />
        <CloudHero />
        <PioneeringCloudSection />
        <CloudTabsSection />
        <CloudRealResults />
        <CloudLatestResources />
        <CloudLatestNews />
        <FooterCta />
      </main>
      <SiteFooter />
    </div>
  )
}
