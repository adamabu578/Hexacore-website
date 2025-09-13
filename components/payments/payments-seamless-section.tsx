import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PaymentsSeamlessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full order-2 lg:order-1">
          <Image
            src="/assets/pay-card.jpg"
            alt="Payments made seamless"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#28B1D3]">
            Seamless Payments
          </h2>
          <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Stay ahead with faster, smarter, and more engaging customer services. Hexacore empowers providers with scalable technologies that cut costs, speed up delivery, and create effortless payment experiences.
          </p>
          <Button className="w-fit bg-[#28B1D3] hover:bg-[#153365] text-white">
           Experience Next-Level Enterprise Payments
          </Button>
        </div>
      </div>
    </section>
  )
}
