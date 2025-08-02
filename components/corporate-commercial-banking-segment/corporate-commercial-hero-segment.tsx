import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporateCommercialHeroSegment() {
  return (
    <section className="relative w-full h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=500&width=700"
        alt="Corporate & Commercial Banking Hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
      />
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Corporate & Commercial Banking</h1>
        <p className="text-lg md:text-xl lg:text-2xl opacity-90">
          Empowering financial institutions to deliver exceptional services to businesses of all sizes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
            <Link href="#solutions">Explore Solutions</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg rounded-full bg-transparent"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
