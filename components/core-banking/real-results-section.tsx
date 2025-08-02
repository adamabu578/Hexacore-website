import { Card, CardContent } from "@/components/ui/card"
import { BarChart, LineChart, TrendingUp } from "lucide-react"

export function RealResultsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-temenos-blue mb-12">
          Delivering Real Results for Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center">
              <BarChart className="h-12 w-12 text-temenos-blue mb-4" />
              <h3 className="text-4xl font-bold text-temenos-blue mb-2">30%</h3>
              <p className="text-gray-700 text-lg">Reduction in operational costs</p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center">
              <LineChart className="h-12 w-12 text-temenos-blue mb-4" />
              <h3 className="text-4xl font-bold text-temenos-blue mb-2">25%</h3>
              <p className="text-gray-700 text-lg">Increase in customer acquisition</p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center">
              <TrendingUp className="h-12 w-12 text-temenos-blue mb-4" />
              <h3 className="text-4xl font-bold text-temenos-blue mb-2">40%</h3>
              <p className="text-gray-700 text-lg">Faster time to market for new products</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
