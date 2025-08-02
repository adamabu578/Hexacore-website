import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function PaymentsHero() {
  const breadcrumbItems = [
    { label: "Products", href: "/products" },
    { label: "Payments", href: "/payments" },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-temenos-blue text-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <Breadcrumbs items={breadcrumbItems} className="text-white" />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">Payments</h1>
            <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Innovate and comply at scale with Temenos payments solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="w-fit bg-temenos-teal hover:bg-temenos-teal/90 text-white">Connect with us</Button>
            <Link href="#" className="inline-flex items-center justify-center text-white hover:underline font-medium">
              View fact sheet <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Payments Solutions"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
