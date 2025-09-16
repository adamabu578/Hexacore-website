import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Clock, CheckSquare, DollarSign, BarChart } from "lucide-react"

export default function CorporateCommercialIndustrySolution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#153365]">
         The Leading Solution for Corporate & Commercial Banking
        </h2>
        <p className="text-lg md:text-xl max-w-[800px] mx-auto mb-12 text-temenos-gray">
          Hexacore transforms corporate and commercial banking with automated, end-to-end solutions that drive efficiency, innovation, and sustainable growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Lightbulb className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">Delivering Excellence in Customer Experience</h3>
            <p className="text-temenos-gray">
             Redefine client experiences with self-service, hybrid advisory, and AI-driven advice.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <TrendingUp className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">Drive Productivity</h3>
            <p className="text-temenos-gray">
             Boost productivity by efficiently handling one to thousands of accounts at once.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">Faster Time-to-Market</h3>
            <p className="text-temenos-gray">
             Leverage APIs, DevOps, and flexible products within a curated partner ecosystem to accelerate time-to-market.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <CheckSquare className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">Compliance Protection</h3>
            <p className="text-temenos-gray">
            Manage compliance effectively with adaptable trade controls, modular solutions, and guidance on local and global regulations.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <DollarSign className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">High STP rates</h3>
            <p className="text-temenos-gray">
             Ensure efficient straight-through-processing with end-to-end automation and industry-standard practices.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <BarChart className="h-12 w-12 text-[#28B1D3] mb-4" />
            <h3 className="text-xl font-bold text-[#153365] mb-2">Adapted cost model</h3>
            <p className="text-temenos-gray">
            Flexible deployment options and a scalable platform for maximum efficiency across multiple entities.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Button className="bg-[#15336] hover:bg-[#28B1D3] text-white px-8 py-6 text-lg font-semibold">
          Explore Our Full Range of Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
