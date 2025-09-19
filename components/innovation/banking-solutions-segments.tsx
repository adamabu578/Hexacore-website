import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BankingSolutionsSegments() {
  const segments = [
    {
      title: "Banking for Retail and Business",
      description:
        "Innovative, personalized banking that empowers customers and builds loyalty.",
      image: "/assets/retail-hero.jpg",
      link: "/retail-business-banking",
    },
    {
      title: "Corporate and Commercial Banking",
      description:
        "Banking made flexible and scalable for all, from global banks to fintechs.",
      image: "/assets/corporate.jpg",
      link: "/corporate-commercial-banking",
    },
    {
      title: "Wealth Management",
      description:
        "Transform wealth management with Hexacore – smarter, faster, and more efficient.",
      image: "/assets/wealth.jpg",
      link: "/wealth-management",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          Banking solutions for all segments
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Image
                src={segment.image || "/placeholder.svg"}
                alt={segment.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{segment.title}</h3>
              <p className="text-temenos-gray mb-4">{segment.description}</p>
              <Link href={segment.link}>
                <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">
                  Explore {segment.title.split(" ")[0]}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
