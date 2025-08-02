import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function WealthManagementFaq() {
  const faqs = [
    {
      question: "What is wealth management?",
      answer:
        "Wealth management is a professional service that combines financial planning, investment portfolio management, and other aggregated financial services to manage the wealth of high-net-worth individuals and families.",
    },
    {
      question: "How can Temenos help with digital wealth management?",
      answer:
        "Temenos provides a comprehensive digital wealth platform that enables personalized client experiences, automated advice, and seamless integration with back-office operations, enhancing efficiency and client engagement.",
    },
    {
      question: "Is the Temenos wealth management platform scalable?",
      answer:
        "Yes, our platform is designed for scalability, supporting a wide range of client volumes and asset classes, making it suitable for institutions of all sizes, from boutique wealth managers to large private banks.",
    },
    {
      question: "What are the key benefits of using Temenos for wealth management?",
      answer:
        "Key benefits include enhanced client engagement through digital channels, improved operational efficiency, robust compliance and risk management, faster time-to-market for new products, and a unified view of client portfolios.",
    },
    {
      question: "Does Temenos offer solutions for regulatory compliance in wealth management?",
      answer:
        "Absolutely. Our platform includes comprehensive tools for regulatory compliance, including AML, KYC, MiFID II, and other relevant regulations, helping you navigate the complex regulatory landscape with confidence.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-temenos-gray md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our wealth management solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-temenos-blue hover:no-underline">
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
