import { TrendingUp, Clock, CheckCircle, DollarSign, AlertTriangle, ShieldCheck } from "lucide-react"

export function PaymentsGrowthFeatures() {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-temenos-blue" />,
      title: "Accelerate revenue growth",
      description:
        "Drive revenue growth with rapid fintech integration, easy territorial expansion, and agile transaction routing.",
    },
    {
      icon: <Clock className="h-10 w-10 text-temenos-blue" />,
      title: "Faster time-to-market",
      description: "Lower time-to-market with pre-built specialized payments services, including regulations.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-temenos-blue" />,
      title: "Reduced cost of processing",
      description:
        "Optimized STP through smart services, with automated exception handling for improved risk management.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-temenos-blue" />,
      title: "Reduce cost of ownership",
      description: "Single, pre-integrated platform for all payment types, and flexible deployment.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-temenos-blue" />,
      title: "Reduce risks",
      description: "Minimize operational disruptions and protect your business and clients from bad actors.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-temenos-blue" />,
      title: "Regulatory compliance",
      description: "Automatically updated with support for the latest payment market standards.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Rapidly grow your payments business with Temenos
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
