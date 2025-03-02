import Link from "next/link";
import HeaderBox from "@/components/HeaderBox";
const PrivacyPolicy = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
      <div className="w-full pt-[80px]">
          <HeaderBox title="Privacy Policy" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="tablet:w-2/3">
          <p className="text-left text-lg mb-4  font-medium">
            Welcome to whiimsy Privacy Policy.
          </p>
          <p className="text-left text-lg mb-4  font-medium">
          whiimsy.in is committed to respecting and protecting your privacy. 
          Should you choose to provide your email address or any other personal information on any of the forms found on our site, 
          you can be assured that it will only be used to support your relationship with whiimsy.in. 
          This privacy policy is intended for all users of whiimsy.in, including vendors, customers and others. 
          By visiting this web site you agree to be bound by the terms and conditions of this Privacy Policy. 
          If you do not agree please do not use or access our services.  
          We do collect certain personal information from you, depending on the relationship we have with you.
          </p>
          <div className="text-left text-lg mb-4  font-medium">
          If we do collect personal information, it will be based on the following:
            <ol className="ml-7 mb-5 mt-3">
              <li className="mb-4">
                1. Contact Information - We collect your name, address and phone number
              </li>
              <li className="mb-4">
                2. When making a purchase- we collect your name, address, phone number and credit card information.
              </li>
              <li className="mb-4">
                3. We use your information for fulfilling your order and save your contact information to continue servicing only that order.
              </li>
              <li className="mb-4">
                4. Your credit card information will not be saved after the transaction is completed.
              </li>
            </ol>
          </div>
          <p className="text-left text-lg mb-4  font-medium">
          We may process your information with third party advertisers, and when required by law. 
          Minors will need permission from an adult before we process any personal information from them.
          </p>
          <p>
          You may opt out or change how we use your information at any time. 
          You may also request a copy of your personal information and how we use it, at any time.
          </p>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
            How we use your personal information
            </h2>
            <div className="text-left text-lg mb-4  font-medium">
            In this privacy policy, you will find information on these areas:
            <ol className="ml-7 mb-5 mt-3">
              <li className="mb-4">
                1. What personally identifiable information whiimsy.in collects.
              </li>
              <li className="mb-4">
                2. What personally identifiable information third parties collect through the Web site
              </li>
              <li className="mb-4">
                3. What organization collects the information.
              </li>
              <li className="mb-4">
                4. How whiimsy.in uses the information.
              </li>
              <li className="mb-4">
                5. With whom whiimsy.in may share user information.
              </li>
              <li className="mb-4">
                6. What choices are available to users regarding collection, use and distribution and deletion of the information.
              </li>
              <li className="mb-4">
                7. What types of security procedures are in place to protect the loss, misuse or alteration of information under whiimsy.in control.
              </li>
              <li className="mb-4">
                8. How users can correct any inaccuracies in the information.
              </li>
              <li className="mb-4">
                9. The customer’s right to object to how their information was processed.
              </li>
              <li className="mb-4">
                10. The customer’s right to complain to a regulator.
              </li>
            </ol>
          </div>
        </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">Browser Data</h2>
            <p className="text-justify text-lg mb-4  font-medium">
              When you visit our Site, we may collect attributes about the
              configuration of your web browser and operating system. We store
              this data anonymously. We only collect information that is
              reported by your web browser. No personally-identifying
              information is collected from your device.
            </p>
            <div className="text-justify text-lg mb-4  font-medium ">
              The specific information we collect includes:
            </div>
            <ul className="ml-7 mb-5 list-disc">
              <li className="mb-4 font-semibold">
                Information about your browser, e.g. vendor and product
              </li>
              <li className="mb-4 font-semibold">
                Screen resolution, color depth, and details of the video card in
                use
              </li>
              <li className="mb-4 font-semibold">
                Permissions supported by your Browser, and their status
              </li>
              <li className="mb-4 font-semibold">
                True / False information stating whether the browser supports
                various features
              </li>
              <li className="mb-4 font-semibold">
                Browser extensions and plugins, like Flash and Java, that are
                installed in your browser
              </li>
              <li className="mb-4 font-semibold">
                The output of a series of mathematical operations
              </li>
              <li className="mb-4 font-semibold">
                A hash of the image generated by canvas fingerprinting
              </li>
              <li className="mb-4 font-semibold">
                A hash of the image generated by WebGL fingerprinting
              </li>
              <li className="mb-4 font-semibold">
                A hash of an audio sample generated by Web Audio Fingerprinting
              </li>
              <li className="mb-4 font-semibold">
                Your system platform (e.g. Win32, Linux x86)
              </li>
              <li className="mb-4 font-semibold">
                Your configured preferred languages (e.g. en-US)
              </li>
              <li className="mb-4 font-semibold">
                The timezone your device is configured to use
              </li>
            </ul>
          </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
            Third Party Intermediaries 
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
            We may use an outside shipping company to ship orders, and a credit card processing company to bill users for goods and services. 
            To the best of our knowledge, these companies do not retain, share, store or use personally identifiable information for any secondary purposes.
            </p>
          </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              Cookies and similar technologies
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              Like most websites, whiimsy puts small files (known as ‘cookies’)
              onto your computer to collect information about how you browse our
              Site.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              You can read our{" "}
              <Link href="/cookie-policy" className="text-bluelink hover:underline">
                {" "}
                cookie policy{" "}
              </Link>{" "}
              for a detailed breakdown of the types of cookie we use and why we
              use them.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Overall, cookies help us provide you with a better website, by
              enabling us to monitor which pages you find useful and which you
              do not, and by allowing us to earn commissions.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              A cookie does not give us access to your computer or any
              information about you. You can choose to accept or decline cookies
              through your browser settings. Look at aboutcookies.org for
              detailed guidance about how to do this.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              We may implement third party advertising or other content on the
              Site that may use clear gifs or other forms of web beacons, which
              allow the third party content provider to read and write Cookies
              to your web browser in connection with your viewing of the third
              party content on the Site.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Additionally, we may implement third party buttons that may allow
              a third party to collect information about you through their
              browser Cookies, even when you do not interact with the button.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Information collected through web beacons and buttons is collected
              directly by third parties, and vpnguide does not participate in
              that data transmission. Information collected by a third party in
              this manner is subject to that third party’s own data collection,
              use, and disclosure policies.
            </p>
          </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              Links to Other Websites
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              whiimsy contains links to other websites.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              This privacy policy only applies to this website, and doesn’t
              cover other sites that we link to. If you go to another website,
              read the privacy policy on that website to find out what it does
              with your information.
            </p>
          </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">Changes</h2>
            <p className="text-justify text-lg mb-4  font-medium">
              We may, from time to time, update this Privacy Policy to reflect
              any changes to our privacy practices in accordance with changes to
              legislation, best practice or enhancements to vpnguide.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              We will let you know what these changes are by posting them to
              this page, but it is your responsibility as a user to make sure
              that you are aware of them, by checking for any changes on a
              regular basis.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Changes will become effective as soon as they are posted.
            </p>
          </div>

          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              How to Contact Us
            </h2>
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
      </div>
    </section>
  );
};

export default PrivacyPolicy;