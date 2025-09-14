import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function DigitalBankingIndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
         Recognized by the Industry
        </h2>
        <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg mb-12">
        Hexacore Tops IBS Intelligence Rankings as the #1 Banking Software Across 13 Categories
          <br />
          IBS Intelligence&apos;s Annual Sales League Table 2025: 1,500+ deals analyzed to reveal top-selling banking solutions.
        </p>
        <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
          Download report <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
