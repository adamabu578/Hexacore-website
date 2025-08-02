import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Clock, CheckSquare, DollarSign, BarChart } from "lucide-react"

export default function CorporateCommercialIndustrySolution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-temenos-blue">
          The de-facto solution for the corporate & commercial industry
        </h2>
        <p className="text-lg md:text-xl max-w-[800px] mx-auto mb-12 text-temenos-gray">
          Transform your corporate and commercial banking services with Temenos. Our advanced front to back banking
          solution is designed to reduce costs through core automation and drive your end-to-end digital transformation
          journey. Trusted by leading global financial institutions and boutique firms, we drive efficiency, innovation,
          and sustainable growth – setting you apart in a competitive market.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Lightbulb className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Exceptional customer experience</h3>
            <p className="text-temenos-gray">
              Redefine client experiences with self-service portals, hybrid advisory, and AI-based smart advice.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <TrendingUp className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Boost productivity</h3>
            <p className="text-temenos-gray">
              Increase productivity managing one or thousands of accounts simultaneously.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Quicker time-to-market</h3>
            <p className="text-temenos-gray">
              Accelerate time-to-market with open APIs, DevOps investing and support, and product flexibility in a
              curated partner ecosystem.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <CheckSquare className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Compliance risk mitigation</h3>
            <p className="text-temenos-gray">
              Mitigate compliance risks with versatile pre- and post-trade controls, modular solutions, and global/local
              regulatory support.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <DollarSign className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">High STP rates</h3>
            <p className="text-temenos-gray">
              Achieve high straight-through-processing rates with automated front-to-back processes, industry standards,
              and full automation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <BarChart className="h-12 w-12 text-temenos-blue mb-4" />
            <h3 className="text-xl font-bold text-temenos-blue mb-2">Adapted cost model</h3>
            <p className="text-temenos-gray">
              Flexible cost model with SaaS, cloud, or on-premise deployment, a scalable platform, and multi-entity
              efficiency.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Button className="bg-temenos-blue hover:bg-temenos-blue-hover text-white px-8 py-6 text-lg font-semibold">
            Explore all solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
