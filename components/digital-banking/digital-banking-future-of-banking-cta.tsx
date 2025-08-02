import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function DigitalBankingFutureOfBankingCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            The future of banking starts here
          </h2>
          <p className="max-w-[600px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how our platform helps financial institutions navigate change, embrace new opportunities, and
            deliver smarter, faster banking. Together, we embrace the future of finance – Leading Banking Forward.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:justify-end space-y-4">
          <Card className="w-full p-6 rounded-lg shadow-lg bg-white text-temenos-blue">
            <CardContent className="flex flex-col items-start space-y-4">
              <Link href="#" className="inline-flex items-center font-medium hover:underline">
                Contact the team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full p-6 rounded-lg shadow-lg bg-white text-temenos-blue">
            <CardContent className="flex flex-col items-start space-y-4">
              <Link href="#" className="inline-flex items-center font-medium hover:underline">
                Attend an event <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full p-6 rounded-lg shadow-lg bg-white text-temenos-blue">
            <CardContent className="flex flex-col items-start space-y-4">
              <Link href="#" className="inline-flex items-center font-medium hover:underline">
                Explore resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card className="w-full p-6 rounded-lg shadow-lg bg-white text-temenos-blue">
            <CardContent className="flex flex-col items-start space-y-4">
              <Link href="#" className="inline-flex items-center font-medium hover:underline">
                Newsletter sign-up <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
