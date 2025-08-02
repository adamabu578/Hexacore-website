import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function PartnerOverviewSection() {
  const partnerNetworkItems = [
    {
      title: "Delivery",
      description: "Trusted partners delivering successful Temenos implementations.",
      href: "/partners/delivery",
    },
    {
      title: "Sales",
      description: "Global partners extending Temenos sales reach.",
    },
    {
      title: "Technology",
      description: "Powering banking with scalable technology, cloud and AI.",
    },
    {
      title: "Exchange Partners",
      description: "Curated fintechs offering complementary solutions.",
    },
    {
      title: "Strategic Advisors",
      description: "Expert consultants driving strategic banking transformation.",
    },
    {
      title: "Developer Community",
      description: "Build, test, and extend on Temenos platforms.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-[3fr_1fr] gap-12">
        {/* Partner Network Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-temenos-blue mb-8">Partner Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerNetworkItems.map((item, index) => (
              <Card key={index} className="p-6 rounded-lg shadow-sm border-gray-100 bg-temenos-light-bg">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-temenos-blue mb-2">{item.title}</h3>
                  <p className="text-temenos-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Not Yet a Partner Section */}
        <div className="lg:pl-12 lg:border-l border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-temenos-blue mb-8">Not Yet a Partner</h2>
          <div className="space-y-4">
            <Link
              href="/partners/become-a-partner"
              className="block text-temenos-blue hover:underline text-lg font-medium"
            >
              Become a Partner
            </Link>
            <Link
              href="/resources/newsletter-signup"
              className="block text-temenos-blue hover:underline text-lg font-medium"
            >
              Newsletter Sign-up
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
