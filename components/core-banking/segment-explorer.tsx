import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SegmentExplorer() {
  const segments = [
    {
      title: "Core for Retail Banking",
      description:
        "As retail banking transforms, Hexacore Core for Retail equips you with rich, modular core capabilities to offer customers the latest tailored and relevant products.",
      image: "/assets/retail-core.jpg",
      link: "#",
    },
    {
      title: "Core for Business Banking",
      description:
        "mpower modern businesses with modern financial services—Hexacore for Business combines mass-market offerings with tailored solutions for individual needs.",
      image: "/assets/core-business.jpg",
      link: "#",
    },
    {
      title: "Core for Corporate and Commercial Banking",
      description:
        "Hexacore empowers corporate and commercial banks with flexible, modular solutions designed for their specific and often complex requirements.",
      image: "/assets/corporate.jpg",
      link: "#",
    },
    {
      title: "Treasury",
      description:
        "Real-time treasury that strengthens risk control, boosts efficiency, ensures compliance, and drives profitability—empowering smarter capital and liquidity management for accelerated growth.",
      image: "/assets/treasury.jpg",
      link: "#",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Leverage worldwide banking experience to control risk, stay compliant, and provide reliable financial services.",
      image: "/assets/regulatory.jpg",
      link: "#",
    },
    {
      title: "Financial Risk Management",
      description:
        "Optimize performance and decision-making with a risk analytics solution that industrializes your risk and regulatory function.",
      image: "/assets/risk-manage.jpg",
      link: "#",
    },
    {
      title: "Analytics",
      description:
        "Analytics unlocks visibility into financial and product performance, enabling smarter decisions, improved profitability, and sustainable growth.",
      image: "/assets/analytics.jpg",
      link: "#",
    },
    {
      title: "Data Hub",
      description:
        "Transform banking with real-time data, AI acceleration, and seamless integration through a fully embedded data platform.",
      image: "/assets/data-hub.jpg",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
        Experience core banking built for your industry
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={segment.image || "/placeholder.svg"}
                alt={segment.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{segment.title}</h3>
              <p className="text-temenos-gray mb-4">{segment.description}</p>
              <Button className="w-fit bg-[#28B1D3] hover:bg-[#153365] text-white">
                Explore {segment.title.split(" ")[2] || segment.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
