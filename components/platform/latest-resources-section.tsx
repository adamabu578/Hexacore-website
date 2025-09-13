import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LatestResourcesSection() {
  const resources = [
    {
      title: "Fact Sheet: Workbench and Packager",
      description:
        "Boost efficiency in change management and deliver exceptional banking experiences faster with powerful, best-in-class tools.",
      linkText: "View Fact Sheet",
      linkHref: "#",
    },
    {
      title: "Hexacore Core Fact Sheet",
      description:
        "Powering over 950 banks worldwide, Hexacore Core delivers the broadest and deepest banking capabilities—serving as the true heartbeat of modern banking.",
      linkText: "View Fact Sheet",
      linkHref: "#",
    },
    {
      title: "Sustainability Insights & Benchmark Report 2024",
      description:
        "For banks aiming to accelerate technology performance, the Hexacore Banking Platform offers unmatched scalability with the smallest footprint.",
      linkText: "Read the Report",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
          Latest resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => (
            <Card key={index} className="rounded-lg shadow-sm overflow-hidden bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#153365] mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-temenos-gray mb-4 line-clamp-3">{item.description}</p>
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center text-[#153365] hover:underline font-medium"
                >
                  {item.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
