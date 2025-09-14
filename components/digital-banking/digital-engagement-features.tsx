import { Users, UserPlus, Truck, Handshake, MapPin, CheckCircle } from "lucide-react"

export function DigitalEngagementFeatures() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#28B1D3]" />,
      title: "Empowering Banks to Build Lasting, Meaningful Customer Relationships",
      description:
        "Use data-driven capabilities to strengthen customer relationships across both online and offline channels.",
    },
    {
      icon: <UserPlus className="h-10 w-10 text-[#28B1D3]" />,
      title: "Accelerate Growth with Faster, Smarter Customer Onboarding",
      description:
        "Seamless omnichannel onboarding that grows your customer base and boosts conversions.",
    },
    {
      icon: <Truck className="h-10 w-10 text-[#28B1D3]" />,
      title: "Boost Growth by Driving Cross-Sell Opportunities",
      description:
        "Build loyalty that lasts while expanding your customer base through tailored recommendations and intelligent product offers.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-[#28B1D3]" />,
      title: "Deliver Seamless, End-to-End Banking Experiences",
      description:
        "Seamless banking on the go intuitive, personalized, and secure.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#28B1D3]" />,
      title: "Stay Ahead by Meeting Every Customer Expectation",
      description:
        "Use analytics, AI, and automation to create tailored financial solutions while also anticipating future needs.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#28B1D3]" />,
      title: "Work Smarter, Faster, and Leaner with Greater Efficiency",
      description: "Boost efficiency and maximize client value by simplifying operations with Hexacore Digital.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
            Drive digital transformation faster with connected, seamless engagement across every customer touchpoint.
          </h2>
        </div>
        <div className="space-y-4">
          <p className="text-temenos-gray md:text-lg">
            Streamline operations. Personalize experiences. Drive loyalty. With Hexacore Digital, high-performance banking meets optimized business outcomes.
          </p>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-12">
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
