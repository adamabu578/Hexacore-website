import { PlayCircle } from "lucide-react"
import Image from "next/image"

export function HighestStandardsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
           Leading the Way in Modern Banking
          </h2>
          <p className="text-temenos-gray md:text-lg">
           Our clients demand the highest standards in risk, data, regulation, ESG, and security. Hexacore SaaS meets these requirements across 30+ regulatory regions, delivering market-leading capabilities that power exceptional banking experiences.
          </p>
        </div>
        <div className="relative flex items-center justify-center h-[300px] md:h-[400px] lg:h-[500px] w-full bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/assets/smartsystem1.jpeg"
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <button className="absolute z-10 text-white">
            <PlayCircle className="h-20 w-20 fill-[#153365] stroke-white" />
            <span className="sr-only">Play video</span>
          </button>
        </div>
      </div>
    </section>
  )
}
