import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function DigitalBankingHero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#153365]">
              Digital Banking
            </h1>
            <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Accelerate innovation with Hexacore Digital Banking, the cloud-native platform that enables AI-powered financial services with speed and flexibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="w-fit bg-[#28B1D3] hover:bg-[#153365] text-white">Connect with us</Button>
            <Link
              href="#"
              className="inline-flex items-center justify-center text-[#153365] hover:underline font-medium"
            >
              View fact sheet <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/assets/digital1.jpg"
            alt="Digital Banking Solutions"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
