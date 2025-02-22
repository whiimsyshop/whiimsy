import HeaderBox from '@/components/HeaderBox';
import Link from "next/link";
import Table1 from "../components/Table1";

const cookiesDataTable1 = [
  {
    name: "BASKET-PROVIDERS",
    description:
      "Used to store a list of providers You have chosen to compare.",
    duration: "Permanent",
  },
  {
    name: "LPG",
    description: "Used to store your entry page to our Website",
    duration: "Permanent",
  },
  {
    name: "CONSENT_GRANTED",
    description: "Used to track acceptance of our cookie conditions.",
    duration: "Permanent",
  },
  {
    name: "SESSIONID",
    description: "Used to track activity on our Website during a single visit.",
    duration: "Permanent",
  },
  {
    name: "USERID",
    description: "Used to count visits from You to our Website.",
    duration: "Permanent",
  },
  {
    name: "H2-PUSH",
    description:
      "Used to indicate if certain JavaScript & CSS StyleSheet files should be pushed to your browser.",
    duration: "Permanent",
  },
];

const cookiesDataTable2 = [
  {
    name: "Google Analytics",
    description:
      "Collects statistical information about how you use our Website so that we can improve it.",
    link: "https://tools.google.com/dlpage/gaoptout",
  },
  {
    name: "Microsoft Clarity",
    description:
      "Collects statistical information about how you use our Website for the performance of our Website in web browsers.",
    link: "https://support.google.com/accounts/answer/61416",
  },
  {
    name: "SpeedCurve",
    description:
      "Collects statistical information about the performance of our Website in web browsers.",
    link: "https://support.speedcurve.com/docs/rum-data",
  },
];
const cookiesDataTable3 = [
  {
    name: "Google Ads",
    description: "Tracks performance of advertising campaigns.",
    link: "https://policies.google.com/technologies/ads",
  },
  {
    name: "Microsoft Advertising",
    description: "Tracks performance of advertising campaigns. ",
    link: "https://privacy.microsoft.com/en-gb/privacystatement",
  },
];
const cookiesDataTable4 = [
  {
    name: "Optinmonster",
    description:
      "Displays modals showing special offers based on visitors’ behavior on our Website.",
    link: "https://optinmonster.com/docs/how-optin-cookies-and-the-global-cookie-work-in-optinmonster/",
  },
];

