import  SiteHeader  from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BankingCapabilities } from "@/components/banking-capabilities"
import { SaasSection } from "@/components/saas-section"
import { TrustedInstitutions } from "@/components/trusted-institutions"
import { NewsSection } from "@/components/news-section"
import   FooterCta  from "@/components/footer-cta"
import   SiteFooter  from "@/components/site-footer" // Import the new footer component

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BankingCapabilities />
        <SaasSection />
        <TrustedInstitutions />
        <NewsSection />
        <FooterCta />
      </main>
      <SiteFooter /> {/* Add the new footer component here */}
    </div>
  )
}
