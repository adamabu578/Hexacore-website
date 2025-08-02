import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function SaasRealResults() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
          Real results
        </h2>
        <Button className="mb-12 bg-temenos-blue hover:bg-temenos-blue-hover text-white">
          Explore all success stories
        </Button>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-temenos-gray mb-6">
            &ldquo;Going live inside one year was really pleasing, the support from Temenos accelerated the changeover,
            and the fact we run the systems with minimal customizations reduced the complexity and the learning curve on
            the Temenos SaaS was quick and easy.&rdquo;
          </p>
          <p className="font-semibold text-temenos-blue">Daniel Broten</p>
          <p className="text-sm text-temenos-gray mb-6">Chief Technology Officer, EQ Bank</p>
          <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
            Explore EQ Bank&apos;s story <ArrowRight className="ml-2 h-4 w-4" />
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
