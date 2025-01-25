import Link from "next/link";
import TopCard from "@/components/TopCard";

const Term_Condition = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
      <div className="w-full">
          <TopCard title="Website Terms Of Use" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="px-3 pt-6 tablet:w-2/3">
          <h2 className="text-left font-bold text-2xl mb-5">Introduction</h2>
          <p className="text-justify text-[16px] mb-4  ">
            These terms of use set out the rules for using www.vpnguide.in and
            any services delivered by it (the “Website”).
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            WHO WE ARE AND HOW TO CONTACT US
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            www.vpnguide.in is owned and operated by{" "}
            <Link
              href="https://velocityclick.in/"
              className="text-bluelink font-semibold hover:underline"
            >
              Velocity Click
            </Link>{" "}
            (“we”, “our” or “us”). We are registered in Kolkata, West Bengal, India.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            To contact us, please email{" "}
            <Link
              href="mailto:hello@vpnguide.in"
              className="text-bluelink font-semibold hover:underline"
            >
              mhvpnguide@gmail.com
            </Link>{" "}
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            OTHER TERMS THAT APPLY TO YOUR USE OF THE WEBSITE
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            Our{" "}
            <Link
              href="/privacy-policy"
              className="text-bluelink font-semibold hover:underline"
            >
              Privacy Policy{" "}
            </Link>
            sets out the terms on which we process any personal information we
            may collect from you, or that you provide to us. By using the
            Website, you consent to such processing and you warrant that all
            data provided by you is accurate.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            Our{" "}
            <Link
              href="/cookie-policy"
              className="text-bluelink font-semibold hover:underline"
            >
              Cookie Policy
            </Link>{" "}
            sets out information about the cookies used on the Website.
          </p>
          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">DISCLAMERS</h2>
          <p className="text-justify text-[16px] mb-4  ">
            You agree that use of the Website is at your own risk. In
            particular, you understand that:
          </p>
          <ol className="list-decimal pl-12">
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">
                  You are responsible for complying with applicable laws:
                </span>{" "}
                We are not a VPN service and we do not endorse the use of VPNs
                for unlawful means. You should ensure you adhere to all
                applicable laws and terms of service when using a VPN. Certain
                third-party content providers prohibit the use of VPNs to access
                their services and it is your responsibility to ensure that your
                use of any VPN services for any particular purpose is lawful.
              </p>
            </li>
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">
                  You should not rely on content presented on the Website:
                </span>{" "}
                The content on the Website is provided for general information
                only. It is not intended to amount to technical, financial, or
                legal advice or any other type of advice on which you should
                rely. In particular, it does not constitute an invitation or
                authorisation to use VPN services for unlawful purposes nor does
                it constitute legal advice on the lawfulness of their use for
                any particular purpose. Before taking, or refraining from, any
                action on the basis of the content on the Website, you must: (i)
                check whether the relevant VPN service meets your particular
                needs, (ii) review any terms and conditions which apply to that
                service. If you’re not sure about either of these, we recommend
                contacting the relevant VPN service or obtaining professional or
                specialist advice.
              </p>
            </li>
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">
                  Information on the Website may be incomplete or out of date:
                </span>{" "}
                Although we make reasonable efforts to update the information on
                the Website, we make no representations, warranties or
                guarantees, whether express or implied, that the content on the
                Website is accurate, complete or up to date. We are under no
                obligation to update information on the Website and always
                recommend you check a VPN provider’s website before purchasing
                any goods or services. This Website does not include every VPN
                provider and every available VPN offer.
              </p>
            </li>
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">
                  We are not responsible for websites we link to:
                </span>{" "}
                Where the Website contains links to other sites and resources
                provided by third parties, these links are provided for your
                information only. Such links should not be interpreted as
                approval by us of those linked websites or information you may
                obtain from them. We have no control over the contents of those
                sites or resources. If you click on any links to other websites
                you will immediately leave this Website.
              </p>
            </li>
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">Advertising disclaimer:</span>
                vpnguide.in is an advertising-supported comparison and review
                site. To keep this a free resource, we use links that provide us
                with compensation for referring you to partner VPN services any
                may be compensated for featuring certain providers. The ordering
                and scores of VPN services featured on our comparison tables /
                lists may be influenced by commercial factors such as overall
                popularity and conversion rates. Our reviews, review ratings and
                scores are subject to change from time to time.
              </p>
            </li>
            <li>
              <p className="text-justify text-[16px] mb-4 ">
                <span className="font-bold">Age restriction:</span> We are not a
                You must be at least 18 years of age to use this Website. By
                using the Website and agreeing to these terms of use, you
                represent and warrant that you are at least 18 years of age.
              </p>
            </li>
          </ol>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            WE MAY MAKE CHANGES TO THESE TERMS AND THIS WEBSITE
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            We amend these terms from time to time. Such revised terms will
            apply to the Website from the date of publication. Every time you
            wish to use the Website, please check these terms to ensure you
            understand the terms that apply at that time.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            We may update and change the Website from time to time to reflect
            changes to our users’ needs and our business priorities. We will try
            to give you reasonable notice of any major changes.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            WE MAY SUSPEND OR WITHDRAW THE WEBSITE
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            The Website is made available free of charge.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            We do not guarantee that the Website, or any content on it, will
            always be available or be uninterrupted. We may suspend or withdraw
            or restrict the availability of all or any part of the Website for
            business and operational reasons. We will try to give you reasonable
            notice of any suspension or withdrawal.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            You are also responsible for ensuring that all persons who access
            the Website through your internet connection are aware of these
            terms of use and other applicable terms and conditions, and that
            they comply with them.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            HOW YOU MAY USE MATERIAL ON THE WEBSITE
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            You may use the Website and its contents for your own personal,
            non-commercial use only. You must not use any part of the content on
            the Website for commercial purposes without obtaining a licence to
            do so from us or our licensors.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            We are the owner or the licensee of all intellectual property rights
            in the Website, and in the material published on it. Those works are
            protected by copyright laws and treaties around the world. All such
            rights are reserved
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            You may retrieve, display and view the contents of the Website on a
            computer screen only. If you print off, copy or download any part of
            the Website in breach of these terms of use, your right to use the
            Website will cease immediately and you must, at our option, return
            or destroy any copies of the materials you have made.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            We do not exclude or limit in any way our liability to you where it
            would be unlawful to do so. This includes liability for death or
            personal injury caused by our negligence or the negligence of our
            employees, agents or subcontractors and for fraud or fraudulent
            misrepresentation.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            Please note that we only provide the Website for domestic and
            private use. You agree not to use the Website for any commercial or
            business purposes, and we have no liability to you for any loss of
            profit, loss of business, business interruption, or loss of business
            opportunity.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            However, if you are seeking to use the Website for commercial
            purposes or are a business user:
          </p>
          <ol className="list-decimal pl-12">
            <li>
              we exclude all implied conditions, warranties, representations or
              other terms that may apply to the Website or any content on it.
            </li>
            <li>
              we will not be liable to you for any loss or damage, whether in
              contract, tort (including negligence), breach of statutory duty,
              or otherwise, even if foreseeable, arising under or in connection
              with i) use of, or inability to use, the Website or ii) use of or
              reliance on any content displayed on the Website. In particular,
              we will not be liable for any indirect or consequential loss or
              damage.
            </li>
          </ol>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            WE ARE NOT RESPONSIBLE FOR VIRUSES AND YOU MUST NOT INTRODUCE THEM
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            While we try to make sure that the Website is free from bugs,
            errors, viruses and other malware, we cannot guarantee that it will
            be. You are responsible for configuring your information technology,
            computer programmes and platform to access our site. You should use
            your own virus protection software.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            You must not misuse the Website by knowingly introducing viruses,
            trojans, worms, logic bombs or other material that is malicious or
            technologically harmful. You must not attempt to gain access to the
            server on which the Website is stored or any server, computer or
            database connected to the Website. You must not attack the Website
            via a denial-of-service attack or a distributed denial-of service
            attack. By breaching this provision, you would commit a criminal
            offence under the Computer Misuse Act 1990. We will report any such
            breach to the relevant law enforcement authorities and we will
            co-operate with those authorities by disclosing your identity to
            them. In the event of such a breach, your right to use the Website
            will cease immediately.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            WHICH COUNTRY’S LAWS APPLY TO THESE TERMS OF USE?
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            These terms of use, their subject matter and their formation, are
            governed by English law. However, your statutory rights are
            unaffected.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            You and we both agree that the courts of England and Wales will have
            exclusive jurisdiction or any disputes or matters relating to the
            Website, unless you are a consumer and resident outside of England
            and Wales.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">
            OUR AGREEMENT IS WITH YOU ONLY
          </h2>
          <p className="text-justify text-[16px] mb-4  ">
            No one other than a party to these terms has any right to enforce
            any of these terms of use.
          </p>
          <p className="text-justify text-[16px] mb-4  ">
            You may not transfer, assign or otherwise dispose of your rights and
            obligations under these terms of use to another person or legal
            entity.
          </p>

          <h2 className="text-left font-semibold text-2xl mb-5 mt-10">OUR BRAND</h2>
          <p className="text-justify text-[16px] mb-4  ">
            vpnguide is a trading name owned by{" "}
            <Link
              href="https://velocityclick.in/"
              className="text-bluelink font-semibold hover:underline"
            >
              Velocity Click.
            </Link>
          </p>
          <p className="text-justify text-[16px] mb-4 font-bold">Last updated: 30/04/2019</p>
        </div>
      </div>
    </section>
  );
};

export default Term_Condition;