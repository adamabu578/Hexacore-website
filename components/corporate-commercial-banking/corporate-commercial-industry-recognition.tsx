import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CorporateCommercialIndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-[#153365]">Trusted by the Industry</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-[#153365] mb-2">Recognized in Corporate Banking 100, 2024</h3>
            <p className="text-temenos-gray mb-4">
            Hexacore earns a spot in the 2024 Corporate Banking 100, highlighting its innovation in corporate banking.
            </p>
            <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-[#153365] mb-2">Recognized Leader in Corporate Banking by Forrester</h3>
            <p className="text-temenos-gray mb-4">
             According to The Forrester Wave™, Hexacore is recognized as a Leader in Digital Corporate Banking Platforms.
            </p>
            <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-[#153365] mb-2">Recognized as Leader and Transformer by Aite Matrix</h3>
            <p className="text-temenos-gray mb-4">
              Hexacore awarded the highest status in Aite's Matrix Evaluation of corporate banking-focused core banking
              systems.
            </p>
            <Link href="#" className="inline-flex items-center text-[#153365] hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
