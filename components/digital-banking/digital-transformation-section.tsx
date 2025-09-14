import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DigitalTransformationSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#153365] text-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg text-temenos-blue">
          <Image
            src="/assets/digital-hero.jpg"
            alt="Elevate customer experience"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover h-[200px] w-full"
          />
          <h3 className="text-xl font-bold mb-2">Elevate your customers banking experience</h3>
          <p className="text-temenos-gray mb-4">
            Attract new customers, grow your revenue, and ensure customer loyalty with Temenos&apos; innovative banking
            solutions.
          </p>
          <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">Start exploring</Button>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg text-[#153365]">
          <Image
            src="/assets/transform.jpg"
            alt="Transform your bank from within"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover h-[200px] w-full"
          />
          <h3 className="text-xl font-bold mb-2">Transform your bank from within</h3>
          <p className="text-temenos-gray mb-4">
            Behind every smart banking solution is intelligent technology, smooth workflows and empowered teams.
          </p>
          <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">Start exploring</Button>
        </div>
      </div>
    </section>
  )
}
