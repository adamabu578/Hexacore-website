import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function RetailBusinessHero() {
  const breadcrumbItems = [
    { label: "Segments", href: "/segments" },
    { label: "Retail & Business Banking", href: "/retail-business-banking" },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-temenos-blue">
              Temenos for Retail and Business Banking
            </h1>
            <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Build innovative, personalized banking products for retail and business customers.
            </p>
          </div>
          <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">Connect with us</Button>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Retail and Business Banking"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
