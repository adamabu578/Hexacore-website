import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function IndustryRecognition() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12">
          Industry recognition
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {'"Leader" in Forrester Wave: Digital Banking Processing Platforms, Q4 2024'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
                According to Forrester, Temenos invest significantly in an already superior innovation process that
                includes advanced and explainable AI.
              </CardDescription>
            </CardContent>
            <Link href="#" className="mt-4 flex items-center text-primary hover:underline text-sm">
              Explore the Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {"Digital Core - North America: Temenos recognized as a Leader in the IDC MarketScape"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
                Temenos named a Leader in the IDC MarketScape: North America Digital Core Banking Platforms 2024 Vendor
                Assessment.
              </CardDescription>
            </CardContent>
            <Link href="#" className="mt-4 flex items-center text-primary hover:underline text-sm">
              Explore the Report <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Card>
          <Card className="flex flex-col items-center text-center p-4">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {"Temenos Recognized by IBS Intelligence as #1 best-selling banking software in 13 categories"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xs text-muted-foreground">
                IBS Intelligence's annual Sales League Table 2025 evaluated more than 1500 banking industry deals in
                2025, identifying the best-selling propositions across numerous categories.
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
