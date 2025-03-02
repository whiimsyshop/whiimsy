"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type ContentItem = {
  heading: string;
  content: string; // Using string to allow HTML content as a string
};
type ContentArray = ContentItem[];

const content1: ContentArray = [
  {
    heading: "What ingredients do you use in your candles?",
    content: `
            <p>Our candles are crafted with high-quality, non-toxic ingredients, including natural soy wax, premium fragrance oils, and lead-free cotton wicks for a clean and long-lasting burn.</p>
          `,
  },
  {
    heading: "Do you offer customized or private-label candles?",
    content: `
            <p>Yes! We provide wholesale and private-label options. You can customize scents, packaging, and branding to suit your needs. Contact us for details.</p>
            <p><a href="https://forms.gle/HpyNvwVGreEcgtRS6"</a> <span style="font-weight: 500;">Get in Touch</span></p>
          `,
  },
  {
    heading: "Are Whiimsy candles eco-friendly?",
    content: `
            <p>Absolutely! We use sustainable materials, eco-friendly packaging, and prioritize ethical sourcing to reduce environmental impact.</p>
          `,
  },
  {
    heading: "Do you customise bulk gift boxes with a mix of products from other brands?",
    content: `
            <p>Of course. Whether you’d like to include chocolates, dry fruits, bath or leather products, we can create custom boxes for your bulk orders with your favourite products.</p>
          `,
  },
  {
    heading: "Can you deliver PAN India?",
    content: `
            <p>Yes, we can! Rest assured we can get your products to you safe and sound no matter where you are in the country.</p>
          `,
  },
];

const FAQ = () => {
  return (
    <div className="flex-col laptopl:px-96 px-5 my-5" id="faq">
      <div className="text-4xl font-semibold pb-6 text-center">Frequently Asked Questions</div>
      <Accordion variant="splitted">
        {content1.map((itm: ContentItem, idx: number) => (
          <AccordionItem key={idx} aria-label={itm.heading} title={itm.heading} className="font-bold">
            <div
              dangerouslySetInnerHTML={{ __html: itm.content }}
              className="customAccr bg-gray-100 p-3 rounded-lg font-normal"
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
