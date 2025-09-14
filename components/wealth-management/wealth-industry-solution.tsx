import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WealthIndustrySolution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
             Wealth Management, Elevated
            </h2>
            <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A complete, integrated platform empowering wealth managers, private banks, and family offices to adapt and thrive in a changing landscape
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">Request a Demo</Button>
            <Link
              href="#"
              className="inline-flex items-center justify-center text-[#153365] hover:underline font-medium"
            >
              Download Brochure <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/assets/success.jpg"
            alt="Wealth Industry Solution"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
