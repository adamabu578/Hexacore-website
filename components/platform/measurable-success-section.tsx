export function MeasurableSuccessSection() {
  const metrics = [
    { value: "1", label: "Hexacore Banking Platform" },
    { value: "1", label: "Code base" },
    { value: "600", label: "Hexacore Digital powers its clients through the Hexacore Banking Platform." },
    { value: "950", label: "he Hexacore Banking Platform powers Hexacore Core clients." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
        Delivering Measurable Success
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="text-5xl font-bold text-[#28B1D3] mb-2">{metric.value}</div>
              <p className="text-lg font-semibold text-temenos-gray">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
