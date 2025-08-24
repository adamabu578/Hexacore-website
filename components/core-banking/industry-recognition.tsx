import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function IndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12">
         Recognized Industry Leader
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {'"Recognized as a Leader in Forrester’s Q4 2025 Wave for Digital Banking Processing Platforms'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
             Hexacore continues to invest heavily in its leading innovation process, which Forrester notes includes advanced and explainable AI.
              </CardDescription>
            </CardContent>
            <Link href="#" className="mt-4 flex items-center text-primary hover:underline text-sm">
             Check Out the Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {"Hexacore Positioned as a Leader in the IDC MarketScape for Digital Core – Africa"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
              Hexacore Named a Leader in the IDC MarketScape: Africa Digital Core Banking Platforms 2024 Vendor Assessment
              </CardDescription>
            </CardContent>
            <Link href="#" className="mt-4 flex items-center text-primary hover:underline text-sm">
             Check Out the Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {"Hexacore Named #1 Best-Selling Banking Software Provider in 10 Categories by IBS Intelligence"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
               Evaluating more than 800 banking industry deals, the IBS Intelligence Sales League Table 2025 identified the top-performing and best-selling solutions
              </CardDescription>
            </CardContent>
            <Link href="#" className="mt-4 flex items-center text-primary hover:underline text-sm">
              Download report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}
