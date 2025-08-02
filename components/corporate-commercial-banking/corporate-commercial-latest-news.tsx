import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateCommercialLatestNews() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-temenos-blue">Latest news</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="News Image 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-temenos-blue mb-2">Transforming corporate lending with AI</h3>
              <p className="text-temenos-gray mb-4">
                AI-powered solutions are revolutionizing corporate lending processes, enhancing efficiency and risk
                assessment.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="News Image 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-temenos-blue mb-2">Navigating the future of commercial payments</h3>
              <p className="text-temenos-gray mb-4">
                The commercial payments landscape is evolving rapidly, driven by new technologies and customer demands.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="News Image 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-temenos-blue mb-2">Open banking for corporate clients</h3>
              <p className="text-temenos-gray mb-4">
                Open banking is opening new opportunities for corporate clients, enabling better financial management.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
