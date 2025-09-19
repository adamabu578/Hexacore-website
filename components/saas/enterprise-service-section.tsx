import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlayCircle } from "lucide-react"

export function EnterpriseServiceSection() {
  const services = [
    {
      title: "Unified Banking, One Solution",
      description:
        "Access core and digital banking like never before with Enterprise Service simple, configurable, and continuously improving to meet client needs.",
      image: "assets/saas2.jpg",
      type: "video",
      linkText: "Watch video",
      linkHref: "#",
    },
    {
      title: "The SaaS Revolution",
      description:
        "Learn how SaaS helps banks manage disruption, embrace the cloud, and boost agility to meet evolving requirements.",
      image: "assets/saas3.jpg",
      type: "blog",
      linkText: "Read blog",
      linkHref: "#",
    },
    {
      title: "Unlock Enterprise Service",
      description:
        "Hexacore SaaS Enterprise Service provides banking-grade resiliency, security, and risk controls, ensuring compliance in 30+ regulated regions.",
      image: "/assets/saas4.jpg",
      type: "factsheet",
      linkText: "View fact sheet",
      linkHref: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          Enterprise Service on Hexacore SaaS
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
                    <PlayCircle className="h-16 w-16 fill-[#153365] stroke-white" />
                    <span className="sr-only">Play video</span>
                  </button>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[-[#153365] mb-2">{service.title}</h3>
              <p className="text-temenos-gray mb-4">{service.description}</p>
              <Link href={service.linkHref}>
                <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">
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
