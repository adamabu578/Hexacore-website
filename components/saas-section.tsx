import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SaasSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image
            src="/assets/saas.svg"
            alt="All Banking, one SaaS"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
           Every Banking Need. One Smart SaaS.
          </h2>
          <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           Launch fully equipped solutions for every banking segment faster than ever using Hexacore SaaS Enterprise Service.
          </p>
          <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">
           Discover the Power of Enterprise Service
          </Button>
        </div>
      </div>
    </section>
  )
}
