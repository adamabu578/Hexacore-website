import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BankingCapabilities() {
  const capabilities = [
    {
      title: "Core Banking",
      description:
        "Provide cutting-edge, end-to-end banking solutions that enhance customer relationships through speed and efficiency.",
      link: "#",
    },
    {
      title: "Digital Banking",
      description:
        "Design personalized experiences and implement robust transactional processes to boost performance and drive transformation.",
      link: "#",
    },
    {
      title: "Payments",
      description:
        "Drive payment growth through secure real-time processing, rapid innovation, and exceptional user experiences.",
      link: "#",
    },
    {
      title: "Wealth Management",
      description:
        "Achieve efficiency and long-term growth with our advanced solution designed to lower costs and enable complete transformation.",
      link: "#",
    },
    {
      title: "Financial Crime Mitigation",
      description:
        "Monitor, resolve, and report financial crime risks spanning KYC, sanctions, fraud, watchlists, and AML.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          A comprehensive suite of end-to-end banking capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between p-6 rounded-lg shadow-sm border-gray-100 bg-temenos-light-bg"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-[#153365]">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-temenos-gray mb-4">{capability.description}</p>
              </CardContent>
              <Link
                href={capability.link}
                className="inline-flex items-center text-[#153365] hover:underline font-medium"
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
