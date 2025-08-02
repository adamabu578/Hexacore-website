import { Settings, LayoutGrid, Globe, Lightbulb, Wrench, Box, MapPin, GitFork } from "lucide-react"

export function BeatingHeartSection() {
  const features = [
    {
      icon: <Settings className="h-8 w-8 text-temenos-blue" />,
      title: "Leading functionality",
      description: "Access a market-leading set of proven banking capabilities with Temenos Core.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-temenos-blue" />,
      title: "Modular core banking",
      description: "Our modular core banking helps you to adopt single capabilities and accelerate modernization.",
    },
    {
      icon: <Globe className="h-8 w-8 text-temenos-blue" />,
      title: "Go anywhere",
      description:
        "We support banks in 150+ countries, and our Regionalized Solutions help to navigate local requirements.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-temenos-blue" />,
      title: "Ongoing innovation",
      description: "Reap the latest innovations and technology as we continually invest in our single code base.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-temenos-blue" />,
      title: "Leading tooling",
      description:
        "Boost operational efficiency and rapidly configure banking products with our developer and product builder tooling.",
    },
    {
      icon: <Box className="h-8 w-8 text-temenos-blue" />,
      title: "Scalable and sustainable",
      description:
        "Our benchmarks prove you can deliver record-high transaction performance while also delivering on your sustainability goals.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-temenos-blue" />,
      title: "End-to-end",
      description: "Use Temenos Core with Digital, Financial Crime Mitigation, infused AI, and 150+ partner solutions.",
    },
    {
      icon: <GitFork className="h-8 w-8 text-temenos-blue" />,
      title: "Agnostic deployment",
      description: "Deploy Temenos Core on premise, in the cloud, or as SaaS.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            The beating heart of banking
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-temenos-gray md:text-lg">
            Cover all your banking needs with a single platform and proven functionality designed to save time and costs
            as well as foster deeper customer relationships. Over 950 banks around the world rely on Temenos Core as the
            beating heart of their business, leveraging a broad range of capabilities across segments.
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-temenos-blue mb-2">{feature.title}</h3>
              <p className="text-sm text-temenos-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
