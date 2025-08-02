import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RetailBusinessIndustryRecognition() {
  const recognitions = [
    {
      title: "Temenos recognized by IBS Intelligence as #1 best-selling banking software in eight categories",
      description:
        "IBS Intelligence’s annual Sales League Table 2023 evaluated more than 1500 banking industry deals in 2024, identifying the best-selling propositions across numerous categories.",
      linkText: "Read the report",
      linkHref: "#",
    },
    {
      title: "Temenos recognized as a Leader in The Forrester Wave™: Digital Banking Processing Platforms, Q4 2024",
      description:
        "Temenos' “extensive functionality across retail, SMB, and corporate banking lines” was recognized in Q4 2024 Digital Banking Processing Platforms analyst report.",
      linkText: "Read the report",
      linkHref: "#",
    },
    {
      title: "Digital Core - North America: Temenos recognized as a Leader in the IDC MarketScape",
      description:
        "Temenos named a Leader in the IDC MarketScape: North America Digital Core Banking Platforms 2024 Vendor Assessment.",
      linkText: "Read the report",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Industry recognition
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-temenos-blue mb-2 line-clamp-3">{item.title}</h3>
              <p className="text-sm text-temenos-gray mb-4 line-clamp-5">{item.description}</p>
              <Link
                href={item.linkHref}
                className="inline-flex items-center text-temenos-blue hover:underline font-medium"
              >
                {item.linkText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
