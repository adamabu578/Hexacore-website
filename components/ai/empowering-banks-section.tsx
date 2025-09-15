import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EmpoweringBanksSection() {
  const solutions = [
    {
      title: "FCM AI Agent",
      description:
        "Hexacore FCM AI Agent uses Agentic AI to automate compliance screening, reducing false positives with real-time, human-like accuracy delivering faster, smarter, and more efficient compliance.",
      image: "/assets/ai-agent.jpg",
      link: "#",
      buttonText: "Explore FCM AI Agent",
    },
    {
      title: "Product Manager Copilot",
      description:
        "Hexacore Product Manager Copilot leverages generative AI to help product managers identify new customer segments, analyze behavior and competitor offerings, ensure compliance, and design tailored products with built-in functionality.",
      image: "/assets/ai-copilot.jpg",
      link: "#",
      buttonText: "Explore Product Manager Copilot",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 lg:col-span-2 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
          Smarter banking innovation. Delivered faster.
          </h2>
          <p className="max-w-[800px] mx-auto lg:mx-0 text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          With Hexacore AI, banks engage customers better, work smarter, and grow faster. Our technology delivers real-time insights, reduces risk, and drives confident decisions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:col-span-2">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">
                {solution.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
