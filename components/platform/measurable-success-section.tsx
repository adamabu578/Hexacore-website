export function MeasurableSuccessSection() {
  const metrics = [
    { value: "1", label: "Temenos Banking Platform" },
    { value: "1", label: "Code base" },
    { value: "600", label: "Temenos Digital clients use the Temenos Banking Platform" },
    { value: "950", label: "Temenos Core clients use the Temenos Banking Platform" },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Measurable success
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
