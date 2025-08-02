import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CloudLatestResources() {
  const resources = [
    {
      title: "Temenos Sustainability Benchmark 2024",
      description:
        "Cloud technology is key to deliver sustainability goals. Learn how you can decarbonize your banking operations, by adopting highly scalable banking capabilities using a minimum footprint.",
      linkText: "Read the Report",
      linkHref: "#",
    },
    {
      title: "Maximising Efficiency – Cloud and SaaS",
      description:
        "Learn about the benefits of Cloud and SaaS solutions for financial institutions in this blog post from Temenos' Chief Architect.",
      linkText: "View Blog Post",
      linkHref: "#",
    },
    {
      title: "Temenos Highwater Benchmark 2023",
      description:
        "Delivering the highest levels of performance, with minimal impact. Temenos Highwater Benchmark 2023 demonstrates the scalability and efficiency of our cloud-native platform.",
      linkText: "Read the Report",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
          Latest resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((item, index) => (
            <Card key={index} className="rounded-lg shadow-sm overflow-hidden bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-temenos-blue mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-temenos-gray mb-4 line-clamp-3">{item.description}</p>
                <Link
                  href={item.linkHref}
                  className="inline-flex items-center text-temenos-blue hover:underline font-medium"
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
