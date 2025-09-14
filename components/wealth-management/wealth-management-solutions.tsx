import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WealthManagementSolutions() {
  const solutions = [
    {
      title: "Digital Wealth",
      description:
        "Provide clients with a seamless, personalized digital experience, offering self-service capabilities and intuitive tools.",
      image: "/assets/wealth.jpg",
      link: "#",
    },
    {
      title: "Wealth Front Office",
      description:
        "Provide relationship managers with a comprehensive suite of tools to manage client portfolios, deliver advice, and strengthen client relationships.",
      image: "/assets/wealth1.jpg",
      link: "#",
    },
    {
      title: "Securities",
      description:
        "Streamline securities operations with powerful capabilities for trading, settlement, and corporate actions across all asset classes.",
      image: "/assets/wealth-security.jpg",
      link: "#",
    },
    {
      title: "Data & Analytics",
      description:
        "Unlock the power of AI and analytics to understand clients, anticipate market trends, and optimize portfolio performance",
      image: "/assets/wealth-data.jpg",
      link: "#",
    },
    {
      title: "Compliance & Risk",
      description:
        "Ensure regulatory compliance and reduce risk with comprehensive tools for AML, KYC, and fraud detection.",
      image: "/assets/compliance.jpg",
      link: "#",
    },
    {
      title: "Back Office",
      description:
        "Streamline your back-office with automation for accounting, reconciliation, and reporting, boosting operational efficiency.",
      image: "/assets/wealth-shakes.jpg",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
        Transforming Wealth Management with Innovative Solutions
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
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
