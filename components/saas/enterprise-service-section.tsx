import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

export function EnterpriseServiceSection() {
  const services = [
    {
      title: "All banking, one service",
      description:
        "Enterprise Service unlocks the core and digital banking technology you've been waiting for. Easy to consume and configure, functionally rich, and proven to meet new client demands with every iteration.",
      image: "/placeholder.svg?height=200&width=300",
      type: "video",
      linkText: "Watch video",
      linkHref: "#",
    },
    {
      title: "The shift to SaaS",
      description:
        "Explore how SaaS helps banks to navigate disruption and stay competitive. Banks can fast track their transition to cloud while also improving agility to support business and regulatory shifts.",
      image: "/placeholder.svg?height=200&width=300",
      type: "blog",
      linkText: "Read blog",
      linkHref: "#",
    },
    {
      title: "Explore the Enterprise Service",
      description:
        "Enterprise Service on Temenos SaaS supports banks with banking-grade resiliency, risk management, security and change control to meet governance and regulatory obligations in 30+ regulated regions.",
      image: "/placeholder.svg?height=200&width=300",
      type: "factsheet",
      linkText: "View fact sheet",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Enterprise Service on Temenos SaaS
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="relative h-[200px] w-full rounded-lg mb-4 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {service.type === "video" && (
                  <button className="absolute inset-0 flex items-center justify-center z-10 text-white">
                    <PlayCircle className="h-16 w-16 fill-temenos-blue stroke-white" />
                    <span className="sr-only">Play video</span>
                  </button>
                )}
              </div>
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{service.title}</h3>
              <p className="text-temenos-gray mb-4">{service.description}</p>
              <Link href={service.linkHref}>
                <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
                  {service.linkText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