const CookiesPolicy = () => {
  return (
    <section className="w-full laptop:justify-center laptop:items-center">
        <div className="w-full">
          <HeaderBox title="Cookies Policy" />
        </div>
      <div className="px-3 pt-5 pb-10 tablet:flex tablet:justify-center tablet:items-center">
        <div className="px-3 pt-6 tablet:w-2/3">
          <h2 className="text-left font-bold text-2xl mb-5">Introduction</h2>
          <p className="text-justify text-lg mb-4  font-medium">
            Welcome to{" "}
            <Link
              href="https://whiimsy.in/"
              className="text-bluelink font-semibold hover:underline"
            >
              www.whiimsy.in
            </Link>{" "}
            (the “Website”). This Cookie Policy is designed to provide You with
            information about how We use cookies on our Website. By continuing
            to browse or use our Website, you agree to our use of cookies as
            described in this policy.
          </p>
          <p className="text-justify text-lg mb-4  font-medium">
            We do not collect or store any Personally Identifiable Information
            (PII). All data collected by our Website is psuedoanonymized. Read
            our{" "}
            <Link
              href="/privacy-policy"
              className="text-bluelink font-semibold hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              What Is a Cookie?
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              A cookie is a piece of information that most websites set on
              devices’ browsers to remember something about their visitors at a
              later date.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              A similar technology, known as “local storage”, may also be used
              in our Services as an alternative to cookies. This is technology
              which is similar to cookies, and provides similar functionality.
              Where we refer to “cookies” in this policy, we mean either cookies
              or local storage.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Cookies store information about your visits to our Website, and
              help your browser render our Website, and analyze your use of our
              Website to help us provide you with a better user experience.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              There are two main types of cookies: Session Cookies and
              Persistent Cookies. A Session Cookie disappears after you close
              your browser. A Persistent Cookie remains after you close your
              browser and may be used by your browser on subsequent visits to
              the website. We may use both types of cookies.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              The cookies on our website are either set by us or by third-party
              partners, and fall into the categories described in the sections
              below.
            </p>
          </div>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              Cookies Set by Us
            </h2>
            <div className="overflow-x-auto">
              <Table1
                heading1="Cookie Name"
                heading2="Description"
                heading3="Duration"
                cookies={cookiesDataTable1}
              />
            </div>
          </div>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-2xl mb-5">
              Third-party Services
            </h2>
            <h2 className="text-left font-bold text-xl mb-5">Performance</h2>
            <p className="text-justify text-lg mb-4  font-medium">
              We are always committed to providing a good experience on our
              Website. These cookies allow us to monitor how visitors use our
              website.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              This information provides us with anonymous statistics on how many
              people visit the website, where they have come from and the pages
              they visit. This allows us to develop and improve the website and
              our services.
            </p>
            <div className="overflow-x-auto">
              <Table1
                heading1="Third Party"
                heading2="Description"
                heading3=""
                cookies={cookiesDataTable2}
              />
            </div>
          </div>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-xl mb-5">Advertising</h2>
            <p className="text-justify text-lg mb-4  font-medium">
              Some of these cookies allow us to track the anonymized performance
              of our online advertising campaigns. Others allow third parties to
              identify what you show an interest in, allowing a more
              personalized and relevant selection of advertisements to be
              displayed when you browse the internet.
            </p>
            <div className="overflow-x-auto">
              <Table1
                heading1="Third Party"
                heading2="Description"
                heading3=""
                cookies={cookiesDataTable3}
              />
            </div>
          </div>
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-xl mb-5">Special Offers</h2>
            <p className="text-justify text-lg mb-4  font-medium">
              These cookies allow us to display special or seasonal offers on
              our Website. We limit how much we display such offers, to avoid
              them interfering with your use of our Website.
            </p>
            <div className="overflow-x-auto">
              <Table1
                heading1="Third Party"
                heading2="Description"
                heading3=""
                cookies={cookiesDataTable4}
              />
            </div>
          </div>
          
          <div className="px-3 pt-6">
            <h2 className="text-left font-bold text-xl mb-5">
              How to Control Cookies
            </h2>
            <p className="text-justify text-lg mb-4  font-medium">
              You can control and/or delete cookies as you wish – for details,
              see{" "}
              <Link
                href="https://www.aboutcookies.org"
                className="text-bluelink hover:underline"
              >
                {" "}
                www.aboutcookies.org
              </Link>
              .
            </p>
            <p className="text-justify text-lg mb-4  font-light">
              You can delete all cookies that are already on your computer and
              you can set most browsers to prevent them from being placed. If
              you do this, however, you may have to manually adjust some
              preferences every time you visit a site and some services and
              functionalities may not work.
            </p>
            <p className="text-justify text-lg mb-4  font-medium">
              Here are some cookie resources that explain how to opt out of
              cookies through your browser:
            </p>
            <div className="text-justify text-lg mb-4  font-medium">
              <Link
                href="https://www.youronlinechoices.com/"
                className="text-bluelink hover:underline"
              >
                Your Online Choices
              </Link>
              <br />
              <Link
                href="https://www.aboutads.info/choices/"
                className="text-bluelink hover:underline"
              >
                The Self-Regulatory Program for Online Behavioral Advertising
              </Link>
              <br />
              <Link
                href="https://www.networkadvertising.org/choices/#completed"
                className="text-bluelink hover:underline"
              >
                Network Advertising Initiative Consumer Opt-Out
              </Link>
              <br />
              <br />
              <span>
                This policy was updated on:{" "}
                <b className="font-bold">20 February 2025 </b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiesPolicy;