import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export function CloudTabsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <Tabs defaultValue="cloud-native" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-transparent mb-12">
            <TabsTrigger
              value="cloud-native"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Cloud-native
            </TabsTrigger>
            <TabsTrigger
              value="cloud-agnostic"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Cloud-agnostic
            </TabsTrigger>
            <TabsTrigger
              value="sustainable-banking"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Sustainable banking
            </TabsTrigger>
            <TabsTrigger
              value="unlock-business-models"
              className="text-temenos-blue data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Unlock business models
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cloud-native" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Ongoing cloud-native enhancements
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              As with all technologies, cloud-native standards are always evolving. We have invested in and enhanced the{" "}
              <Link href="#" className="text-temenos-blue hover:underline">
                Temenos Banking Platform&apos;s
              </Link>{" "}
              technology foundation to meet these standards. To stay ahead, we continue to offer our clients with every
              annual update to deliver additional scalability, flexibility, resilience and enhanced security for modern
              financial services.
            </p>
          </TabsContent>
          <TabsContent value="cloud-agnostic" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Cloud-agnostic deployment
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Temenos solutions are designed to be cloud-agnostic, giving you the flexibility to deploy on any public
              cloud, private cloud, or on-premise infrastructure. This ensures that you can choose the environment that
              best suits your business needs and regulatory requirements, without vendor lock-in.
            </p>
          </TabsContent>
          <TabsContent value="sustainable-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Sustainable banking with the cloud
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Leverage the cloud to achieve your sustainability goals. Our cloud-native solutions are designed for
              optimal resource utilization, reducing energy consumption and carbon footprint. By moving to the cloud,
              banks can not only enhance efficiency but also contribute to a greener future.
            </p>
          </TabsContent>
          <TabsContent value="unlock-business-models" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-temenos-blue mb-6">
              Unlock new business models
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              The agility and scalability of cloud banking enable you to rapidly launch new products and services,
              experiment with innovative business models, and expand into new markets. Embrace open banking and
              collaborate with fintechs to create a dynamic ecosystem that drives growth and competitive advantage.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
