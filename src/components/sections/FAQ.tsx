"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/effects/Reveal";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <section id="faq" className="section-pad relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Odpovědi na časté otázky."
            description="Transparentně a bez zbytečného marketingu — ať víte, co očekávat."
          />

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl px-6 md:px-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
