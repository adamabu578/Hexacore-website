export function SaasMeasurableSuccess() {
  const metrics = [
    { value: "65%", label: "Product updates are 65% faster on Hexacore SaaS." },
    { value: "38%", label: "Hexacore SaaS enables banks to offer 38% more products per customer." },
    { value: "2.5x", label: "Hexacore SaaS reduces environment setup time by 2.5× for banks." },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          Measurable success
        </h2>
        <p className="text-sm text-temenos-gray mb-8">Data Source: Hexacore TVB 2024, Retail Banking Product Insights</p>
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="text-5xl font-bold text-[#153365] mb-2">{metric.value}</div>
              <p className="text-lg font-semibold text-temenos-gray">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
