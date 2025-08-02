import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DigitalBankingNeeds() {
  const needs = [
    {
      title: "Digital for Retail Banking",
      description:
        "Simplify your day-to-day banking, empowering customers with seamless experiences, personalized insights, and real-time control of their financial lives. Temenos Digital drives engagement, loyalty, and banking efficiency.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Digital for Business Banking",
      description:
        "Remove the complexity from business banking, providing SMEs with tools and insights so they can focus on running their business and addressing their customers' needs.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Journey Manager",
      description:
        "Deliver faster, easier, and compliant onboarding customer journeys. Reduce manual effort, streamline complex processes, and create personalized journeys to drive higher conversion rates and cost-efficiency.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Islamic Banking",
      description:
        "A flexible and efficient award-winning solution, delivering Shari'ah-compliant experiences using a combination of digital and human interaction, leveraging advanced product-building capabilities and modern technology to create offerings that are compliant and personalized.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Digital banking for all your needs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {needs.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{item.title}</h3>
              <p className="text-temenos-gray mb-4">{item.description}</p>
              <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
                Explore {item.title.replace("Digital for ", "").replace("Banking", "").trim()}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
