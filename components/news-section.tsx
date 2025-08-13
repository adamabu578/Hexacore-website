import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function NewsSection() {
  const newsItems = [
    {
      image: "/assets/journalist.svg",
      title: "Hexacore Earns Recognition from Leading Fintech Companies",
      description: "Hexacore secures its spot once again on the elite list of enterprise fintech leaders.",
      link: "#",
    },
    {
      image: "/assets/medium-shot.svg",
      title: "Hexacore Earns Recognition from Leading Fintech Companies",
      description:
         "Hexacore recognized for its customer focus, global scale and continuous innovation, helping banks succeed in the digital era.",
      link: "#",
    },
    {
      image: "/assets/journalist-man.jpg",
      title: "Hexacore Named World's Best Core Banking Solution by opay",
      description:
        "Hexacore recognized for its customer focus, global scale and continuous innovation, helping banks succeed in the digital era.",
      link: "#",
    },
    {
      image: "/assets/news.jpg",
      title: "Hexacore announces closing of new USD 500m Revolving Credit Facility",
      description:
        "Hexacore recognized for its customer focus, global scale and continuous innovation, helping banks succeed in the digital era.",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-8">
          Latest news from Hexacore
        </h2>
        <Button className="mb-12 bg-[#153365] hover:bg-temenos-blue-hover text-white">See all press releases</Button>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-temenos-gray mb-4 line-clamp-3">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-[#153365] hover:underline font-medium"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-temenos-blue text-[#153365] hover:bg-[#28B1D3]hover:text-white bg-[#28B1D3]"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Previous news</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-temenos-blue text-temenos-blue hover:bg-temenos-blue hover:text-white bg-[#28B1D3]"
          >
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">Next news</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
