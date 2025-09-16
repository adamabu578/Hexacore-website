import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HassleFreeExperienceTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <Tabs defaultValue="convenient-banking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="convenient-banking"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Easy Banking
            </TabsTrigger>
            <TabsTrigger
              value="accelerate-time-to-market"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
           Go Live Faster
            </TabsTrigger>
            <TabsTrigger
              value="unlock-revenue-streams"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Monetize Opportunities
            </TabsTrigger>
            <TabsTrigger
              value="increase-share-of-wallet"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
            Boost Wallet Share
            </TabsTrigger>
            <TabsTrigger
              value="increase-efficiency"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Maximize Efficiency
            </TabsTrigger>
            <TabsTrigger
              value="scalable-solutions"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
             Flexible Solutions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="convenient-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Seamless Banking Experience
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
            Our solution streamlines onboarding, supports open and omnichannel banking, and delivers personalized experiences. By unifying all aspects of digital banking, it ensures efficient, consistent service across channels—boosting customer satisfaction and engagement.
            </p>
          </TabsContent>
          <TabsContent value="accelerate-time-to-market" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
            Faster to Market
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
            Launch faster. Adapt smarter. Our agile platform helps you deliver new products quickly, meeting customer demands and regulatory changes with confidence.
            </p>
          </TabsContent>
          <TabsContent value="unlock-revenue-streams" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Unlock new revenue streams
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Discover new revenue opportunities with personalized products, cross-selling, and up-selling. Our platform helps you spot and act on market trends and customer needs.
            </p>
          </TabsContent>
          <TabsContent value="increase-share-of-wallet" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Grow Customer Value
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Strengthen customer relationships and boost engagement with tailored experiences and integrated services—capturing a greater share of their financial needs
            </p>
          </TabsContent>
          <TabsContent value="increase-efficiency" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Operational Efficiency
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Boost efficiency and lower costs by automating processes and simplifying back-office operations with one seamless platform.
            </p>
          </TabsContent>
          <TabsContent value="scalable-solutions" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Scale with Confidence
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Scale confidently with resilient solutions that handle peak demand, ensure high availability, and support your business growth.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
