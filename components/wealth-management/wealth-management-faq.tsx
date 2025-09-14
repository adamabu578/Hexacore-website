import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function WealthManagementFaq() {
  const faqs = [
    {
      question: "What is wealth management?",
      answer:
        "Wealth management combines financial planning, investment management, and additional financial services to oversee and grow the wealth of high-net-worth clients and families.",
    },
    {
      question: "How does Hexacore transform digital wealth management?",
      answer:
        "Hexacore digital wealth platform provides personalized experiences, automated advice, and integrated back-office operations to improve efficiency and strengthen client relationships.",
    },
    {
      question: "How does Hexacore ensure scalability for evolving wealth management needs?",
      answer:
        "Absolutely. Hexacore’s platform scales seamlessly, accommodating a wide range of clients and asset classes, making it ideal for both boutique firms and large private banks.",
    },
    {
      question: "How can Hexacore transform your wealth management operations and client experiences?",
      answer:
        "Hexacore offers improved client engagement via digital channels, streamlined operations, strong compliance and risk controls, accelerated product launches, and a unified portfolio view.",
    },
    {
      question: "How does Hexacore support regulatory compliance in wealth management?",
      answer:
        "Comprehensive KYC, compliance Hexacore keeps wealth management operations secure and compliant.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365]">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Get quick answers to your questions about our wealth management platform.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full text-[#153365]">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-[#153365] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-temenos-gray text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
