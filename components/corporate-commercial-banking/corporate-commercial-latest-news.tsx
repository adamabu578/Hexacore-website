import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateCommercialLatestNews() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#153365]">Latest news</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/news1.jpg"
              alt="News Image 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#153365] mb-2">AI-Powered Corporate Lending</h3>
              <p className="text-temenos-gray mb-4">
                AI-driven solutions revolutionize corporate lending by enhancing efficiency and risk management.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/news2.jpg"
              alt="News Image 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#153365] mb-2">The Future of Commercial Payments</h3>
              <p className="text-temenos-gray mb-4">
                New technologies and evolving customer needs are transforming the commercial payments ecosystem.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/new3.jpg"
              alt="News Image 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#153365] mb-2">Empowering Corporate Clients with Open Banking</h3>
              <p className="text-temenos-gray mb-4">
                Open banking empowers corporate clients with greater control and improved financial management.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Read blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
