import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporateCommercialFutureOfBankingCta() {
  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white text-center">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Transform Your Corporate & Commercial Banking?
        </h2>
        <p className="text-lg md:text-xl opacity-90">
          Partner with us to build a future-proof banking operation that drives efficiency, growth, and customer
          satisfaction.
        </p>
        <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
          <Link href="/contact">Request a Demo</Link>
        </Button>
      </div>
    </section>
  )
}
