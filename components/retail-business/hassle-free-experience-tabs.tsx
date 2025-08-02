import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HassleFreeExperienceTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <Tabs defaultValue="convenient-banking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="convenient-banking"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Convenient banking
            </TabsTrigger>
            <TabsTrigger
              value="accelerate-time-to-market"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Accelerate time-to-market
            </TabsTrigger>
            <TabsTrigger
              value="unlock-revenue-streams"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Unlock revenue streams
            </TabsTrigger>
            <TabsTrigger
              value="increase-share-of-wallet"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Increase share of wallet
            </TabsTrigger>
            <TabsTrigger
              value="increase-efficiency"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Increase efficiency
            </TabsTrigger>
            <TabsTrigger
              value="scalable-solutions"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Scalable solutions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="convenient-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Provide a hassle-free and convenient banking experience
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Our solution simplifies onboarding, supports open and omnichannel banking, and enables you to deliver
              personalized customer experiences. By integrating all aspects of digital banking, it empowers you to
              deliver an efficient and consistent service across multiple platforms, enhancing customer satisfaction and
              engagement throughout their banking journey.
            </p>
          </TabsContent>
          <TabsContent value="accelerate-time-to-market" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Accelerate time-to-market
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Rapidly launch new products and services with our agile platform. Accelerate your time-to-market and stay
              ahead of the competition by quickly adapting to evolving customer demands and regulatory changes.
            </p>
          </TabsContent>
          <TabsContent value="unlock-revenue-streams" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Unlock new revenue streams
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Discover new opportunities for revenue growth through personalized product offerings, cross-selling, and
              up-selling. Our platform enables you to identify and capitalize on emerging market trends and customer
              needs.
            </p>
          </TabsContent>
          <TabsContent value="increase-share-of-wallet" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Increase share of wallet
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Deepen customer relationships and increase their engagement with your bank. By offering a comprehensive
              suite of integrated services and personalized experiences, you can capture a larger share of your
              customers' financial needs.
            </p>
          </TabsContent>
          <TabsContent value="increase-efficiency" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Increase operational efficiency
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Streamline your back-office operations and automate manual processes to boost efficiency and reduce
              operational costs. Our integrated platform ensures seamless workflows and improved productivity across all
              banking functions.
            </p>
          </TabsContent>
          <TabsContent value="scalable-solutions" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Scalable and resilient solutions
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Our solutions are built for scalability and resilience, ensuring your banking operations can handle peak
              loads and grow with your business. Benefit from a robust and secure infrastructure that guarantees high
              availability and performance.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
