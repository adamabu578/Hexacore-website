import { Settings, LayoutGrid, Globe, Lightbulb, Wrench, Box, MapPin, GitFork } from "lucide-react"

export function BeatingHeartSection() {
  const features = [
    {
      icon: <Settings className="h-8 w-8 text-[#153365]" />,
      title: "Advanced Functionality",
      description: "Access industry-leading, trusted banking capabilities powered by Hexacore.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-[#153365]" />,
      title: "Banking with Modular Architecture",
      description: "Accelerate modernization with modular core banking that enables you to deploy single capabilities as needed.",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#153365]" />,
      title: "Limitless Banking",
      description:
        "Trusted by banks in 100+ countries, our regionalized solutions ensure smooth navigation of local regulations",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#153365]" />,
      title: "Continuous Innovation",
      description: "Access the newest technologies and innovations with our commitment to investing in a single code base.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-[#153365]" />,
      title: "Cutting-Edge Tooling",
      description:
        "Enhance efficiency and quickly configure banking products with our developer and product builder tools.",
    },
    {
      icon: <Box className="h-8 w-8 text-[#153365]" />,
      title: "Scalable. Sustainable. Future-Ready.",
      description:
        "With our benchmarks, you can achieve unmatched transaction performance while advancing your sustainability objectives.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-[#153365]" />,
      title: "All-in-One",
      description: "Leverage Hexacore together with Digital, infused AI, Financial Crime Mitigation, and a broad ecosystem of 120+ partner solutions.",
    },
    {
      icon: <GitFork className="h-8 w-8 text-[#153365]" />,
      title: "Flexible Deployment",
      description: "Hexacore: flexible deployment on-premises, in the cloud, or as SaaS.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
           Powering the Heart of Banking
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-temenos-gray md:text-lg">
         Hexacore is the trusted choice of more than 250 banks worldwide covering all banking needs with a unified platform that saves time, reduces costs, and fosters deeper customer relationships across all segments.
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-[#153365] mb-2">{feature.title}</h3>
              <p className="text-sm text-temenos-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
