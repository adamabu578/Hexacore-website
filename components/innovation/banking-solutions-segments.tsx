import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BankingSolutionsSegments() {
  const segments = [
    {
      title: "Retail and Business Banking",
      description:
        "Combining innovation and personalization, create banking solutions that address the unique challenges and goals of individual consumers and business clients. Our products are convenient, secure, and flexible, empowering your customers to manage their finances effectively while strengthening their loyalty to you.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/retail-business-banking",
    },
    {
      title: "Corporate and Commercial Banking",
      description:
        "Manage your entire portfolio on a single, integrated platform, including corporate and commercial lending, supply-chain finance, trade finance, and cash management. Temenos automates processes, and supports faster decision making with real time services.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/corporate-commercial-banking",
    },
    {
      title: "Wealth Management",
      description:
        "Transform your wealth management services with Temenos. Our advanced front-to-back solution is designed to reduce costs through core automation and drive end-to-end digital transformation. Trusted by leading global financial institutions and boutique firms, we drive efficiency, innovation, and sustainable growth.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/wealth-management",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
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
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{segment.title}</h3>
              <p className="text-temenos-gray mb-4">{segment.description}</p>
              <Link href={segment.link}>
                <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
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
