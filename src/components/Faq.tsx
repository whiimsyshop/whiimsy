"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

type ContentItem = {
  heading: string;
  content: string; // Using string to allow HTML content as a string
};
type ContentArray = ContentItem[];

const content1: ContentArray = [
  {
    heading: "Question 1?",
    content: `
            <p>Type:</p>
            <ul style="list-style-type: inherit; padding-left: 25px;">
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li>
           </ul>
            <p>Our goal is to provide <span style="font-weight: 500;">clear and honest recommendations</span> so you can make the right decision.</p>
          `,
  },
  {
    heading: "Question 2?",
    content: `
            <p>MOHIT. <span style="font-weight: 500;">Singh</span></p>
            <p>Blah</p>
          `,
  },
  {
    heading: "Question 3?",
    content: `
            <p>Mohit. <span style="font-weight: 500;">Singh.</span></p>
            <p>Mohit Singh.</p>
            <p>Mohit Singh <a href="https://track.vpns.guide/base2.php?cloid=1002&token4=faq&token5=IN">BLAH</a>. <span style="font-weight: 500;">Mohit Singh.</span></p>
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
