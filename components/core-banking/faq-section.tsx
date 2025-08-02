import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export function FaqSection() {
  const faqs = [
    {
      question: "What is Temenos Core?",
      answer:
        "For more than 30 years, we’ve been evolving to meet and anticipate the needs of modern-day banking with Temenos Core. We enabled our clients to get their hands on 24x7 banking as an industry first, we were the first to put core banking in the cloud in 2011, and evolved to cloud agnostic, cloud-native technology in 2020. In our latest iteration of Temenos Core, we provide banks with the modular core capabilities to easily create AI infused, highly scalable banking services for any channel or segment. Temenos Core is the beating heart of banking.",
    },
    {
      question:
        "How has Temenos Core remained modern for 30 years, and can it truly be a cloud-native core banking platform?",
      answer:
        "Temenos Core has continuously evolved, embracing new technologies and architectural patterns to remain at the forefront of banking technology. Its cloud-native architecture ensures scalability, resilience, and agility, allowing banks to innovate rapidly and adapt to changing market demands.",
    },
    {
      question: "How do banks future-proof and reap the ongoing benefits of Temenos Core?",
      answer:
        "Banks can future-proof their operations by leveraging Temenos Core's continuous innovation, modular design, and open API ecosystem. This enables them to integrate new capabilities, connect with fintech partners, and stay ahead of industry trends, ensuring long-term relevance and competitive advantage.",
    },
    {
      question: "Is Temenos Core available as SaaS?",
      answer:
        "Yes, Temenos Core is available as a SaaS offering, providing banks with a fully managed, secure, and scalable solution. This allows banks to focus on their core business while Temenos handles the infrastructure, maintenance, and updates, reducing operational overhead and accelerating time to market.",
    },
    {
      question: "Can banks do a POC to understand how Temenos Core works?",
      answer:
        "Yes, Temenos offers Proof of Concept (POC) programs to allow banks to experience Temenos Core firsthand. These POCs are tailored to specific bank needs, demonstrating how the platform can address their unique challenges and deliver tangible business value before a full-scale implementation.",
    },
    {
      question: "Does Temenos provide more than core banking?",
      answer:
        "Yes, Temenos provides a comprehensive suite of banking solutions beyond core banking, including digital banking, payments, wealth management, and financial crime mitigation. These integrated solutions enable banks to manage their entire operations on a single, unified platform.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-temenos-light-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-temenos-blue mb-4">
          Frequently asked questions
        </h2>
        <p className="text-temenos-gray max-w-2xl mx-auto mb-12">
          In this section, you&apos;ll find answers to some of the most common queries about Temenos Core. If you
          don&apos;t find what you&apos;re looking for,{" "}
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
