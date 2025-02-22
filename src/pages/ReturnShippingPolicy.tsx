import Link from "next/link";
import HeaderBox from "@/components/HeaderBox";

const ReturnShipping_Condition = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
      <div className="w-full">
          <HeaderBox title="Return and Shipping Policy" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="px-3 pt-6 tablet:w-2/3">
          <h2 className="text-left font-bold text-2xl mb-5">Return Policy</h2>
          <p className="text-justify text-[16px] mb-4  ">
          We ONLY OFFER EXCHANGE of products that are unused. We do not offer returns or refunds on any products.
          </p>
          <p>Step-By-Step Process:</p>
          <p>Within 14 days of your order, please send an email to whiimsyteam@gmail.com with the subject line "Exchange Request", 
            letting us know the reason for the exchange, the product you would like to exchange for, and the correct shipping address.
          </p>
          <p>
          Once your exchange request is approved we will send you the exchange address and your Exchange Authorization Number. 
          Please do not send your exchange to the return address on your shipping label.
          </p>
          <p>
          Please be sure that your package is returned using all of the materials that it was packed in or something similar.  
          Be sure that the products are protected and packed securely so that they arrive in good condition. 
          Products that are damaged will be assessed on a case by case basis.
          </p>
          <p>
          The buyer is responsible for shipping costs on all exchanges, please save tracking information.
          </p>
          <p>
          Once the purchased products have been received, the exchange product will be shipped via the same method from the original purchase. 
          If an expedited shipping method is needed, please indicate this in your "Exchange Request" email. 
          We will send an invoice for the upgrade.
          </p>
          <p>
          **Exchange of products can be made in person as well. Please make sure to have the form of payment and date purchased.
          </p>


          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">Shipping Policy</h2>
          <p className="text-justify text-[16px] mb-4  ">
            You agree that use of the Website is at your own risk. In
            particular, you understand that:
          </p>
          <p>
          We offer Flat Rate Shipping at the cost of ₹100. This is an average cost for packages within the US. If the rate is over this fee we will cover the rest.
          </p>
          <p>
          Processing Time: 24 - 72 hours for all in stock items, once the item is located, your payment is approved, and the receiving address is verified. 
          For most orders, this process begins once your online order has been submitted. Depending on the time you place your order, 
          the order process might not start until the following business day.
          </p>
          <p>
          Delivery Time: The timeframe to receive your packages is within 7-15 business days. 
          We will provide a tracking number via email for you to track your package. Once you receive the tracking number, 
          it will be in the hands of the shipping carrier. We will not be able to change any timeframes.
          </p>
          <p>
          Free shipping is offered but no specific time frame is given.
          </p>
          <p>
          Business days are Monday-Saturday, excluding Indian holidays. 
          During peak periods you may experience longer than average order processing time.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">How to Contact Us</h2>
          <p className="text-justify text-[16px] mb-4  "></p>
            <p className="text-justify text-lg mb-4  font-medium">
              whiimsy.in is owned and operated by whiimsy. If you have any
              questions about our cookies or this policy, <p>
              Please contact us at 
              <a href="mailto:whiimsyteam@gmail.com" className="text-sm hover:text-gray-300">
              <span className="pl-1">whiimsyteam@gmail.com</span>
              </a>
              and we will get back to you within two working days.
            </p>

            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Whiimsy<br></br>Kolkata<br></br>West Bengal<br></br>India
            </p>
            <span>
                This policy was updated on:{" "}
                <b className="font-bold">20 February 2025 </b>
              </span>
        </div>
      </div>
    </section>
  );
};

export default ReturnShipping_Condition;