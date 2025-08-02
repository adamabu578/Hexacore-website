import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CorporateCommercialAutomationTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-12">
          Real-time automation for operational efficiency
        </h2>
        <Tabs defaultValue="real-time-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="real-time-automation"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Real-time automation
            </TabsTrigger>
            <TabsTrigger
              value="seamless-integration"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Seamless integration
            </TabsTrigger>
            <TabsTrigger
              value="smarter-decision-making"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Smarter decision making
            </TabsTrigger>
            <TabsTrigger
              value="security-compliance"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Security and compliance
            </TabsTrigger>
            <TabsTrigger
              value="scalable-flexible"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Scalable and flexible
            </TabsTrigger>
            <TabsTrigger
              value="elevate-experiences"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Elevate experiences
            </TabsTrigger>
          </TabsList>
          <TabsContent value="real-time-automation" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Automate key banking processes across lending, trade finance, and liquidity management in real-time.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              This reduces manual effort, accelerates decision making, and enhances customer service, giving you the
              operational capabilities you need to stay ahead.
            </p>
          </TabsContent>
          <TabsContent value="seamless-integration" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Seamless integration with existing systems
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Our platform offers robust APIs and connectors to seamlessly integrate with your existing IT
              infrastructure, ensuring a smooth transition and maximizing your current technology investments.
            </p>
          </TabsContent>
          <TabsContent value="smarter-decision-making" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Smarter decision making with AI-powered insights
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Leverage advanced analytics and AI to gain deep insights into market trends, customer behavior, and risk
              factors, empowering your teams to make data-driven decisions with confidence.
            </p>
          </TabsContent>
          <TabsContent value="security-compliance" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Robust security and compliance framework
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Ensure the highest levels of data security and regulatory compliance with our comprehensive framework,
              designed to meet global and local standards and protect your business from evolving threats.
            </p>
          </TabsContent>
          <TabsContent value="scalable-flexible" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Scalable and flexible architecture for future growth
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Our modular and cloud-native architecture provides the flexibility and scalability needed to adapt to
              changing business demands, allowing you to expand operations and launch new products with ease.
            </p>
          </TabsContent>
          <TabsContent value="elevate-experiences" className="mt-8">
            <h3 className="2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Elevate customer experiences with personalized services
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Deliver highly personalized and engaging experiences to your corporate clients through intuitive digital
              channels, tailored product offerings, and proactive support, fostering stronger relationships and loyalty.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
