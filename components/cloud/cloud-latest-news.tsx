import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CloudLatestNews() {
  const newsItems = [
    {
      image: "/assets/news1.jpg",
      title: "Transforming sanctions screening is critical for modern banking.",
      description: "Sanctions compliance: more than a legal obligation—it’s a business imperative.",
      link: "#",
    },
    {
      image: "/assets/news2.jpg",
      title: "Unlocking AI’s Potential in Wealth Management",
      description: "AI is reshaping wealth management in APAC and MEA, driving significant industry change.",
      link: "#",
    },
    {
      image: "/assets/new3.jpg",
      title: "Driving financial innovation with QRIS, E-Wallets, Digital Rupiah, and BNPL.",
      description:
        " eNaira, e-wallets are reshaping Nigeria’s digital payments ecosystem.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
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
                <h3 className="text-lg font-semibold text-[#153365] mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-temenos-gray mb-4 line-clamp-3">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-[#153365] hover:underline font-medium"
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
