import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SaasBenefitsTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
          Why Banks Choose Hexacore SaaS
        </h2>
        <Tabs defaultValue="comprehensive-capabilities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="comprehensive-capabilities"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Seamless Banking
            </TabsTrigger>
            <TabsTrigger
              value="leverage-cloud"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Cloud-Powered Banking
            </TabsTrigger>
            <TabsTrigger
              value="end-to-end-banking"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              End-to-end banking
            </TabsTrigger>
            <TabsTrigger
              value="no-more-legacy"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
            Beyond Legacy Banking
            </TabsTrigger>
            <TabsTrigger
              value="meet-goals"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
           Drive Success
            </TabsTrigger>
            <TabsTrigger
              value="banking-grade-service"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
           Smart Banking
            </TabsTrigger>
          </TabsList>
          <TabsContent value="comprehensive-capabilities" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             End-to-end banking from a single platform
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Hexacore SaaS delivers end-to-end banking experiences—from core and digital channels to payments and beyond helping you delight customers and streamline operations.
            </p>
          </TabsContent>
          <TabsContent value="leverage-cloud" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Cloud-enabled speed and flexibility
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Hexacore SaaS empowers you to respond faster, scale smarter, and stay resilient, so you can innovate without the burden of infrastructure..
            </p>
          </TabsContent>
          <TabsContent value="end-to-end-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Seamless banking on a single, unified platform.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Hexacore SaaS delivers end-to-end banking on one unified platform seamlessly integrating onboarding, core processing, payments, and wealth management for a complete view of operations and customers.
            </p>
          </TabsContent>
          <TabsContent value="no-more-legacy" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             No legacy upgrades, just seamless updates.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             With Hexacore SaaS, say goodbye to costly legacy upgrades. Always stay current with the latest software, continuous innovation, security updates, and regulatory compliance delivered automatically.
            </p>
          </TabsContent>
          <TabsContent value="meet-goals" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Achieve your goals faster with Hexacore SaaS.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Achieve business goals faster with Hexacore SaaS through rapid deployment, pre-configured solutions, and continuous innovation.
            </p>
          </TabsContent>
          <TabsContent value="banking-grade-service" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Banking-grade service with uncompromising security and reliability.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
            Hexacore SaaS delivers banking-grade security, resilience, and compliance across 30+ regions.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
