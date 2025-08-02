import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PaymentsSeamlessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Payments made seamless"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            Payments made seamless
          </h2>
          <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Providers require faster, smarter and better customer engagement services to win new business and grow
            revenues. Temenos leverages advanced, scalable technologies to provide lower cost routings, quicker times to
            market, faster payment deliveries, and frictionless customer experiences.
          </p>
          <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
            Explore Enterprise Payments Processing
          </Button>
        </div>
      </div>
    </section>
  )
}
