export function AiMeasurableSuccess() {
  const metrics = [
    { value: "$37.5bn", label: "market opportunity for 2025 global banking AI spend" },
    { value: "$1trn", label: "growth potential in annual value by 2030" },
    { value: "75%", label: "of banks are experimenting with AI" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Measurable success
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="text-5xl font-bold text-temenos-blue mb-2">{metric.value}</div>
              <p className="text-lg font-semibold text-temenos-gray">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
