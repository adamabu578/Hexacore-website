import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SaasBenefitsTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Temenos SaaS offers a host of benefits
        </h2>
        <Tabs defaultValue="comprehensive-capabilities" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="comprehensive-capabilities"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Comprehensive capabilities
            </TabsTrigger>
            <TabsTrigger
              value="leverage-cloud"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Leverage the cloud
            </TabsTrigger>
            <TabsTrigger
              value="end-to-end-banking"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              End-to-end banking
            </TabsTrigger>
            <TabsTrigger
              value="no-more-legacy"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              No more legacy upgrades
            </TabsTrigger>
            <TabsTrigger
              value="meet-goals"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Meet your goals
            </TabsTrigger>
            <TabsTrigger
              value="banking-grade-service"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Banking-grade service
            </TabsTrigger>
          </TabsList>
          <TabsContent value="comprehensive-capabilities" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Leading banking capabilities from a single service
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Temenos SaaS supports comprehensive banking experiences, including core banking, digital channels,
              payments, and auxiliary capabilities to delight your customers and streamline your business. Temenos
              handles operations, support, management, scaling, annual updates, and upgrades, alleviating the burden of
              running technology, allowing you to invest more in your customer relationships.
            </p>
          </TabsContent>
          <TabsContent value="leverage-cloud" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Leverage the cloud for agility and scale
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              By leveraging the cloud, Temenos SaaS provides unparalleled agility and scalability. Rapidly adapt to
              market changes, scale operations up or down as needed, and ensure business continuity with a resilient and
              flexible infrastructure. Focus on innovation, not infrastructure management.
            </p>
          </TabsContent>
          <TabsContent value="end-to-end-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              End-to-end banking on a unified platform
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Temenos SaaS offers end-to-end banking capabilities on a single, unified platform. From customer
              onboarding to core processing, payments, and wealth management, all functions are seamlessly integrated,
              providing a holistic view of your operations and customers.
            </p>
          </TabsContent>
          <TabsContent value="no-more-legacy" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              No more legacy upgrades, always up-to-date
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              With Temenos SaaS, you eliminate the burden of costly and time-consuming legacy upgrades. Our service
              ensures you are always running on the latest version of our software, benefiting from continuous
              innovation, security patches, and regulatory updates automatically.
            </p>
          </TabsContent>
          <TabsContent value="meet-goals" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Meet your business goals faster
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Temenos SaaS is designed to help you achieve your business objectives more rapidly. With pre-configured
              solutions, accelerated deployment, and continuous innovation, you can launch new products, enter new
              markets, and respond to customer demands with unprecedented speed.
            </p>
          </TabsContent>
          <TabsContent value="banking-grade-service" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Banking-grade service and security
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Rest assured with banking-grade security and compliance. Temenos SaaS adheres to the highest industry
              standards for data protection, resilience, and regulatory compliance across over 30 regulated regions,
              ensuring your operations are secure and trusted.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
