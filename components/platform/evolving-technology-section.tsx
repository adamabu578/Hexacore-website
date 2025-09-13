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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
    Cutting-Edge Technology for a Changing Industry
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className="text-lg font-medium text-[#153365] border-b-2 border-[#153365] pb-1">
              {tech}
            </div>
          ))}
        </div>
        <p className="text-temenos-gray max-w-3xl mx-auto md:text-lg">
        Hexacore delivers safer, simpler modernization. Modular by design and powered by centralized pricing and DevOps tools, we help banks transform progressively and move boldly toward a legacy-free future.
        </p>
      </div>
    </section>
  )
}
