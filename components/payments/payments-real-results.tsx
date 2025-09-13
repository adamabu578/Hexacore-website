import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function PaymentsRealResults() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#28B1D3] mb-8">
          Real results
        </h2>
        <Button className="mb-12 bg-[#28B1D3] hover:bg-[#153365] text-white">
          Explore all success stories
        </Button>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-temenos-gray mb-6">
            &ldquo;TTechnology enables ABN AMRO to innovate rapidly by delivering new features to clients while reinforcing regulatory compliance a goal that aligns closely with Hexacore’ core mission.&rdquo;
          </p>
          <p className="font-semibold text-[#28B1D3]">Marnix Theunissen</p>
          <p className="text-sm text-temenos-gray mb-6">IT Director of Wealth Management, ABN AMRO</p>
          <Link href="#" className="inline-flex items-center text-[#28B1D3] hover:underline font-medium">
            Explore ABN AMRO&apos;s story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-temenos-blue text-temenos-blue hover:bg-temenos-blue hover:text-white bg-transparent"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-temenos-blue text-temenos-blue hover:bg-temenos-blue hover:text-white bg-transparent"
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
