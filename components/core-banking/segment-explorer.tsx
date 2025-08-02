import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SegmentExplorer() {
  const segments = [
    {
      title: "Core for Retail Banking",
      description:
        "Retail banking is changing fast, but with Temenos Core for Retail we provide access to rich and modular core capabilities so you can offer the latest personalized and relevant products.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Core for Business Banking",
      description:
        "Modern businesses need modern financial services. With Temenos Core for Business, you can provide mass-market financial products while also addressing the diverse needs of individual businesses.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Core for Corporate and Commercial Banking",
      description:
        "Corporate and commercial banks need modern, flexible financial software. Temenos Core delivers unique modular capabilities tailored to these specific and often complex needs.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Treasury",
      description:
        "Real-time treasury to strengthen risk control, increase efficiency, ensure compliance, and drive profitability. Accelerate growth through smarter capital and liquidity management.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Leverage our global experience across all banking segments to manage risk, remain compliant, and deliver trusted banking services.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Financial Risk Management",
      description:
        "A pre-configured risk analytics solution to industrialize your risk and regulatory function, improve business decisions and optimize performance.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Analytics",
      description:
        "Analytics delivers clear insights into financial and product performance, profitability, and customer behavior, empowering smarter, data-driven decisions and growth.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Data Hub",
      description:
        "Transform banking with real-time data, AI acceleration, and seamless integration with a fully integrated and embedded data platform.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Explore core banking in your segment
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
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{segment.title}</h3>
              <p className="text-temenos-gray mb-4">{segment.description}</p>
              <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
                Explore {segment.title.split(" ")[2] || segment.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
