import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function CorporateCommercialHero() {
  return (
    <section className="relative w-full bg-temenos-blue text-white py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col">
          {" "}
          {/* Removed space-y-6 */}
          <Breadcrumbs
            items={[
              { label: "Temenos", href: "/" },
              { label: "Segments", href: "/segments" },
              { label: "Corporate & Commercial Banking", href: "/corporate-commercial-banking" },
            ]}
            className="text-white pt-0" // Added pt-0 to align to top
          />
          <div className="space-y-2 mt-4">
            {" "}
            {/* Added mt-4 for spacing after breadcrumbs */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Temenos Corporate & Commercial Banking
            </h1>
            <p className="text-lg md:text-xl max-w-[600px]">
              A single platform of independent capabilities unifying digital, core, and data for corporate and
              commercial banking.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {" "}
            {/* Added mt-6 for spacing after paragraph */}
            <Button className="bg-temenos-teal hover:bg-temenos-teal/90 text-white px-8 py-6 text-lg font-semibold">
              Connect with us
            </Button>
            <Link href="#" className="inline-flex items-center text-white hover:underline text-lg font-semibold">
              View fact sheet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=500&width=700"
            alt="Corporate & Commercial Banking Hero"
            width={700}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
