import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CustomerExperienceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#28B1D3] text-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg text-temenos-blue">
          <Image
            src="/assets/elevate-buisness.jpg"
            alt="Elevate customer experience"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover h-[200px] w-full"
          />
          <h3 className="text-xl font-bold mb-2 text-[#153365]">Enhance your customers’ banking experience</h3>
          <p className="text-temenos-gray mb-4">
            Hexacore’s cutting-edge banking solutions help you attract customers, increase revenue, and drive loyalty.
          </p>
          <Button className="w-fit bg-[#28B1D3] hover:bg-[#153365] text-white">Start exploring</Button>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg text-temenos-blue">
          <Image
            src="/assets/elevate.jpg"
            alt="Transform your bank from within"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover h-[200px] w-full"
          />
          <h3 className="text-xl font-bold mb-2 text-[#153365]">Drive transformation at the core of your bank</h3>
          <p className="text-temenos-gray mb-4">
           Intelligent technology, streamlined workflows, and empowered teams drive every smart banking solution.
          </p>
          <Button className="w-fit bg-[#28B1D3] hover:bg-[#153365] text-white">Start exploring</Button>
        </div>
      </div>
    </section>
  )
}
