import CorporateCommercialHeroSegment from "@/components/corporate-commercial-banking-segment/corporate-commercial-hero-segment"
import CorporateCommercialDeliverySection from "@/components/corporate-commercial-banking-segment/corporate-commercial-delivery-section"
import CorporateCommercialIntegratedSolutions from "@/components/corporate-commercial-banking-segment/corporate-commercial-integrated-solutions"
import CorporateCommercialSegmentRealResults from "@/components/corporate-commercial-banking-segment/corporate-commercial-segment-real-results"
import CorporateCommercialSegmentIndustryRecognition from "@/components/corporate-commercial-banking-segment/corporate-commercial-segment-industry-recognition"
import CorporateCommercialFutureOfBankingCta from "@/components/corporate-commercial-banking-segment/corporate-commercial-future-of-banking-cta"

export default function CorporateCommercialBankingSegmentPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <CorporateCommercialHeroSegment />
        <CorporateCommercialDeliverySection />
        <CorporateCommercialIntegratedSolutions />
        <CorporateCommercialSegmentRealResults />
        <CorporateCommercialSegmentIndustryRecognition />
        <CorporateCommercialFutureOfBankingCta />
      </main>
    </div>
  )
}
