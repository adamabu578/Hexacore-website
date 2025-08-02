import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EndToEndSolutions() {
  const solutions = [
    {
      title: "Core for Retail Banking",
      description:
        "Temenos Core for Retail enables you to offer hyper-personalized, innovative services. This flexible, fully configurable solution is available as SaaS, in the cloud, or on premise, ensuring scalability and efficiency for all bank sizes.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/core-banking",
    },
    {
      title: "Digital for Retail Banking",
      description:
        "Temenos Digital for Retail enables fast, secure, and personalized services across all platforms, enhancing customer experiences with frictionless transactions, and seamless omnichannel banking for better engagement and efficiency.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/digital-banking",
    },
    {
      title: "Core for Business Banking",
      description:
        "Temenos Core for Business is a cloud-native, cloud-agnostic solution that enables fast innovation, product launches, and customer-centric services, improving acquisition and loyalty with extensive business banking capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/core-banking",
    },
    {
      title: "Digital for Business Banking",
      description:
        "Temenos Digital for Business delivers seamless banking with real-time account access, automated transactions, personalized insights, faster payments, loan access, and enhanced security, optimizing cash flow and boosting operational efficiency for growth.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/digital-banking",
    },
    {
      title: "Payments",
      description:
        "Drive payments business growth with secure, real-time processing and accelerated innovation. Our scalable solution helps you boost processing efficiency, elevate customer experiences, and ensure compliance in an evolving market.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/payments",
    },
    {
      title: "Financial Crime Mitigation",
      description:
        "Our award-winning (FCM) product family enables banks and financial institutions to avoid regulatory fines, detect fraud and mitigate reputational risks whilst improving throughput and optimizing costs.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#", // Placeholder link
    },
    {
      title: "Islamic Banking",
      description:
        "A flexible and efficient award-winning solution, delivering Shari'ah-compliant experiences using a combination of digital and human interaction. Leverage advanced product-building capabilities and modern technology to create personalized offerings.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#", // Placeholder link
    },
    {
      title: "Temenos SaaS",
      description:
        "With access to core and digital banking, and proven AI capabilities, Temenos SaaS empowers you to operate swiftly, relying on technology management to the experts.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/temenos-saas",
    },
    {
      title: "Cloud Banking",
      description:
        "With cloud experience since 2011, Temenos led the shift to innovative and efficient cloud solutions. Today, we keep perfecting ever-developing cloud-native standards, enabling banks to seamlessly adopt Temenos solutions.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/innovation/cloud",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          End-to-end retail and business banking
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
              <h3 className="text-xl font-semibold text-temenos-blue mb-2">{solution.title}</h3>
              <p className="text-temenos-gray mb-4">{solution.description}</p>
              <Link href={solution.link}>
                <Button className="w-fit bg-temenos-blue hover:bg-temenos-blue-hover text-white">
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
