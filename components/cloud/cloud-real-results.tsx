import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function CloudRealResults() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#153365]">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
         Delivering Impact
        </h2>
        <Button className="mb-12 bg-temenos-blue hover:bg-temenos-blue-hover text-white">
       Discover Our Success Stories
        </Button>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-white mb-6">
            &ldquo;A modern core banking platform drives innovation and elevates digital customer experiences. Hexacore enables Commerce to provide forward-looking, innovative solutions for customers now and in the years ahead.&rdquo;
          </p>
          <p className="font-semibold text-temenos-blue">emmanuel joseph</p>
          <p className="text-sm text-white mb-6">Chief Information Officer, Commerce Bank</p>
          <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
          Experience Commerce Bank&apos;s story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#28B1D3] text-[#28B1D3] hover:bg-temenos-blue hover:text-[#28B1D3] bg-transparent"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#28B1D3] text-[#28B1D3] hover:bg-temenos-blue hover:text-white bg-transparent"
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
