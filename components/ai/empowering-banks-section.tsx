import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EmpoweringBanksSection() {
  const solutions = [
    {
      title: "FCM AI Agent",
      description:
        "Agentic AI helps simplify complex processes by automating tasks without human intervention. Our first product is Temenos FCM AI Agent, a proven AI-enhanced compliance engine, enabling clients to significantly reduce false positives when screening against global and domestic watchlists in real time. The screening alerts are automatically evaluated using sophisticated algorithms that mimic human operators, improving accuracy and efficiency.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      buttonText: "Explore FCM AI Agent",
    },
    {
      title: "Product Manager Copilot",
      description:
        "Temenos Product Manager Copilot uses generative AI to help Product Managers discover untapped customer segments and create tailored products that comply with local regulations. This includes seeing how your existing customers are behaving, and which products your competitors offer. Spot potential compliance issues from the start and understand how you can develop new products with out-of-the-box functionality.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
      buttonText: "Explore Product Manager Copilot",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 lg:col-span-2 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            Empowering banks to innovate faster and smarter
          </h2>
          <p className="max-w-[800px] mx-auto lg:mx-0 text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Temenos empowers banks with AI-driven solutions to enhance customer engagement, boost operational
            efficiency, and accelerate innovation and growth. Our advanced technology offers capabilities within our
            existing products as well as AI solutions that deliver real-time insights, reduce risk, and help with
            decision making.
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
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
                {solution.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
