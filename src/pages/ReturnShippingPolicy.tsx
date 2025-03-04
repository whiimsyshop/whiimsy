import Link from "next/link";
import HeaderBox from "@/components/HeaderBox";

const ReturnShipping_Condition = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center ">
      <div className="w-full pt-[80px]">
          <HeaderBox title="Return and Shipping Policy" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="px-3 pt-6 tablet:w-2/3">
          <h2 className="text-left font-bold text-2xl mb-5">Return Policy</h2>
          <p className="text-justify text-[16px] mb-4  ">
          At whiimsy, we take great care in crafting and packaging our products to ensure they reach you in perfect condition. Since candles are fragile and handcrafted items, we do not accept returns or exchanges. However, if you receive the wrong product or a damaged item, we’re here to help!
          </p>
          <p><b>Eligibility for Replacement or Refund:</b></p>
          <p>We offer a replacement or refund only if:</p>
          <p>You received the wrong product.</p>
          <p>The product was damaged during transit.</p>
          <br></br>
          <p><b>How to Request a Replacement or Refund:</b></p>
          <p>Email us at whiimsyteam@gmail.com within 24 hours of delivery.</p>
          <p>Attach clear pictures and an unboxing video as proof of damage or incorrect product.</p>
          <p>Our team will review your request and respond within 2-3 business days</p>
          <br></br>
          <p><b>Important Notes:</b></p>
          <p>No refunds or replacements will be issued for minor variations in color, texture, or scent, as each candle is handcrafted.</p>
          <p>Requests without proper proof (video & images) will not be accepted.</p>
          <p>If eligible, refunds will be processed within 5-7 business days to the original payment method.</p>
          <br></br>
          <p>For any concerns, reach out to us at <a href="mailto:whiimsyteam@gmail.com">whiimsyteam@gmail.com</a> —we're happy to assist you!</p>


          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">Shipping Policy</h2>
          <p className="text-justify text-[16px] mb-4  ">
            You agree that use of the Website is at your own risk. In
            particular, you understand that:
          </p>
          <p><b>Processing Time:</b></p>
          <p>All orders are processed within 2-4 business days (excluding weekends and holidays).</p>
          <p>During peak seasons or sales, processing times may be slightly longer.</p>
          <br></br>
          <p><b>Shipping Time & Charges:</b></p>
          <p>Standard Shipping: Estimated delivery within 5-10 business days after dispatch.</p>
          <p>Express Shipping: Estimated delivery within 2-5 business days (additional charges apply).</p>
          <p>Shipping charges will be calculated at checkout based on your location and selected shipping method.</p>
          <br></br>
          <p><b>Order Tracking:</b></p>
          <p>Once your order is shipped, you will receive a tracking link via email/SMS to monitor your package.</p>
          <br></br>
          <p><b>Delivery Delays:</b></p>
          <p>While we strive for timely delivery, delays may occur due to unforeseen circumstances such as weather, courier delays, or high demand.</p>
          <p>If your order is significantly delayed, please contact us at your customer support email at whiimsyteam@gmail.com.</p>
          <br></br>
          <p><b>International Shipping:</b></p>
          <p>Currently, we ship only within India.</p>
          <br></br>
          <p><b>Damaged/Lost Packages:</b></p>
          <p>If your package arrives damaged, please email us within 48 hours with pictures of the damaged product and packaging.</p>
          <p>We are not responsible for lost packages due to incorrect addresses provided at checkout.</p>
          <br></br>
          <p><b>Address Changes & Cancellations:</b></p>
          <p>Address changes or cancellations can be requested within 12 hours of placing the order. Once the order is processed, we cannot make changes.</p>
          <br></br>
          <p>For any questions, reach out to us at <a href="mailto:whiimsyteam@gmail.com">whiimsyteam@gmail.com</a></p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">How to Contact Us</h2>
          <p className="text-justify text-[16px] mb-4  "></p>
            <p className="text-justify text-lg mb-4  font-medium">
              whiimsy.in is owned and operated by whiimsy. If you have any
              questions about our cookies or this policy, <p>
              Please contact us at 
              <a href="mailto:whiimsyteam@gmail.com" className="text-sm hover:text-gray-300">
              <span className="pl-1">whiimsyteam@gmail.com </span>
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