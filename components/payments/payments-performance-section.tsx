import { PlayCircle } from "lucide-react"
import Image from "next/image"

export function PaymentsPerformanceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            Best of breed functionality with scalable performance
          </h2>
          <p className="text-temenos-gray md:text-lg">
            &ldquo;Payments has always been part of the Temenos DNA. Right from the start, when Temenos was founded, we
            were delivering payments processing and we now have thousands of banks around the world who rely on Temenos
            to process their payments.&rdquo;
          </p>
          <p className="text-temenos-gray md:text-lg">
            Hear more from Mick Fennell, Business Line Director – Payments, as he explores the Temenos Payments
            ecosystem.
          </p>
        </div>
        <div className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <button className="absolute z-10 text-white">
            <PlayCircle className="h-20 w-20 fill-temenos-blue stroke-white" />
            <span className="sr-only">Play video</span>
          </button>
        </div>
      </div>
    </section>
  )
}
