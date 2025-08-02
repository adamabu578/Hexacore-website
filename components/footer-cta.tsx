import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FooterCta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-blue text-white">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            The future of banking starts here
          </h2>
        </div>
        <div className="bg-white text-temenos-blue p-6 rounded-lg shadow-lg flex items-center justify-between gap-4 w-full md:w-auto">
          <div>
            <h3 className="text-xl font-bold mb-2">Contact the team</h3>
            <p className="text-temenos-gray">We&apos;re here to help.</p>
          </div>
          <Link href="#" className="text-temenos-blue hover:text-temenos-blue-hover">
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
