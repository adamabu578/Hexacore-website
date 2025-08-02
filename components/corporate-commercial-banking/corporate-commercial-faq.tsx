import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CorporateCommercialFaq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-temenos-blue">
          Frequently asked questions
        </h2>
        <p className="text-lg md:text-xl max-w-[800px] mx-auto mb-12 text-temenos-gray">
          In this section, you'll find answers to some of the most common queries about Temenos Corporate & Commercial
          Banking. If you don't find what you're looking for, feel free to{" "}
          <Link href="#" className="text-temenos-blue hover:underline">
            reach out
          </Link>{" "}
          – we're happy to help!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-temenos-blue hover:no-underline">
                Is Temenos Corporate & Commercial Banking for me?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                We serve some of the largest global financial institutions in the world, but we have also implemented
                our Corporate & Commercial solution in boutique firms. Our offering covers the full spectrum of clients
                from SMEs to large corporations across the world. Our global footprint covers Europe, APAC, Middle East
                and Latin America.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-temenos-blue hover:no-underline">
                What is digital corporate banking?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                Digital corporate banking refers to the use of digital channels and technologies to deliver banking
                services to corporate clients. This includes online platforms, mobile apps, and other digital tools that
                enable businesses to manage their finances, conduct transactions, and access banking services remotely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-temenos-blue hover:no-underline">
                Is Temenos Corporate & Commercial Banking available as-a-service?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                Yes, Temenos Corporate & Commercial Banking is available as a SaaS (Software-as-a-Service) solution,
                allowing banks to leverage our robust platform without the need for extensive on-premise infrastructure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-temenos-blue hover:no-underline">
                What are the benefits of a unified corporate banking platform?
              </AccordionTrigger>
              <AccordionContent className="text-temenos-gray text-left">
                A unified corporate banking platform streamlines operations, enhances customer experience, improves data
                insights, and reduces operational costs by consolidating various banking functions into a single,
                integrated system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-12">
          <Button className="bg-temenos-blue hover:bg-temenos-blue-hover text-white px-8 py-6 text-lg font-semibold">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
