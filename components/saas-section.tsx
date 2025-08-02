import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SaasSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image
            src="/assets/saas.jpg"
            alt="All Banking, one SaaS"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            All Banking, one SaaS
          </h2>
          <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Deliver ready-to-use solutions across all banking segments faster than ever before with the Enterprise
            Service on Temenos SaaS.
          </p>
          <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
            Discover Enterprise Service
          </Button>
        </div>
      </div>
    </section>
  )
}
