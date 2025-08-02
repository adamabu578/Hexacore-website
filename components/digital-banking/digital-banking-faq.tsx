import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function DigitalBankingFaq() {
  const faqs = [
    {
      question: "What is Digital Banking technology?",
      answer:
        "Digital banking technology transforms traditional banking by offering secure, real-time, and convenient financial services via digital platforms. It often integrates AI, cloud computing, and automation to enhance customer engagement, streamline paperless onboarding, and personalized financial insights. It improves accessibility, efficiency, and transparency for both banks and customers.",
    },
    {
      question: "What are the advantages of digital banking systems?",
      answer:
        "Digital banking systems offer numerous advantages, including enhanced customer experience, increased operational efficiency, reduced costs, improved data analytics for personalized services, and greater scalability to adapt to market changes and growth.",
    },
    {
      question: "How do Digital Banking solutions benefit consumers?",
      answer:
        "Consumers benefit from digital banking solutions through 24/7 access to banking services, personalized financial insights, faster transaction processing, secure mobile payments, and a more convenient and intuitive banking experience overall.",
    },
    {
      question: "How are your Digital Banking capabilities future-proofed to keep up with emerging technologies?",
      answer:
        "Our Digital Banking capabilities are future-proofed through a modular, API-first architecture that allows for easy integration of new technologies like AI and blockchain. We continuously invest in R&D and leverage cloud-native principles to ensure our platform remains agile and adaptable to future innovations.",
    },
    {
      question: "What features should I look for in a digital banking software solution?",
      answer:
        "Key features to look for in a digital banking solution include robust security, seamless user experience, comprehensive mobile banking capabilities, AI-powered personalization, open APIs for integration, real-time analytics, and scalability to support future growth and evolving customer demands.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-4">
          Frequently asked questions
        </h2>
        <p className="text-temenos-gray max-w-2xl mx-auto mb-12">
          In this section, you&apos;ll find answers to some of the most common queries about Temenos Digital Banking. If
          you don&apos;t find what you&apos;re looking for,{" "}
          <Link href="#" className="text-temenos-blue hover:underline">
            feel free to reach out
          </Link>{" "}
          — we&apos;re happy to help!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-temenos-blue text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-temenos-gray text-left">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
