import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function DigitalBankingFaq() {
  const faqs = [
    {
      question: "What is Digital Banking technology?",
      answer:
        "Digital banking modernizes traditional banking by offering secure, real-time services. AI, cloud, and automation enhance engagement, streamline onboarding, and provide personalized insights, improving efficiency and transparency for banks and customers.",
    },
    {
      question: "What are the advantages of digital banking systems?",
      answer:
        "Digital banking: better experiences, smarter operations, lower costs, and scalable growth.",
    },
    {
      question: "How do Digital Banking solutions benefit consumers?",
      answer:
        "Digital banking gives consumers round-the-clock access, personalized insights, faster transactions, secure mobile payments, and an overall more convenient experience.",
    },
    {
      question: "How does your digital banking platform stay ahead of the curve with emerging technologies?",
      answer:
        "Future-proof digital banking: modular, API-first, cloud-native, and ready for AI, blockchain, and next-generation innovations.",
    },
    {
      question: "Which features define a top-tier digital banking solution?",
      answer:
        "The ideal digital banking platform combines strong security, a smooth user experience, mobile-first design, AI personalization, open APIs, real-time insights, and scalability to empower growth and innovation.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#153365] mb-4">
          Frequently asked questions
        </h2>
        <p className="text-temenos-gray max-w-2xl mx-auto mb-12">
          In this section, you&apos;ll find answers to some of the most common queries about Hexacore Digital Banking. If
          you don&apos;t find what you&apos;re looking for,{" "}
          <Link href="#" className="text-[#153365] hover:underline">
            feel free to reach out
          </Link>{" "}
          — we&apos;re happy to help!
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full text-[#28B1D3]">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#153365] text-left hover:no-underline">
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
