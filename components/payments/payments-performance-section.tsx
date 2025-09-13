import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { VideoSection } from "@/components/payments/payment-video-section"

export function PaymentsPerformanceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#28B1D3]">
           Powerful Features. Limitless Scale.
          </h2>
          <p className="text-temenos-gray md:text-lg">
            &ldquo;Payments have always been at the core of Hexacore’ DNA. From the very beginning, we have been delivering payment processing solutions—and today, thousands of banks worldwide trust Hexacore to power their payments.&rdquo;
          </p>
          <p className="text-temenos-gray md:text-lg">
           Explore the Hexacore Payments ecosystem.
          </p>
        </div>
        <div className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden">
         <VideoSection
              title="Product Demo"
              description="Watch our product demo to see how our solution can help your business."
              videoSrc="/assets/pay-video.mp4"
              videoType="self-hosted"
              posterImage="/assets/payment.jpg"
            />
          {/* <button className="absolute z-10 text-white">
            <PlayCircle className="h-20 w-20 fill-temenos-blue stroke-white" />
            <span className="sr-only">Play video</span>
          </button> */}
        </div>
      </div>
    </section>
  )
}
