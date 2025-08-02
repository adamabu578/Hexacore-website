import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function DigitalBankingIndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
          Industry recognition
        </h2>
        <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg mb-12">
          Temenos Recognized by IBS Intelligence as #1 best-selling banking software in 13 categories
          <br />
          IBS Intelligence&apos;s annual Sales League Table 2025 evaluated more than 1500 banking industry deals in
          2025, identifying the best-selling propositions across numerous categories.
        </p>
        <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
          Download report <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
