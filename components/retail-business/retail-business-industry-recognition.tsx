import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function RetailBusinessIndustryRecognition() {
  const recognitions = [
    {
      title: "Hexacore has been named the #1 best-selling banking software provider across eight categories by IBS Intelligence.",
      description:
        "IBS Intelligence: 700+ deals, best solutions ranked.",
      linkText: "Read the report",
      linkHref: "#",
    },
    {
      title: "Hexacore recognized as a Leader in Forrester’s Q4 2024 Digital Banking Processing Platforms report.",
      description:
        "Recognized for “extensive functionality across retail, SMB, and corporate banking” in Forrester’s Q4 2024 report.",
      linkText: "Read the report",
      linkHref: "#",
    },
    {
      title: "IDC MarketScape names Hexacore a Leader in Digital Core Banking, North America.",
      description:
        "Hexacore: IDC MarketScape Leader 2024 – Digital Core Banking (NA).",
      linkText: "Read the report",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          Industry recognition
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recognitions.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#153365] mb-2 line-clamp-3">{item.title}</h3>
              <p className="text-sm text-temenos-gray mb-4 line-clamp-5">{item.description}</p>
              <Link
                href={item.linkHref}
                className="inline-flex items-center text-[#153365] hover:underline font-medium"
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
