import { Card, CardContent } from "@/components/ui/card"
import { Users, DollarSign, Clock } from "lucide-react"

export default function CorporateCommercialSegmentRealResults() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Real Results for Our Corporate & Commercial Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg rounded-lg bg-white">
            <CardContent className="flex flex-col items-center justify-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-5xl font-bold text-gray-900 mb-2">90%</p>
              <p className="text-lg text-gray-600">Increase in customer satisfaction</p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg rounded-lg bg-white">
            <CardContent className="flex flex-col items-center justify-center">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-5xl font-bold text-gray-900 mb-2">30%</p>
              <p className="text-lg text-gray-600">Reduction in operational costs</p>
            </CardContent>
          </Card>
          <Card className="p-6 shadow-lg rounded-lg bg-white">
            <CardContent className="flex flex-col items-center justify-center">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <p className="text-5xl font-bold text-gray-900 mb-2">50%</p>
              <p className="text-lg text-gray-600">Faster time to market for new products</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
