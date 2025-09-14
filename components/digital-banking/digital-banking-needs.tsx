import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DigitalBankingNeeds() {
  const needs = [
    {
      title: "Digital Solutions for Retail Banking",
      description:
        "Hexacore Digital makes banking simple—seamless, personalized, and real-time—driving customer loyalty and efficiency.",
      image: "/assets/digital-retail.jpg",
      link: "#",
    },
    {
      title: "Digital at the Core of Business Banking",
      description:
        "Simplify business banking by equipping SMEs with the tools and insights they need to focus on growth and serving their customers.",
      image: "/assets/digital-guy.jpg",
      link: "#",
    },
    {
      title: "Journey Manager.",
      description:
        "Faster, compliant onboarding made simple—reducing effort, streamlining processes, and boosting conversions.",
      image: "/assets/digital-journey.jpg",
      link: "#",
    },
    {
      title: "Islamic Banking",
      description:
        "Reimagining Islamic banking with an award-winning solution seamlessly merging digital innovation and human connection to deliver personalized, Shari’ah-compliant offerings powered by modern technology.",
      image: "/assets/islamic-bank.jpg",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
         All-in-One Digital Banking, Tailored to You
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
              <h3 className="text-xl font-semibold text-[#153365] mb-2">{item.title}</h3>
              <p className="text-temenos-gray mb-4">{item.description}</p>
              <Button className="w-fit bg-[#153365] hover:bg-[#28B1D3] text-white">
                Explore {item.title.replace("Digital for ", "").replace("Banking", "").trim()}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
