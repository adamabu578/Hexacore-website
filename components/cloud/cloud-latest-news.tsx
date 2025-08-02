import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CloudLatestNews() {
  const newsItems = [
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Transforming sanctions screening is essential for banks",
      description: "Sanctions compliance is no longer just a legal obligation.",
      link: "#",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Navigating AI's potential in Wealth Management",
      description: "AI is transforming wealth management in APAC and MEA, driving a major industry shift.",
      link: "#",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "QRIS, E-Wallets, digital Rupiah and BNPL",
      description:
        "QRIS, e-wallets, and BNPL are reshaping digital payments in Indonesia with fast, innovative solutions.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-8">
          Latest news
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="rounded-lg shadow-sm overflow-hidden bg-white">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={200}
                objectFit="cover"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-temenos-blue mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-temenos-gray mb-4 line-clamp-3">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-temenos-blue hover:underline font-medium"
                >
                  Read blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
