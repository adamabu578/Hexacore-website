import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CorporateCommercialIndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-temenos-blue">Industry recognition</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Featured in Corporate Banking 100 2024</h3>
            <p className="text-temenos-gray mb-4">
              Temenos has been recognized in the Corporate Banking 100 list of world's most innovative Corporate Banking
              companies for 2024.
            </p>
            <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Leader in Forrester Wave for Corporate Banking</h3>
            <p className="text-temenos-gray mb-4">
              Temenos was named a Leader among Digital Corporate Banking Platform (DCBP) providers according to The
              Forrester Wave™.
            </p>
            <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Leader and Transformer in Aite Matrix</h3>
            <p className="text-temenos-gray mb-4">
              Temenos awarded the highest status in Aite's Matrix Evaluation of corporate banking-focused core banking
              systems.
            </p>
            <Link href="#" className="inline-flex items-center text-temenos-blue hover:underline font-medium">
              Read the report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
