import { TrendingUp, Clock, CheckCircle, DollarSign, AlertTriangle, ShieldCheck } from "lucide-react"

export function PaymentsGrowthFeatures() {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-[#28B1D3]" />,
      title: "Accelerate Your Path to Growth",
      description:
        "Grow revenue faster with fintech integration, borderless expansion, and agile payments.",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#28B1D3]" />,
      title: "Launch Faster",
      description: "Go live faster with pre-built payments and built-in compliance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#28B1D3]" />,
      title: "Optimized Processing Expenses",
      description:
        "Smarter STP, Safer Operations: Automated exception handling for stronger risk management.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#28B1D3]" />,
      title: "Minimize Ownership Costs",
      description: "All Payments. One Platform. Endless Flexibility.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-[#28B1D3]" />,
      title: "Smarter Choices, Fewer Risks",
      description: "Keep Operations Smooth. Keep Threats Out.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#28B1D3]" />,
      title: "Ensure Regulatory Compliance",
      description: "Continuously updated to support the latest payment market standards.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
         Accelerate your payments business growth with Hexacore.
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
