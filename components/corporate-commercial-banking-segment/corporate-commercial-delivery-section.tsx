import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, ShieldCheck } from "lucide-react"

export default function CorporateCommercialDeliverySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Deliver Exceptional Corporate & Commercial Banking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">Innovative Solutions</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              Leverage cutting-edge technology to offer innovative products and services that meet evolving business
              needs.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">Drive Growth</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              Enable rapid growth for your corporate clients with agile and scalable banking infrastructure.
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 shadow-lg rounded-lg">
            <CardHeader>
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800">Enhanced Security</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              Ensure the highest levels of security and compliance for all corporate transactions and data.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
