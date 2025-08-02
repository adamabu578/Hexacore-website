import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EvolvingTechSection() {
  const innovationAreas = [
    {
      title: "Temenos Banking Platform",
      description:
        "All our clients benefit from over 30 years of continual innovation on the Temenos Banking Platform. Our single code base ensures our innovations drive evolving banking functionality and enables you to work with modern technology and tools at any time.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/innovation/platform",
      buttonText: "Explore Our Banking Platform",
    },
    {
      title: "Temenos AI",
      description:
        "Temenos empowers banks with AI-driven solutions to enhance engagement, boost efficiency, and accelerate innovation and growth. We offer capabilities within our existing products as well as AI solutions that deliver real-time insights, reduce risk, and support decision making.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/innovation/ai",
      buttonText: "Explore AI",
    },
    {
      title: "Temenos SaaS",
      description:
        "Temenos SaaS grants access to market-leading core banking, exceptional digital banking, and proven AI capabilities. It lets you operate as swiftly as a neo-bank, entrusting technology management to a global leader, so you can focus on your customers.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/temenos-saas", // Assuming a SaaS page might exist or be created
      buttonText: "Explore Temenos SaaS",
    },
    {
      title: "Cloud Banking",
      description:
        "As the first to bring core banking technology to the Microsoft cloud in 2011, Temenos initiated the industry's shift towards cloud solutions. Today, we keep perfecting cloud-native standards, enabling banks to adopt Temenos solutions in the Cloud or as SaaS.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/innovation/cloud",
      buttonText: "Explore Cloud",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Evolving technology for an evolving industry
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {innovationAreas.map((area, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Image
                src={area.image || "/placeholder.svg"}
                alt={area.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{area.title}</h3>
              <p className="text-temenos-gray mb-4">{area.description}</p>
              <Link href={area.link}>
                <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
                  {area.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
