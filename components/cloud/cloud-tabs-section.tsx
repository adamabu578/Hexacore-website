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
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Cloud-native
            </TabsTrigger>
            <TabsTrigger
              value="cloud-agnostic"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
              Cloud-agnostic
            </TabsTrigger>
            <TabsTrigger
              value="sustainable-banking"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-[#153365] data-[state=active]:border-b-2 data-[state=active]:border-[#153365] rounded-none text-base md:text-lg font-semibold py-4"
            >
           Sustainable Banking Solutions
            </TabsTrigger>
            <TabsTrigger
              value="unlock-business-models"
              className="text-[#153365] data-[state=active]:bg-transparent data-[state=active]:text-temenos-blue data-[state=active]:border-b-2 data-[state=active]:border-temenos-blue rounded-none text-base md:text-lg font-semibold py-4"
            >
              Enable New Business Models
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cloud-native" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Ever-Evolving Cloud-Native Innovations
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Cloud-native standards evolve constantly, and we evolve with them—enhancing our platform to empower banks with the latest innovations.{" "}
              <Link href="#" className="text-[#153365] hover:underline">
                Hexacore Banking Platform&apos;s
              </Link>{" "}
            We continuously align our technology foundation with evolving standards. Through annual updates, we equip clients with greater scalability, flexibility, resilience, and security for today’s financial services landscape.
            </p>
          </TabsContent>
          <TabsContent value="cloud-agnostic" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
           Seamless Deployment Across Any Cloud
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Designed to be cloud-agnostic, Hexacore solutions let you deploy on public clouds, private clouds, or on-premises environments, ensuring compliance, flexibility, and freedom from vendor lock-in.
            </p>
          </TabsContent>
          <TabsContent value="sustainable-banking" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
              Driving Sustainable Banking Through the Cloud
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
              Cloud-native solutions that boost efficiency and cut carbon emissions—helping banks achieve their sustainability goals.
            </p>
          </TabsContent>
          <TabsContent value="unlock-business-models" className="mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#153365] mb-6">
             Unleash Innovative Business Models
            </h3>
            <p className="max-w-3xl mx-auto text-temenos-gray md:text-lg">
             Cloud banking enables rapid innovation, new market expansion, and dynamic ecosystems through open banking and fintech partnerships.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
