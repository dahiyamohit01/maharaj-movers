import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How early should I book my relocation?",
    a: "For local moves, we recommend booking 1-2 weeks in advance. For intercity or international relocations, please contact us 3-4 weeks prior to ensure premium slot availability."
  },
  {
    q: "Do you provide transit insurance?",
    a: "Yes. We offer comprehensive transit insurance covering up to ₹5 Lakhs on standard moves, with options to extend coverage for high-value items, fine art, and luxury vehicles."
  },
  {
    q: "What is 'White-Glove Packing'?",
    a: "Unlike standard movers who throw items in boxes, our white-glove service involves custom crating for fragile items, 3-layer bubble wrapping, specialized wardrobe cartons for clothes, and meticulous labeling."
  },
  {
    q: "Can you transport my luxury car?",
    a: "Absolutely. We use closed, GPS-enabled hydraulic carriers specifically designed for luxury vehicles to ensure scratch-free, secure transport across India."
  },
  {
    q: "Do you unpack and arrange furniture at the destination?",
    a: "Yes, our end-to-end service includes unloading, unpacking, and arranging furniture in your new home exactly to your specifications, followed by complete debris removal."
  }
];

export function FAQ() {
  return (
    <section className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our premium relocation service.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-white/10 rounded-xl px-6 data-[state=open]:border-primary transition-colors">
                <AccordionTrigger className="text-left font-serif text-lg py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
