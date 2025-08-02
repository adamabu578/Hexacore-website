import SiteHeader from "@/components/site-header" // Added SiteHeader
import CorporateCommercialHero from "@/components/corporate-commercial-banking/corporate-commercial-hero"
import CorporateCommercialSolutions from "@/components/corporate-commercial-banking/corporate-commercial-solutions"
import CorporateCommercialIndustrySolution from "@/components/corporate-commercial-banking/corporate-commercial-industry-solution"
import CorporateCommercialRealResults from "@/components/corporate-commercial-banking/corporate-commercial-real-results"
import CorporateCommercialIndustryRecognition from "@/components/corporate-commercial-banking/corporate-commercial-industry-recognition"
import CorporateCommercialLatestNews from "@/components/corporate-commercial-banking/corporate-commercial-latest-news"
import CorporateCommercialFaq from "@/components/corporate-commercial-banking/corporate-commercial-faq"
import CorporateCommercialAutomationTabs from "@/components/corporate-commercial-banking/corporate-commercial-automation-tabs" // New component
import SiteFooter from "@/components/site-footer"
import FooterCta from "@/components/footer-cta" // Added FooterCta

export default function CorporateCommercialBankingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <SiteHeader /> {/* Added SiteHeader */}
      <main className="flex-1">
        <CorporateCommercialHero />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
          <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
                Delivering corporate and commercial banking across lending, trade and liquidity
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-temenos-gray md:text-lg">
                Manage your entire portfolio on a single, integrated platform, including corporate and commercial
                lending, supply chain finance, corporate deposits, corporate trade finance, and cash and liquidity
                management. Designed for banks serving large and multinational enterprises, it simplifies operations,
                automates processes, and supports faster decision making with real-time services tailored to corporate
                and commercial banking.
              </p>
            </div>
          </div>
        </section>
        <CorporateCommercialAutomationTabs /> {/* New component added here */}
        <CorporateCommercialSolutions />
        <CorporateCommercialIndustrySolution />
        <CorporateCommercialRealResults />
        <CorporateCommercialIndustryRecognition />
        <CorporateCommercialLatestNews />
        <CorporateCommercialFaq />
        <FooterCta /> {/* Added FooterCta */}
      </main>
      <SiteFooter />
    </div>
  )
}
