import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function RetailBusinessRealResults() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
        Proven Results
        </h2>
        <Button className="mb-12 bg-[#153365] hover:bg-[#28B1D3] text-white">
        Discover Our Success Stories
        </Button>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-temenos-gray mb-6">
            &ldquo;By investing in Hexacore, we’ve transformed into a modern digital bank with the speed, reliability, and flexibility that drive our success.&rdquo;
          </p>
          <p className="font-semibold text-[#153365]">Ahmed </p>
          <p className="text-sm text-temenos-gray mb-6">Chief IT Officer,</p>
          <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
            Explore Bank Ahmed&apos;s story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#153365] text-[#28B1D3] hover:bg-[#153365] bg-transparent"
            >
              <ArrowLeft className="h-5 w-5 text-[#28B1D3]" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#153365] text-[#28B1D3] hover:bg-[#153365] hover:text-[#28B1D3] bg-transparent"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
