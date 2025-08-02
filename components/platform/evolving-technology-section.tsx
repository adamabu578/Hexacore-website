export function EvolvingTechnologySection() {
  const technologies = [
    "Modular solutions",
    "Extensibility Framework",
    "AI infused",
    "Security standards",
    "Always upgradable",
    "Cloud-native, cloud-agnostic",
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Evolving technology for an evolving industry
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="text-lg font-medium text-temenos-blue border-b-2 border-temenos-blue pb-1">
              {tech}
            </div>
          ))}
        </div>
        <p className="text-temenos-gray max-w-3xl mx-auto md:text-lg">
          Our modular solutions aim to reduce the risks associated with core banking modernization, addressing
          transformation progressively. With centralized capabilities such as pricing, and DevOps-supportive tooling,
          the Temenos Banking Platform is the central hub for banks aiming to modernize quickly and securely, moving
          confidently towards a legacy-free environment.
        </p>
      </div>
    </section>
  )
}
