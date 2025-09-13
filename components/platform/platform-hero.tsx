import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PlatformHero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#153365]">
              Hexacore Banking Platform
            </h1>
            <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
           One unified platform for forward-thinking banks.
            </p>
          </div>
          <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">Connect with us</Button>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/assets/platform-hero.jpg"
            alt="Temenos Banking Platform"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
