import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Legal Notice - Hitali Kothari",
  description: "Legal notices and information for Hitali Kothari's portfolio website",
};

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Legal Notice
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Site Editor</h2>
            <p>
              This site is edited by: <strong>Hitali Kothari</strong>
              <br />
              Location: <strong>Beloit, WI, USA</strong>
              <br />
              Email:{" "}
              <strong>
                <a
                  href="mailto:hitalikothari@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  hitalikothari@gmail.com
                </a>
              </strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
            <p>
              This site is hosted by: <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133 Walnut, CA 91789, United States
              <br />
              Phone: (559) 288-7060
              <br />
              Website:{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                https://vercel.com
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:privacy@vercel.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                privacy@vercel.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All elements of the site (texts, images, graphics, logos, etc.)
              are, unless otherwise stated, the exclusive property of Hitali
              Kothari. <br />
              Any reproduction, modification, distribution, or use, in whole or
              in part, of these elements without prior written authorization is
              strictly prohibited and constitutes a violation of copyright.
              <br />
              Some resources used on the site (fonts, icons, JavaScript
              libraries) remain the property of their respective authors and are
              used in accordance with their licenses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Personal Data
            </h2>
            <p>
              Information collected through the contact form is used solely to
              respond to requests sent by the user. Data is retained for a
              maximum of 3 years, unless otherwise required by law, and is never
              sold to third parties. The site uses Vercel Analytics, a service
              provided by Vercel Inc., to measure site traffic and usage. The
              collected data is anonymized and does not allow direct
              identification of the user. In accordance with applicable data
              protection regulations, you have the right to access, rectify,
              object to, and delete your personal data. To exercise this right,
              you can send a request to:{" "}
              <a
                href="mailto:hitalikothari@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                hitalikothari@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Liability</h2>
            <p>
              The site editor cannot be held responsible for errors or omissions
              on the site, or for any technical issues encountered by the user.
              The site may contain hyperlinks to other websites. The editor has
              no control over these sites and disclaims any responsibility for
              their content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              The site only uses cookies necessary for its proper functioning.
              No tracking or advertising cookies are used. You can disable
              cookies in your browser settings, but this may affect certain site
              features.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
