import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function CorporateCommercialIntegratedSolutions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Integrated Solutions for Comprehensive Corporate Banking
          </h2>
          <p className="text-lg text-gray-700">
            Our comprehensive suite of solutions covers the entire spectrum of corporate and commercial banking,
            providing a unified platform for efficiency and growth.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>**Core Banking:** Robust and scalable core systems to manage accounts, loans, and deposits.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>**Digital Channels:** Seamless online and mobile banking experiences for corporate clients.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                **Payments & Treasury:** Efficient processing of domestic and international payments, and treasury
                management.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>**Trade Finance:** Solutions to facilitate international trade and supply chain finance.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <span>
                **Lending & Credit:** Advanced capabilities for corporate lending, credit assessment, and risk
                management.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg?height=500&width=700"
            alt="Integrated Corporate Banking Solutions"
            width={700}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
