import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporateCommercialFaq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#153365]">
          Frequently asked questions
        </h2>
        <p className="text-lg md:text-xl max-w-[800px] mx-auto mb-12 text-temenos-gray">
         Explore FAQs on Hexacore Corporate & Commercial Banking. If your question isn’t listed, our team is happy to help.{" "}
          <Link href="#" className="text-[#153365] hover:underline">
            reach out
          </Link>{" "}
          – we're happy to help!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-[#153365] hover:no-underline">
                Is Hexacore Right for My Business?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
              We serve leading global financial institutions as well as boutique firms, offering Corporate & Commercial solutions for clients ranging from SMEs to large corporations. Our global footprint spans Europe, APAC, the Middle East, and Latin America.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-[#153365] hover:no-underline">
               What Digital Corporate Banking Means?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
               Digital corporate banking leverages online platforms, mobile apps, and other digital tools to deliver banking services to corporate clients, enabling efficient financial management and remote transactions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-[#153365] hover:no-underline">
              Is Hexacore Corporate & Commercial Banking Offered as a Service?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                Hexacore Corporate & Commercial Banking is offered as a SaaS solution, allowing banks to access a powerful platform without heavy on-premise requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-[#153365] hover:no-underline">
                What are the benefits of a unified corporate banking platform?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                A unified corporate banking platform simplifies operations, improves data-driven decision-making, enhances client experiences, and lowers operational costs through system integration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-12">
          <Button className="bg-[#153365] hover:bg-[#28B1D3] text-white px-8 py-6 text-lg font-semibold">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
