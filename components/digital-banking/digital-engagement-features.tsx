import { Users, UserPlus, Truck, Handshake, MapPin, CheckCircle } from "lucide-react"

export function DigitalEngagementFeatures() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-temenos-blue" />,
      title: "Grow customer relationships",
      description:
        "Use data-driven capabilities to build relationships with your customers, through online and offline channels.",
    },
    {
      icon: <UserPlus className="h-10 w-10 text-temenos-blue" />,
      title: "Onboard customers rapidly",
      description:
        "Expand your customer base with seamless omnichannel onboarding and optimize conversions by analyzing abandonment trends.",
    },
    {
      icon: <Truck className="h-10 w-10 text-temenos-blue" />,
      title: "Drive cross-sell",
      description:
        "Foster long-term customer loyalty and expand reach with personalized recommendations and next best product offers.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-temenos-blue" />,
      title: "Deliver seamless banking",
      description:
        "Help customers manage their finances on the go with intuitive interfaces, AI-driven personalization, and secure transactions.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-temenos-blue" />,
      title: "Address customer demands",
      description:
        "Use analytics, AI, and automation to create tailored financial solutions while also anticipating future needs.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-temenos-blue" />,
      title: "Drive operational efficiency",
      description: "Streamline your operations and enhance client value with Temenos Digital.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
            Accelerate digital transformation with seamless customer engagement
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-temenos-gray md:text-lg">
            Streamline your operations and enhance client value with Temenos Digital. Create memorable, personalized
            customer experiences that drive loyalty through meaningful engagements across all channels. Powered by
            high-performance transactional capabilities and efficient processes, we can help you to optimize your
            business performance.
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12">
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
