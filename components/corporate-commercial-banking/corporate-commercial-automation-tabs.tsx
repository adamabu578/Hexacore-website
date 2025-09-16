import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CorporateCommercialAutomationTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-12">
         Streamlined: Real-time automation. Maximum efficiency.
        </h2>
        <Tabs defaultValue="real-time-automation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="real-time-automation"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Real-time automation
            </TabsTrigger>
            <TabsTrigger
              value="seamless-integration"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Integrate Without Limits
            </TabsTrigger>
            <TabsTrigger
              value="smarter-decision-making"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Make Smarter Decisions
            </TabsTrigger>
            <TabsTrigger
              value="security-compliance"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Secure & Compliant
            </TabsTrigger>
            <TabsTrigger
              value="scalable-flexible"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
           Grow Smarter
            </TabsTrigger>
            <TabsTrigger
              value="elevate-experiences"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Deliver Elevated Experiences
            </TabsTrigger>
          </TabsList>
          <TabsContent value="real-time-automation" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
            Real-time automation for lending, trade finance, and liquidity operations.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Work smarter, decide faster, serve better.
            </p>
          </TabsContent>
          <TabsContent value="seamless-integration" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Seamlessly integrate with your existing systems.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Seamless integration with robust APIs and connectors to maximize your existing IT investments.
            </p>
          </TabsContent>
          <TabsContent value="smarter-decision-making" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Data-driven clarity, powered by AI
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Empower your teams with AI and analytics, turning complex data into clear, confident strategies.
            </p>
          </TabsContent>
          <TabsContent value="security-compliance" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Trusted Security & Compliance
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Ensure top-tier data security and regulatory compliance with a framework built to meet global and local standards, protecting your business from evolving threats.
            </p>
          </TabsContent>
          <TabsContent value="scalable-flexible" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Build on a scalable and flexible foundation that empowers long-term growth and rapid innovation.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Adapt to evolving business demands with a modular, cloud-native platform that scales effortlessly.
            </p>
          </TabsContent>
          <TabsContent value="elevate-experiences" className="mt-8">
            <h3 className="2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Create memorable banking journeys with personalized, seamless experiences.
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Build loyalty by delivering tailored, intuitive, and proactive corporate banking experiences.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
