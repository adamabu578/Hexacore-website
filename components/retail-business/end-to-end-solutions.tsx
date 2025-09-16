import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EndToEndSolutions() {
  const solutions = [
    {
      title: "Core for Retail Banking",
      description:
        "Offer personalized, innovative retail banking with Hexacore. Flexible, scalable, and available on SaaS, cloud, or on-premise to fit your growth.",
      image: "/assets/solution.jpg",
      link: "/core-banking",
    },
    {
      title: "Digital for Retail Banking",
      description:
        "Hexacore Digital for Retail delivers fast, secure, and personalized services with seamless omnichannel banking.",
      image: "/assets/reail-digital.jpg",
      link: "/digital-banking",
    },
    {
      title: "Core for Business Banking",
      description:
        "Hexacore for Business is a cloud-native solution that drives fast innovation, product launches, and customer-centric services to boost acquisition and loyalty.",
      image: "/assets/retail-core.jpg",
      link: "/core-banking",
    },
    {
      title: "Digital for Business Banking",
      description:
        "Hexacore Digital for Business delivers seamless banking with real-time access, automation, personalized insights, and secure transactions to optimize cash flow and efficiency.",
      image: "/assets/reail-digital.jpg",
      link: "/digital-banking",
    },
    {
      title: "Payments",
      description:
        "Accelerate payments business growth with secure, real-time processing and scalable innovation. Improve efficiency, enhance customer experiences, and stay compliant in a changing market.",
      image: "/assets/pay.jpg",
      link: "/payments",
    },
    {
      title: "Financial Crime Mitigation",
      description:
        "Award-winning FCM solutions to protect against fines, fraud, and reputational risk — all while improving efficiency and reducing costs.",
      image: "/assets/crime.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Islamic Banking",
      description:
        "Award-winning Shari’ah-compliant banking, blending digital and human interaction with advanced technology for personalized offerings.",
      image: "/assets/islamic-retail.jpg",
      link: "#", // Placeholder link
    },
    {
      title: "Hexacore SaaS",
      description:
        "Hexacore SaaS combines core and digital banking with proven AI capabilities, enabling you to operate swiftly while leaving technology management to the experts.",
      image: "/assets/retail-saas.jpg",
      link: "/hexacore-saas",
    },
    {
      title: "Cloud Banking",
      description:
        "Since 2011, Hexacore has led cloud innovation, continuously refining cloud-native standards to help banks adopt our solutions with ease.",
      image: "/assets/cloud-retail.jpg",
      link: "/innovation/cloud",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
         All-in-One Banking Solutions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[200px] w-full"
              />
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Link href={solution.link}>
                <Button className="w-fit bg-[#153365] hover:bg-[#153365] text-white">
                  Explore {solution.title.split(" ")[0]}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
