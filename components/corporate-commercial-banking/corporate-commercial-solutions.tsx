import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateCommercialSolutions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#153365]">
      Explore the Future of Corporate & Commercial Banking
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/commercial.jpg"
              alt="Digital Corporate Banking"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#153365] mb-3">Digital Corporate Banking</h3>
              <p className="text-temenos-gray mb-4">
                From small enterprises to global corporates, our digital corporate banking platform empowers you to enhance client engagement, optimize operations, and capture new growth opportunities.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Explore Corporate Banking <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/front-office.jpg"
              alt="Corporate Front Office"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#153365] mb-3">Corporate Front Office Solutions</h3>
              <p className="text-temenos-gray mb-4">
                Hexacore Corporate Front Office empowers relationship managers and corporate advisors with advanced profiling, modeling, risk, compliance, and performance tools, offering ready-to-use workflows that can be fully customized to meet each client’s unique needs.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Explore Corporate Front Office <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/treasury.jpg"
              alt="Trade Finance Solutions"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#153365] mb-3">Digital Trade Finance Solutions</h3>
              <p className="text-temenos-gray mb-4">
               Hexacore Trade Finance streamlines back-office operations and boosts efficiency. Our flexible, cloud-native platform supports the full trade finance lifecycle and enables real-time processing across multiple asset classes.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Explore Our Trade Finance Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/assets/corporate-analytic.jpg"
              alt="Corporate Data Analytics"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#153365] mb-3">Corporate Data Analytics</h3>
              <p className="text-temenos-gray mb-4">
               Hexacore DataSource improves data quality, automates management, adapts to changes, and reduces costs and risks.
              </p>
              <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
                Explore Data Analytics <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
