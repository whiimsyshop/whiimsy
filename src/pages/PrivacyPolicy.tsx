import Link from "next/link";
import TopCard from "@/components/TopCard";
const PrivacyPolicy = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
      <div className="w-full">
          <TopCard title="Privacy Policy" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="tablet:w-2/3">
          <p className="text-left text-lg mb-4  font-medium">
            Welcome to vpnguide’s Privacy Policy.
          </p>
          <p className="text-left text-lg mb-4  font-medium">
            Please read this Privacy Policy carefully. If you use vpnguide (“our
            Site”), you will be regarded as having read and accepted this
            Privacy Policy.
          </p>
          <div className="text-left text-lg mb-4  font-medium">
            Our Privacy Policy explains:
            <ol className="ml-7 mb-5 mt-3">
              <li className="mb-4">
                1. What information we collect and how we collect it
              </li>
              <li className="mb-4">2. How we use that information</li>
              <li className="mb-4">
                3. How to find out more about our policies
              </li>
            </ol>
          </div>
          <p className="text-left text-lg mb-4  font-medium">
            This is a very important policy page and we hope you will read it
            carefully. If you don’t wish to be bound by what you read below, you
            shouldn’t use our Site.
          </p>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              Information We Collect
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              We do not ask you or anyone else to give us any personal
              information in order to use vpnguide. We do not collect or store
              any Personally Identifiable Information (PII).
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              We do collect anonymized information to provide a better service
              to all our users – from improving our less popular pages to
              tracking the commissions that allow the site to operate as a free
              resource.
            </p>
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
              Cookies and similar technologies
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              Like most websites, vpnguide puts small files (known as ‘cookies’)
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
              vpnguide contains links to other websites.
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
              vpnguide.com is owned and operated by PrivacyCo. If you have any
              questions about our cookies or this policy, please contact us at{" "}
              <Link href="#" className="text-bluelink hover:underline">
                hello@vpnguide.com
              </Link>{" "}
              and we will get back to you within two working days.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Velocity Click<br></br>Kolkata<br></br>West Bengal<br></br>India
            </p>
            <p className="text-justify text-lg mb-4  font-medium">This policy was updated on: 6 Feb 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;