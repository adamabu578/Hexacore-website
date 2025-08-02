import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateCommercialSolutions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-temenos-blue">
          Explore our Corporate & Commercial Banking solutions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Digital Corporate Banking"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-temenos-blue mb-3">Digital Corporate Banking</h3>
              <p className="text-temenos-gray mb-4">
                Deliver exceptional client engagement, operational efficiency, and compelling digital experiences.
                Temenos Digital Corporate Banking drives growth across all customer segments, from SMEs to large
                corporates.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Explore Digital Corporate Banking <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Corporate Front Office"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-temenos-blue mb-3">Corporate Front Office</h3>
              <p className="text-temenos-gray mb-4">
                Empower relationship managers and corporate advisors with profiling, modeling, risk, compliance, and
                performance tools. Temenos Corporate Front Office offers ready-to-use workflows which can also be
                customized to match customer needs.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Explore Corporate Front Office <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Trade Finance Solutions"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-temenos-blue mb-3">Trade Finance Solutions</h3>
              <p className="text-temenos-gray mb-4">
                Temenos Trade Finance streamlines back-office operations and enhances efficiency. Our flexible,
                cloud-native solution supports the entire trade finance lifecycle and enables real-time processing
                across multiple asset classes.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Explore Trade Finance <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Corporate Data Analytics"
              width={500}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-temenos-blue mb-3">Corporate Data Analytics</h3>
              <p className="text-temenos-gray mb-4">
                Enhance market and reference data quality with automation, scalability, and flexibility. Temenos
                DataSource manages multiple data sources, adapts to changes, and reduces costs and risks from growing
                data volumes.
              </p>
              <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
                Explore Data Analytics <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
