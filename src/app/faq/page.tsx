
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items in their original condition. Please visit our Shipping & Returns page for more details on how to initiate a return.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 5-7 business days. Expedited shipping options are available at checkout. You'll receive a tracking number once your order has shipped.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we only ship within the United States. We are working on expanding our shipping options to include international destinations in the near future.",
  },
  {
    question: "How do I care for my furniture?",
    answer:
      "Care instructions vary by material. Each product page has a 'Care & Maintenance' section with specific guidelines. Generally, we recommend using gentle, non-abrasive cleaners.",
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "You can cancel or modify your order within 24 hours of placing it. Please contact our customer service team with your order number as soon as possible.",
  },
];

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, and
          policies.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">General Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
