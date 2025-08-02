import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporateCommercialRealResults() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-temenos-blue">Real results</h2>
        <div className="relative flex items-center justify-center">
          <Button variant="ghost" size="icon" className="absolute left-0 rounded-full">
            <ArrowLeft className="h-6 w-6 text-temenos-blue" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl italic text-temenos-gray mb-6">
              {
                "Temenos' people are key. Its services, products, and account management teams have really been outstanding. They have enabled us to be very agile and deliver with speed and confidence. That we concentrate its growth efforts on Northwest Europe, was exemplified when the bank pivoted to concentrate its growth efforts on Northwest Europe, and the partnership allowed for a smooth adjustment. We were able to do that knowing that Temenos could flex with us and so minimize any disruption."
              }
            </p>
            <p className="font-semibold text-temenos-blue">Marnix Theunissen</p>
            <p className="text-sm text-temenos-gray mb-6">IT Director of Wealth Management, ABN AMRO</p>
            <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
              Explore ABN AMRO's story <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="absolute right-0 rounded-full">
            <ArrowRight className="h-6 w-6 text-temenos-blue" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
