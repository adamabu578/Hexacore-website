import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WealthManagementSolutions() {
  const solutions = [
    {
      title: "Digital Wealth",
      description:
        "Deliver a seamless, personalized digital experience to your clients, empowering them with self-service capabilities and intuitive tools.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Wealth Front Office",
      description:
        "Equip your relationship managers with a comprehensive suite of tools to manage client portfolios, provide advice, and deepen relationships.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Securities",
      description:
        "Streamline your securities operations with robust capabilities for trading, settlement, and corporate actions across all asset classes.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Data & Analytics",
      description:
        "Leverage advanced analytics and AI to gain deep insights into client behavior, market trends, and portfolio performance.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Compliance & Risk",
      description:
        "Ensure regulatory compliance and mitigate risks with comprehensive tools for AML, KYC, and fraud detection.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Back Office",
      description:
        "Automate and optimize your back-office operations, including accounting, reconciliation, and reporting, for greater efficiency.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Our Wealth Management Solutions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={300}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
