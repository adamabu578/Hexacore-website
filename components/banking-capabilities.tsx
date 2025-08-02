import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BankingCapabilities() {
  const capabilities = [
    {
      title: "Core Banking",
      description:
        "Deliver innovative and comprehensive banking solutions that strengthen customer relationships, with speed and efficiency.",
      link: "#",
    },
    {
      title: "Digital Banking",
      description:
        "Create personalized experiences, powerful transactional capabilities and processes, to optimize performance and accelerate transformation.",
      link: "#",
    },
    {
      title: "Payments",
      description:
        "Power payments growth with secure, real-time processing, accelerated innovation, and elevated experiences.",
      link: "#",
    },
    {
      title: "Wealth Management",
      description:
        "Drive efficiency and sustainable growth with our advanced solution to reduce costs and power end-to-end transformation.",
      link: "#",
    },
    {
      title: "Financial Crime Mitigation",
      description:
        "Detect, remediate, and report financial crime risks across KYC, sanctions, watchlists, fraud, and AML activities.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          The richest set of end-to-end banking capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between p-6 rounded-lg shadow-sm border-gray-100 bg-temenos-light-bg"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-temenos-blue">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-temenos-gray mb-4">{capability.description}</p>
              </CardContent>
              <Link
                href={capability.link}
                className="inline-flex items-center text-temenos-blue hover:underline font-medium"
              >
                Explore {capability.title} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
