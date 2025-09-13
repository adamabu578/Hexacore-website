import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function PaymentsIndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#28B1D3] mb-8">
        Trusted. Proven. Recognized.
        </h2>
        <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg mb-12">
          Hexacore recognized by IBS Intelligence as the #1 best-selling banking software across 13 categories.
          <br />
          IBS Intelligence&apos;s Annual Sales League Table 2025: ranking the top propositions from 500+ industry deals.
        </p>
        <Link href="#" className="inline-flex items-center text-[#28B1D3] hover:underline font-medium">
          Download report <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
